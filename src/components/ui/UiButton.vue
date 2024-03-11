<script setup type="ts"></script>
<template>
  <div
    class="flex flex-inline px-6 py-3 align-left rounded-lg bg-button text-light hover:bg-light hover:text-dark cursor-pointer items-center"
  >
    <slot name="icon"> </slot>
    <slot></slot>
  </div>
</template>
