/*
  Warnings:

  - You are about to drop the column `valor` on the `sessoes` table. All the data in the column will be lost.
  - Added the required column `valorIngresso` to the `sessoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sessoes" DROP COLUMN "valor",
ADD COLUMN     "valorIngresso" TEXT NOT NULL;
