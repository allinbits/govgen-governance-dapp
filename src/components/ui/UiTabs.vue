<template>
  <DropDown
    v-model="tabIdx"
    :values="options.map((x) => x.title)"
    class="md:hidden"
    v-bind="$attrs"
    @select="
      (id: number) => {
        changeTab(id);
        logEvent('Click Tab', { tabOption: options[id].title });
      }
    "
  />

  <div class="hidden md:flex flex-col w-full pt-12 relative" v-bind="$attrs">
    <div
      ref="toggler"
      class="flex flex-row w-full gap-6 md:gap-12 relative"
      role="radiogroup"
      aria-label="Switch"
      @mouseleave="changeTab(lastTab)"
    >
      <!-- Tabs -->
      <div
        v-for="(option, index) in options"
        :key="option.title"
        :ref="(el) => tabRefs.push(el as any)"
        class="z-2"
        @mouseover="changeTab(index, false)"
      >
        <input
          v-bind="$attrs"
          :id="id + option.title"
          :name="id"
          :value="option.title"
          type="radio"
          class="hidden peer"
          @click="changeTab(index)"
        />
        <label
          ref="togglerOption"
          :for="id + option.title"
          class="flex text-grey-50 py-1.5 text-500 cursor-pointer peer-checked:text-light ease-in-out duration-300"
          @click="logEvent('Click Tab', { tabOption: option.title })"
        >
          {{ $t("ui.tabs." + option.title) }}
        </label>
      </div>
    </div>
    <!-- Movable Line -->
    <div class="flex flex-row w-full mt-4 border-b-2 border-grey-300">
      <div ref="line" class="h-1 w-1 bg-light rounded-t transition-all duration-300 ease-in-out"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import DropDown from "./DropDown.vue";
import { useTelemetry } from "@/composables/useTelemetry";
import { UiTabOption } from "@/types/ui";

type Props = {
  modelValue?: string | number;
  id: string;
  options: UiTabOption[];
};

const tabSelected = defineModel<string>();
const lastTab = ref<number>(0);
const toggler = ref<HTMLElement | null>(null);
const tabRefs = ref<HTMLElement[]>([]);
const line = ref<HTMLElement | null>(null);
const tabIdx = ref<number>(0);

const props = withDefaults(defineProps<Props>(), { modelValue: undefined });
function changeTab(idx: number = 0, isClicked = true) {
  tabIdx.value = idx;
  if (isClicked) {
    const link = props.options[tabIdx.value].link;
    if (link) {
      window.open(link, "_blank");
    } else {
      tabSelected.value = props.options[tabIdx.value].title;
      lastTab.value = idx;
    }
  }
  const el = tabRefs.value[tabIdx.value] as HTMLElement;
  if (!el || !line.value) {
    return;
  }

  line.value.style.marginLeft = `${el.offsetLeft}px`;
  line.value.style.width = `${el.getBoundingClientRect().width}px`;
}

const { logEvent } = useTelemetry();

onMounted(changeTab);
</script>
