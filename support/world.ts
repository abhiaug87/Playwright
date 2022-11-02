import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

let page: Page;
let browser: Browser;

setDefaultTimeout(60000);

Before(async () => {
  try {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
  } catch (error) {
    console.log("Error, failed to launch browser");
    throw new Error("Error, failed to launch browser");
  }
  return page;
});

After(async () => {
  await browser.close();
});

export { page, browser };
