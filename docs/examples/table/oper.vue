<script setup lang="ts">
import { defineTableColumns, EpTable, useDialogModel } from 'e-plus-ui';
import { ElMessage } from 'element-plus';
import { h, ref } from 'vue';
import FormDialog from './dialog-form.vue';
const formDialogRef = ref<InstanceType<typeof FormDialog>>();
const rowData = ref<any>({});
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom'
  },
  {
    date: '2018-07-10',
    name: '张媃'
  }
]);
const columns = defineTableColumns<(typeof tableData.value)[0]>([
  {
    label: '名称',
    prop: 'name',
    // 设置必填校验
    rules: true
  },
  {
    label: '日期',
    prop: 'date'
  },
  {
    width: 280,
    type: 'operation',
    label: '操作',
    fixed: 'right'
  }
]);
const { open } = useDialogModel({
  render: () => {
    return h(FormDialog, { ref: (_ref: any) => (formDialogRef.value = _ref) });
  },
  footerProps: {
    isUseConfirmLoading: true
  },
  async onConfirmed() {
    await formDialogRef.value?.validate();
  },
  onOpened() {
    formDialogRef.value?.setFieldsValues(rowData.value);
  }
});
const handleClickedEdit = (row: any, index: number) => {
  rowData.value = row;
  open();
  ElMessage.success(`修改-${row.name}-${index}`);
};
const handleClickedDelete = (row: any, index: number) => {
  ElMessage.success(`删除-${row.name}-${index}`);
};
const handleClickedAdd = (row: any, index: number) => {
  ElMessage.success(`新增-${row.name}-${index}`);
};
const handleClickedView = (row: any, index: number) => {
  ElMessage.success(`查看-${row.name}-${index}`);
};
</script>

<template>
  <ep-table
    :data="tableData"
    :columns
    @click-row-edit="handleClickedEdit"
    @click-row-add="handleClickedAdd"
    @click-row-delete="handleClickedDelete"
    @click-row-view="handleClickedView"
  />
</template>

<style scoped lang="scss"></style>
