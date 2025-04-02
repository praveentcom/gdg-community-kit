import type { NextApiRequest, NextApiResponse } from "next";

import puppeteer from 'puppeteer';
import JSZip from 'jszip';
import getBrandLogoHorizontalDark from "@/components/brand/logo/horizontal/dark";

type Data = Buffer<ArrayBufferLike>;

export default async function handler(req: NextApiRequest,
  res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { location } = req.body;
  const htmlContent = getBrandLogoHorizontalDark({ location });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 960, height: 1330 });
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  const pngBuffer = await page.screenshot({ omitBackground: true });
  await browser.close();

  const zip = new JSZip();
  zip.file('image.png', pngBuffer);
  const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename=images.zip');
  res.status(200).send(zipContent);
}