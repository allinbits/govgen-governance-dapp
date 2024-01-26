<script setup lang="ts">
import { ref } from 'vue'

let world = ref('World')
</script>

<template>
  <div>
    <h1><div class="world" /></h1>
    <h2>Hello {{ world }}</h2>
  </div>
</template>

<style scoped>
@keyframes WorldEmoji {
  0% {
    content: '\01F30D';
  }
  33% {
    content: '\01F30E';
  }
  66% {
    content: '\01F30F';
  }
}

.world::before {
  content: '\01F30D';
}

.world::before {
  animation: WorldEmoji 2s linear infinite alternate;
}
</style>
