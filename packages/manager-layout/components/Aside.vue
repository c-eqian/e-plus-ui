<script setup lang="ts">
import EpMenu from '../../menu';
import { ElScrollbar, ElIcon } from 'element-plus';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import { computed, type ComputedRef, inject, ref, unref } from 'vue';
import { __MANAGER_LAYOUT_KEY__ } from '../constants';
import { ManagerBasic } from '../type';
import { pixelUnits } from '../../utils/pixelUnits';
const props = inject<ComputedRef<ManagerBasic>>(__MANAGER_LAYOUT_KEY__);
const isFoldMenu = ref(false);
const menus = computed(() => {
  return {
    ...unref(props)?.menus,
    collapse: isFoldMenu.value,
  };
});
const asideWidth = computed(() => {
  return pixelUnits(unref(props)?.asideWidth ?? '200px');
});
</script>

<template>
  <div class="cz-h-full cz-relative">
    <ElScrollbar class="!cz-h-full cz-layout-scroll">
      <EpMenu class="cz-h-full cz-layout-aside" :menu-config="menus"> </EpMenu>
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

<style scoped lang="scss">
:deep(.el-scrollbar__wrap) {
  height: 100% !important;
}
:deep(.el-scrollbar__wrap > *) {
  height: 100% !important;
}
:deep(.cz-layout-aside:not(.el-menu--collapse)) {
  width: v-bind('asideWidth');
}
</style>
