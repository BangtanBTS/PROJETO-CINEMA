/*
  Warnings:

  - Changed the type of `valorIngresso` on the `sessoes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "sessoes" DROP COLUMN "valorIngresso",
ADD COLUMN     "valorIngresso" DOUBLE PRECISION NOT NULL;
