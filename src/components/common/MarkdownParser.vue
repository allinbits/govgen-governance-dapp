<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import markdownit from "markdown-it";
import MarkdownItMermaid from "@agoose77/markdown-it-mermaid";
import { alertPlugin } from "markdown-it-github-alert";

import DOMPurify from "dompurify";
import { bus } from "@/bus";

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
})
  .use(MarkdownItMermaid)
  .use(alertPlugin);

const props = defineProps<{ limit?: number }>();
const content = defineModel<string>();
const trimmedContent = ref<string>("");

async function parseData() {
  try {
    if (!content.value) {
      return "";
    }

    const htmlContent = props.limit
      ? await md.render(content.value.slice(0, props.limit))
      : await md.render(content.value);

    trimmedContent.value = DOMPurify.sanitize(htmlContent);
  } catch (_e) {
    bus.emit("error");
  }
}

const getClasses = computed(() => {
  return [
    "prose",
    "max-w-none",
    "prose:font-interVar",
    "prose-a:text-accent-100",
    "prose-p:text-light",
    "prose-code:text-accent-200",
    "prose-li:text-light",
    "prose-h1:text-light",
    "prose-h1:text-400",
    "prose-h2:text-light",
    "prose-h2:text-300",
    "prose-h3:text-light",
    "prose-h3:text-200",
    "prose-h4:text-light",
    "prose-h4:text-200",
    "prose-h5:text-light",
    "prose-h5:text-200",
    "prose-strong:text-light",
    "prose-pre:bg-grey-500",
    "prose-table:text-light",
    "prose-table:border",
    "prose-td:text-center",
    "prose-td:p-2",
    "prose-td:border",
    "prose-th:text-center",
    "prose-th:text-light",
    "prose-th:border",
  ];
});

onMounted(parseData);
</script>

<template>
  <div :class="getClasses">
    <!-- eslint-disable vue/no-v-html -->
    <div v-if="content" v-html="trimmedContent"></div>
    <!--eslint-enable-->
  </div>
</template>

<style>
.markdown-alert {
  padding: 1em;
  border-left: 0.25rem solid;
  padding-bottom: 0px;
  padding-top: 0px;
  border-color: var(--border-color);
}

.markdown-alert > span {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--border-color);
}

.markdown-alert .markdown-alert-icon {
  margin-right: 0.5em;
  fill: var(--border-color);
}

.markdown-alert.note {
  --border-color: #539bf5;
}

.markdown-alert.warning {
  --border-color: #c69026;
}

.markdown-alert.important {
  --border-color: #986ee2;
}

.markdown-alert.caution {
  --border-color: #e5534b;
}

.markdown-alert.tip {
  --border-color: #57ab5a;
}
</style>
