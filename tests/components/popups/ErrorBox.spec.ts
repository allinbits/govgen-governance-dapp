import { test, expect } from "@playwright/experimental-ct-vue";
import ErrorBox from "../../../src/components/popups/ErrorBox.vue";

test("error box is hidden", async ({ mount }) => {
  const hiddenErrorBox = await mount(ErrorBox);
  const modal = await hiddenErrorBox.locator("#popup-error-box");
  expect(await modal.isVisible()).toBeFalsy();
});

test("error box is visible", async ({ mount }) => {
  const visibleErrorBox = await mount(ErrorBox, { props: { isOpen: true } });
  const modal = await visibleErrorBox.locator("#popup-error-box");
  expect(await modal.isVisible()).toBeTruthy();
});
