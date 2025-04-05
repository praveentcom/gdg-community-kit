import prisma from "@/utils/db";

export default async function getKitRequestDetails(requestId: number) {
  const requestDetails = await prisma.kitRequest.findUnique({
    where: { id: requestId },
  });

  if (!requestDetails) {
    throw new Error("Request not found");
  }

  return requestDetails;
}
