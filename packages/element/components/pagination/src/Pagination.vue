<script setup lang="ts">
import { ElPagination } from 'element-plus';
import { computed } from 'vue';
import type { PaginationProps } from './type';
defineOptions({
  name: 'EpPagination'
});
const props = withDefaults(defineProps<PaginationProps>(), {
  page: 1,
  limit: 20,
  size: 'default',
  pageSizes: () => [10, 20, 30, 50],
  pagerCount: 5,
  layout: 'total, sizes, prev, pager, next, jumper',
  background: true,
  hidden: false
});

const emit = defineEmits(['update:page', 'pageChange', 'update:limit']);
const currentPage = computed({
  get() {
    return props.page;
  },
  set(val) {
    emit('update:page', val);
  }
});
const pageSize = computed({
  get() {
    return props.limit;
  },
  set(val) {
    emit('update:limit', val);
  }
});
function handleSizeChange(val: any) {
  if (currentPage.value * val > props.total) {
    currentPage.value = 1;
  }
  emit('pageChange', { page: currentPage.value, limit: val });
}
function handleCurrentChange(val: number) {
  emit('pageChange', { page: val, limit: pageSize.value });
}
</script>

<template>
  <ElPagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :size="size"
    :background="background"
    :layout="layout"
    :page-sizes="pageSizes"
    :pager-count="pagerCount"
    :total="total"
    v-bind="$attrs"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<style scoped lang="scss"></style>
