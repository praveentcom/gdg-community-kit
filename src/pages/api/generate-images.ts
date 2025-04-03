import type { NextApiRequest, NextApiResponse } from "next";

import chromium from "@sparticuz/chromium";
chromium.setGraphicsMode = false;

import pLimit from "p-limit";
import JSZip from "jszip";

import getPuppeteerBrowser from "@/utils/common/getPuppeteerBrowser";

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
} from "@/utils/common/generationConfigs";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

import { getStorageClient } from "@/utils/google/storage";
const storage = getStorageClient();

const BUCKET_NAME = `${process.env.GOOGLE_CLOUD_STORAGE_BUCKET}`;

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

  const { location, email, fullName, communityType } = req.body;

  let communityParsed = "",
    locationParsed = "";
  switch (communityType) {
    case "gdg":
      communityParsed = "GDG";
      locationParsed = location;
      break;
    case "gdg-cloud":
      communityParsed = "GDG Cloud";
      locationParsed = `Cloud ${location}`;
      break;
    default:
      communityParsed = "GDG";
      locationParsed = location;
  }

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

  const concurrencyLimit = 2;
  const limit = pLimit(concurrencyLimit);

  try {
    await Promise.all(
      IMAGE_GENERATORS.map((imageGen) =>
        limit(async () => {
          const page = await browser.newPage();

          const html = imageGen.generator({
            location: locationParsed,
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

          page.setDefaultTimeout(120000);

          await page.evaluate(() => document.fonts.ready);

          const buffer = await page.screenshot({ omitBackground: true });

          zip
            .folder(
              `${communityParsed} ${location} - Brand Assets/${imageGen.folder}`,
            )
            ?.file(imageGen.name, buffer);

          await page.close();
        }),
      ),
    );

    await browser.close();

    const buffer = await zip.generateAsync({ type: "nodebuffer" });

    // Upload to GCS
    const fileName = `${communityParsed}-${location}-${Date.now()}.zip`;
    const bucketFile = storage.bucket(BUCKET_NAME).file(fileName);

    await bucketFile.save(buffer, {
      metadata: { contentType: "application/zip" },
      resumable: false,
    });

    // Generate signed URL
    const [signedUrl] = await bucketFile.getSignedUrl({
      action: "read",
      expires: Date.now() + 1000 * 60 * 60 * 24 * 30,
    });

    // Send email with link
    await resend.emails.send({
      from: "GDG Community Kit <gdg-community-kit@mail.praveent.com>",
      to: email,
      subject: `Community Kit generated for ${communityParsed} ${location}`,
      html: `<p>Hey ${`${fullName}`.split(" ")[0]} 👋🏼<br/><br/>We've successfully generated branding assets for <strong>${communityParsed} ${location}</strong> community. Use this <a href="${signedUrl}" target="_blank">hosted link</a> to download the kit (the link will remain valid for 30 days). We wish you and your community to scale greater heights.<br/><br/>Thanks with regards,<br/>Praveen Thirumurugan.</p>`,
    });

    return res.status(200).json({ success: true });
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
