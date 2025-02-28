import puppeteer, { Page } from "puppeteer-core";
import chromium from "@sparticuz/chromium";

async function createBrowser() {
    return await puppeteer.launch({
        headless: true,
        executablePath: await chromium.executablePath(),
        args: [...chromium.args, '--no-sandbox'],
    });
}

async function getMetadata(page: Page) {
    return await page.evaluate(() => {
        const getMetaTags = (property: string) => {
            const metaTag = document.querySelector(property);
            return metaTag ? metaTag.getAttribute("content") : null;
        };

        return {
            title: getMetaTags("meta[property='og:title']") || document.title,
            image: getMetaTags("meta[property='og:image']"),
            description: getMetaTags("meta[property='og:description']"),
        };
    });
}

async function takeScreenshot(page: Page) {
    return await page.screenshot({ encoding: "base64", type: "webp", optimizeForSpeed: true });
}

export async function extractOpenGraphMetadata(url: string) {
    const browser = await createBrowser();
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 5000 });
        const metadata = await getMetadata(page);
        if (!metadata.image) {
            const screenshot = await takeScreenshot(page);
            metadata.image = `data:image/webp;base64,${screenshot}`;
        }

        return metadata;
    } catch (error) {
        console.error("Error extracting metadata:", error);
        throw error;
    } finally {
        await browser.close();
    }
}