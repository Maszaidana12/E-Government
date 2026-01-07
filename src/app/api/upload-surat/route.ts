import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { prisma } from "lib/prisma";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const permohonanId = formData.get("permohonanId") as string;

    if (!file || !permohonanId) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    /* =========================
       PASTIKAN FOLDER ADA
    ========================= */
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "surat"
    );

    await mkdir(uploadDir, { recursive: true });

    /* =========================
       SIMPAN FILE
    ========================= */
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `surat-${permohonanId}.pdf`;
    const uploadPath = path.join(uploadDir, fileName);

    await writeFile(uploadPath, buffer);

    /* =========================
       UPDATE DB
    ========================= */
    await prisma.permohonan.update({
      where: { id_permohonan: Number(permohonanId) },
      data: {
        status: "SELESAI",
        hasil_surat: `/uploads/surat/${fileName}`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return NextResponse.json(
      { message: "Gagal upload surat" },
      { status: 500 }
    );
  }
}
