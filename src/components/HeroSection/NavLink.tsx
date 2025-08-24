'use client';

import { useState, useRef, useEffect } from "react";
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
      <Link href={href} className={navLinkClass}>
        {Icon && (
          <Icon className={`${iconSize} ${iconClass} group-hover:text-white transition-colors`} />
        )}
        <span className="transition-colors  group-hover:text-white">{label}</span>
      </Link>
    </li>
  );
};

const NavLink = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLoginOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className={clsx("lg:block lg:w-auto", {})}>
        <ul
          className={`lg:static lg:bg-transparent lg:flex-row lg:shadow-none
            lg:text-black lg:p-0 lg:m-0 lg:w-auto lg:gap-3
            fixed bottom-0 left-0 text-md sm:text-sm sm:text-center w-full flex flex-row justify-center items-center bg-white p-2 shadow-lg
            lg:h-full font-bold text-black z-50`}
        >
          <NavItem href="/" label="Beranda" icon={IoIcons.IoHome} iconClass="text-blue-600" />
          <NavItem href="/tentang" label="Tentang Kami" icon={IoIcons.IoInformationCircle} />
          <NavItem href="/galeri" label="Galeri" icon={IoIcons.IoImages} />
          <NavItem href="/kontak" label="Kontak" icon={IoIcons.IoCall} />
          <NavItem href="#layanan" label="Layanan Kami" icon={IoIcons.IoConstruct} />

          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="bg-blue-800 px-5 py-2 rounded-full text-white hover:bg-blue-600 transition-all"
            >
              Login
            </button>

            <ul
              className={clsx(
                `absolute w-40 bg-white border rounded-md shadow-lg z-50 right-0 text-black
                 transition-all duration-200 ease-out
                 ${loginOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
                `,
                "bottom-full mb-2 lg:top-full lg:mt-2 lg:bottom-auto lg:mb-0"
              )}
            >
              <li>
                <Link
                  href="/login/admin"
                  onClick={() => setLoginOpen(false)}
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Login RT
                </Link>
              </li>
              <li>
                <Link
                  href="/login/user"
                  onClick={() => setLoginOpen(false)}
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Login Umum
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
