<script lang="ts" setup>
import CommonButton from "@/components/ui/CommonButton.vue";
</script>

<template>
  <div class="flex flex-row gap-6">
    <div class="flex flex-col gap-12 rounded-md bg-grey-400 p-10 w-full">
      <!-- Upper Section -->
      <div class="flex flex-row">
        <div class="flex flex-col flex-grow">
          <span class="text-500 text-light">All Voters</span>
          <span class="text-300 text-grey-100">X accounts voted</span>
        </div>
        <CommonButton class="!bg-grey-200">Voters breakdown</CommonButton>
      </div>
      <!-- Lower Section -->
      <div class="flex flex-row gap-12 w-full justify-between">
        <div>pi chart</div>
        <div class="flex flex-col gap-6">
          <span>yes</span>
          <span>vote</span>
        </div>
        <div class="flex flex-col gap-6">
          <span>no</span>
          <span>abstain</span>
        </div>
      </div>
    </div>
  </div>
</template>
