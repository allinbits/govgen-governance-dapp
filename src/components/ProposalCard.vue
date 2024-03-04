<template>
  <div>
    <div class="flex flex-col flex-grow gap-3 px-8 py-6">
      <div class="flex flex-row flex-grow">
        <slot name="header"></slot>
      </div>
      <div class="flex flex-col flex-grow">
        <slot></slot>
      </div>
      <div class="flex flex-row flex-grow">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
