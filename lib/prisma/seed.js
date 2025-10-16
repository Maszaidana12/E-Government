import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // --- 1. Penduduk ---
  const penduduk = await prisma.penduduk.create({
    data: {
      nik: "6271042105040002",
      nama: "Dana",
      jenis_kelamin: "laki_laki",
      tempat_lahir: "Palangkaraya",
      tanggal_lahir: new Date("2000-01-01"),
      agama: "Islam",
      pendidikan: "Diploma",
      pekerjaan: "Barista",
      golongan_darah : "Tidak_Tahu",
      status_perkawinan: "Belum_Kawin",
      kewarganegaraan: "WNI",
      status_hubungan: "Anak"
      // sesuaikan field lain kalau ada
    },
  });

  // --- 2. Users ---
  const hashedPassword = await bcrypt.hash("dana123", 10);
  const user = await prisma.users.create({
    data: {
      nik: penduduk.nik,
      nama: penduduk.nama,
      peran: "RT",
      password: hashedPassword,
    },
  });

  // --- 3. Account (NextAuth / credentials) ---
  await prisma.account.create({
    data: {
      userId: user.id,
      type: "credentials",
      provider: "credentials",
      providerAccountId: user.id,
    },
  });

  // --- 4. Sesi (optional) ---
  await prisma.sesi.create({
    data: {
      token_sesi: "token_test_123",
      penggunaId: user.id,
      kadaluarsa: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 hari
    },
  });

  console.log("✅ Seed selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
