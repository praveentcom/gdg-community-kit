import puppeteer from "puppeteer";

export default async function getPuppeteerBrowser() {
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    protocolTimeout: 120000,
  });
}
