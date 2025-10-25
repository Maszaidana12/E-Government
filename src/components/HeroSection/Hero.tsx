"use client";

import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0F172A] transition-colors duration-500">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 items-center">

        {/* === Kiri - Teks === */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s flex flex-col items-start text-left mt-[20vh]">
          <div className="bg-blue-50 dark:bg-blue-900/30 px-5 py-3 rounded-2xl mb-4 shadow-sm">
            <q className="text-sm text-blue-700 dark:text-blue-300">
              Selamat Datang di Layanan Digital RT 👋
            </q>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-outfit leading-tight mb-4 text-blue-700 dark:text-blue-400">
            Sistem Informasi Rukun Tetangga
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
            Aplikasi pelayanan masyarakat berbasis digital yang membantu warga dan pengurus RT
            dalam mengurus data, surat, dan informasi dengan lebih cepat, efisien, dan transparan.
          </p>

          <div className="flex flex-wrap gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <Link
              href="/login"
              className="bg-[#01467D] text-white font-outfit font-semibold hover:bg-blue-800
              py-2 px-6 md:px-10 text-lg rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Mulai Sekarang
            </Link>
            <Link
              href="/kontak"
              className="bg-transparent border border-blue-700 text-blue-700 dark:text-white dark:border-white font-outfit font-semibold hover:bg-blue-800 hover:text-white
              py-2 px-6 md:px-10 text-lg rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Kontak Kami
            </Link>
          </div>
          
        </div>

        {/* === Kanan - Gambar === */}
        <div className=" mt-[20vh] flex justify-center animate__animated animate__fadeInUp animate__delay-2s">
          <Image
            src="/hero-img.png" // ganti sesuai asetmu
            alt="Hero Illustration"
            width={450}
            height={450}
            className="drop-shadow-xl rounded-2xl"
          />
        </div>

      </div>
    </div>
  );
}
