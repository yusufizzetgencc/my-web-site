/*
  Warnings:

  - Made the column `thumbnail` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Blog` MODIFY `thumbnail` LONGTEXT NOT NULL;
