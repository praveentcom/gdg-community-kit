import type { NextApiRequest, NextApiResponse } from "next";
import { getTasksClient } from "@/utils/google/tasks";
import emailValidator from "email-validator";

import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";

import Redis from "ioredis";
const redis = new Redis(process.env.REDIS_URL ?? "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { location, email, fullName, communityType, token } = req.body;

  if (!location || !email || !fullName || !communityType || !token)
    return res.status(400).json({ error: "Missing fields" });

  if (!emailValidator.validate(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const validationResponse = await validateTurnstileToken({
    token,
    secretKey: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY!,
    idempotencyKey: v4(),
    sandbox: process.env.NODE_ENV === "development",
  });

  if (!validationResponse.success) {
    return res.status(401).json({
      error: "Turnstile validation failed",
      errorCodes: validationResponse.error_codes,
    });
  }

  const dailyLimitKey = `daily-request-count:${new Date().toISOString().slice(0, 10)}`;
  const currentCount = await redis.incr(dailyLimitKey);

  if (currentCount === 1) {
    await redis.expire(dailyLimitKey, 86400);
  } else if (currentCount > 500) {
    return res.status(429).json({ error: "Daily request limit exceeded" });
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
