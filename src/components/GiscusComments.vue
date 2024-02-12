<script lang="ts" setup>
const props = defineProps<{ path: string }>();

// These are temporary parameters, will be updated later
const GiscusParams = {
  host: "http://localhost:3000",
  repo: "stuyk/giscus-test",
  repoid: "R_kgDOLP4O2A",
  category: "Proposals",
  categoryid: "DIC_kwDOLP4O2M4CdE02",
  mapping: "specific",
};
</script>

<template>
  <div>
    <giscus-widget
      id="comments"
      :host="GiscusParams.host"
      :repo="GiscusParams.repo"
      :repoid="GiscusParams.repoid"
      :category="GiscusParams.category"
      :categoryid="GiscusParams.categoryid"
      :mapping="GiscusParams.mapping"
      :term="props.path"
      reactionsenabled="1"
      emitmetadata="0"
      inputposition="top"
      theme="light"
      lang="en"
      loading="lazy"
    ></giscus-widget>
  </div>
</template>
