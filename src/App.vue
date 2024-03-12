<script setup lang="ts">
import { RouterView } from "vue-router";

import HeaderSection from "./components/layout/HeaderSection.vue";
import FooterSection from "./components/layout/FooterSection.vue";

import { useGithubDiscussions } from "./composables/useGithubDiscussions";

useGithubDiscussions().setup();
</script>

<template>
  <div class="w-full max-w-[90rem] px-6 md:px-14 lg:px-20 mx-auto">
    <HeaderSection />
    <div class="flex flex-col w-full">
      <RouterView />
    </div>
    <FooterSection />
  </div>
</template>
