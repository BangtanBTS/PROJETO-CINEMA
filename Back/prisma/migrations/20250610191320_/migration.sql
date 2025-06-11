/*
  Warnings:

  - Added the required column `valor` to the `sessoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sessoes" ADD COLUMN     "valor" TEXT NOT NULL;
