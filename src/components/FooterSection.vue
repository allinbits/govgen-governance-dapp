<script lang="ts" setup>
const links = [
  { title: "Twitter", url: "#", icon: "twitter" },
  { title: "Discord", url: "#", icon: "discord" },
  { title: "Telegram", url: "#", icon: "telegram" },
  { title: "Github", url: "#", icon: "github" },
  { title: "LinkedIn", url: "#", icon: "LinkedIn" },
];
</script>

<template>
  <div class="flex flex-row justify-between pt-[72px] pb-12 text-100 text-grey-100">
    <span>&copy; All in Bits 2024</span>
    <div class="flex flex-col gap-4">
      <!-- Text -->
      <span>Be a part of the conversation</span>
      <!-- Footer Social Links-->
      <div class="flex flex-row gap-4 justify-end">
        <a class="flex items-center" v-for="(linkData, index) in links" :key="index" :href="linkData.link">
          <Icon :icon="linkData.icon" class="hover:text-grey-50 hover:cursor-pointer" />
        </a>
      </div>
    </div>
  </div>
</template>
