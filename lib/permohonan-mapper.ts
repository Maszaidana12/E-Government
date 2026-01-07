import { Prisma } from "@prisma/client";
import { DaftarPermohonan } from "types/permohonan";

/* ===============================
   Prisma Payload Type
================================ */
const permohonanWithRelations =
  Prisma.validator<Prisma.PermohonanDefaultArgs>()({
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
  });

type PermohonanPrisma =
  Prisma.PermohonanGetPayload<typeof permohonanWithRelations>;

/* ===============================
   Mapper FINAL
================================ */
export function mapPrismaToDaftarPermohonan(
  data: PermohonanPrisma[]
): DaftarPermohonan[] {
  return data.map((p) => ({
    id: p.id_permohonan.toString(),
    jenis_permohonan: p.jenis_permohonan.replace(/_/g, " "),
    createdAt: p.createdAt,

    status:
      p.status === "PENDING"
        ? "Menunggu Persetujuan RT"
        : p.status === "DIPROSES"
        ? "Diproses"
        : p.status === "DISETUJUI"
        ? "Disetujui"
        : "Ditolak",

    keterangan_warga: p.keterangan ?? null,

    pemohon: {
      nik: p.penduduk.nik,
      nama: p.penduduk.nama,
      status_hubungan: p.penduduk.status_hubungan,
    },

    kk: p.penduduk.kartukeluarga
      ? {
          no_kk: p.penduduk.kartukeluarga.no_kk,
          alamat: p.penduduk.kartukeluarga.alamat,
          nomor_rt: p.penduduk.kartukeluarga.nomor_rt,
          kepala_keluarga:
            p.penduduk.kartukeluarga.anggota_keluarga?.[0]?.nama ?? "N/A",
        }
      : null,
  }));
}

import { permohonan_status } from "@prisma/client";
import { PermohonanStatus } from "types/permohonan";

export function mapPermohonanStatus(
  status: permohonan_status
): PermohonanStatus {
  switch (status) {
    case "PENDING":
      return "Menunggu Persetujuan RT";
    case "DIPROSES":
      return "Diproses";
    case "DISETUJUI":
      return "Disetujui";
    case "DITOLAK":
      return "Ditolak";
    default:
      return "Menunggu Persetujuan RT";
  }
}
