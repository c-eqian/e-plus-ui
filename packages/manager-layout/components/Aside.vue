<script setup lang="ts">
import EpMenu from '../../menu';
import { ElScrollbar } from 'element-plus';
import { computed, type ComputedRef, inject, unref } from 'vue';
import { __MANAGER_LAYOUT_KEY__ } from '../constants';
import { ManagerBasic } from '../type';
const props = inject<ComputedRef<ManagerBasic>>(__MANAGER_LAYOUT_KEY__);
console.log(props?.value);
const menus = computed(() => unref(props)?.menus);
</script>

<template>
  <ElScrollbar class="!cz-h-full cz-layout-scroll">
    <EpMenu class="cz-h-full" :menu-config="menus"> </EpMenu>
  </ElScrollbar>
</template>

<style scoped lang="scss">
:deep(.el-scrollbar__wrap) {
  height: 100% !important;
}
:deep(.el-scrollbar__wrap > *) {
  height: 100% !important;
}
</style>
