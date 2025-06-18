/*
  Warnings:

  - Added the required column `foto` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagamento` to the `ingressos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `salas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formato` to the `sessoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idioma` to the `sessoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "filmes" ADD COLUMN     "foto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ingressos" ADD COLUMN     "pagamento" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "salas" ADD COLUMN     "tipo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sessoes" ADD COLUMN     "formato" TEXT NOT NULL,
ADD COLUMN     "idioma" TEXT NOT NULL;
