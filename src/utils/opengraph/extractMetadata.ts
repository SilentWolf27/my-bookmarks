import puppeteer from "puppeteer";

export async function extractOpenGraphMetadata(url: string) {
    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });
        const metaTags = await page.evaluate(() => {
            const getMetaTags = (property: string) => {
                const metaTag = document.querySelector(property);
                return metaTag ? metaTag.getAttribute("content") : null;
            };

            return {
                title: getMetaTags("meta[property='og:title']") || document.title,
                image: getMetaTags("meta[property='og:image']"),
            };
        });

        return metaTags;
    } catch (error) {
        console.error("Error extracting metadata:", error);
        throw error;
    } finally {
        await browser.close();
    }

}
