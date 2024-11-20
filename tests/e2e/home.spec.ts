import { test, expect } from "@playwright/test";

test("test home", async ({ page }) => {
  await page.goto("http://localhost:8080/", { timeout: 30000 });
  await expect(page.getByRole("navigation")).toContainText("AtomOne");
  await expect(page.getByRole("navigation")).toContainText("AtomOne");
  await expect(page.locator("#app")).toContainText("AtomOne");
  await expect(page.getByText("All Proposals").first()).toBeVisible();
  await expect(page.locator("#app")).toContainText("© All in Bits 2024");
  await expect(page.locator("#app")).toContainText("Be a part of the conversation");
});
