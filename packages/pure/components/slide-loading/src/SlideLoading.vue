<script setup lang="ts">
import { computed } from 'vue';
import type { SlideLoadingProps } from './type';

defineOptions({
  name: 'EpSlideLoading'
});
const props = withDefaults(defineProps<SlideLoadingProps>(), {
  loading: false,
  loadingType: 'wave'
});
const isLoadingValue = computed(() => props.loading);
</script>

<template>
  <div v-if="isLoadingValue" class="ep-loading-container">
    <div
      v-for="item in [1, 2, 3, 4]"
      :key="item"
      class="ep-loading-bar"
      :class="`ep-loading-bar-${item} ${props.loadingType}`"
    />
  </div>
</template>

<style scoped lang="scss"></style>
