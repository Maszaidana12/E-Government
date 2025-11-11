"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import SidebarLinks from "@/components/layout/SidebarLink";
import SignOutButton from "@/components/layout/signOutButton";
import { LogoHero } from "@/components/index";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (v: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <>
      {/* Toggle (Mobile Only) */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpenMobile(!openMobile)}
        className="md:hidden fixed z-40 top-4 left-4 bg-white/80 dark:bg-slate-800/80 p-2 rounded-sm shadow-md backdrop-blur-sm hover:scale-105 transition"
      >
        {openMobile ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop for Mobile */}
      {openMobile && (
        <div
          onClick={() => setOpenMobile(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-40 top-0 left-0 h-screen
          transform transition-all duration-300 ease-in-out
          ${openMobile ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        style={{ width: isCollapsed ? 72 : 210 }}
      >
        <div
          className={`
            h-full flex flex-col 
            bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 
            text-white shadow-xl rounded-r-xl
            transition-all duration-300
          `}
        >
          {/* Header: Logo */}
          <div className="flex items-center justify-center mt-10 px-2">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image
                src={LogoHero}
                alt="Logo"
                width={isCollapsed ? 45 : 60}
                height={isCollapsed ? 45 : 60}
                className="object-contain drop-shadow-md"
              />
              {!isCollapsed && (
                <span className="text-lg font-semibold tracking-wide">
                  E-Gov
                </span>
              )}
            </Link>

            {/* Collapse toggle (Desktop Only) */}
            
          </div>

          {/* Links */}
          <nav className="flex-1 mt-10 px-2 overflow-y-auto">
            <SidebarLinks
              collapsed={isCollapsed}
              onNavigate={() => setOpenMobile(false)}
            />
          </nav>

          {/* Sign Out */}
          <div className="px-2 pb-6 mt-auto">
            <SignOutButton collapsed={isCollapsed} />
          </div>
        </div>
      </aside>
    </>
  );
}
