// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        // 1. Mengganti 'source' dengan 'pathname'
        // Menggunakan pola GLOB: /uploads/** artinya /uploads/ diikuti oleh karakter apapun
        // Ini adalah cara yang direkomendasikan jika tipe 'LocalPattern' tidak mengenali regex.
        pathname: '/uploads/**', 
      },
      {
        // 2. Mengganti 'source' dengan 'pathname'
        // Pola persis untuk file default di root /public
        pathname: '/default-profile.png',
      },
    ],
  },
};

export default nextConfig;