-- CreateEnum
CREATE TYPE "statusEnum" AS ENUM ('CANCELED', 'PENDING', 'APPROVED');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "price" MONEY NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" "statusEnum" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
