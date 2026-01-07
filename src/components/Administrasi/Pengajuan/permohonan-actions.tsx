"use server";

import { prisma } from "lib/prisma";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import path from "path";

/* =========================
   SET STATUS → DIPROSES
========================= */
export async function approvePermohonan(id: string) {
  await prisma.permohonan.update({
    where: { id_permohonan: Number(id) },
    data: { status: "DIPROSES" },
  });

  revalidatePath("/administrasi/rekappengajuan");
}

/* =========================
   UPLOAD SURAT → SELESAI
========================= */
export async function uploadSurat(formData: FormData) {
  const file = formData.get("file") as File;
  const permohonanId = formData.get("permohonanId") as string;

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `surat-${permohonanId}.pdf`;

  const uploadPath = path.join(
    process.cwd(),
    "public/uploads/surat",
    fileName
  );

  await writeFile(uploadPath, buffer);

  await prisma.permohonan.update({
    where: { id_permohonan: Number(permohonanId) },
    data: {
      status: "SELESAI",
      hasil_surat: `/uploads/surat/${fileName}`,
    },
  });

  revalidatePath("/administrasi/rekappengajuan");
  revalidatePath("/warga/riwayat");
}

/* =========================
   TOLAK
========================= */
export async function rejectPermohonan(id: string, alasan: string) {
  await prisma.permohonan.update({
    where: { id_permohonan: Number(id) },
    data: {
      status: "DITOLAK",
      catatan_rt: alasan,
    },
  });

  revalidatePath("/administrasi/rekappengajuan");
}
