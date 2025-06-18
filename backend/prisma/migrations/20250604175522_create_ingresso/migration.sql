-- CreateTable
CREATE TABLE "ingressos" (
    "id" SERIAL NOT NULL,
    "sessaoId" INTEGER NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "poltrona" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ingressos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingressos" ADD CONSTRAINT "ingressos_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "sessoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
