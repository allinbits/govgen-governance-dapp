import { test, expect } from "@playwright/experimental-ct-vue";
import PopupBox from "../../../src/components/popups/PopupBox.vue";

test("popup box is hidden", async ({ mount }) => {
  const popupBox = await mount(PopupBox, { props: { modelValue: false } });
  const modal = await popupBox.locator("#popup-box");
  expect(await modal.isVisible()).toBeFalsy();
});

test("popup box is visible", async ({ mount }) => {
  const popupBox = await mount(PopupBox, { props: { modelValue: true } });
  const modal = await popupBox.locator("#popup-box");
  expect(await modal.isVisible()).toBeTruthy();
});

test("popup box title is set", async ({ mount }) => {
  const popupBox = await mount(PopupBox, { props: { modelValue: true, title: "hello world" } });
  const modal = await popupBox.locator("#popup-box");
  await expect(modal.getByText("hello world")).toBeVisible();
});
