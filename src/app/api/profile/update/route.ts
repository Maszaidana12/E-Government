import { prisma } from "lib/prisma";
import { auth } from "auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { writeFile, mkdir } from "fs/promises";
import path from "path";


interface UserData {
    images?: string,
    nama:string,
    password?:string,
}


export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Belum login" }, { status: 401 });

  const user = await prisma.users.findUnique({
    where: { id: session.user.id },
    select: {
      nama: true,
      nik: true,
      images: true,
      password:true,
    },
  });

  return NextResponse.json({ user });
}


export async function POST(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Belum login" }, { status: 401 });

  const formData = await req.formData();
  const nama = formData.get("nama") as string;
  const password = formData.get("password") as string;
  const foto = formData.get("foto") as File | null;

  let fotoName: string | undefined;

  // === Upload Foto Jika Ada ===
  if (foto) {
    const bytes = await foto.arrayBuffer();
    const buffer = Buffer.from(bytes);

    fotoName = `profile_${session.user.id}_${Date.now()}.${foto.name.split(".").pop()}`;
    
    const uploadDir = path.join(process.cwd(), "public/uploads")
    await mkdir(uploadDir, {recursive:true});

    const filePath = path.join(uploadDir, fotoName);


    await writeFile(filePath, buffer);
  }

  // === Update user ===
  const updateData: UserData = {
    nama,
    
  };

  if (password) {
    updateData.password = await bcrypt.hash(password, 10);
  }

  if (fotoName) {
    updateData.images = fotoName;
  }

  await prisma.users.update({
    where: { id: session.user.id },
    data: updateData,
  });

  return NextResponse.json({ success: true });
}
