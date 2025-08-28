import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/HeroSection/Navbar";
import Footer from "@/components/HeroSection/footer";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Government",
  description: "Aplikasi Website Masyarakat",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

