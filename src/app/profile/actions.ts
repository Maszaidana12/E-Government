// app/profile/actions.ts
"use server"; // 👈 WAJIB ADA DI BARIS PERTAMA

import { prisma } from "lib/prisma";
import { auth } from "auth";
import bcrypt from "bcryptjs";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache"; // Untuk refresh data
import { Prisma } from "@prisma/client";

// ----------------------------------------------------------------------
// 1. SERVER ACTION: Mendapatkan Data Profil (Pengganti GET API)
// ----------------------------------------------------------------------


type UserUpdateData = Prisma.UsersUpdateInput;

export async function getProfileData() {
  const session = await auth();
  if (!session || !session.user.id) {
    return { error: "Unauthenticated" };
  }

  const user = await prisma.users.findUnique({
    where: { id: session.user.id },
    select: {
      nama: true,
      nik: true,
      images: true,
    },
  });

  if (!user) {
    return { error: "User not found" };
  }
  
  // Siapkan data untuk frontend
  const previewFoto = user.images ? `/uploads/${user.images}` : "";

  return { 
    user: {
        nama: user.nama,
        nik: user.nik,
        previewFoto: previewFoto,
        images: user.images, // nama file
    }, 
    error: null 
  };
}


// ----------------------------------------------------------------------
// 2. SERVER ACTION: Update Profil (Pengganti POST API)
// ----------------------------------------------------------------------

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session || !session.user.id) {
    return { message: "Error: Unauthenticated", status: 401 };
  }

  const nama = formData.get("nama") as string;
  const password = formData.get("password") as string;
  const foto = formData.get("foto") as File | null; // File type di Server Action

  const updateData: UserUpdateData = { nama };
  let fotoName: string | undefined;

  // 1. Upload Foto Jika Ada
  if (foto && foto.size > 0) {
    const bytes = await foto.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Pastikan ekstensi file diambil dengan aman
    const ext = foto.name.split(".").pop();
    fotoName = `profile_${session.user.id}_${Date.now()}.${ext}`;

    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, fotoName);
    await writeFile(filePath, buffer);
    
    updateData.images = fotoName;
  }

  // 2. Logika Update Password (Hanya jika diisi/tidak kosong)
  if (password && password.trim() !== '') {
    updateData.password = await bcrypt.hash(password, 10);
  }


  // 3. Update Database
  try {
    const updatedUser = await prisma.users.update({
      where: { id: session.user.id },
      data: updateData,
    });
    
    // Refresh cache data untuk halaman profile dan navbar
    revalidatePath('/profile');
    revalidatePath('/dashboard'); 
    
    return { 
        message: "Profil berhasil diupdate!", 
        status: 200, 
        user: updatedUser // Kembalikan data user yang diupdate
    };
  } catch (error) {
    console.error(error);
    return { message: "Gagal mengupdate profil.", status: 500 };
  }
}