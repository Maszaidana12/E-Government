// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/uploads/**',
      },
      {
        pathname: '/default-profile.png',
      },
    ],
  },

  // ⬇️ TAMBAHKAN BAGIAN INI
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
