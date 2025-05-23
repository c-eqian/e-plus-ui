<script setup lang="ts">
import {
  EpAdaptPage,
  useCalcElHeight,
  type AdaptPageProps
} from '@e-plus-ui/element/components/adapt-page';
import { EpFormSchema, useFormSchema } from '@e-plus-ui/element/components/form-schema';
import { EpTable } from '@e-plus-ui/element/components/table';
import { isFunction, useTableList } from '@eqian/utils-vue';
import { computed, nextTick, onMounted, ref, useTemplateRef } from 'vue';
import type { FormTableProps } from './type';
const props = withDefaults(defineProps<FormTableProps>(), {
  listKey: 'list',
  totalKey: 'total',
  pageNumKey: 'pageNum',
  pageSizeKey: 'pageSize',
  immediate: true
});
const formSchema = computed(() => props.formSchema);
const tableColumns = computed(() => props.tableConfig.columns);
const tableProps = computed(() => {
  const { columns, data, ...tProps } = props.tableConfig;
  return tProps;
});
defineSlots<{
  /**
   * 底部插槽
   * @param args
   */
  footer: (...args: any) => any;
  /**
   * 头部插槽
   * @param args
   */
  header: (...args: any) => any;
  /**
   * 工具栏插槽
   * @param args
   */
  toolbar: (...args: any) => any;
}>();
defineOptions({
  name: 'EpFormTable'
});
const { tableData, tableLoading, tableTotal, params, handleSearch, handleReset } = useTableList({
  request: {
    api: props.api,
    params: {
      [props.pageNumKey]: 1,
      [props.pageSizeKey]: 10,
      ...props.params
    },
    pageNumKey: props.pageNumKey,
    pageSizeKey: props.pageSizeKey,
    handleParams: $params => {
      if (isFunction(props.requestHandler)) {
        return props.requestHandler($params);
      }
      return $params;
    }
  },
  response: {
    responseHandler: props.responseHandler,
    listKey: props.listKey,
    totalKey: props.totalKey
  }
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
  if (props.immediate) {
    handleReset();
  }
  nextTick(() => {
    calcPaginationStyle();
  });
});
const { registry } = useFormSchema();
const handleSearchClick = async (args: any) => {
  params.value = { ...params.value, ...args };
  await handleSearch();
};
const handleCurrentPage = async () => {
  await handleSearch();
};
</script>

<template>
  <EpAdaptPage :config="config">
    <template v-if="!!$slots.header || props.title" #header>
      <slot v-if="!!$slots.header" name="header"></slot>
      <h3 v-else-if="props.title">{{ props.title }}</h3>
    </template>
    <template v-if="!!$slots.toolbar" #toolbar>
      <slot name="toolbar"></slot>
    </template>
    <template #search>
      <EpFormSchema
        :config="formSchema"
        @search="handleSearchClick"
        @reset="handleReset"
        @registry="registry"
      ></EpFormSchema>
    </template>
    <template #content="{ height }">
      <EpTable
        ref="tableRef"
        v-bind="{ ...$attrs, ...tableProps }"
        v-model:pa-limit="params[pageSizeKey] as number"
        v-model:pa-page="params[pageNumKey] as number"
        v-loading="tableLoading"
        :data="tableData"
        :columns="tableColumns"
        pagination
        :pa-total="tableTotal"
        :height="height"
        @page-change="handleCurrentPage"
      ></EpTable>
    </template>
    <template v-if="!!$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </EpAdaptPage>
</template>

<style scoped lang="scss"></style>
