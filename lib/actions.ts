"use server";


import { signIn } from "auth";
import { AuthError } from "next-auth";
import { ReadonlyURLSearchParams } from "next/navigation";
import { LoginUserSchema } from "./zod";




export const SignInCredentials = async (formData: FormData) => {
  const parsed = LoginUserSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.flatten().fieldErrors };

  const { nik, password } = parsed.data;

  const res = await signIn("credentials", {
    nik,
    password,
    redirect: false, // supaya kita handle error manual
  });

  if (res?.error) return { message: res.error }; 
  return { success: true };
};