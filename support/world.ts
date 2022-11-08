import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, devices, Page } from "playwright";

let page: Page;
let browser: Browser;

setDefaultTimeout(60000);

Before(async () => {
  try {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
      ...devices["Moto G4"],
      ...devices["iPhone 12"]
    });
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
