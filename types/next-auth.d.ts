import { type DefaultSession } from "next-auth";

// Extend next-auth
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      peran?: string;
      username?: string;
      images?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role?: string;
    peran?: string;
    username?: string;
    images?: string | null;
  }
}

// Extend JWT
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string;
    peran?: string;
    username?: string;
    images?: string | null;
  }
}
