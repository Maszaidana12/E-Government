"use server"

import { prisma } from "lib/prisma"

interface NotifPayload {
    title: string;
    message: string;
    type : "permohonan" | "pengajuan" | "lainnya";

}

export async function sendNotifToRT (payload:NotifPayload) {
    try{
        await prisma.notifikasi.create ({
            data:{
                title:payload.title,
                message: payload.message,
                type: payload.type,
            }
        });

        return {success:true};

    }catch(error){
        console.log("Gagal membuat Notifikasi :", error);
        return{success: false, error: "Gagal membuat Notifikasi"}
    }
}