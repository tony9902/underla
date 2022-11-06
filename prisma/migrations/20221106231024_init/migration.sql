/*
  Warnings:

  - Added the required column `namesize` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `size` ADD COLUMN `namesize` VARCHAR(191) NOT NULL;
