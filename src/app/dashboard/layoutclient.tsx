"use client";

import { useState } from "react";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { Session } from "next-auth";


export default function DashboardClientLayout({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Wrapper konten utama */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
          ${isCollapsed ? "ml-16" : "ml-48"}`}
      >
        {/* Navbar */}
        <Navbar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          session={session}
        />

        {/* Konten utama */}
        <main className="flex-1 p-6 pt-20">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
