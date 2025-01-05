<script setup lang="ts">
import {
  EpAdaptPage,
  useCalcElHeight,
  type AdaptPageProps
} from '@e-plus-ui/element/components/adapt-page';
import { EpFormSchema, useFormSchema } from '@e-plus-ui/element/components/form-schema';
import { EpTable } from '@e-plus-ui/element/components/table';
import { tryExecPromise } from '@e-plus-ui/utils';
import { isFunction } from '@eqian/utils-vue';
import { computed, nextTick, onMounted, ref, useTemplateRef } from 'vue';
import type { FormTableEmits, FormTableProps } from './type';
const props = defineProps<FormTableProps>();
const emits = defineEmits<FormTableEmits>();
const formSchema = computed(() => props.formSchema);
const tableColumns = computed(() => props.tableConfig.columns);
const tableData = ref<object[]>([]);
const tableLoading = ref<boolean>(false);
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
const { registry } = useFormSchema();
const { api, params, requestHandler, responseHandler } = props;
const handleSearch = async (...args: any[]) => {
  if (isFunction(api)) {
    let _params: any = {};
    if (isFunction(requestHandler)) {
      _params = await tryExecPromise(requestHandler, ...args);
    }
    let data = await tryExecPromise(api, { ...params, ..._params });
    if (isFunction(responseHandler)) {
      data = await tryExecPromise(responseHandler, data);
    }
    tableData.value = data.list ?? [];
  } else {
    emits('search', ...args);
  }
};
const handleReset = (...args: any[]) => {
  emits('reset', ...args);
};
defineExpose({});
</script>

<template>
  <EpAdaptPage :config="config">
    <template v-if="$slots.header || props.title" #header>
      <slot v-if="$slots.header" name="header"></slot>
      <h3 v-else-if="props.title">{{ props.title }}</h3>
    </template>
    <template v-if="$slots.toolbar" #toolbar>
      <slot name="toolbar"></slot>
    </template>
    <template #search>
      <slot v-if="$slots.search" name="search"></slot>
      <EpFormSchema
        v-else
        :config="formSchema"
        @search="handleSearch"
        @reset="handleReset"
        @registry="registry"
      ></EpFormSchema>
    </template>
    <template #content="{ height }">
      <slot v-if="$slots.content" name="content" :height="height" :table-data="tableData"></slot>
      <EpTable
        v-else
        ref="tableRef"
        :data="tableData"
        :columns="tableColumns"
        :loading="tableLoading"
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
