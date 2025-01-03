<script setup lang="ts">
import {
  EpAdaptPage,
  useCalcElHeight,
  type AdaptPageProps
} from '@e-plus-ui/element/components/adapt-page';
import { EpFormSchema } from '@e-plus-ui/element/components/form-schema';
import { EpTable } from '@e-plus-ui/element/components/table';
import { computed, nextTick, onMounted, ref, useTemplateRef } from 'vue';
import type { FormTableProps } from './type';
const props = defineProps<FormTableProps>();
const formSchema = computed(() => props.formSchema);
const tableColumns = computed(() => props.tableConfig.columns);
const tableData = computed(() => props.tableData);
const tableProps = computed(() => {
  const { columns, data, column, ...tProps } = props.tableConfig;
  return tProps;
});
defineSlots<{
  /**
   * 搜索表单插槽
   * @param args
   */
  search: (...args: any) => any;
  /**
   * 表格内容插槽
   * @param args
   */
  content: (...args: any) => any;
  /**
   * 底部插槽
   * @param args
   */
  footer: (...args: any) => any;
}>();
defineOptions({
  name: 'EpFormTable'
});
const tableRef = useTemplateRef('tableRef');
const config = ref<AdaptPageProps['config']>({
  extraHeight: 0
});
const calcPaginationStyle = () => {
  if (tableRef.value && tableProps.value.pagination) {
    const paginationDom = tableRef.value.$el?.querySelector('.ep-table-pagination');
    if (paginationDom) {
      config.value!.extraHeight = useCalcElHeight(paginationDom)._h;
    }
  }
};
onMounted(() => {
  nextTick(() => {
    calcPaginationStyle();
  });
});
</script>

<template>
  <EpAdaptPage :config="config">
    <template #search>
      <slot v-if="$slots.search" name="search"></slot>
      <EpFormSchema v-else :config="formSchema"></EpFormSchema>
    </template>
    <template #content="{ height }">
      <slot v-if="$slots.content" name="content" :height="height"></slot>
      <EpTable
        v-else
        ref="tableRef"
        :data="tableData"
        :columns="tableColumns"
        :height="height"
        v-bind="{ ...$attrs, ...tableProps }"
      ></EpTable>
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </EpAdaptPage>
</template>

<style scoped lang="scss"></style>
