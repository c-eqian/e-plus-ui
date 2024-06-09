<script setup lang="ts">
// import type { PropType } from 'vue';
defineOptions({
  name: 'EpCard',
});
</script>

<template>
  <div class="cz-h-full cz-p-5">
    <div class="cz-min-h-96 cz-shadow-md cz-rounded-2xl">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
