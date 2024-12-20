<script setup lang="ts">
import { pixelUnits } from '@e-plus-ui/utils';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
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
  <div class="cz-h-full cz-relative" :style="{ '--layout-aside-width': asideWidth }">
    <ElScrollbar class="!cz-h-full cz-layout-scroll">
      <EpMenu class="cz-h-full cz-layout-aside" :menu-config="menus" />
    </ElScrollbar>
    <div
      class="cz-absolute cz-top-1/2 cz-border cz-bg-[var(--el-color-white)] cz-border-[var(--el-border-color-light)] cz-flex cz-items-center cz-justify-center cz-rounded-full cz-right-0 cz-z-10 cz-h-6 cz-w-6 cz-translate-x-1/2"
    >
      <ElIcon class="cz-cursor-pointer" @click="isFoldMenu = !isFoldMenu">
        <ArrowLeft v-show="!isFoldMenu" />
        <ArrowRight v-show="isFoldMenu" />
      </ElIcon>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
