import prisma from "@/utils/db";
import { RequestStatus } from "@prisma/client";

export default async function updateKitRequestStatus(
  requestId: number,
  status: RequestStatus,
) {
  const updateResponse = await prisma.kitRequest.update({
    where: { id: requestId },
    data: { status, updatedAt: new Date() },
  });

  if (!updateResponse) {
    throw new Error("Failed to update request status");
  }

  return updateResponse;
}
