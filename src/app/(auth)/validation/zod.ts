import { z } from "zod";

export const LoginUserSchema = z.object({
  nik: z.string().min(3, { message: "NIK minimal 3 karakter" }),
  password: z.string().min(3, { message: "Password minimal 3 karakter" }),
});
