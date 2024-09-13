<script lang="ts" setup>
import { RouterLink } from 'vue-router';

const links = [
  { title: "Twitter", url: "https://twitter.com/_govgen", icon: "twitter" },
  { title: "Discord", url: "https://discord.com/invite/atomone", icon: "discord" },
  { title: "Github", url: "https://github.com/atomone-hub", icon: "github" },
  { title: "Forum", url: "https://commonwealth.im/govgen", icon: "commonwealth" },
];
</script>

<template>
  <div class="flex flex-row justify-between pt-[72px] pb-12 text-100 text-grey-100">
    <span>&copy; All in Bits 2024</span>
    <div class="flex flex-col gap-4">
      <!-- Text -->
      <span class="flex justify-end">{{ $t("components.FooterSection.cta") }}</span>
      <!-- Footer Social Links-->
      <div class="flex flex-row gap-4 justify-end">
        <RouterLink to="/terms" class="flex items-center hover:text-grey-50">Terms of Service</RouterLink> -
        <RouterLink to="/privacy" class="flex items-center hover:text-grey-50">Privacy Policy</RouterLink> -
        <a v-for="(linkData, index) in links" :key="index" class="flex items-center" :href="linkData.url"
          target="_blank">
          <Icon :icon="linkData.icon" class="hover:text-grey-50 hover:cursor-pointer" />
        </a>
      </div>
    </div>
  </div>
</template>
