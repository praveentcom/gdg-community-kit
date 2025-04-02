import type { NextApiRequest, NextApiResponse } from "next";

import chromium from "@sparticuz/chromium";
chromium.setGraphicsMode = false;

import JSZip from "jszip";
import { EnumColorHex, EnumColorVariant } from "@/types/Color";
import { ImageGenerationConfig } from "@/types/Config";

import getBrandLogoStacked from "@/components/brand/logo/stacked";
import getPuppeteerBrowser from "@/utils/getPuppeteerBrowser";
import getBrandLogoHorizontal from "@/components/brand/logo/horizontal";

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

  const STACKED_LOGO_VARIANTS: ImageGenerationConfig[] = [
    {
      id: "logo-stacked-dark",
      name: "Logo_Stacked_Dark.png",
      folder: "Logo/Stacked",
      variant: EnumColorVariant.DARK,
      dimensions: {
        width: 960,
        height: 1330,
      },
      fontColor: EnumColorHex.BLUE,
      generator: getBrandLogoStacked,
    },
    {
      id: "logo-stacked-light",
      name: "Logo_Stacked_Light.png",
      folder: "Logo/Stacked",
      variant: EnumColorVariant.LIGHT,
      dimensions: {
        width: 960,
        height: 1330,
      },
      fontColor: EnumColorHex.BLUE,
      generator: getBrandLogoStacked,
    },
    {
      id: "logo-stacked-blue",
      name: "Logo_Stacked_Blue.png",
      folder: "Logo/Stacked",
      variant: EnumColorVariant.BLUE,
      dimensions: {
        width: 960,
        height: 1330,
      },
      fontColor: EnumColorHex.BLUE,
      generator: getBrandLogoStacked,
    },
    {
      id: "logo-stacked-green",
      name: "Logo_Stacked_Green.png",
      folder: "Logo/Stacked",
      variant: EnumColorVariant.GREEN,
      dimensions: {
        width: 960,
        height: 1330,
      },
      fontColor: EnumColorHex.GREEN,
      generator: getBrandLogoStacked,
    },
    {
      id: "logo-stacked-yellow",
      name: "Logo_Stacked_Yellow.png",
      folder: "Logo/Stacked",
      variant: EnumColorVariant.YELLOW,
      dimensions: {
        width: 960,
        height: 1330,
      },
      fontColor: EnumColorHex.YELLOW,
      generator: getBrandLogoStacked,
    },
    {
      id: "logo-stacked-red",
      name: "Logo_Stacked_Red.png",
      folder: "Logo/Stacked",
      variant: EnumColorVariant.RED,
      dimensions: {
        width: 960,
        height: 1330,
      },
      fontColor: EnumColorHex.RED,
      generator: getBrandLogoStacked,
    },
  ];

  const HORIZONTAL_LOGO_VARIANTS: ImageGenerationConfig[] = [
    {
        id: "logo-horizontal-dark",
        name: "Logo_Horizontal_Dark.png",
        folder: "Logo/Horizontal",
        variant: EnumColorVariant.DARK,
        dimensions: {
          width: 1920,
          height: 390,
        },
        fontColor: EnumColorHex.BLUE,
        generator: getBrandLogoHorizontal,
      },
    {
      id: "logo-horizontal-light",
      name: "Logo_Horizontal_Light.png",
      folder: "Logo/Horizontal",
      variant: EnumColorVariant.LIGHT,
      dimensions: {
          width: 1920,
          height: 390,
        },
      fontColor: EnumColorHex.BLUE,
      generator: getBrandLogoHorizontal,
    },
    {
      id: "logo-horizontal-blue",
      name: "Logo_Horizontal_Blue.png",
      folder: "Logo/Horizontal",
      variant: EnumColorVariant.BLUE,
      dimensions: {
          width: 1920,
          height: 390,
        },
      fontColor: EnumColorHex.BLUE,
      generator: getBrandLogoHorizontal,
    },
    {
      id: "logo-horizontal-green",
      name: "Logo_Horizontal_Green.png",
      folder: "Logo/Horizontal",
      variant: EnumColorVariant.GREEN,
      dimensions: {
          width: 1920,
          height: 390,
        },
      fontColor: EnumColorHex.GREEN,
      generator: getBrandLogoHorizontal,
    },
    {
      id: "logo-horizontal-yellow",
      name: "Logo_Horizontal_Yellow.png",
      folder: "Logo/Horizontal",
      variant: EnumColorVariant.YELLOW,
      dimensions: {
          width: 1920,
          height: 390,
        },
      fontColor: EnumColorHex.YELLOW,
      generator: getBrandLogoHorizontal,
    },
    {
      id: "logo-horizontal-red",
      name: "Logo_Horizontal_Red.png",
      folder: "Logo/Horizontal",
      variant: EnumColorVariant.RED,
      dimensions: {
          width: 1920,
          height: 390,
        },
      fontColor: EnumColorHex.RED,
      generator: getBrandLogoHorizontal,
    },
  ];

  const IMAGE_GENERATORS: ImageGenerationConfig[] = [
    ...STACKED_LOGO_VARIANTS,
    ...HORIZONTAL_LOGO_VARIANTS,
  ];

  const zip = new JSZip();

  const browser = await getPuppeteerBrowser();
  if (!browser) {
    res.status(500).json({ error: "Failed to launch browser" });
    return;
  }

  for (const imageGen of IMAGE_GENERATORS) {
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
  }

  await browser.close();

  const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

  res.setHeader("Content-Type", "application/zip");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=GDG_Brand_Assets.zip",
  );
  res.status(200).send(zipBuffer);
}
