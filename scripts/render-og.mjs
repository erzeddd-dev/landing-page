import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "og-price-list.html");
const outPath = path.join(__dirname, "..", "public", "og-image.png");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

await page.locator(".canvas").screenshot({ path: outPath, type: "png" });
await browser.close();

console.log(`Wrote ${outPath}`);
