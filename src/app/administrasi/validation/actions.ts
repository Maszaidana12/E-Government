"use server";

import { prisma } from "lib/prisma"; 
import { PermohonanSchema, PermohonanInput } from "./validation";
import { revalidatePath } from "next/cache";
import { sendNotifToRT } from "./sendNotifToRT";
import { auth } from "auth";
import { Penduduk, KK } from "@prisma/client"; // Import tipe Prisma jika perlu
import { mapPermohonanStatus } from "lib/permohonan-mapper";

// --- DEFINISI FIELD DINAMIS (HARUS SAMA PERSIS DENGAN CLIENT) ---
const requiredFieldsMap: {
  [key: string]: { name: string; label: string; type: string; placeholder: string }[];
} = {
  Surat_Keterangan_Tidak_Mampu: [
    { name: "pendapatan", label: "Pendapatan Orang Tua (Rp)", type: "number", placeholder: "" },
    { name: "pekerjaan_ortu", label: "Pekerjaan Orang Tua Saat Ini", type: "text", placeholder: "" },
  ],
  Izin_Keramaian: [
    { name: "keperluan_acara", label: "Keperluan Acara", type: "text", placeholder: "" },
    { name: "tanggal_mulai", label: "Tanggal Mulai", type: "date", placeholder: "" },
    { name: "tanggal_selesai", label: "Tanggal Selesai", type: "date", placeholder: "" },
  ],
  Surat_Pembuatan_KTP: [
    { name: "alasan_ktp", label: "Alasan Pembuatan KTP", type: "textarea", placeholder: "" },
  ],
  "Surat_Pengantar_RT/RW": [
    { name: "surat_pengantar", label: "Alasan Surat Pengantar", type: "textarea", placeholder: "" },
  ],
};
// -----------------------------------------------------------------

export type PemohonDataForConfirmation = {
    nik: string;
    nama: string;
    jenis_kelamin: Penduduk['jenis_kelamin'];
    tanggal_lahir: Date;
    agama: Penduduk['agama'];
    no_kk: string | null;
    
    // Informasi KK (Wilayah)
    kk: {
        alamat: string | null;
        kode_pos: string | null;
        desa_kelurahan: string | null;
        kecamatan: string | null;
        kabupaten_kota: string | null;
        provinsi: string | null;
    } | null;
};
export async function GetPemohonDataForConfirmation(nik: string): Promise<PemohonDataForConfirmation | { error: string }> {
    // Autentikasi NIK dari sesi sudah terjadi di klien, kita langsung fetch
    
    const dataPemohon = await prisma.penduduk.findUnique({
        where: { nik: nik },
        select: {
            nik: true,
            nama: true,
            jenis_kelamin: true,
            tanggal_lahir: true,
            agama: true,
            no_kk: true,
            
            kartukeluarga: {
                select: {
                    alamat: true,
                    kode_pos: true,
                    desa_kelurahan: true,
                    kecamatan: true,
                    kabupaten_kota: true,
                    provinsi: true,
                },
            },
        },
    });

   if (!dataPemohon) {
     return { error: "Data penduduk Anda tidak ditemukan di sistem." };
  }
    const finalData: PemohonDataForConfirmation = {
        nik: dataPemohon.nik,
        nama: dataPemohon.nama,
        jenis_kelamin: dataPemohon.jenis_kelamin,
        tanggal_lahir: dataPemohon.tanggal_lahir,
        agama: dataPemohon.agama,
        no_kk: dataPemohon.no_kk,
        
        kk: dataPemohon.kartukeluarga,
    };
    
    

    return finalData;
}

export async function createPermohonan(prevState: unknown, formData: FormData) {
  try {
    const session = await auth();

    if (!session || !session.user?.username) {
      return { error: { general: "User tidak terautentikasi atau sesi telah berakhir." } };
    }

    const jenisPermohonan = formData.get("jenis_permohonan")?.toString();
    const fieldErrors: Record<string, string[]> = {};
    const dataTambahan: Record<string, string> = {};

    // 1. VALIDASI FIELD DINAMIS
    const fieldsToValidate = requiredFieldsMap[jenisPermohonan || ""];

    if (fieldsToValidate && fieldsToValidate.length > 0) {
      for (const field of fieldsToValidate) {
        const value = formData.get(field.name)?.toString();

        if (!value || value.trim() === "") {
          fieldErrors[field.name] = [`${field.label} wajib diisi.`];
        } else {
          dataTambahan[field.name] = value;
        }
      }
    }

    if (Object.keys(fieldErrors).length > 0) {
      return { error: fieldErrors };
    }

    // 2. VALIDASI ZOD (DATA PERMOHONAN DASAR)
    const rawData: PermohonanInput = {
      nik: session.user.username,
      jenis_permohonan: jenisPermohonan as PermohonanInput["jenis_permohonan"],
      keterangan: formData.get("keterangan")?.toString() || "",
    };

    const validated = PermohonanSchema.safeParse(rawData);

    if (!validated.success) {
      return { error: { ...validated.error.flatten().fieldErrors, ...fieldErrors } };
    }

    // 3. CEK PENDUDUK
    const penduduk = await prisma.penduduk.findUnique({
      where: { nik: validated.data.nik },
    });

    if (!penduduk) {
      return { error: { nik: ["NIK Tidak Ditemukan dalam data penduduk."] } };
    }

    // FORMAT FINAL KETERANGAN
    let finalKeterangan = validated.data.keterangan === "" ? null : validated.data.keterangan;

    if (Object.keys(dataTambahan).length > 0) {
      const jsonTambahan = JSON.stringify(dataTambahan, null, 2);

      if (finalKeterangan) {
        finalKeterangan += "\n\n--- DATA TAMBAHAN ---\n" + jsonTambahan;
      } else {
        finalKeterangan = "--- DATA TAMBAHAN ---\n" + jsonTambahan;
      }
    }

    // 4. CREATE PERMOHONAN
    await prisma.permohonan.create({
      data: {
        nik: validated.data.nik,
        jenis_permohonan: validated.data.jenis_permohonan,
        keterangan: finalKeterangan,
      },
    });

    // 5. KIRIM NOTIF & REVALIDATE
    await sendNotifToRT({
      title: "Pengajuan Baru",
      message: `Ada Permohonan Baru dari NIK ${validated.data.nik} (${validated.data.jenis_permohonan})`,
      type: "permohonan",
      senderId: validated.data.nik,
    });

    revalidatePath("/administrasi/permohonan");

    return { success: true, message: "Permohonan berhasil diajukan! Menunggu Verifikasi." };
  } catch (error) {
    console.error("FATAL ERROR CREATE PERMOHONAN:", error);

    return { error: { general: "Terjadi kesalahan Server yang tidak terduga. Silakan coba lagi." } };
  }
}

export async function getPermohonanWarga() {
  const session = await auth();

  if (!session?.user?.username) {
    return [];
  }

  const nik = session.user.username;

  const data = await prisma.permohonan.findMany({
    where: { nik },
    orderBy: { createdAt: "desc" },
    select: {
      id_permohonan: true,
      jenis_permohonan: true,
      createdAt: true,
      status: true,
      hasil_surat: true,

      penduduk: {
        select: {
          nik: true,
          nama: true,
          status_hubungan: true,
          kartukeluarga: {
            select: {
              no_kk: true,
            },
          },
        },
      },
    },
  });

  return data.map((item) => ({
    id: String(item.id_permohonan),
    jenis_permohonan: item.jenis_permohonan,
    createdAt: item.createdAt,
    status: mapPermohonanStatus(item.status),
    hasil_surat: item.hasil_surat,
    keterangan_warga: null,

    pemohon: {
      nik: item.penduduk.nik,
      nama: item.penduduk.nama,
      status_hubungan: item.penduduk.status_hubungan,
    },

    kk: item.penduduk.kartukeluarga
      ? {
          no_kk: item.penduduk.kartukeluarga.no_kk,
          kepala_keluarga: "",
          alamat: null,
          nomor_rt: null,
        }
      : null,
  }));
}

