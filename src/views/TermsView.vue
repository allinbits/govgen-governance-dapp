<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
import MarkdownParser from "@/components/common/MarkdownParser.vue";
const tos = ref(i18n.t("termspage.content"));
</script>
<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-row py-8 md:py-[72px]">
      <div class="flex flex-col gap-8 w-full">
        <div class="flex gap-4">
          <div class="font-termina text-700 md:text-1000 font-semibold leading-[80px]">{{ $t("termspage.title") }}</div>
        </div>
      </div>
    </div>
    <div
      class="text-grey-100 text-400 lg:w-[656px] font-normal text-left text-pretty after:absolute after:block after:left-0 after:w-full after:bg-grey-300 after:h-px"
    ></div>

    <div class="flex flex-row py-8 md:py-[72px]">
      <p class="text-grey-100 text-400 lg:w-[656px] font-normal text-left text-pretty">
        <span class="block pb-8 lg:pb-[72px]">
          <MarkdownParser v-model="tos" />
        </span>
      </p>
    </div>
  </div>
</template>
