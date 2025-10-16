import Link from "next/link";
import Image from "next/image";
import { LogoImage } from "@/components";

type FootItemProps = {
  href?: string;
  label: string;
};

const FootItem = ({ href = "#", label }: FootItemProps) => {
  const FootLinkClass = `text-gray-300 hover:text-white transition`;
  return (
    <li>
      <Link href={href} className={FootLinkClass}>
        {label}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#01467D] text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + Deskripsi */}
          <div>
             <div className="flex items-center gap-3 mb-2">
            <Link href="/" >
              <Image
                src={LogoImage}
                alt="E-Government"
                width={70}
                height={70}
                priority
              />
            </Link>
            <h1 className="text-xl font-outfit font-semibold text-white ">E-Government</h1>
          </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Aplikasi Website Resmi Rukun Tetangga, Kabupaten Banyuwangi
            </p>
          </div>

          {/* Link Navigasi */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Navigasi</h4>
            <ul className="space-y-4">
              <FootItem href="/" label="Beranda" />
              <FootItem href="/tentang" label="Tentang Kami" />
              <FootItem href="/galeri" label="Galeri" />
              <FootItem href="/kontak" label="Kontak" />
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Ikuti Kami</h4>
            <div className="flex gap-6">
              <a href="#" aria-label="GitHub">
                <i className="ri-github-fill ri-2x hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="Instagram">
                <i className="ri-instagram-fill ri-2x hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="ri-linkedin-fill ri-2x hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="ri-whatsapp-fill ri-2x hover:text-gray-300 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t bg-gradient-to-r from-[#01467D] via-purple-700 to-pink-500 border-white/30 py-6 text-center text-sm text-gray-200">
        &copy; 2025 E-Government | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
