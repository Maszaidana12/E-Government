"use server";

import { prisma } from "lib/prisma";
import { PermohonanSchema, PermohonanInput } from './validation';
import { revalidatePath } from "next/cache";


export async function createPermohonan(prevState:unknown, formData:FormData){
try{

    const rawData : PermohonanInput = {
        nik: formData.get("nik")?.toString() || "",
        jenis_permohonan: formData.get("jenis_permohonan")?.toString() as PermohonanInput["jenis_permohonan"],
        keterangan:formData.get("keterangan")?.toString() || "",
     };

     const validated = PermohonanSchema.safeParse(rawData);
     if(!validated.success){
        return{error: validated.error.flatten().fieldErrors};
     }

     const penduduk = await prisma.penduduk.findUnique({
        where: {nik: validated.data.nik},
     });
     if(!penduduk){
        return {error:{nik:["NIK Tidak Ditemukan"]}};
     }

     const permohonan = await prisma.permohonan.create ({
        data: {
            nik: validated.data.nik,
            jenis_permohonan:validated.data.jenis_permohonan,
            keterangan: validated.data.keterangan === "" ? null : validated.data.keterangan,
        },
     });

     await sendNotifToRT ({
        title : "Pengajuan Baru",
        message: `Ada Permohonan Baru dari NIK ${validated.data.nik} `,
        type : "permohonan",
     });

     revalidatePath('/administrasi/permohonan');
     return {success:true};
       } catch (error){
         console.error(error);
         return{error :{general: "Terjadi kesalahan Server"}}
       }
}
