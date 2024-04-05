<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as marked from "marked";
import DOMPurify from "dompurify";

const props = defineProps<{ limit?: number }>();
const content = defineModel<string>();
const trimmedContent = ref<string>("");

async function parseData() {
  if (!content.value) {
    return "";
  }

  const htmlContent = props.limit
    ? await marked.parse(content.value.slice(0, props.limit))
    : await marked.parse(content.value);

  trimmedContent.value = DOMPurify.sanitize(htmlContent);
}

onMounted(parseData);
</script>

<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <div v-if="content" class="markdown" v-html="trimmedContent"></div>
    <!--eslint-enable-->
  </div>
</template>
