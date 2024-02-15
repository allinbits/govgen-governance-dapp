<script lang="ts" setup>
import GiscusWidget, { GiscusProps } from "@giscus/vue";

const props = defineProps<{ path: string }>();

// These are temporary parameters, will be updated later
const GiscusParams: GiscusProps = {
  host: "http://localhost:3000",
  repo: "stuyk/giscus-test",
  repoId: "R_kgDOLP4O2A",
  category: "Proposals",
  categoryId: "DIC_kwDOLP4O2M4CdE02",
  mapping: "specific",
};
</script>

<template>
  <div>
    <GiscusWidget
      id="comments"
      :host="GiscusParams.host"
      :repo="GiscusParams.repo"
      :repo-id="GiscusParams.repoId"
      :category="GiscusParams.category"
      :category-id="GiscusParams.categoryId"
      :mapping="GiscusParams.mapping"
      :term="props.path"
      reactionsenabled="1"
      emitmetadata="0"
      inputposition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  </div>
</template>
