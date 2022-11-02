import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./world";
import { expect } from "@playwright/test";

Given("I launch the application", async (): Promise<any> => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

Given("I am presented with the login screen", async (): Promise<any> => {
  // create a locator
  const getStarted = page.getByText("Get Started");

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

When("I enter the login credentials", async (): Promise<any> => {});

Then("I am redirected to the landing page", async (): Promise<any> => {});

When("I enter incorrect login credentials", async (): Promise<any> => {});

Then(
  "I am presented with the appropriate error messages",
  async (): Promise<any> => {}
);
