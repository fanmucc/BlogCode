/*
  Warnings:

  - Added the required column `aaa` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Note` ADD COLUMN `aaa` VARCHAR(191) NOT NULL;
