/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nama` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_user_id_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `kk` VARCHAR(191) NULL,
    ADD COLUMN `nama` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `admin`;

-- CreateIndex
CREATE UNIQUE INDEX `Roles_name_key` ON `Roles`(`name`);
