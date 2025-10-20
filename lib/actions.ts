"use server";

import { LoginUserSchema} from "./zod";

import { signIn } from "auth";
import { AuthError } from "next-auth";
import { ReadonlyURLSearchParams } from "next/navigation";



export const SaveDataPenduduk = async(formData:FormData) =>{
  const data = Object.fromEntries(formData.entries());
  console.log(data)
}



interface SignInContext {
  searchParams?: ReadonlyURLSearchParams | URLSearchParams;
}


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

  const { nik, password } = validatedFields.data;
  const redirectToPath = searchParams?.get('callbackUrl') ?? '/dashboard'

  try {
    await signIn("credentials", {
      nik, // bisa username atau nik
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