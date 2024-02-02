import { test, expect } from "@playwright/test";

test("has hello world", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h2")).toHaveText("Hello World");
});
