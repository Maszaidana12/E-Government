import { type DefaultSession } from "next-auth";

// Extend next-auth
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      username?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role?: string;
    username?: string;
  }
}

// Extend JWT
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string;
    username?: string;
  }
}
