/*
  Warnings:

  - You are about to drop the column `pesan` on the `notifikasi` table. All the data in the column will be lost.
  - Added the required column `message` to the `Notifikasi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notifikasi` DROP COLUMN `pesan`,
    ADD COLUMN `message` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NULL;
