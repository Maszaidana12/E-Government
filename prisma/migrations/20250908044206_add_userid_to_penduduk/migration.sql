/*
  Warnings:

  - You are about to drop the column `no_rt` on the `penduduk` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `penduduk` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Penduduk` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `Penduduk_no_rt_fkey`;

-- DropIndex
DROP INDEX `Penduduk_no_rt_fkey` ON `penduduk`;

-- AlterTable
ALTER TABLE `penduduk` DROP COLUMN `no_rt`,
    DROP COLUMN `password`,
    ADD COLUMN `id_rt` INTEGER NULL,
    ADD COLUMN `user_id` INTEGER NULL,
    MODIFY `jenis_kelamin` ENUM('laki_laki', 'perempuan') NULL,
    MODIFY `tanggal_lahir` DATETIME(3) NULL,
    MODIFY `alamat` VARCHAR(191) NULL,
    MODIFY `tempat_lahir` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `username`;

-- CreateIndex
CREATE UNIQUE INDEX `Penduduk_user_id_key` ON `Penduduk`(`user_id`);

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_id_rt_fkey` FOREIGN KEY (`id_rt`) REFERENCES `RT`(`id_rt`) ON DELETE SET NULL ON UPDATE CASCADE;
