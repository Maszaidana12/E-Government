/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `akun` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nik]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nik` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `akun` DROP FOREIGN KEY `Akun_penggunaId_fkey`;

-- DropIndex
DROP INDEX `Users_email_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `email`,
    ADD COLUMN `nik` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `akun`;

-- CreateIndex
CREATE UNIQUE INDEX `Users_nik_key` ON `Users`(`nik`);
