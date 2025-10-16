"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/HeroSection/Navbar";
import Footer from "@/components/HeroSection/footer";

export default function NavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="bg-white-50 min-h-screen">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
