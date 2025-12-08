"use server";

import { prisma } from "lib/prisma";

export async function sendTestNotif(
  receiverId: string,
  senderId?: string,
  pesan: string = "Ini notifikasi percobaan",
  type: string = "TEST"
) {
  await prisma.notifikasi.create({
    data: {
      receiverId,
      senderId,
      pesan,
      type,
    },
  });

  return { success: true };
}
