<script setup lang="ts">
import type { SkeletonProps } from './type';
import { computed } from 'vue';

const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: false,
});
const loading = computed(() => props.loading);
</script>

<template>
  <div class="cz-w-full cz-h-full">
    <div
      v-if="loading"
      class="cz-border cz-border-blue-300 cz-shadow cz-rounded-md cz-p-4 cz-max-w-sm cz-w-full cz-mx-auto"
    >
      <div class="cz-animate-pulse cz-flex cz-space-x-4">
        <div class="cz-rounded-full cz-bg-slate-700 cz-h-10 cz-w-10"></div>
        <div class="cz-flex-1 cz-space-y-6 cz-py-1">
          <div class="cz-h-2 cz-bg-slate-700 cz-rounded"></div>
          <div class="cz-space-y-3">
            <div class="cz-grid cz-grid-cols-3 cz-gap-4">
              <div
                class="cz-h-2 cz-bg-slate-700 cz-rounded cz-col-span-2"
              ></div>
              <div
                class="cz-h-2 cz-bg-slate-700 cz-rounded cz-col-span-1"
              ></div>
            </div>
            <div class="cz-h-2 cz-bg-slate-700 cz-rounded"></div>
          </div>
        </div>
      </div>
    </div>
    <slot v-else name="default"></slot>
  </div>
</template>

<style scoped lang="scss"></style>
