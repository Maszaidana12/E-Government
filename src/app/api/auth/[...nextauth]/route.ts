import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from "@auth/prisma-adapter"
import {prisma} from "../../../../../lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),


    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        
        const { username, password } = credentials as {
          username: string;
          password: string;
          
        };
        
        
        // Panggil API backend kamu
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) return null;

        const user = await response.json();
        if (!user) return null;

        return {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role, // misal kamu punya role di DB
        };
        
      },
      
    }),
    
  ],
  session: {
    strategy: "jwt", // biar stateless (lebih cocok untuk API)
  },
  pages: {
    signIn: "/login", // redirect ke /login kalau belum login
  },
  
});
export { handlers as GET, handlers as POST };
