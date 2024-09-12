<script setup lang="ts">
import { RouterView } from "vue-router";

import HeaderSection from "@/components/layout/HeaderSection.vue";
import ErrorBox from "@/components/popups/ErrorBox.vue";
import FooterSection from "@/components/layout/FooterSection.vue";

/*
import { useGithubDiscussions } from "@/composables/useGithubDiscussions";

useGithubDiscussions().setup();
*/
</script>

<template>
  <div class="w-full max-w-[90rem] px-6 md:px-14 lg:px-20 mx-auto">
    <HeaderSection />
    <div class="flex flex-col w-full min-h-screen">
      <ErrorBox />
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
    <FooterSection />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
  transition-delay: 100ms;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
