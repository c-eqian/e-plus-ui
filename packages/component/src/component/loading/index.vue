<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { LoadingType } from './type';

defineOptions({
  name: 'EpLoading',
});
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<LoadingType>,
    default: 'wave',
  },
});
const isLoadingValue = computed(() => props.isLoading);
</script>

<template>
  <div v-if="isLoadingValue" class="cz-loading-container">
    <div
      v-for="item in [1, 2, 3, 4]"
      :key="item"
      class="cz-loading-bar"
      :class="`cz-loading-bar-${item} ${props.type}`"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'index';
</style>
