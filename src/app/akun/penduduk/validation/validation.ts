import { z } from "zod";

export const JenisKelaminEnum = z.enum(["laki_laki", "perempuan"]);
export const AgamaEnum = z.enum(["Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Konghucu", "Kepercayaan"]);
export const PendidikanEnum = z.enum(["Tidak_Sekolah", "SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"]);
export const GolDarahEnum = z.enum(["A", "B", "AB", "O", "Tidak_Tahu"]);
export const StatusPerkawinanEnum = z.enum(["Belum_Kawin", "Kawin", "Cerai_Hidup", "Cerai_Mati"]);
export const KewarganegaraanEnum= z.enum(["WNI", "WNA"]);
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


export const AnggotaSchema = z.object({
  nik: z.string().min(16).max(16, "NIK harus 16 digit"),
  hubungan: z.string().optional(), // "Kepala_Keluarga", "Istri", "Anak", dll (opsional)
});

export const KeluargaSchema = z.object({
  no_kk: z.string().min(8, "No. KK minimal 8").max(16, "No. KK maksimal 16"),
  alamat: z.string().min(3).optional(),
  nomor_rt: z.string().min(1).optional(),
  anggota: z
    .string()
    .optional()
    .transform((v) => {
      if (!v) return [] as Array<{ nik: string; hubungan?: string }>;
      try {
        const parsed = JSON.parse(v);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [] as Array<{ nik: string; hubungan?: string }>;
      }
    }),
});

export type KeluargaInput = z.infer<typeof KeluargaSchema>;
export type PendudukUpdateInput = z.infer<typeof PendudukUpdateSchema>;



export const RTSchema = z.object({
  nomor_rt: z
    .string()
    .min(1, "Nomor RT diperlukan")
    .max(6, "Nomor RT maksimal 6 karakter"),
  nik: z
    .string()
    .min(16, "NIK harus 16 digit")
    .max(16, "NIK harus 16 digit"),
  no_hp: z
    .string()
    .optional()
    .refine((v) => !v || /^\+?\d{8,15}$/.test(v), "Format no HP tidak valid"),
  alamat_jalan: z.string().optional(),
  provinsi: z.string().min(2, "Provinsi diperlukan"),
  kabupaten: z.string().min(2, "Kabupaten/Kota diperlukan"),
  kecamatan: z.string().min(2, "Kecamatan diperlukan"),
  desa: z.string().min(2, "Desa/Kelurahan diperlukan"),
  kode_pos: z.string().min(3).max(6).optional(),
});

export type RTInput = z.infer<typeof RTSchema>;

