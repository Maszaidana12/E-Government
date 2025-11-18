import {z} from "zod";

export const jenisPermohonanEnum = z.enum(
    ["Surat_Keterangan_Domisili",
     "Surat_Keterangan_Tidak_Mampu",
     "Surat_Pengantar_RT/RW",
     "Surat_Pembuatan_KTP",
     "Izin_Keramaian",
     "Lainnya",
    ])

export const PermohonanSchema = z.object({
    nik: z.string()
    .min(16, "NIK Minimal 16 digit")
    .max(16, "NIK Maksimal 16 digit"),

    jenis_permohonan : jenisPermohonanEnum,

     keterangan: z
  .string()
  .max(255)
  .optional()
  .or(z.literal("")),
    
});

export type PermohonanInput = z.infer<typeof PermohonanSchema>;

export const ValidasiPengajuanSchema = z.object({
  id_permohonan : z.number(),
  status_validasi:z.enum(["Pending", "Disetujui", "Ditolak"]),
  catatan_rt: z.string().optional(),
  file_output: z.any().optional(),
});