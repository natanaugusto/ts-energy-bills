-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bills" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "totalConsume" DOUBLE PRECISION NOT NULL,
    "dueDate" DATE NOT NULL,
    "referenceDate" DATE NOT NULL,

    CONSTRAINT "Bills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consumptions" (
    "id" SERIAL NOT NULL,
    "billId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "tariff" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Consumptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Files" (
    "id" SERIAL NOT NULL,
    "billId" INTEGER NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_document_key" ON "Client"("document");

-- CreateIndex
CREATE UNIQUE INDEX "Client_code_key" ON "Client"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Files_path_key" ON "Files"("path");

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consumptions" ADD CONSTRAINT "Consumptions_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
