"use client";

import Link from "next/link";
import { HeroImage } from "../index";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[120vh] sm:min-h-screen overflow-hidden bg-white dark:bg-[#0F172A] transition-colors duration-500">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-4 sm:px-8 lg:px-16 xl:px-24 mt-[3vh] sm:mt-[20vh] md:mt-[10] min-h-[85vh]">

        {/* === Kiri - Teks === */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s flex flex-col items-start text-left order-1 md:order-2">
          <div className="bg-blue-50 dark:bg-blue-900/30 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl mb-4 shadow-sm">
            <q className="text-sm sm:text-base text-blue-700 dark:text-blue-300">
              Selamat Datang di Layanan Digital RT 👋
            </q>
          </div>

          <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold font-outfit leading-tight mb-4 text-blue-700 dark:text-blue-400">
            Sistem Informasi Rukun Tetangga
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
            Aplikasi pelayanan masyarakat berbasis digital yang membantu warga dan pengurus RT
            dalam mengurus data, surat, dan informasi dengan lebih cepat, efisien, dan transparan.
          </p>

          <div className="flex flex-wrap gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <Link
              href="/login"
              className="bg-[#01467D] text-white font-outfit font-semibold hover:bg-blue-800
              py-2 px-6 md:px-8 lg:px-10 text-base md:text-lg rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Mulai Sekarang
            </Link>
            <Link
              href="/kontak"
              className="bg-transparent border border-blue-700 text-blue-700 dark:text-white dark:border-white font-outfit font-semibold hover:bg-blue-800 hover:text-white
              py-2 px-6 md:px-8 lg:px-10 text-base md:text-lg rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Kontak Kami
            </Link>
          </div>
        </div>

        {/* === Kanan - Gambar / 3D Scene === */}
        <div className="flex justify-center md:justify-end items-center order-1 md:order-2 animate__animated animate__fadeInUp animate__delay-3s">
          <div className="w-[280px] sm:w-[380px] md:w-[450px] lg:w-[550px] xl:w-[650px] h-auto">
            <Image
              src={HeroImage}
              alt="Hero illustration"
              width={650}
              height={650}
              priority
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
