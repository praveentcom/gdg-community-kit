import { CloudTasksClient } from "@google-cloud/tasks";
import { tmpdir } from "os";
import { writeFileSync, existsSync } from "fs";
import { join } from "path";

let cachedClient: CloudTasksClient | null = null;

export function getTasksClient(): CloudTasksClient {
  if (cachedClient) return cachedClient;

  const base64 = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!base64) throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS");

  const json = Buffer.from(base64, "base64").toString("utf-8");

  const filePath = join(tmpdir(), "gcp-tasks-key.json");
  if (!existsSync(filePath)) {
    writeFileSync(filePath, json);
  }

  const client = new CloudTasksClient({ keyFilename: filePath });
  cachedClient = client;

  return client;
}
