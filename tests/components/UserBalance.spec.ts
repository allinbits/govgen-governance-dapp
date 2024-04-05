import { test, expect } from '@playwright/experimental-ct-vue';
import UserBalance from '../../src/components/helper/UserBalance.vue';

test.use({ viewport: { width: 500, height: 500 } });

test('UserBalance balance formatted display', async ({ mount }) => {
  const component = await mount(UserBalance,{props: { address: "govgen1995thtfe5gs47wrrjg9gsq0xs0udq3lr8yk7z8", denom: "ugovgen"}});
  await expect(component).toContainText('6.223631');
});