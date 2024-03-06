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
  <div class="flex flex-row gap-4 items-center py-[72px] border-b border-grey-300">
    <IconChainLogo class="self-start mt-3 w-14 aspect-square" />
    <div class="flex flex-col gap-8">
      <!-- Chain Title -->
      <div class="font-termina text-[72px] font-semibold leading-[80px]">GovGen</div>
      <!-- Chain Links -->
      <div class="flex flex-row gap-6 text-grey-100">
        <a href="https://govgen.io" target="_blank" class="flex flex-row gap-3 hover:text-grey-50">
          <Icon icon="link" /><span>Website</span>
        </a>
        <span>|</span>
        <!-- Chain Socials -->
        <div class="flex flex-row gap-4 items-center justify-center">
          <a class="flex items-center" v-for="(linkData, index) in links" :key="index" :href="linkData.link">
            <Icon :icon="linkData.icon" class="hover:text-grey-50 hover:cursor-pointer" />
          </a>
        </div>
      </div>
      <!-- Chain Description -->
      <div class="text-grey-100 text-300 w-[656px] font-interVar font-normal text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ultrices mauris, et sollicitudin enim.
        Vestibulum eget viverra elit. Mauris at turpis luctus, malesuada sapien ultricies, molestie nisi. Ut viverra
        volutpat nibh vitae porttitor.
      </div>
    </div>
  </div>
</template>
