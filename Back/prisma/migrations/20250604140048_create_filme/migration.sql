/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "filmes" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "classificacaoIndicativa" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "dataEstreia" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "filmes_pkey" PRIMARY KEY ("id")
);
