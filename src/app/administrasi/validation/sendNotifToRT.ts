"use server"

import { prisma } from "lib/prisma"

interface NotifPayload {
    title: string;
    message: string;
    type : "permohonan" | "pengajuan" | "lainnya";
    senderId: string;

}

export async function sendNotifToRT (payload:NotifPayload) {
    try{

        // 1. CARI PENERIMA (ID RT)
        // ASUMSI: Mencari user dengan role 'RT'. Anda mungkin perlu menyesuaikan query ini.
        const rtUser = await prisma.users.findFirst({
            where: { peran: 'RT' }, 
            select: { id: true }
        });

        if (!rtUser) {
            console.warn("RT user not found. Notification aborted.");
            return { success: false, error: "Penerima notifikasi (RT) tidak ditemukan." };
        }
        
        // 2. GABUNGKAN title dan message ke satu kolom 'pesan'
        // Kolom 'title' dan 'message' Dihapus dari data object

        await prisma.notifikasi.create ({
            data:{
                receiverId: rtUser.id, 
               senderId: payload.senderId,
                
                // 💡 KOREKSI: Gunakan 'message' dan 'title' sesuai skema
                message: payload.message, 
                title: payload.title,    
                
                type: payload.type,
            }
        });

        return {success:true};

    }catch(error){
        console.log("Gagal membuat Notifikasi :", error);
        return{success: false, error: "Gagal membuat Notifikasi"}
    }
}