<template>
  <div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-row">
        <slot name="header"></slot>
      </div>
      <div class="flex flex-col">
        <slot></slot>
      </div>
      <div class="flex flex-row">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
