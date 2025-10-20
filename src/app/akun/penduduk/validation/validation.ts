import { z } from "zod";

export const JenisKelaminEnum = z.enum(["L", "P"]);
export const AgamaEnum = z.enum(["Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Konghucu"]);
export const PendidikanEnum = z.enum(["SD", "SMP", "SMA", "Diploma", "Sarjana", "Magister", "Doktor"]);
export const GolDarahEnum = z.enum(["A", "B", "AB", "O"]);
export const StatusPerkawinanEnum = z.enum(["Belum_Kawin", "Kawin", "Cerai_Hidup", "Cerai_Mati"]);
export const KewarganegaraanEnum = z.enum(["WNI", "WNA"]);
export const StatusHubunganEnum = z.enum(["kepala_keluarga", "istri", "anak", "orang_tua", "lainnya"]);

export const PendudukSchema = z.object({
  nik: z.string().min(16, "NIK minimal 16 digit").max(16, "NIK maksimal 16 digit"),
  nama: z.string().min(1, "Nama wajib diisi"),
  jenis_kelamin: JenisKelaminEnum,
  tempat_lahir: z.string(),
  tanggal_lahir: z.string(),
  agama: AgamaEnum,
  pendidikan: PendidikanEnum,
  pekerjaan: z.string(),
  golongan_darah: GolDarahEnum,
  status_perkawinan: StatusPerkawinanEnum,
  kewarganegaraan: KewarganegaraanEnum,
  status_hubungan: StatusHubunganEnum,
  no_kk: z.string().optional(),
});

export type PendudukFormData = z.infer<typeof PendudukSchema>;
