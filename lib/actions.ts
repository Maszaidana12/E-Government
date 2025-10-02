"use server";

import { RegisterSchema, LoginUserSchema } from "./zod";
import bcrypt from "bcryptjs"; 
import { prisma } from "./prisma";
import { signIn } from "auth";
import { AuthError } from "next-auth";
import { ReadonlyURLSearchParams } from "next/navigation";

interface SignInContext {
  searchParams?: ReadonlyURLSearchParams | URLSearchParams;
}

// REGISTER
export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData,
) => {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, nik, kk: no_kk, username, password, confirmPassword } = validatedFields.data;

  if (password !== confirmPassword) {
    return { message: "Password dan konfirmasi tidak cocok" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // cek apakah NIK sudah terdaftar
    const existingUser = await prisma.users.findUnique({ where: { nik } });
    if (existingUser) return { message: "NIK sudah terdaftar" };

    const roleName = "Admin";

    // cari role default "Penduduk"
    let userRole = await prisma.roles.findFirst({ where: { name: roleName } });
    if (!userRole) {
      userRole = await prisma.roles.create({
        data: { name: roleName, description: "Role default untuk Admin" },
      });
    }

    // cari nomor urut terakhir
    const lastUser = await prisma.users.findFirst({
      orderBy: { nomor_urut: "desc" },
    });
    const nextNomor = lastUser ? lastUser.nomor_urut + 1 : 1;

    // cari atau buat KK berdasarkan no_kk
    let kkRecord: { id_kk: string } | null = null;
    if (no_kk) {
      kkRecord = await prisma.kK.findFirst({ where: { no_kk } });
      if (!kkRecord) {
        kkRecord = await prisma.kK.create({
          data: {
            no_kk,
            
          },
        });
      }
    }

    // create user baru + penduduk
    await prisma.users.create({
      data: {
        nik,
        kk: no_kk,
        nama: name,
        ...(username && { username }), // optional, misal nanti untuk Admin/RT
        password: hashedPassword,
        nomor_urut: nextNomor,
        role: { connect: { id: userRole.id } },
        ...(roleName === "Admin" && {
          penduduk: { create: 
            { 
              nik, 
              nama: name, 
              ...(kkRecord?.id_kk && {
                kk:{connect:{id_kk:kkRecord.id_kk}}
              })
            } 
          },
        }),
      },
    });

    return { success: true };
  } catch (err: unknown) {
    console.error("Register Error :", err);

    return {
      success: false,
      message: "Gagal register, coba lagi.",
    };
  }
};

// LOGIN gabungan
export const SignInCredentials = async (
  prevState: unknown,
  formData: FormData,
  { searchParams }: SignInContext = {} 
) => {
  const validatedFields = LoginUserSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { UsernameOrNik, password } = validatedFields.data;
  const redirectToPath = searchParams?.get('callbackUrl') ?? '/dashboard'

  try {
    await signIn("credentials", {
      UsernameOrNik, // bisa username atau nik
      password, 
      redirectTo: redirectToPath
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid Credentials" };
        default:
          return { message: "Something went wrong" };
      }
    }
    throw error;
  }
};
