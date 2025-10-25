import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";
import { LoginUserSchema } from "@/app/(auth)/validation/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        nik: { label: "NIK", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = LoginUserSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { nik, password } = parsed.data;

        // Cari user pakai NIK atau username
        const user = await prisma.users.findUnique({
          where: {nik},
          include: { penduduk: { select: { nama: true } } }// include data profil jika perlu
        });

        if (!user) return null;

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;

        return {
          id: user.id,
          name: user.nama ,
          role: user.peran,
          username:user.nik
        };
      },
    }),

    
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.username = token.username;
      }
      return session;
    },
  },
});
