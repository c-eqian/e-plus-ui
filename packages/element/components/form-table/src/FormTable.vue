<script setup lang="ts" generic="T = any">
import {
  EpAdaptPage,
  useCalcElHeight,
  type AdaptPageProps
} from '@e-plus-ui/element/components/adapt-page';
import { EpFormSchema, useFormSchema } from '@e-plus-ui/element/components/form-schema';
import { EpTable, useEpTable } from '@e-plus-ui/element/components/table';
import { useTableList } from '@e-plus-ui/element/hooks';
import { isFunction, useOmit } from '@eqian/utils-vue';
import {
  computed,
  getCurrentInstance,
  nextTick,
  onBeforeMount,
  onMounted,
  ref,
  unref,
  useSlots,
  useTemplateRef
} from 'vue';
import type { FormTableEmits, FormTableProps } from './type';
import type { Recordable } from '@e-plus-ui/utils';
const props = withDefaults(defineProps<FormTableProps>(), {
  listKey: 'list',
  totalKey: 'total',
  pageNumKey: 'pageNum',
  pageSizeKey: 'pageSize',
  immediate: true
});
const propsRefs = ref<FormTableProps>(props);
const selected = ref<any[]>([]);
const computedRefs = computed({
  get() {
    return propsRefs.value;
  },
  set(v) {
    propsRefs.value = v;
  }
});
const _formSchema = computed(() => computedRefs.value.formSchema);
const tableColumns = computed(() => computedRefs.value.tableSchema?.columns);
const emits = defineEmits<FormTableEmits>();
const tableProps = computed(() => {
  if (!computedRefs.value.tableSchema) return computedRefs.value.tableSchema;
  const { columns, ...tProps } = computedRefs.value.tableSchema;
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
const { tableData, tableLoading, tableTotal, params, handleSearch, handleReset, updateApi } =
  useTableList({
    request: {
      params: {
        [computedRefs.value.pageNumKey as string]: 1,
        [computedRefs.value.pageSizeKey as string]: 10,
        ...computedRefs.value.params
      },
      pageNumKey: unref(computedRefs.value.pageNumKey),
      pageSizeKey: unref(computedRefs.value.pageSizeKey),
      handleParams: $params => {
        if (isFunction(computedRefs.value.requestHandler)) {
          return computedRefs.value.requestHandler($params);
        }
        return $params;
      }
    },
    response: {
      responseHandler: computedRefs.value.responseHandler,
      listKey: unref(computedRefs.value.listKey),
      totalKey: unref(computedRefs.value.totalKey)
    }
  });
const tableRef = useTemplateRef('tableRef');
const config = ref<AdaptPageProps['config']>({
  extraHeight: 0
});
const calcPaginationStyle = () => {
  if (tableRef.value && tableProps.value && tableProps.value.pagination) {
    const paginationDom = tableRef.value.$el?.querySelector('.ep-table-pagination');
    if (paginationDom) {
      config.value!.extraHeight = useCalcElHeight(paginationDom)._h;
    }
  }
};
const getInstance = () => {
  return getCurrentInstance()!;
};
onBeforeMount(() => {
  emits('registry', getInstance());
});
onMounted(() => {
  if (isFunction(computedRefs.value.api)) {
    updateApi(computedRefs.value.api);
  }
  if (unref(computedRefs.value.immediate)) {
    handleReset();
  }
  nextTick(() => {
    calcPaginationStyle();
  });
});
const { registry, ...formSchemaExpose } = useFormSchema();
const { registry: registryTable, ...tableExpose } = useEpTable();
const handleSearchClick = async (args: any) => {
  params.value = { ...params.value, ...args };
  await handleSearch();
};
const handleCurrentPage = async () => {
  await handleSearch();
};
const searchTable = (params?: Recordable) => {
  return handleSearchClick(params);
};
const $setFormTableProps = ($props: FormTableProps) => {
  computedRefs.value = useOmit($props, ['api']);
  if (isFunction($props.api)) {
    updateApi($props.api);
  }
};
const handleChange = (list: any[]) => {
  selected.value = list;
};
const slots = useSlots();
/**
 * 获取组件插槽
 * @param name
 */
const getParseFormSlots = (name: 'table' | 'form' = 'table') => {
  return Object.keys(slots).filter(key => key.startsWith(name));
};
const replaceSlotsKey = (key: string) => {
  return key.replace('form', '').replace('table', '').replace('-', '');
};
defineExpose({
  resetTable: handleReset,
  searchTable,
  $setFormTableProps,
  getFormSchemaInstance: () => formSchemaExpose,
  getTableInstance: () => tableExpose
});
</script>

<template>
  <EpAdaptPage :config="config">
    <template v-if="!!$slots.header || title" #header>
      <slot v-if="!!$slots.header" name="header"></slot>
      <h3 v-else-if="title">{{ title }}</h3>
    </template>
    <template v-if="!!$slots.toolbar" #toolbar>
      <slot name="toolbar"></slot>
    </template>
    <template #search>
      <EpFormSchema
        :config="_formSchema"
        @search="handleSearchClick"
        @reset="handleReset"
        @registry="registry"
      >
        <template
          v-for="slotKey in getParseFormSlots('form')"
          #[replaceSlotsKey(slotKey)]="scope"
          :key="slotKey"
        >
          <slot :name="slotKey" v-bind="scope"></slot>
        </template>
      </EpFormSchema>
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
        @registry="registryTable"
        @selection-change="handleChange"
        @page-change="handleCurrentPage"
      >
        <template
          v-for="slotKey in getParseFormSlots('table')"
          #[replaceSlotsKey(slotKey)]="scope"
          :key="slotKey"
        >
          <slot :name="slotKey" v-bind="scope"></slot>
        </template>
      </EpTable>
    </template>
    <template v-if="!!$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </EpAdaptPage>
</template>

<style scoped lang="scss"></style>
