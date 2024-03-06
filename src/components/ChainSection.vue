<script lang="ts" setup>
import IconChainLogo from "./icons/IconChainLogo.vue";
import IconDiscord from "./icons/IconDiscord.vue";
import IconGithub from "./icons/IconGithub.vue";
import IconLinkedIn from "./icons/IconLinkedIn.vue";
import IconTelegram from "./icons/IconTelegram.vue";
import IconTwitter from "./icons/IconTwitter.vue";
import IconLink from "./icons/IconLink.vue";
</script>

<template>
  <div class="flex flex-row gap-4 items-center py-[72px] border-b border-grey-300">
    <IconChainLogo class="self-start mt-3 w-14 aspect-square" />
    <div class="flex flex-col gap-8">
      <!-- Chain Title -->
      <div class="font-termina text-[72px] font-semibold leading-[80px]">GovGen</div>
      <!-- Chain Links -->
      <div class="flex flex-row gap-6 text-grey-100">
        <a
          href="https://govgen.io"
          target="_blank"
          class="flex flex-row gap-3 [&>*]:text-grey-100 [&>*]:fill-current [&>*]:hover:fill-grey-50 [&>*]:hover:text-grey-50 hover:text-grey-50"
        >
          <IconLink /><span>Website</span>
        </a>
        <span>|</span>
        <!-- Chain Socials -->
        <div class="flex flex-row gap-4 [&>*]:text-grey-100 [&>*]:fill-current">
          <a href="#" class="hover:fill-grey-50"><IconTwitter /></a>
          <a href="#" class="hover:fill-grey-50"><IconDiscord /></a>
          <a href="#" class="hover:fill-grey-50"><IconTelegram /></a>
          <a href="#" class="hover:fill-grey-50"><IconGithub /></a>
          <a href="#" class="hover:fill-grey-50"><IconLinkedIn /></a>
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
