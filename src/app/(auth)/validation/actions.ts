"use server";

import { LoginUserSchema } from "./zod";
import { prisma } from "lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "auth";
import { AuthError } from "next-auth";


export const SignInCredentials = async(prevState:unknown, formData:FormData) =>{
    const validasi = LoginUserSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    if(!validasi.success){
        return{
            error: validasi.error.flatten().fieldErrors,
        };
    }

    const{nik, password} = validasi.data;

    try {
      const res = await signIn("credentials", {
      nik,
      password,
      redirectTo: "/dashboard",
        })

    console.log("SIGNIN RESULT:", res);
    return { success: true };

    } catch(error){
            if(error instanceof AuthError){
                switch (error.type) {
                    case "CredentialsSignin":
                        return {message: "Credentials tidak Valid"}
                        break;
                
                    default:
                        return { message: "Ada sesuatu yang Salah"}
                }
            }
            throw error;
    }
}