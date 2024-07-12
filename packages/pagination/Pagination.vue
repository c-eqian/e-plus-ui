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

<script setup lang="ts">
import { ElPagination } from 'element-plus';
import { computed } from 'vue';
import type { IPaginationProps } from './type';

const props = withDefaults(defineProps<IPaginationProps>(), {
  page: 1,
  limit: 20,
  size: 'small',
  pageSizes: () => [10, 20, 30, 50],
  pagerCount: document.body.clientWidth < 992 ? 5 : 7,
  layout: 'total, sizes, prev, pager, next, jumper',
  background: true,
  hidden: false,
});

const emit = defineEmits(['update:page', 'pagination', 'update:limit']);
const currentPage = computed({
  get() {
    return props.page;
  },
  set(val) {
    emit('update:page', val);
  },
});
const pageSize = computed({
  get() {
    return props.limit;
  },
  set(val) {
    emit('update:limit', val);
  },
});
function handleSizeChange(val: any) {
  if (currentPage.value * val > props.total) {
    currentPage.value = 1;
  }
  emit('pagination', { page: currentPage.value, limit: val });
}
function handleCurrentChange(val: number) {
  emit('pagination', { page: val, limit: pageSize.value });
}
</script>

<style scoped lang="scss">
.pagination-container.hidden {
  display: none;
}
</style>
