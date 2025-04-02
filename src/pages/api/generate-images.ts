import type { NextApiRequest, NextApiResponse } from "next";

import chromium from "@sparticuz/chromium";
chromium.setGraphicsMode = false;

import pLimit from "p-limit";

import JSZip from "jszip";
import getPuppeteerBrowser from "@/utils/getPuppeteerBrowser";

import {
  HORIZONTAL_LOGO_VARIANTS,
  LANDING_BANNER_1440x499,
  LANDING_BANNER_2500x471,
  LANDING_BANNER_640x500,
  LANDING_BANNER_1440x499_SKELETON,
  LANDING_BANNER_2500x471_SKELETON,
  LANDING_BANNER_640x500_SKELETON,
  STACKED_LOGO_VARIANTS,
  BEVY_BANNER,
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
    ...LANDING_BANNER_640x500,
    ...LANDING_BANNER_1440x499,
    ...LANDING_BANNER_2500x471,
    ...LANDING_BANNER_640x500_SKELETON,
    ...LANDING_BANNER_1440x499_SKELETON,
    ...LANDING_BANNER_2500x471_SKELETON,
    ...BEVY_BANNER,
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
            bgImage: imageGen.bgImage || null,
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
    console.log("Error generating images:", error);

    await browser.close();
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
};
