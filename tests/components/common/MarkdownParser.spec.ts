import { test, expect } from "@playwright/experimental-ct-vue";
import MarkdownParser from "../../../src/components/common/MarkdownParser.vue";

test.use({ viewport: { width: 500, height: 500 } });

const markDownExample = `## Hello World

\`\`\`
code block
\`\`\`
`;

test("UserBalance balance formatted display", async ({ mount }) => {
  const component = await mount(MarkdownParser, { props: { modelValue: markDownExample } });
  await expect(component).toContainText(`Hello World`);

  let content = await component.getByRole("heading");
  await expect(content).toContainText("Hello World");

  content = await component.getByRole("code");
  await expect(content).toContainText("code block");
});
