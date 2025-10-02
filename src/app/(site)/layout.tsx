"use client";

import Navbar from "@/components/HeroSection/Navbar";
import Footer from "@/components/HeroSection/footer";
import { SessionProvider } from "next-auth/react";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Navbar />
      <main className="bg-white min-h-screen">{children}</main>
      <Footer />
    </SessionProvider>
  );
}
