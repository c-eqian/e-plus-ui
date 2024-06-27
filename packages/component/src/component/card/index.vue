<script setup lang="ts">
// import type { PropType } from 'vue';

import { CardProps } from './type';
import { computed } from 'vue';

defineOptions({
  name: 'EpCard',
});
const props = withDefaults(defineProps<CardProps>(), {});
const title = computed(() => props.title);
</script>

<template>
  <div class="cz-card cz-min-h-96 cz-p-3 cz-shadow-base cz-rounded-2xl">
    <div class="cz-border-b cz-p-4 cz-my-2">
      <div v-if="title">{{ title }}</div>
      <slot name="title"> </slot>
    </div>
    <slot name="header"> </slot>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import 'index';
</style>
