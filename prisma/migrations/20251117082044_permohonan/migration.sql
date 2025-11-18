/*
  Warnings:

  - You are about to alter the column `status` on the `permohonan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(9))`.
  - Added the required column `jenis_permohonan` to the `Permohonan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fileuploads` ADD COLUMN `id_permohonan` INTEGER NULL;

-- AlterTable
ALTER TABLE `permohonan` ADD COLUMN `catatan_rt` VARCHAR(191) NULL,
    ADD COLUMN `hasil_surat` VARCHAR(191) NULL,
    ADD COLUMN `jenis_permohonan` VARCHAR(191) NOT NULL,
    MODIFY `status` ENUM('PENDING', 'DISETUJUI', 'DITOLAK', 'DIPROSES') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `suratpengajuan` ADD COLUMN `catatan_rt` VARCHAR(191) NULL,
    ADD COLUMN `hasil_surat` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `FileUploads` ADD CONSTRAINT `FileUploads_id_permohonan_fkey` FOREIGN KEY (`id_permohonan`) REFERENCES `Permohonan`(`id_permohonan`) ON DELETE SET NULL ON UPDATE CASCADE;
