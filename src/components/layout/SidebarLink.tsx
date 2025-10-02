"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import {
  IoSpeedometer,
  IoPerson,
  IoDocumentText,
  IoPeople,
  IoBriefcase,
  IoWallet,
} from "react-icons/io5";

type Item = {
  id: string;
  href: string;
  label: string;
  Icon: IconType;
};

const items: Item[] = [
  { id: "dash", href: "/dashboard", label: "Dashboard", Icon: IoSpeedometer },
  { id: "user", href: "/user", label: "User", Icon: IoPerson },
  { id: "permohonan", href: "/permohonan", label: "Permohonan & Pengajuan", Icon: IoDocumentText },
  { id: "penduduk", href: "/penduduk", label: "Penduduk", Icon: IoPeople },
  { id: "administrasi", href: "/administrasi", label: "Administrasi", Icon: IoBriefcase },
  { id: "keuangan", href: "/keuangan", label: "Keuangan", Icon: IoWallet },
];

export default function SidebarLink({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <ul className="flex flex-col justify-center gap-2">
      {items.map((it) => (
        <li
          key={it.id}
          className="border-b border-slate-200 dark:border-slate-800 last:border-none"
        >
          <Link
            href={it.href}
            onClick={onNavigate}
            title={collapsed ? it.label : undefined}
            className={`
              flex items-center gap-3 px-4 py-2 
             text-white 
            hover:bg-indigo-500 dark:hover:bg-indigo-400 
            transition-colors
            `}
          >
            {/* Icon */}
            <div
              className={`
                min-w-[36px] flex items-center justify-center text-lg rounded-md text-indigo-200 group-hover:text-white transition-all
              `}
            >
              <it.Icon className="w-5 h-5" />
            </div>

            {/* Label */}
            <span
              className={`
                 font-medium transition-opacity duration-200
                whitespace-normal break-words leading-snug ${collapsed ? 
                "opacity-0 pointer-events-none" : "opacity-100"}
              `}
            >
              {it.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
