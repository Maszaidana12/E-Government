"use server";

import {prisma} from "../../../../../lib/prisma"
import { PendudukSchema, KeluargaSchema } from "./validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

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


export async function DeleteKK (id:number){
    await prisma.kK.delete({
        where:{id_kk:id},
    });
}



export const DataKeluargaCreate = async (prevstate:unknown, formData:FormData) => {
  const validasi = KeluargaSchema.safeParse(Object.fromEntries(formData.entries()));
  if(!validasi.success){
    return {
      Error:validasi.error.flatten().fieldErrors
    }
  }
   try {
      await prisma.kK.create({
        data:{
          no_kk: validasi.data.no_kk,
          alamat: validasi.data.alamat,
          nomor_rt:validasi.data.nomor_rt,
          kode_pos:validasi.data.kode_pos,
          desa_kelurahan:validasi.data.desa_kelurahan,
          kecamatan:validasi.data.kecamatan,
          kabupaten_kota:validasi.data.kabupaten_kota,
          provinsi:validasi.data.provinsi,
          

        }
      });
     }  catch(error){
        console.error("Error create Data Keluarga:", error);
        return {message: "Gagal menambahkan Data keluarga"}
     }
      revalidatePath("/akun/datakeluarga");
      redirect("/akun/datakeluarga");
  } ;

  export async function GetAnggotaKK(noKK: string) {
  const anggota = await prisma.penduduk.findMany({
    where: { no_kk: noKK },
    orderBy: { status_hubungan: "asc" }, // Kepala keluarga → Istri → Anak
  });

  return anggota;
}
