import { object, string } from "zod";

export const LoginUserSchema = object({
  nik: string()
    .min(3, { message: "Username/NIK minimal 3 karakter" })
    .max(16, { message: "Username/NIK maksimal 20 karakter" }),
  password: string()
    .min(8, "Password minimal 8 karakter")
    .max(32, "Password maksimal 32 karakter"),
});