import { test, expect } from "@playwright/test";

test("test navigation", async ({ page }) => {
  await page.goto("/", { timeout: 30000 });
  await expect(page.locator("a")).toHaveText("Proposals");
  await expect(page.locator("a")).toHaveText("Guides");
});
