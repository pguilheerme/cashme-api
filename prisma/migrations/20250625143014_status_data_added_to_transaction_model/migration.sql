/*
  Warnings:

  - Added the required column `status` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionStatusType" AS ENUM ('PENDING', 'EXPIRED', 'PAID');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "status" "TransactionStatusType" NOT NULL;
