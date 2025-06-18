-- CreateTable
CREATE TABLE "sessoes" (
    "id" SERIAL NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "filmeId" INTEGER NOT NULL,
    "salaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sessoes" ADD CONSTRAINT "sessoes_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "filmes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessoes" ADD CONSTRAINT "sessoes_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "salas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
