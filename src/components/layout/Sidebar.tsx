"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import SidebarLinks from "@/components/layout/SidebarLink";
import SignOutButton from "@/components/layout/signOutButton";
import {LogoHero} from '@/components/index'; // ganti sesuai path logomu

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (v: boolean) => void;
}

export default function Sidebar ({ isCollapsed, setIsCollapsed }: SidebarProps) {
 
  const [openMobile, setOpenMobile] = useState(false); // for small screens

  

  return (
    <>
      {/* Mobile toggle button (top-left) */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpenMobile(!openMobile)}
        className="md:hidden fixed z-40 top-4 left-4 bg-white/90 dark:bg-slate-900/90 p-2 rounded-md shadow-md backdrop-blur-sm"
      >
        {openMobile ? <X size={20} /> : <Menu size={20} />}
      </button>


      {/* Backdrop when mobile open */}
      {openMobile && (
        <div
          onClick={() => setOpenMobile(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          aria-hidden
        />
      )}


      {/* Sidebar */}
      <aside
        className={`
          fixed z-40 top-0 left-0 h-screen
          transform transition-all duration-300 ease-in-out
          ${openMobile ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        style={{ width: isCollapsed ? 64 : 192 }}
      >
        <div
          className={`
            h-full flex flex-col bg-gradient-to-b from-[#01467D] via-purple-800 to-pink-500 dark:bg-slate-950
            border-r border-indigo-800 dark:border-slate-800
            shadow-md w-full transition-width duration-300 overflow-hidde
          `}
        >
          {/* Header: logo + collapse button */}
          <div className="flex items-center  px-1 mt-10 justify-center">
            <Link href="/" className="flex items-center gap-3 ">
              <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-center"}`}>
                <Image
                  src={LogoHero}
                  alt="Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Collapse/Expand button (hidden on very small as there's top-left toggle) */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex items-center justify-center -ml-4  p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {isCollapsed}
            </button>
          </div>

          {/* Links */}
           <nav className="flex-1 mt-12 overflow-y-auto border-slate-400  dark:border-slate-800 ">
            <SidebarLinks
              collapsed={isCollapsed}
              onNavigate={() => setOpenMobile(false)}
            />
          </nav>

          {/* Sign-out separated slightly downward */}
          <div className="mt-4">
            <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mb-5">
              <SignOutButton collapsed={isCollapsed} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

