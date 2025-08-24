import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar  from "@/components/HeroSection/Navbar";
import  Hero  from "@/components/HeroSection/Hero";
import Footer from "@/components/HeroSection/footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "E-Government",
  description: "Aplikasi Website Masyarakat ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable}  antialiased`}
      > <Navbar/>
       <main className="bg-white-50 min-h-screen">{children}</main> 
       <Footer />
      </body>
    </html>
  );
}
