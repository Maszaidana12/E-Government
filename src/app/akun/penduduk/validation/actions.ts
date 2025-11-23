"use server";

import {prisma} from "../../../../../lib/prisma"
import { PendudukSchema, 
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

export const DataPendudukCreate = async (prevState: unknown ,formData:FormData) => {
    const validasi = PendudukSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validasi.success){
        return {
            Error: validasi.error.flatten().fieldErrors
        }
    }
    const tanggalLahir = new Date (validasi.data.tanggal_lahir)
    try{
       const penduduk =  await prisma.penduduk.create({
        data:{
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
              no_kk: validasi.data.no_kk
              

        }
    })
    
    const hashedPassword = await bcrypt.hash(penduduk.nik, 10); // password awal = NIK
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

    } catch(error){
        console.error("Error create penduduk:", error);
        return {message: "Gagal menambahkan Data Penduduk"}
    }
    revalidatePath ("/akun/penduduk");
    redirect("/akun/penduduk");
}

export const DataPendudukUpdate = async (prevState: unknown, formData: FormData) => {
  const id = Number(formData.get("id_penduduk"));
  const data = Object.fromEntries(formData.entries());
  const validasi = PendudukSchema.safeParse(data);

  if (!validasi.success) {
    return {
      Error: validasi.error.flatten().fieldErrors,
    };
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

export async function DeletePenduduk (id:number){
    await prisma.penduduk.delete({
        where:{id_penduduk:id},
    });
}


export async function DeleteUsers (id:string){
    await prisma.users.delete({
        where:{id},
    });
}


export async function JumlahDataPenduduk() {
  const totalPenduduk = await prisma.penduduk.count();
  return NextResponse.json({ totalPenduduk });
}

{/* Data RT */}




{/* Data Keluarga */}

export const DataKeluargaCreate = async (prevstate:unknown, formData:FormData) => {
  const validasi = KeluargaSchema.safeParse(Object.fromEntries(formData.entries()));
  if(!validasi.success){
    return {
      Error:validasi.error.flatten().fieldErrors
    }
  }
   const data: KeluargaInput = validasi.data;
   try {
      await prisma.kK.create({
        data:{
          no_kk: validasi.data.no_kk,
          alamat: validasi.data.alamat,
          nomor_rt:validasi.data.nomor_rt,
        }
      });

      const anggota = data.anggota;
    for (const a of anggota) {
      await prisma.penduduk.updateMany({
        where: { nik: a.nik },
        data: { no_kk: data.no_kk },
      });
    }


     }  catch(error){
        console.error("Error create Data Keluarga:", error);
        return {message: "Gagal menambahkan Data keluarga"}
     }
      revalidatePath("/akun/datakeluarga");
      redirect("/akun/datakeluarga");
  } ;


  
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

    // update anggota
    const anggota = data.anggota;
    for (const a of anggota) {
      await prisma.penduduk.updateMany({
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
    orderBy: { status_hubungan: "asc" }, // Kepala keluarga → Istri → Anak
  });

  return anggota;
}

export async function DeleteKK (id:number){
    await prisma.kK.delete({
        where:{id_kk:id},
    });
}


export const createRT = async (_prevState: unknown, formData: FormData) => {
  // optional: cek session & role (hanya admin yang boleh buat RT)
  const session = await auth();
  if (!session) {
    return { error: { general: "User belum terautentikasi" } };
  }

  const payload = Object.fromEntries(formData.entries());
  const parsed = RTSchema.safeParse(payload);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const data: RTInput = parsed.data;

  try {
    // pastikan penduduk ada
    const penduduk = await prisma.penduduk.findUnique({
      where: { nik: data.nik },
      select: { nik: true, nama: true },
    });

    if (!penduduk) {
      return { error: { nik: ["Penduduk dengan NIK ini tidak ditemukan"] } };
    }

    // create RT, ambil nama_lengkap dari penduduk yang dipilih (ketua RT)
    await prisma.rT.create({
      data: {
        nomor_rt: data.nomor_rt,
        nik: penduduk.nik,
        nama_lengkap: penduduk.nama,
        no_hp: data.no_hp ?? null,
        alamat: data.alamat_jalan ?? null,
        provinsi: data.provinsi,
        kabupaten_kota: data.kabupaten,
        kecamatan: data.kecamatan,
        desa_kelurahan: data.desa,
        kode_pos: data.kode_pos ?? null,
      },
    });

    // revalidate halaman RT list
    revalidatePath("/administrasi/rt");
    redirect("/administrasi/rt");
  } catch (error) {
    console.error("createRT error:", error);
    return { error: { general: "Gagal membuat RT" } };
  }
};

export const updateRT = async (_prevState: unknown, formData: FormData) => {
  const payload = Object.fromEntries(formData.entries());
  const parsed = RTSchema.safeParse(payload);
  if (!parsed.success) return { error: parsed.error.flatten().fieldErrors };

  const data: RTInput = parsed.data;

  try {
    // pastikan RT ada
    await prisma.rT.update({
      where: { nomor_rt: data.nomor_rt },
      data: {
        nik: data.nik,
        // ambil nama terbaru dari penduduk yg dipilih
        nama_lengkap: (await prisma.penduduk.findUnique({ where: { nik: data.nik }, select: { nama: true } }))?.nama ?? undefined,
        no_hp: data.no_hp ?? null,
        alamat: data.alamat_jalan ?? null,
        provinsi: data.provinsi,
        kabupaten_kota: data.kabupaten,
        kecamatan: data.kecamatan,
        desa_kelurahan: data.desa,
        kode_pos: data.kode_pos ?? null,
      },
    });

    revalidatePath("/administrasi/rt");
    redirect("/administrasi/rt");
  } catch (error) {
    console.error("updateRT error:", error);
    return { error: { general: "Gagal update RT" } };
  }
};

export const deleteRT = async (id: number) => {
  try {
    await prisma.rT.delete({ where: { id_rt:id } });
    revalidatePath("/administrasi/rt");
    return { success: true };
  } catch (error) {
    console.error("deleteRT error:", error);
    return { error: { general: "Gagal menghapus RT" } };
  }
};
