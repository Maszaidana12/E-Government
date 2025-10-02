/*
  Warnings:

  - Added the required column `nomor_urut` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `nomor_urut` INTEGER NOT NULL,
    MODIFY `username` VARCHAR(191) NULL;
