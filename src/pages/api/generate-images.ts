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
  BEVY_BANNER_SKELETON,
  BEVY_BANNER_CUSTOM_IMAGE,
  LANDING_BANNER_1440x499_CUSTOM_IMAGE,
  LANDING_BANNER_2500x471_CUSTOM_IMAGE,
  LINKEDIN_BANNER_CUSTOM_IMAGE,
  TWITTER_BANNER_CUSTOM_IMAGE,
  WEBSITE_BANNER_2500x471_CUSTOM_IMAGE,
  WEBSITE_BANNER_1440x499_CUSTOM_IMAGE,
} from "@/utils/common/generationConfigs";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

import { getStorageClient } from "@/utils/google/storage";
import { EnumImageVariant } from "@/types/Image";
import updateKitRequestStatus from "@/utils/common/kit-request/updateKitRequestStatus";
import { RequestStatus } from "@prisma/client";
import {
  EMAIL_KIT_GENERATED_HTML,
  EMAIL_KIT_GENERATED_TEXT,
} from "@/utils/emails/templates/kit-generated";
import getKitRequestDetails from "@/utils/common/kit-request/getKitRequestDetails";
import { render } from "@react-email/render";
const storage = getStorageClient();

const BUCKET_NAME = `${process.env.GOOGLE_CLOUD_STORAGE_BUCKET}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { requestId } = req.body;

  if (!requestId) {
    return res.status(400).json({ error: "Missing requestId" });
  }

  try {
    await updateKitRequestStatus(requestId, RequestStatus.PROCESSING);

    const requestDetails = await getKitRequestDetails(requestId);

    const { location, email, fullName, communityType, customImageUrl } =
      requestDetails;

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
      ...LANDING_BANNER_1440x499_CUSTOM_IMAGE,
      ...LANDING_BANNER_2500x471,
      ...LANDING_BANNER_2500x471_SKELETON,
      ...LANDING_BANNER_2500x471_CUSTOM_IMAGE,
      ...BEVY_BANNER,
      ...BEVY_BANNER_SKELETON,
      ...BEVY_BANNER_CUSTOM_IMAGE,
      ...BLOG_COVER_1024x512,
      ...BLOG_COVER_2500x744,
      ...LINKEDIN_BANNER,
      ...LINKEDIN_BANNER_SKELETON,
      ...LINKEDIN_BANNER_CUSTOM_IMAGE,
      ...TWITTER_BANNER,
      ...TWITTER_BANNER_SKELETON,
      ...TWITTER_BANNER_CUSTOM_IMAGE,
      ...EMAIL_HEADER,
      ...WEBSITE_BANNER_640x500,
      ...WEBSITE_BANNER_1440x499,
      ...WEBSITE_BANNER_1440x499_SKELETON,
      ...WEBSITE_BANNER_1440x499_CUSTOM_IMAGE,
      ...WEBSITE_BANNER_2500x471,
      ...WEBSITE_BANNER_2500x471_SKELETON,
      ...WEBSITE_BANNER_2500x471_CUSTOM_IMAGE,
    ];

    const zip = new JSZip();

    const browser = await getPuppeteerBrowser();
    if (!browser) {
      throw new Error("Failed to launch browser");
    }

    const concurrencyLimit = 2;
    const limit = pLimit(concurrencyLimit);

    await Promise.all(
      IMAGE_GENERATORS.map((imageGen) =>
        limit(async () => {
          if (
            imageGen.imageVariant === EnumImageVariant.CUSTOM_IMAGE_URL &&
            !customImageUrl
          ) {
            return;
          }

          const html = imageGen.generator({
            location: locationParsed,
            colorVariant: imageGen.colorVariant,
            dimensions: imageGen.dimensions,
            fontColor: imageGen.fontColor,
            imageVariant: imageGen.imageVariant,
            customImageUrl: customImageUrl || "",
          });

          const page = await browser.newPage();

          await page.setViewport({
            ...imageGen.dimensions,
            deviceScaleFactor: 1,
          });

          await page.setContent(html, { waitUntil: "networkidle0" });

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

    const fileName = `${communityParsed}-${location}-${Date.now()}.zip`;
    const bucketFile = storage.bucket(BUCKET_NAME).file(fileName);
    await bucketFile.save(buffer, {
      metadata: { contentType: "application/zip" },
      resumable: false,
    });

    const [signedUrl] = await bucketFile.getSignedUrl({
      action: "read",
      expires: Date.now() + 1000 * 60 * 60 * 24 * 30,
    });

    const emailHtml = await render(
        EMAIL_KIT_GENERATED_HTML({
          fullName,
          communityName: `${communityParsed} ${location}`,
          signedUrl,
          requestDate: requestDetails.createdAt,
        }),
        {
          pretty: true,
        },
      ),
      emailText = EMAIL_KIT_GENERATED_TEXT({
        fullName,
        communityName: `${communityParsed} ${location}`,
        signedUrl,
        requestDate: requestDetails.createdAt,
      });

    await resend.emails.send({
      from: "GDG Community Kit <gdg-community-kit@mail.praveent.com>",
      to: email,
      subject: `Community Kit for ${communityParsed} ${location}`,
      text: emailText,
      html: emailHtml,
    });

    await updateKitRequestStatus(requestId, RequestStatus.CREATED);

    return res.status(200).json({ success: true });
  } catch (error) {
    await updateKitRequestStatus(requestId, RequestStatus.FAILED);

    console.error("Error generating images:", error);

    res.status(500).json({ error: "Internal Server Error", details: error });
  }
}
