<script setup lang="ts">
import { RouterView } from "vue-router";

import HeaderSection from "@/components/layout/HeaderSection.vue";
import ErrorBox from "@/components/popups/ErrorBox.vue";
import FooterSection from "@/components/layout/FooterSection.vue";
</script>

<template>
  <div class="w-full max-w-[90rem] px-6 md:px-14 lg:px-20 mx-auto min-h-screen">
    <HeaderSection />
    <div class="flex flex-col w-full">
      <ErrorBox />
      <Suspense>
        <RouterView />
      </Suspense>
    </div>
    <FooterSection />
  </div>
</template>

<style></style>
