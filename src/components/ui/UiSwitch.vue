<template>
  <div class="inline-flex border border-grey-300 rounded-full px-0.5">
    <div
      ref="toggler"
      class="switcher relative inline-flex w-full justify-between"
      role="radiogroup"
      aria-label="Switch"
    >
      <div v-for="option in options" :key="option" class="z-2">
        <input
          v-bind="$attrs"
          :id="id + option"
          v-model="model"
          type="radio"
          :name="id"
          :value="option"
          class="hidden peer"
          @click="changeOption(id + option)"
        />
        <label
          ref="togglerOption"
          :for="id + option"
          class="flex text-grey-50 py-1.5 cursor-pointer peer-checked:text-light ease-in-out duration-300"
        >
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive, nextTick, onMounted, watch } from "vue";

interface Props {
  modelValue?: string | number;
  id: string;
  options: string[];
}

interface TabsPos {
  pos: DOMRect;
  id: string;
}

interface State {
  tabsPos: TabsPos[];
  tabsListPos: DOMRect | null;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
});

const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const toggler = ref<HTMLElement | null>(null);
const togglerOption = ref<HTMLLabelElement[] | null>(null);
const state: State = reactive({
  tabsPos: [],
  tabsListPos: null,
});

const changeOption = (idx: string) => {
  const el = state.tabsPos.find((tab: TabsPos) => tab.id === idx);

  if (el && state.tabsListPos && toggler.value) {
    toggler.value.style.setProperty("--mw", `${el.pos.width.toString()}px`);
    toggler.value.style.setProperty("--tx", `${el.pos.left - state.tabsListPos?.left ?? 0}px`);
  }
};

const setBg = () => {
  state.tabsListPos = null;
  state.tabsPos = [];
  nextTick(() => {
    if (togglerOption.value && toggler.value) {
      state.tabsListPos = toggler.value.getBoundingClientRect();
      togglerOption.value.forEach((tab) => {
        state.tabsPos.push({ id: tab.htmlFor, pos: tab.getBoundingClientRect() });
        if (tab.htmlFor === props.id + model.value) changeOption(tab.htmlFor);
      });
    }
  });
};

watch(props.options, () => setBg());
onMounted(() => setBg());
</script>

<style>
.switcher {
  --mw: 0;
  --tx: 0;
}
.switcher::before {
  content: "";
  @apply absolute block visible h-px bottom-0.5 bg-light w-px rounded-full z-1 duration-300 ease-in-out;
  width: var(--mw, 2rem);
  transform: translate3d(var(--tx, 0), 0, 0);
}
</style>
