<script setup lang="ts">
import ModalBox from "@/components/common/ModalBox.vue";

const visible = defineModel<boolean>();
</script>

<template>
  <div class="relative">
    <ModalBox v-model="visible" title="Description" @close="visible = false">
      <div class="p-12">
        <slot></slot>
      </div>
    </ModalBox>
  </div>
</template>
