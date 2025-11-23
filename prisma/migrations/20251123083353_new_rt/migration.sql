/*
  Warnings:

  - You are about to drop the column `desa_kelurahan` on the `kk` table. All the data in the column will be lost.
  - You are about to drop the column `kabupaten_kota` on the `kk` table. All the data in the column will be lost.
  - You are about to drop the column `kecamatan` on the `kk` table. All the data in the column will be lost.
  - You are about to drop the column `kode_pos` on the `kk` table. All the data in the column will be lost.
  - You are about to drop the column `provinsi` on the `kk` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `kk` DROP COLUMN `desa_kelurahan`,
    DROP COLUMN `kabupaten_kota`,
    DROP COLUMN `kecamatan`,
    DROP COLUMN `kode_pos`,
    DROP COLUMN `provinsi`;

-- AlterTable
ALTER TABLE `rt` ADD COLUMN `desa_kelurahan` VARCHAR(191) NULL,
    ADD COLUMN `kabupaten_kota` VARCHAR(191) NULL,
    ADD COLUMN `kecamatan` VARCHAR(191) NULL,
    ADD COLUMN `kode_pos` VARCHAR(191) NULL,
    ADD COLUMN `provinsi` VARCHAR(191) NULL;
