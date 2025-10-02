import { object, string } from "zod";

export const RegisterSchema = object({
  name: string()
  .min(1, {message: "Nama harus lebih dari 1 karakter"})
  .max(100, { message: "Nama maksimal 100 karakter" })
  .regex(/^[A-Za-z\s]+$/,{message: "Nama hanya boleh berupa Huruf"}),

  nik: string()
    .min(16, { message: "NIK minimal 16 digit" })
    .max(16, { message: "NIK maksimal 16 digit" })
    .regex(/^\d+$/, { message: "NIK hanya boleh angka" }),
    username: string()
    .min(3, { message: "Username minimal 3 karakter" })
    .max(20, { message: "Username maksimal 20 karakter" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username hanya boleh huruf, angka, underscore dan Tanpa Spasi" }),
  kk: string().length(16, "No KK harus memiliki 16 karakter"),
  password: string()
    .min(8, "Password minimal 8 karakter")
    .max(32, "Password harus kurang dari 32 karakter"),
  confirmPassword: string()
    .min(8, "Password minimal 8 karakter")
    .max(32, "Password harus kurang dari 32 karakter"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password yang anda masukkan tidak sama",
  path: ["confirmPassword"], // errornya bakal muncul di field confirmPassword
});


export const LoginUserSchema = object({
  UsernameOrNik: string()
    .min(3, { message: "Username/NIK minimal 3 karakter" })
    .max(16, { message: "Username/NIK maksimal 20 karakter" }),
  password: string()
    .min(8, "Password minimal 8 karakter")
    .max(32, "Password maksimal 32 karakter"),
});