"use client";

import Navbar from "@/components/HeroSection/Navbar";
import Footer from "@/components/HeroSection/footer";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  // Ganti theme sesuai preferensi sistem
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <SessionProvider>
      <div
        className={`flex flex-col min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-[#0F172A] text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
