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
  const navLinkClass = `
    group block rounded-2xl flex items-center sm:grid sm: md:flex sm:items-center sm:justify-center gap-2 font-medium 
    md:opacity-75 sm:hover:bg-blue-800 md:hover:bg-blue-800 px-5 py-2 md:rounded-full hover:text-white transition-all`.trim();
    
  return (
    <li>
      <Link href={href} className= {`flex items-center gap-2 px-3 py-2 rounded-lg text-sm xs:text-xs font-medium text-gray-700 hover:bg-blue-800 hover:text-white transition ${navLinkClass } `} >
        {Icon && (
          <Icon
            className={`${iconSize} ${iconClass} w-4 h-4 xs:w-3 xs:h-3 transition-colors group-hover:text-white`}
          />
        )}
        <span className="transition-colors group-hover:text-white">{label}</span>
      </Link>
    </li>
  );
};

const NavLink = () => {
  return (
    <div className={clsx("lg:block lg:w-auto", {})}>
      <ul
        className={`lg:static lg:bg-transparent lg:flex-row lg:shadow-none
          lg:text-black lg:p-0 lg:m-0 lg:w-auto lg:gap-3
          fixed bottom-0 left-0 text-md sm:text-sm sm:text-center w-full flex flex-row justify-center items-center bg-white p-2 shadow-lg
          lg:h-full font-bold text-black z-50  text-xs xs:text-sm`}
      >
        <NavItem href="/" label="Beranda" icon={IoIcons.IoHome} iconClass="text-blue-600" />
        <NavItem href="/tentang" label="Tentang Kami" icon={IoIcons.IoInformationCircle} />
        <NavItem href="/galeri" label="Galeri" icon={IoIcons.IoImages} />
        <NavItem href="/kontak" label="Kontak" icon={IoIcons.IoCall} />
        <NavItem href="#layanan" label="Layanan Kami" icon={IoIcons.IoConstruct} />

        {/* Satu tombol login aja */}
        <li>
          <Link
            href="/login"
            className="block bg-blue-800 px-4 py-2 rounded-full text-xs xs:text-[10px] text-white text-center hover:bg-blue-600"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLink;
