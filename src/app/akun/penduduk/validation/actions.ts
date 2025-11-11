"use server";

import {prisma} from "../../../../../lib/prisma"
import { PendudukSchema } from "./validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const DataPendudukCreate = async (prevState: unknown ,formData:FormData) => {
    const validasi = PendudukSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validasi.success){
        return {
            Error: validasi.error.flatten().fieldErrors
        }
    }
    const tanggalLahir = new Date (validasi.data.tanggal_lahir)
    try{
        await prisma.penduduk.create({
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

