
// --- TIPE PENDUDUK YANG DIAKSES ---
export type PemohonData = {
  nik: string;
  nama: string;
  status_hubungan: string; // Status dalam KK (Kepala Keluarga, Anak, Istri)
  pendapatan?: number | null; // Untuk SKTM
};

// --- TIPE KARTU KELUARGA YANG DIAKSES ---
export type KKData = {
  no_kk: string;
  kepala_keluarga?: string; // Nama Kepala Keluarga (Opsional)
  alamat: string | null;
  nomor_rt: string | null;
};

// --- TIPE UTAMA: PERMOHONAN ---
export type PermohonanStatus = 'Menunggu Persetujuan RT' | 'Disetujui' | 'Ditolak' | 'Diproses' | 'Selesai';

export type DaftarPermohonan = {
  id: string; // ID Permohonan (UUID atau string unik)
  jenis_permohonan: string;
  createdAt: Date; // Tanggal pengajuan
  status: PermohonanStatus;
  keterangan_warga: string | null; // Alasan/keterangan dari warga
  hasil_surat?: string | null;

  // Relasi: Data Pemohon (Penduduk)
  pemohon: PemohonData;

  // Relasi: Data KK
  kk: KKData | null;
};

// Tipe Props untuk komponen tabel/list
export interface Props {
  data: DaftarPermohonan[];
}
