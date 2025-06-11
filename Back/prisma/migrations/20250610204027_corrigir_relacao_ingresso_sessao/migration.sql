/*
  Warnings:

  - You are about to drop the `sessoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ingressos" DROP CONSTRAINT "ingressos_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "sessoes" DROP CONSTRAINT "sessoes_filmeId_fkey";

-- DropForeignKey
ALTER TABLE "sessoes" DROP CONSTRAINT "sessoes_salaId_fkey";

-- DropTable
DROP TABLE "sessoes";

-- CreateTable
CREATE TABLE "Sessao" (
    "id" SERIAL NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "valorIngresso" DOUBLE PRECISION NOT NULL,
    "idioma" TEXT NOT NULL,
    "formato" TEXT NOT NULL,
    "filmeId" INTEGER NOT NULL,
    "salaId" INTEGER NOT NULL,

    CONSTRAINT "Sessao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "filmes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "salas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingressos" ADD CONSTRAINT "ingressos_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
