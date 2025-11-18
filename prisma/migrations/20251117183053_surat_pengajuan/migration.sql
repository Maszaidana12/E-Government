/*
  Warnings:

  - The values [Surat_Keterangan,Surat_Usaha] on the enum `SuratPengajuan_jenis_surat` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `suratpengajuan` MODIFY `jenis_surat` ENUM('Surat_Pengantar', 'Surat_Domisili', 'Surat_Keterangan_RTRW', 'Surat_Keterangan_Usaha', 'Surat_Pembuatan_KTP', 'Surat_Keterangan_Tidak_Mampu') NOT NULL;
