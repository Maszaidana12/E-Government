import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// File: src/lib/utils.ts

import { PermohonanStatus } from "../types/permohonan";
// --- 1. formatDate ---
/**
 * Format objek Date menjadi string tanggal lokal (dd/mm/yyyy).
 */
export function formatDate(date: Date): string {
    if (!date) return '-';
    // Gunakan toLocaleDateString untuk format yang standar
    return new Date(date).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// --- 2. getStatusColor ---
/**
 * Mengembalikan kelas CSS Tailwind untuk warna latar status.
 */
export function getStatusColor(status: PermohonanStatus): string {
    switch (status) {
        case 'Menunggu Persetujuan RT':
            return 'bg-yellow-100 text-yellow-800';
        case 'Disetujui':
            return 'bg-blue-100 text-blue-800';
        case 'Selesai':
            return 'bg-green-100 text-green-800';
        case 'Ditolak':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

// --- 3. getStatusIcon ---
// Kita akan menggunakan icon dari lucide-react. Anda perlu memastikan icon di-import
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Mengembalikan komponen Icon dari lucide-react berdasarkan status.
 */
export function getStatusIcon(status: PermohonanStatus): LucideIcon {
    switch (status) {
        case 'Menunggu Persetujuan RT':
            return Clock;
        case 'Disetujui':
            return CheckCircle;
        case 'Selesai':
            return CheckCircle;
        case 'Ditolak':
            return XCircle;
        default:
            return AlertCircle;
    }
}

// File: src/utils/permohonan-mapper.ts

import { DaftarPermohonan } from "../types/permohonan";
import { Prisma } from '@prisma/client'; // 💡 Impor tipe Prisma

// 💡 DEFINISI TIPE UNTUK HASIL KUERI PRISMA:
// Kita mendefinisikan skema 'select' yang persis sama dengan yang digunakan di page.tsx
const permohonanWithRelations = Prisma.validator<Prisma.PermohonanDefaultArgs>()({
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
                    }
                }
            }
        },
        fileUploads: true, 
    },
});

// 💡 FIX: Tipe Data Prisma yang Benar (Menggantikan 'any')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapPrismaToDaftarPermohonan(data: any[]): DaftarPermohonan[] {
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
        : p.status === "DITOLAK"
        ? "Ditolak"
        : "Selesai",

    keterangan_warga: p.keterangan ?? null,

    pemohon: {
      nik: p.penduduk.nik,
      nama: p.penduduk.nama,
      status_hubungan: p.penduduk.status_hubungan ?? "Lainnya",
      pendapatan: p.penduduk.pendapatan ?? null,
    },

    kk: p.penduduk.kartukeluarga
      ? {
          no_kk: p.penduduk.kartukeluarga.no_kk,
          alamat: p.penduduk.kartukeluarga.alamat,
          nomor_rt: p.penduduk.kartukeluarga.nomor_rt,
          kepala_keluarga:
            p.penduduk.kartukeluarga.penduduk?.[0]?.nama ?? "N/A",
        }
      : null,
  }));
}