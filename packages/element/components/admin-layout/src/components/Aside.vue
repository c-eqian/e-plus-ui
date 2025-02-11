<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@e-plus-ui/icons';
import { pixelUnits } from '@e-plus-ui/utils';
import { ElIcon, ElScrollbar } from 'element-plus';
import { computed, inject, ref, unref, type ComputedRef } from 'vue';
import EpMenu from '../../../menu/src/Menu';
import { __MANAGER_LAYOUT_KEY__ } from '../constants';
import type { AdminBasicProps } from '../type';
const props = inject<ComputedRef<AdminBasicProps>>(__MANAGER_LAYOUT_KEY__);
const isFoldMenu = ref(false);
const menus = computed(() => {
  return {
    ...(unref(props)?.menus ?? ({} as any)),
    collapse: isFoldMenu.value
  };
});
const asideWidth = computed(() => {
  return pixelUnits(unref(props)?.asideWidth ?? '200px');
});
</script>

<template>
  <div class="ep-h-full ep-relative" :style="{ '--layout-aside-width': asideWidth }">
    <ElScrollbar class="!ep-h-full ep-layout-scroll">
      <EpMenu class="ep-h-full ep-layout-aside" :menu-config="menus" />
    </ElScrollbar>
    <div
      class="ep-absolute ep-top-1/2 ep-border ep-bg-white dark:ep-bg-overlay ep-border-[var(--el-border-color-light)] ep-flex ep-items-center ep-justify-center ep-rounded-full ep-right-0 ep-z-10 ep-h-6 ep-w-6 ep-translate-x-1/2"
    >
      <ElIcon class="ep-cursor-pointer" @click="isFoldMenu = !isFoldMenu">
        <ArrowLeft v-show="!isFoldMenu" />
        <ArrowRight v-show="isFoldMenu" />
      </ElIcon>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
