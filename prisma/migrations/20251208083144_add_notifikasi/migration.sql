/*
  Warnings:

  - The primary key for the `notifikasi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_notifikasi` on the `notifikasi` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `notifikasi` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `notifikasi` table. All the data in the column will be lost.
  - The required column `id` was added to the `Notifikasi` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `pesan` to the `Notifikasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverId` to the `Notifikasi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notifikasi` DROP PRIMARY KEY,
    DROP COLUMN `id_notifikasi`,
    DROP COLUMN `message`,
    DROP COLUMN `title`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `isRead` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `pesan` VARCHAR(191) NOT NULL,
    ADD COLUMN `receiverId` VARCHAR(191) NOT NULL,
    ADD COLUMN `senderId` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Notifikasi` ADD CONSTRAINT `Notifikasi_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notifikasi` ADD CONSTRAINT `Notifikasi_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
