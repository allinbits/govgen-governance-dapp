<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

// These are temporary parameters, will be updated later
const GiscusParams = {
  host: "http://localhost:3000",
  repo: "stuyk/giscus-test",
  repoid: "R_kgDOLP4O2A",
  category: "Proposals",
  categoryid: "DIC_kwDOLP4O2M4CdE02",
  mapping: "pathname",
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
      term="Welcome to giscus!"
      reactionsenabled="1"
      emitmetadata="0"
      inputposition="top"
      theme="light"
      lang="en"
      loading="lazy"
    ></giscus-widget>

    {{ route.params.id }}
  </div>
</template>
