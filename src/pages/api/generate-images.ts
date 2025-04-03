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
  STACKED_LOGO_VARIANTS,
  BEVY_BANNER,
  BLOG_COVER_1024x512,
  BLOG_COVER_2500x744,
  LINKEDIN_BANNER,
  LINKEDIN_BANNER_SKELETON,
  TWITTER_BANNER,
  TWITTER_BANNER_SKELETON,
  EMAIL_HEADER,
  WEBSITE_BANNER_640x500,
  WEBSITE_BANNER_1440x499,
  WEBSITE_BANNER_1440x499_SKELETON,
  WEBSITE_BANNER_2500x471,
  WEBSITE_BANNER_2500x471_SKELETON,
} from "@/utils/generationConfigs";

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
    ...LANDING_BANNER_1440x499_SKELETON,
    ...LANDING_BANNER_2500x471,
    ...LANDING_BANNER_2500x471_SKELETON,
    ...BEVY_BANNER,
    ...BLOG_COVER_1024x512,
    ...BLOG_COVER_2500x744,
    ...LINKEDIN_BANNER,
    ...LINKEDIN_BANNER_SKELETON,
    ...TWITTER_BANNER,
    ...TWITTER_BANNER_SKELETON,
    ...EMAIL_HEADER,
    ...WEBSITE_BANNER_640x500,
    ...WEBSITE_BANNER_1440x499,
    ...WEBSITE_BANNER_1440x499_SKELETON,
    ...WEBSITE_BANNER_2500x471,
    ...WEBSITE_BANNER_2500x471_SKELETON,
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
            bgImage: imageGen.bgImage ?? null,
          });

          await page.setViewport({
            ...imageGen.dimensions,
            deviceScaleFactor: 1,
          });

          await page.setContent(html, { waitUntil: "networkidle2" });

          page.setDefaultTimeout(60000);

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
