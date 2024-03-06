<script lang="ts" setup>
import IconDiscord from "./icons/IconDiscord.vue";
import IconGithub from "./icons/IconGithub.vue";
import IconLinkedIn from "./icons/IconLinkedIn.vue";
import IconTelegram from "./icons/IconTelegram.vue";
import IconTwitter from "./icons/IconTwitter.vue";
</script>

<template>
  <div class="flex flex-row justify-between pt-[72px] pb-12 text-100 text-grey-100">
    <span>&copy; All in Bits 2024</span>
    <div class="flex flex-col gap-4">
      <!-- Text -->
      <span>Be a part of the conversation</span>
      <!-- Footer Social Links-->
      <div class="flex flex-row gap-4 fill-grey-100">
        <a href="#" class="hover:fill-grey-50"><IconTwitter /></a>
        <a href="#" class="hover:fill-grey-50"><IconDiscord /></a>
        <a href="#" class="hover:fill-grey-50"><IconTelegram /></a>
        <a href="#" class="hover:fill-grey-50"><IconGithub /></a>
        <a href="#" class="hover:fill-grey-50"><IconLinkedIn /></a>
      </div>
    </div>
  </div>
</template>
