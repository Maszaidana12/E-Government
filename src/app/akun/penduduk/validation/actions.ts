"use server";

import { prisma } from "../../../../../lib/prisma";
import {
  PendudukSchema,
  KeluargaSchema,
  KeluargaInput,
  RTSchema,
  RTInput,
} from "./validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { auth } from "auth";
import { DaftarKeluarga } from "@/components/Akun/Keluarga/tabel-data-keluarga";

export const DataPendudukCreate = async (prevState: unknown, formData: FormData) => {
  const validasi = PendudukSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validasi.success) {
    return { Error: validasi.error.flatten().fieldErrors };
  }

  const tanggalLahir = new Date(validasi.data.tanggal_lahir);
  try {
    const penduduk = await prisma.penduduk.create({
      data: {
        nik: validasi.data.nik,
        nama: validasi.data.nama,
        jenis_kelamin: validasi.data.jenis_kelamin,
        tempat_lahir: validasi.data.tempat_lahir,
        tanggal_lahir: tanggalLahir,
        agama: validasi.data.agama,
        pendidikan: validasi.data.pendidikan,
        pekerjaan: validasi.data.pekerjaan,
        golongan_darah: validasi.data.golongan_darah,
        status_perkawinan: validasi.data.status_perkawinan,
        kewarganegaraan: validasi.data.kewarganegaraan,
        status_hubungan: validasi.data.status_hubungan,
        no_kk: validasi.data.no_kk,
      },
    });

    const hashedPassword = await bcrypt.hash(penduduk.nik, 20); // password awal = NIK
    const user = await prisma.users.create({
      data: {
        nik: penduduk.nik,
        nama: penduduk.nama,
        peran: "Warga", // default role
        password: hashedPassword,
      },
    });

    await prisma.account.create({
      data: {
        userId: user.id,
        type: "credentials",
        provider: "credentials",
        providerAccountId: user.id,
      },
    });

    await prisma.sesi.create({
      data: {
        token_sesi: "auto_create_" + user.id,
        penggunaId: user.id,
        kadaluarsa: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 hari
      },
    });
  } catch (error) {
    console.error("Error create penduduk:", error);
    return { message: "Gagal menambahkan Data Penduduk" };
  }

  revalidatePath("/akun/penduduk");
  redirect("/akun/penduduk");
};

export const DataPendudukUpdate = async (prevState: unknown, formData: FormData) => {
  const id = Number(formData.get("id_penduduk"));
  const data = Object.fromEntries(formData.entries());
  const validasi = PendudukSchema.safeParse(data);

  if (!validasi.success) {
    return { Error: validasi.error.flatten().fieldErrors };
  }

  // langsung jalankan update tanpa try/catch, karena redirect() bakal "throw"
  await prisma.penduduk.update({
    where: { id_penduduk: id },
    data: {
      nik: validasi.data.nik,
      nama: validasi.data.nama,
      jenis_kelamin: validasi.data.jenis_kelamin,
      tempat_lahir: validasi.data.tempat_lahir,
      tanggal_lahir: new Date(validasi.data.tanggal_lahir),
      agama: validasi.data.agama,
      pendidikan: validasi.data.pendidikan,
      pekerjaan: validasi.data.pekerjaan,
      golongan_darah: validasi.data.golongan_darah,
      status_perkawinan: validasi.data.status_perkawinan,
      kewarganegaraan: validasi.data.kewarganegaraan,
      status_hubungan: validasi.data.status_hubungan,
      no_kk: validasi.data.no_kk,
    },
  });

  revalidatePath("/akun/penduduk");
  redirect("/akun/penduduk");
};

export async function DeletePenduduk(id: number) {
  await prisma.penduduk.delete({
    where: { id_penduduk: id },
  });
}

export async function DeleteUsers(id: string) {
  await prisma.users.delete({
    where: { id },
  });
}

export async function JumlahDataPenduduk() {
  const totalPenduduk = await prisma.penduduk.count();
  return NextResponse.json({ totalPenduduk });
}

/* Data RT */

/* Data Keluarga */
export const DataKeluargaCreate = async (prevstate: unknown, formData: FormData) => {
  const validasi = KeluargaSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validasi.success) {
    return { Error: validasi.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session)
    return { error: { general: "User Belum Login" } };

  const nikRT = session.user.username;

  const dataRT = await prisma.rT.findFirst({
    where: { nik: nikRT },
    select: {
      nomor_rt: true,
      alamat: true,
      kode_pos: true,
      desa_kelurahan: true,
      kecamatan: true,
      kabupaten_kota: true,
      provinsi: true,
    },
  });

  if (!dataRT) {
    return { error: { general: "Akun anda bukan Akun RT" } };
  }

  const data: KeluargaInput = validasi.data;
  try {
    await prisma.kK.create({
      data: {
        no_kk: validasi.data.no_kk,
        nomor_rt: dataRT.nomor_rt,
        alamat: dataRT.alamat,
      },
    });

    const anggota = data.anggota;
    for (const a of anggota) {
      await prisma.penduduk.updateMany({
        where: { nik: a.nik },
        data: { no_kk: data.no_kk },
      });
    }

    return {
      success: true,
      message: "Data KK berhasil dibuat",
      wilayah: {
        provinsi: dataRT.provinsi,
        kabupaten_kota: dataRT.kabupaten_kota,
        kecamatan: dataRT.kecamatan,
        desa_kelurahan: dataRT.desa_kelurahan,
        kode_pos: dataRT.kode_pos,
        alamat: dataRT.alamat,
        nomor_rt: dataRT.nomor_rt,
      },
    };
  } catch (err) {
    console.error("Error create Data Keluarga:", err);
    return { error: { general: "Gagal menambahkan data keluarga" } };
  }
};

export async function DataKeluarga(): Promise<DaftarKeluarga[]> {
  const keluarga = await prisma.kK.findMany({
    include: {
      rt: true,
      anggota_keluarga: { orderBy: { status_hubungan: "asc" } },
    },
  });

  return keluarga;
}

export const updateKK = async (_: unknown, formData: FormData) => {
  const payload = Object.fromEntries(formData.entries());
  const no_kk = payload.no_kk as string;

  const parsed = KeluargaSchema.safeParse(payload);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const data: KeluargaInput = parsed.data;

  try {
    await prisma.kK.update({
      where: { no_kk },
      data: {
        alamat: data.alamat ?? null,
        nomor_rt: data.nomor_rt,
      },
    });

    await prisma.penduduk.updateMany({
      where: { no_kk },
      data: { no_kk: null },
    });

    for (const a of data.anggota) {
      await prisma.penduduk.update({
        where: { nik: a.nik },
        data: { no_kk: no_kk },
      });
    }

    revalidatePath("/akun/datakeluarga");
    redirect("/akun/datakeluarga");
  } catch (error) {
    console.error("updateKK error", error);
    return { error: { general: "Gagal update KK" } };
  }
};

export async function GetAnggotaKK(noKK: string) {
  const anggota = await prisma.penduduk.findMany({
    where: { no_kk: noKK },
    orderBy: { status_hubungan: "asc" },
  });

  return anggota;
}

export async function DeleteKK(id: number) {
  const kk = await prisma.kK.findUnique({ where: { id_kk: id } });
  if (!kk) return;

  await prisma.penduduk.updateMany({
    where: { no_kk: kk.no_kk },
    data: { no_kk: null },
  });

  await prisma.kK.delete({ where: { id_kk: id } });
}

export async function JumlahDataKeluarga() {
  const totalKeluarga = await prisma.kK.count();
  return NextResponse.json({ totalKeluarga });
}

export async function JumlahPendudukByGender() {
  const laki = await prisma.penduduk.count({ where: { jenis_kelamin: "laki_laki" } });
  const perempuan = await prisma.penduduk.count({ where: { jenis_kelamin: "perempuan" } });

  return Response.json({ laki, perempuan });
}

export const createRT = async (_prevState: unknown, formData: FormData) => {
  const session = await auth();
  if (!session) return { error: { general: "User belum login." } };

  const payload = Object.fromEntries(formData.entries());
  const parsed = RTSchema.safeParse(payload);
  if (!parsed.success) return { Error: parsed.error.flatten().fieldErrors };

  const data: RTInput = parsed.data;

  try {
    const penduduk = await prisma.penduduk.findUnique({
      where: { nik: data.nik },
      select: { nik: true, nama: true },
    });

    if (!penduduk) return { error: { nik: ["Penduduk dengan NIK ini tidak ditemukan"] } };

    const user = await prisma.users.findUnique({
      where: { nik: data.nik },
      select: { peran: true },
    });

    if (!user) return { error: { nik: ["User dengan NIK ini tidak ditemukan"] } };
    if (user.peran !== "RT") return { error: { nik: ["NIK ini bukan akun dengan role RT"] } };

    await prisma.rT.create({
      data: {
        nomor_rt: data.nomor_rt,
        nik: penduduk.nik,
        nama_lengkap: penduduk.nama,
        no_hp: data.no_hp ?? null,
        alamat: data.alamat ?? null,
        provinsi: data.provinsi,
        kabupaten_kota: data.kabupaten,
        kecamatan: data.kecamatan,
        desa_kelurahan: data.desa,
        kode_pos: data.kode_pos ?? null,
      },
    });

    revalidatePath("/akun/rt");
    return { success: true };
  } catch (err) {
    console.error("createRT error:", err);
    return { error: { general: "Gagal membuat data RT." } };
  }
};

export const updateRT = async (_prevState: unknown, formData: FormData) => {
  const payload = Object.fromEntries(formData.entries());
  const parsed = RTSchema.safeParse(payload);
  if (!parsed.success) return { error: parsed.error.flatten().fieldErrors };

  const data: RTInput = parsed.data;

  try {
    await prisma.rT.update({
      where: { nomor_rt: data.nomor_rt },
      data: {
        nik: data.nik,
        nama_lengkap:
          (await prisma.penduduk.findUnique({ where: { nik: data.nik }, select: { nama: true } }))?.nama ??
          undefined,
        no_hp: data.no_hp ?? null,
        alamat: data.alamat ?? null,
        provinsi: data.provinsi,
        kabupaten_kota: data.kabupaten,
        kecamatan: data.kecamatan,
        desa_kelurahan: data.desa,
        kode_pos: data.kode_pos ?? null,
      },
    });

    revalidatePath("/akun/rt");
    redirect("/akun/rt");
  } catch (error) {
    console.error("updateRT error:", error);
    return { error: { general: "Gagal update RT" } };
  }
};

export const deleteRT = async (id: number) => {
  try {
    await prisma.rT.delete({ where: { id_rt: id } });
    revalidatePath("/akun/rt");
    return { success: true };
  } catch (error) {
    console.error("deleteRT error:", error);
    return { error: { general: "Gagal menghapus RT" } };
  }
};

export async function GetDetailKK(noKK: string) {
  return prisma.kK.findUnique({
    where: { no_kk: noKK },
    include: {
      rt: true,
      anggota_keluarga: { orderBy: { status_hubungan: "asc" } },
    },
  });
}



export type PendudukSearch = {
  nik: string;
  nama: string;
  status_hubungan: string;
};


// 💡 FUNGSI BARU: Mencari Penduduk yang Belum Memiliki KK
export async function SearchPendudukAvailable(
  query: string,
): Promise<PendudukSearch[]> {
  if (!query) return [];

  const searchResults = await prisma.penduduk.findMany({
    where: {
      no_kk: null, // Hanya penduduk yang belum punya KK
      OR: [
        { nik: { contains: query } },
        { nama: { contains: query } },
      ],
    },
    select: {
      nik: true,
      nama: true,
      status_hubungan: true, // Untuk ditampilkan di hasil search
    },
    take: 10, // Ambil 10 hasil teratas
  });

  return searchResults;
}

// 💡 FUNGSI BARU: Menambah Anggota ke KK (Menghapus jika noKK = null)
export async function UpdateAnggotaKK(
  noKK: string, 
  nik: string, 
  action: 'add' | 'remove'
) {
  try {
    const newNoKK = action === 'add' ? noKK : null;

    await prisma.penduduk.update({
      where: { nik: nik },
      data: { no_kk: newNoKK },
    });

    revalidatePath("/akun/datakeluarga"); // Revalidate tampilan tabel
    return { success: true };
  } catch (error) {
    console.error("UpdateAnggotaKK error:", error);
    return { error: "Gagal memperbarui anggota keluarga." };
  }
}


