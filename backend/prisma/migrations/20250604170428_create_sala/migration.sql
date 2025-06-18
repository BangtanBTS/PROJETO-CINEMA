-- CreateTable
CREATE TABLE "salas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "salas_pkey" PRIMARY KEY ("id")
);
