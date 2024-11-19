<script setup lang="ts">
import EpMenu from '../../menu';
import { ElScrollbar, ElIcon } from 'element-plus';
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
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
  <ElScrollbar class="!cz-h-full cz-layout-scroll">
    <div class="cz-h-full cz-relative">
      <EpMenu class="cz-h-full cz-layout-aside" :menu-config="menus"> </EpMenu>
      <div class="cz-absolute cz-top-1/2 cz-right-0 cz-z-10">
        <ElIcon class="cz-cursor-pointer" @click="isFoldMenu = !isFoldMenu">
          <DArrowLeft v-show="!isFoldMenu" />
          <DArrowRight v-show="isFoldMenu" />
        </ElIcon>
      </div>
    </div>
  </ElScrollbar>
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
