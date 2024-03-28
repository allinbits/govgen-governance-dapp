<template>
  <DropDown v-model="tabIdx" :values="options" @select="changeTab" class="md:hidden" v-bind="$attrs" />

  <div class="hidden md:flex flex-col w-full pt-12 relative" v-bind="$attrs">
    <div ref="toggler" class="flex flex-row w-full gap-6 md:gap-12 relative" role="radiogroup" aria-label="Switch">
      <!-- Tabs -->
      <div
        v-for="(option, index) in options"
        :key="option"
        :ref="(el) => tabRefs.push(el as any)"
        class="z-2"
        @mouseover="changeTab(index, false)"
      >
        <input
          v-bind="$attrs"
          :id="id + option"
          :name="id"
          :value="option"
          type="radio"
          class="hidden peer"
          @click="changeTab(index)"
        />
        <label
          ref="togglerOption"
          :for="id + option"
          class="flex text-grey-50 py-1.5 text-500 cursor-pointer peer-checked:text-light ease-in-out duration-300"
        >
          {{ $t("ui.tabs." + option) }}
        </label>
      </div>
    </div>
    <!-- Movable Line -->
    <div class="flex flex-row w-full mt-4 border-b-2 border-grey-300">
      <div ref="line" class="h-1 w-1 bg-light rounded-t transition-all duration-200 ease-in-out"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import DropDown from "./DropDown.vue";

type Props = {
  modelValue?: string | number;
  id: string;
  options: string[];
};

const tabSelected = defineModel<string>();
const toggler = ref<HTMLElement | null>(null);
const tabRefs = ref<HTMLElement[]>([]);
const line = ref<HTMLElement | null>(null);
const tabIdx = ref<number>(0);

const props = withDefaults(defineProps<Props>(), { modelValue: undefined });
function changeTab(idx: number = 0, isClicked = true) {
  tabIdx.value = idx;
  if (isClicked) tabSelected.value = props.options[tabIdx.value];
  const el = tabRefs.value[tabIdx.value] as HTMLElement;
  if (!el || !line.value) {
    return;
  }

  line.value.style.marginLeft = `${el.offsetLeft}px`;
  line.value.style.width = `${el.getBoundingClientRect().width}px`;
}

onMounted(changeTab);
</script>
