<script setup lang="ts">
import { computed } from 'vue';
import type { SkeletonProps } from './type';
defineOptions({
  name: 'EpSkeleton'
});
const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: false
});
const loading = computed(() => props.loading);
</script>

<template>
  <div class="ep-w-full ep-h-full">
    <div
      v-if="loading"
      class="ep-border ep-border-blue-300 ep-shadow ep-rounded-md ep-p-4 ep-max-w-sm ep-w-full ep-mx-auto"
    >
      <div class="ep-animate-pulse ep-flex ep-space-x-4">
        <div class="ep-rounded-full ep-bg-slate-700 ep-h-10 ep-w-10" />
        <div class="ep-flex-1 ep-space-y-6 ep-py-1">
          <div class="ep-h-2 ep-bg-slate-700 ep-rounded" />
          <div class="ep-space-y-3">
            <div class="ep-grid ep-grid-cols-3 ep-gap-4">
              <div class="ep-h-2 ep-bg-slate-700 ep-rounded ep-col-span-2" />
              <div class="ep-h-2 ep-bg-slate-700 ep-rounded ep-col-span-1" />
            </div>
            <div class="ep-h-2 ep-bg-slate-700 ep-rounded" />
          </div>
        </div>
      </div>
    </div>
    <slot v-else name="default" />
  </div>
</template>

<style scoped lang="scss"></style>
