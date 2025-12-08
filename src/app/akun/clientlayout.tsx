"use client";

import { useState } from "react";
import { Navbar, Sidebar } from "@/components/layout";
import { Session } from "next-auth";
import { NavbarProvider } from "../context/NavbarContext";
import { ProfileProvider } from "../context/ProfileContext";
import QueryProvider from "./datakeluarga/QueryProvider"; // Pastikan path ini benar


export default function ClientLayoutAkun({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    // 1. Bungkus di sini, atau di bawah NavbarProvider
    <QueryProvider> 
      <NavbarProvider>
        <ProfileProvider>
          <div className="flex h-screen">
            {/* Sidebar dan Navbar (jika mereka atau komponen di dalamnya menggunakan Query) */}
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            {/* Konten utama */}
            <div
              className={`flex flex-col flex-1 transition-all duration-300 ${
                isCollapsed ? "ml-16" : "ml-48"
              }`}
            >
              <Navbar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                session={session}
              />

              {/* children (tempat AnggotaKKPanel berada) harus berada di dalam QueryProvider */}
              <div className="flex-1 overflow-auto bg-white dark:bg-slate-900 px-6  pb-3">
                {children}
              </div>
            </div>
          </div>
        </ProfileProvider>
      </NavbarProvider>
    </QueryProvider> // 2. Tutup di sini
  );
}