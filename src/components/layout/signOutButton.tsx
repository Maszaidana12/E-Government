"use client";

import { signOut } from "next-auth/react";
import { IoExit } from "react-icons/io5";

export default function SignOutButton({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className={`
        w-full flex items-center gap-3 px-3 py-2 rounded-lg
        hover:bg-white/50 dark:hover:bg-slate-800 transition-colors
        text-white dark:text-slate-100 font-medium mb-2
      `}
      title={collapsed ? "Sign Out" : undefined}
    >
      <div className="min-w-[36px] flex items-center justify-center">
        <IoExit className="w-5 h-5" />
      </div>
      <span className={`${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        Sign Out
      </span>
    </button>
  );
}
