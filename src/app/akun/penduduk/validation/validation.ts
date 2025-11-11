import { z } from "zod";

export const JenisKelaminEnum = z.enum(["laki_laki", "perempuan"]);
export const AgamaEnum = z.enum(["Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Konghucu", "Kepercayaan"]);
export const PendidikanEnum = z.enum(["Tidak_Sekolah", "SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"]);
export const GolDarahEnum = z.enum(["A", "B", "AB", "O", "Tidak_Tahu"]);
export const StatusPerkawinanEnum = z.enum(["Belum_Kawin", "Kawin", "Cerai_Hidup", "Cerai_Mati"]);
export const KewarganegaraanEnum = z.enum(["WNI", "WNA"]);
export const StatusHubunganEnum = z.enum(["Kepala_Keluarga", "Istri", "Anak", "Orang_Tua", "Lainnya"]);

export const PendudukSchema = z.object({
  nik: z.string().min(16, "NIK minimal 16 digit").max(16, "NIK maksimal 16 digit"),
  nama: z.string().min(1, "Nama wajib diisi"),
  jenis_kelamin: JenisKelaminEnum,
  tempat_lahir: z.string(),
  tanggal_lahir: z.string(),
  agama: AgamaEnum,
  pendidikan: PendidikanEnum,
  pekerjaan: z.string("Pekerjaan Wajib Diisi"),
  golongan_darah: GolDarahEnum,
  status_perkawinan: StatusPerkawinanEnum,
  kewarganegaraan: KewarganegaraanEnum,
  status_hubungan: StatusHubunganEnum,
  no_kk: z.string().optional(),
});

export const PendudukUpdateSchema = PendudukSchema.extend({
  id_penduduk: z.number(),
});

export type PendudukUpdateInput = z.infer<typeof PendudukUpdateSchema>;
