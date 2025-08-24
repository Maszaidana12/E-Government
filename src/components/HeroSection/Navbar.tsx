import Image from "next/image";
import Link from "next/link";
import { LogoImage } from "@/components";
import Navlink from "@/components/HeroSection/NavLink";

const Navbar = () => {
  return (
    <div className="Navbar.Section">
      {/* Welcome message tetap fixed */}
      <div className="w-full h-12 bg-[#03467D] text-center flex items-center justify-center text-white font-outfit font-bold fixed top-0 left-0 z-50">
        Selamat Datang! di Website E-Government
      </div>

      {/* Navbar dengan offset dari welcome message */}
      <header className="w-full fixed top-12 bg-white  shadow-md z-40">
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
              <h1 className="text-xl font-outfit font-semibold">
                <span style={{ color: "black" }}>E-</span>
                <span style={{ color: "#01467D" }}>Government</span>
              </h1>
            </div>

            {/* Navigation Links */}
            <Navlink />
          </div>
        </section>
      </header>
    </div>
  );
};

export default Navbar;
