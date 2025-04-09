-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('INITIATED', 'PROCESSING', 'CREATED', 'FAILED');

-- CreateTable
CREATE TABLE "KitRequest" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "communityType" TEXT NOT NULL,
    "customImageUrl" TEXT NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'INITIATED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KitRequest_pkey" PRIMARY KEY ("id")
);
