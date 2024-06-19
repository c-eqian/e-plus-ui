<script setup lang="ts">
// import type { PropType } from 'vue';

defineOptions({
  name: 'EpCard',
});
</script>

<template>
  <div class="cz-card cz-min-h-96 cz-p-3 cz-shadow-base cz-rounded-2xl">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import 'index';
</style>
