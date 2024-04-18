import { test, expect } from "@playwright/experimental-ct-vue";
import UserBalance from "../../src/components/helper/UserBalance.vue";

test.use({ viewport: { width: 500, height: 500 } });

test("UserBalance balance formatted display", async ({ mount }) => {
  const component = await mount(UserBalance, {
    props: { address: "govgen1ylg6jvq9ad95rn8xdt82ulcwgyqm8lj2qq9tma", denom: "ugovgen" },
  });
  await expect(component).toContainText("8.998199");
});
