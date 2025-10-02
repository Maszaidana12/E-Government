/*
  Warnings:

  - The primary key for the `kk` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `penduduk` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `rt` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `sesi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `suratpengajuan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[username]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `kk` DROP FOREIGN KEY `KK_kepala_keluarga_id_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `Penduduk_id_kk_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `Penduduk_id_rt_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `Penduduk_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `rt` DROP FOREIGN KEY `RT_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sesi` DROP FOREIGN KEY `Sesi_penggunaId_fkey`;

-- DropForeignKey
ALTER TABLE `suratpengajuan` DROP FOREIGN KEY `SuratPengajuan_id_penduduk_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_role_id_fkey`;

-- DropIndex
DROP INDEX `Penduduk_id_kk_fkey` ON `penduduk`;

-- DropIndex
DROP INDEX `Penduduk_id_rt_fkey` ON `penduduk`;

-- DropIndex
DROP INDEX `RT_user_id_fkey` ON `rt`;

-- DropIndex
DROP INDEX `Sesi_penggunaId_fkey` ON `sesi`;

-- DropIndex
DROP INDEX `SuratPengajuan_id_penduduk_fkey` ON `suratpengajuan`;

-- DropIndex
DROP INDEX `Users_role_id_fkey` ON `users`;

-- AlterTable
ALTER TABLE `kk` DROP PRIMARY KEY,
    MODIFY `id_kk` VARCHAR(191) NOT NULL,
    MODIFY `kepala_keluarga_id` VARCHAR(191) NULL,
    MODIFY `alamat` VARCHAR(191) NULL,
    MODIFY `rt` VARCHAR(191) NULL,
    MODIFY `rw` VARCHAR(191) NULL,
    MODIFY `desa_kelurahan` VARCHAR(191) NULL,
    MODIFY `kecamatan` VARCHAR(191) NULL,
    MODIFY `kabupaten_kota` VARCHAR(191) NULL,
    MODIFY `provinsi` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id_kk`);

-- AlterTable
ALTER TABLE `penduduk` DROP PRIMARY KEY,
    MODIFY `id_penduduk` VARCHAR(191) NOT NULL,
    MODIFY `id_kk` VARCHAR(191) NULL,
    MODIFY `id_rt` VARCHAR(191) NULL,
    MODIFY `user_id` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id_penduduk`);

-- AlterTable
ALTER TABLE `roles` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `rt` DROP PRIMARY KEY,
    MODIFY `id_rt` VARCHAR(191) NOT NULL,
    MODIFY `user_id` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id_rt`);

-- AlterTable
ALTER TABLE `sesi` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `penggunaId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `suratpengajuan` DROP PRIMARY KEY,
    MODIFY `id_surat` VARCHAR(191) NOT NULL,
    MODIFY `id_penduduk` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_surat`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `role_id` VARCHAR(191) NULL,
    MODIFY `nomor_urut` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `access_token` VARCHAR(191) NULL,
    `refresh_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FileUploads` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `surat_id` VARCHAR(191) NULL,
    `rt_id` VARCHAR(191) NULL,
    `jenis_file` ENUM('KTP', 'KK', 'SURAT', 'LAINNYA') NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `uploaded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Users_username_key` ON `Users`(`username`);

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sesi` ADD CONSTRAINT `Sesi_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RT` ADD CONSTRAINT `RT_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KK` ADD CONSTRAINT `KK_kepala_keluarga_id_fkey` FOREIGN KEY (`kepala_keluarga_id`) REFERENCES `Penduduk`(`id_penduduk`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuratPengajuan` ADD CONSTRAINT `SuratPengajuan_id_penduduk_fkey` FOREIGN KEY (`id_penduduk`) REFERENCES `Penduduk`(`id_penduduk`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_id_kk_fkey` FOREIGN KEY (`id_kk`) REFERENCES `KK`(`id_kk`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_id_rt_fkey` FOREIGN KEY (`id_rt`) REFERENCES `RT`(`id_rt`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FileUploads` ADD CONSTRAINT `FileUploads_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FileUploads` ADD CONSTRAINT `FileUploads_surat_id_fkey` FOREIGN KEY (`surat_id`) REFERENCES `SuratPengajuan`(`id_surat`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FileUploads` ADD CONSTRAINT `FileUploads_rt_id_fkey` FOREIGN KEY (`rt_id`) REFERENCES `RT`(`id_rt`) ON DELETE CASCADE ON UPDATE CASCADE;
