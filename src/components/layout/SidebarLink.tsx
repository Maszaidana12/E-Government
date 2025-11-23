"use client";

import { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { useSession } from "next-auth/react";
import {
  IoSpeedometer,
  IoPerson,
  IoDocumentText,
  IoPeople,
  IoBriefcase,
  IoWallet,
  IoChevronDown,
  IoChevronForward,
  IoInformationCircle
} from "react-icons/io5";


type Item = {
  id: string;
  href?: string;
  label: string;
  Icon: IconType;
  children?: Item[];
  roles? :string[];
};

const items: Item[] = [
  { id: "dashboard", href: "/dashboard", label: "Dashboard", Icon: IoSpeedometer },
  {
    id: "penduduk",
    label: "Penduduk",
    Icon: IoPeople,
    roles: ["RT"],
    children: [
       { id: "data-rt", href: "/akun/rt", label: "Jabatan RT", Icon: IoPeople },
      { id: "data-penduduk", href: "/akun/penduduk", label: "Data Penduduk", Icon: IoPeople },
      { id: "data-user", href: "/akun/user", label: "Data User", Icon: IoPerson },
      { id: "data-Keluarga", href: "/akun/datakeluarga", label: "Data Keluarga", Icon: IoPeople  },
    ],
  },
  {
    id: "administrasi",
    label: "Administrasi",
    Icon: IoBriefcase,
    roles: ["RT", "Warga"],
    children: [
      { id: "permohonan", href: "/administrasi/permohonan", label: "Permohonan", Icon: IoDocumentText , roles:["Warga"]},
      { id: "pengajuan", href: "/pengajuan", label: "Rekap Pengajuan", Icon: IoDocumentText , roles:["RT"]},
    ],
  },
  { id: "keuangan", href: "/keuangan", label: "Keuangan", Icon: IoWallet },
  {id: "informasi-rt" ,href: "/informasi", label: "Informasi RT", Icon: IoInformationCircle}
];

export default function SidebarLink({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const {data:session} = useSession();
  const role = session?.user?.role || "Warga"
  const toggleMenu = (id: string) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = items.map((it)=>{
    if(it.children) {
      const filteredChildren = it.children.filter(
        (child) => !child.roles || child.roles.includes(role)
      );
      return { ...it, children: filteredChildren};
    }
    return it;
  })

  .filter((it)=>{
    if(it.roles && !it.roles.includes(role)) return false;
    if(it.children && it.children.length === 0) return false;
    return true;
  })

  return (
    <ul className="flex flex-col gap-1 px-2">
      {filteredItems.map((it) => {
        const isOpen = openMenus[it.id];
        const hasChildren = it.children && it.children.length > 0;

        return (
          <li key={it.id}>
            {/* Menu utama */}
            <button
              onClick={() =>
                hasChildren ? toggleMenu(it.id) : onNavigate?.()
              }
              className={`
                flex items-center gap-3 px-3 py-2 rounded-xl w-full
                text-slate-100 hover:text-white
                hover:bg-white/10 transition-all duration-200 cursor-pointer
                ${collapsed ? "justify-center" : "justify-between"}
              `}
            >
              <div className="flex items-center gap-3">
                <it.Icon className="w-5 h-5 text-indigo-200 group-hover:text-white" />
                {!collapsed && <span className="font-medium">{it.label}</span>}
              </div>

              {!collapsed && hasChildren && (
                <span className="text-indigo-200">
                  {isOpen ? (
                    <IoChevronDown className="w-4 h-4" />
                  ) : (
                    <IoChevronForward className="w-4 h-4" />
                  )}
                </span>
              )}
            </button>

            {/* Submenu */}
            {hasChildren && isOpen && !collapsed && (
              <ul className="mt-1 ml-6 flex flex-col gap-1 border-l border-white/10 pl-3">
                {it.children?.map((child) => (
                  <li key={child.id}>
                    <Link
                      href={child.href || "#"}
                      onClick={onNavigate}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-indigo-100 hover:bg-white/10 transition-colors"
                    >
                      <child.Icon className="w-4 h-4 text-indigo-200" />
                      <span>{child.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
