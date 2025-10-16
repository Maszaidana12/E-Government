"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icon
import { LogoImage } from "@/components";
import Navlink from "@/components/HeroSection/NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Navbar.Section">
      {/* Welcome message tetap fixed */}
      <div className="w-full h-12 bg-[#03467D] text-center flex items-center justify-center text-white font-outfit font-bold fixed top-0 left-0 z-50">
        Selamat Datang! di Website E-Government
      </div>

      {/* Navbar dengan offset dari welcome message */}
      <header className="w-full fixed top-12 bg-white shadow-md z-40">
        <section className="container mx-auto px-4 py-2">
          <div className="navbar-box flex items-center justify-between h-16">
            {/* Logo */}
            <div className="logo flex items-center gap-3">
              <Link href="/">
                <Image
                  src={LogoImage}
                  alt="E-Government"
                  width={32}
                  height={32}
                />
              </Link>
              <h1 className="text-lg sm:text-xl font-outfit font-semibold">
                <span className="text-black">E-</span>
                <span className="text-[#01467D]">Government</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <Navlink />
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {open && (
            <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg p-4 space-y-3">
              <Navlink />
            </div>
          )}
        </section>
      </header>
    </div>
  );
};

export default Navbar;
