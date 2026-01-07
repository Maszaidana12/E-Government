import { prisma } from "lib/prisma";
import { auth } from "auth";
import { DaftarPermohonan } from "types/permohonan";
import { mapPrismaToDaftarPermohonan } from "lib/permohonan-mapper";
import TabelRekapSurat from "@/components/Administrasi/Pengajuan/tabel-rekap-pengajuan";

async function getPermohonanData(): Promise<DaftarPermohonan[]> {
  const session = await auth();
  const user = session?.user;

  if (!user || user.role !== "RT") return [];

  const rt = await prisma.rT.findUnique({
    where: { nik: user.username },
    select: { nomor_rt: true },
  });

  if (!rt?.nomor_rt) return [];

  const permohonan = await prisma.permohonan.findMany({
  where: {
    status: { in: ["PENDING", "DIPROSES"] },
    penduduk: {
      kartukeluarga: {
        nomor_rt: rt.nomor_rt,
      },
    },
  },
  select: {
    id_permohonan: true,
    jenis_permohonan: true,
    createdAt: true,
    keterangan: true,
    status: true,
    penduduk: {
      select: {
        nik: true,
        nama: true,
        status_hubungan: true,
        kartukeluarga: {
          select: {
            no_kk: true,
            alamat: true,
            nomor_rt: true,
            anggota_keluarga: {
              where: {
                status_hubungan: "Kepala_Keluarga",
              },
              select: {
                nama: true,
              },
              take: 1,
            },
          },
        },
      },
    },
  },
  orderBy: { createdAt: "desc" },
});


  return mapPrismaToDaftarPermohonan(permohonan);
}

export default async function RekapPengajuanPage() {
  const data = await getPermohonanData();
  return <TabelRekapSurat data={data} />;
}
