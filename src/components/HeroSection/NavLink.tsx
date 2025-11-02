'use client';

import Link from "next/link";
import clsx from "clsx";
import { IoIcons } from "../icons";
import { IconType } from "react-icons";

type NavItemProps = {
  href?: string;
  label: string;
  icon?: IconType;
  iconSize?: string;
  iconClass?: string;
};

const NavItem = ({
  href = "#",
  label,
  icon: Icon,
  iconSize = "text-sm",
  iconClass = "text-gray-700",
}: NavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
          "hover:bg-blue-800 hover:text-white text-gray-700"
        )}
      >
        {Icon && <Icon className={`${iconSize} ${iconClass}`} />}
        <span>{label}</span>
      </Link>
    </li>
  );
};

const NavLink = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <ul
      className={clsx(
        "font-bold",
        isMobile
          ? "grid grid-cols-2 gap-2"
          : "flex items-center gap-3 text-sm md:text-base"
      )}
    >
      <NavItem href="/" label="Beranda" icon={IoIcons.IoHome} iconClass="text-blue-600" />
      <NavItem href="/tentang" label="Tentang Kami" icon={IoIcons.IoInformationCircle} />
      <NavItem href="/galeri" label="Galeri" icon={IoIcons.IoImages} />
      <NavItem href="/kontak" label="Kontak" icon={IoIcons.IoCall} />
      <NavItem href="#layanan" label="Layanan Kami" icon={IoIcons.IoConstruct} />
      <li>
        <Link
          href="/login"
          className="block bg-blue-800 px-4 py-2 rounded-full text-white text-center hover:bg-blue-600"
        >
          Login
        </Link>
      </li>
    </ul>
  );
};

export default NavLink;
