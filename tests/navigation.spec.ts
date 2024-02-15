import { test, expect } from "@playwright/test";

test("test navigation", async ({ page }) => {
  await page.goto("http://localhost:8080/", { timeout: 30000 });
  await expect(page.getByRole("navigation")).toContainText("Proposals");
  await expect(page.getByRole("navigation")).toContainText("Guides");
});
