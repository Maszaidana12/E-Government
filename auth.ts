import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import { LoginUserSchema } from "lib/zod";
import bcrypt from "bcryptjs";

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
        UsernameOrNik: { label: "Username / NIK", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = LoginUserSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { UsernameOrNik, password } = parsed.data;

        const user = await prisma.users.findFirst({
          where: {
            OR: [{ username: UsernameOrNik }, { nik: UsernameOrNik }],
          },
          include: { role: true },
        });

        if (!user) return null;

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;

        return {
          id: String(user.id),
          name: user.nama,
          role: user.role?.name || "USER",
          username: user.username ?? undefined,
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
        session.user.id = token.sub ?? "";
        session.user.role = token.role as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
});
