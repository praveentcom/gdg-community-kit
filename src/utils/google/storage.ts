import { Storage } from "@google-cloud/storage";
import { tmpdir } from "os";
import { existsSync, writeFileSync } from "fs";
import { join } from "path";

let cachedClient: Storage | null = null;

export function getStorageClient(): Storage {
  if (cachedClient) return cachedClient;

  const base64 = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!base64) throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS");

  const json = Buffer.from(base64, "base64").toString("utf-8");

  const filePath = join(tmpdir(), "gcp-storage-key.json");
  if (!existsSync(filePath)) {
    writeFileSync(filePath, json);
  }

  const client = new Storage({ keyFilename: filePath });
  cachedClient = client;

  return client;
}
