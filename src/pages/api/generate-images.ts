import type { NextApiRequest, NextApiResponse } from "next";

import chromium from "@sparticuz/chromium";
chromium.setGraphicsMode = false;

import pLimit from "p-limit";

import JSZip from "jszip";
import getPuppeteerBrowser from "@/utils/getPuppeteerBrowser";

import {
  HORIZONTAL_LOGO_VARIANTS,
  STACKED_LOGO_VARIANTS,
} from "@/utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    console.log("request method not allowed", req.method);
    console.log("request", req);
    res.status(405).end();
    return;
  }

  const { location } = req.body;

  const IMAGE_GENERATORS = [
    ...STACKED_LOGO_VARIANTS,
    ...HORIZONTAL_LOGO_VARIANTS,
  ];

  const zip = new JSZip();

  const browser = await getPuppeteerBrowser();
  if (!browser) {
    res.status(500).json({ error: "Failed to launch browser" });
    return;
  }

  const concurrencyLimit = 4;
  const limit = pLimit(concurrencyLimit);

  try {
    await Promise.all(
      IMAGE_GENERATORS.map((imageGen) =>
        limit(async () => {
          const page = await browser.newPage();

          const html = imageGen.generator({
            location,
            variant: imageGen.variant,
            dimensions: imageGen.dimensions,
            fontColor: imageGen.fontColor,
          });

          await page.setViewport({
            ...imageGen.dimensions,
            deviceScaleFactor: 1,
          });

          await page.setContent(html, { waitUntil: "networkidle0" });

          const buffer = await page.screenshot({ omitBackground: true });

          zip
            .folder(`GDG ${location} - Brand Assets/${imageGen.folder}`)
            ?.file(imageGen.name, buffer);

          await page.close();
        }),
      ),
    );

    await browser.close();

    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=GDG_Brand_Assets.zip",
    );
    res.status(200).send(zipBuffer);
  } catch (error) {
    await browser.close();
    res.status(500).json({ error: "Internal Server Error" });
  }
}
