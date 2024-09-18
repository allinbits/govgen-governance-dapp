<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import markdownit from "markdown-it";

const { locale, messages } = useI18n();

const faqContent = computed(() => {
  return (messages.value[locale.value].faqPage as any).content;
});

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});
</script>
<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-row py-8 md:py-[72px]">
      <div class="flex flex-col gap-8 w-full">
        <div class="flex gap-4">
          <div class="font-termina text-700 md:text-1000 font-semibold leading-[80px]">{{ $t("faqPage.title") }}</div>
        </div>
      </div>
    </div>
    <div
      class="text-grey-100 text-400 lg:w-[800px] font-normal text-left text-pretty after:absolute after:block after:left-0 after:w-full after:bg-grey-300 after:h-px"
    ></div>

    <div class="flex flex-row py-8 md:py-[72px]">
      <p class="text-grey-100 text-400 lg:w-[800px] font-normal text-left text-pretty">
        <span class="block pb-8 lg:pb-[72px]">
          <div v-for="(item, index) in faqContent" :key="index">
            <h2 class="text-light mb-6">{{ item.question }}</h2>
            <div class="mb-16 md" v-html="md.render(item.answer)"></div>
          </div>
        </span>
      </p>
    </div>
  </div>
</template>
