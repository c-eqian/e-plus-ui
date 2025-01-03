<script setup lang="ts">
import { EpAdaptPage } from '@e-plus-ui/element/components/adapt-page';
import { EpFormSchema } from '@e-plus-ui/element/components/form-schema';
import { EpTable } from '@e-plus-ui/element/components/table';
import { computed } from 'vue';
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
</script>

<template>
  <EpAdaptPage>
    <template #search>
      <slot v-if="$slots.search" name="search"></slot>
      <EpFormSchema v-else :config="formSchema"></EpFormSchema>
    </template>
    <template #content="{ height }">
      <slot v-if="$slots.content" name="content" :height="height"></slot>
      <EpTable
        v-else
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
