import type { NextApiRequest, NextApiResponse } from "next";
import { getTasksClient } from "@/utils/google/tasks";
import emailValidator from "email-validator";

import Redis from "ioredis";
const redis = new Redis(process.env.REDIS_URL ?? "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { location, email, fullName, communityType } = req.body;

  if (!location || !email || !fullName || !communityType)
    return res.status(400).json({ error: "Missing fields" });

  if (!emailValidator.validate(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const cacheKey = `accept-request:${email}`;
  const isDuplicate = await redis.get(cacheKey);
  if (isDuplicate) {
    return res.status(429).json({ error: "Duplicate request detected" });
  }

  await redis.set(cacheKey, "true", "EX", 3600);

  const project = `${process.env.GOOGLE_CLOUD_PROJECT_ID}`;
  const queue = `${process.env.GOOGLE_CLOUD_TASKS_QUEUE}`;
  const locationRegion = `${process.env.GOOGLE_CLOUD_TASKS_LOCATION}`;
  const url = `${process.env.BASE_URL}/api/generate-images`;

  const tasksClient = getTasksClient();

  const parent = tasksClient.queuePath(project, locationRegion, queue);

  await tasksClient.createTask({
    parent,
    task: {
      httpRequest: {
        httpMethod: "POST",
        url,
        headers: {
          "Content-Type": "application/json",
        },
        body: Buffer.from(
          JSON.stringify({ location, email, fullName, communityType }),
        ).toString("base64"),
      },
    },
  });

  return res.status(200).json({ success: true });
}
