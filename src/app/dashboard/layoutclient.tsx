"use client";

import { useState } from "react";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { Session } from "next-auth";
import { NavbarProvider } from "../context/NavbarContext";

export default function ClientLayout({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <NavbarProvider>
        
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Konten utama */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-48"
        }`}
      >
        {/* Navbar */}
        <Navbar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          session={session}
        />

        {/* Bagian tengah (konten yang bisa scroll) */}
        <div className="flex-1 overflow-auto bg-gray-50 dark:bg-slate-900 px-6 pt-20 pb-6">
          {children}
        </div>

        {/* Footer selalu di bawah */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>

    </NavbarProvider>
    //
  );
}
