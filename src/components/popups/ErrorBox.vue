<script setup lang="ts">
import { ref } from "vue";
import { bus } from "@/bus";

import ModalWrap from "@/components/common/ModalWrap.vue";

const isOpen = ref(false);

const refresh = () => {
  window.location.reload();
};

bus.on("error", () => {
  isOpen.value = true;
});
</script>

<template>
  <div class="relative">
    <ModalWrap :visible="isOpen" :is-empty="true" @back="isOpen = false">
      <div class="bg-grey-400 w-full rounded-md max-h-screen overflow-auto">
        <div class="px-10 py-12 bg-grey-400 rounded w-screen max-w-[25rem]">
          <div class="flex flex-col gap-6 relative">
            <span class="text-gradient font-termina text-700 text-center">{{ $t("components.ErrorBox.title") }}</span>
            <div class="flex flex-col gap-10">
              <div>
                <div class="flex flex-col gap-10">
                  <p class="text-grey-100 text-center text-200">
                    {{ $t("components.ErrorBox.message") }}
                  </p>
                </div>
              </div>

              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-4">
                  <button
                    class="px-6 py-4 rounded text-light text-300 text-center bg-grey-200 w-full hover:opacity-50 duration-150 ease-in-out"
                    @click="refresh()"
                  >
                    {{ $t("components.ErrorBox.cta") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrap>
  </div>
</template>
