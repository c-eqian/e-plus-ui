<script setup lang="ts">
import { defineTableColumns } from 'e-plus-ui';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
const epTableRef = ref();
const selectionList = ref<any[]>([]);
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    status: '1'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    status: '1'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    status: '0'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    status: '1'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    status: '0'
  }
]);
const column = defineTableColumns<(typeof tableData.value)[0]>([
  {
    type: 'selection',
    width: '50',
    label: ''
  },
  {
    label: '名称',
    prop: 'name',
    // 设置必填校验
    rules: true
  },
  {
    label: '状态',
    prop: 'status',
    dictEnum: [
      {
        value: '1',
        label: '成功',
        tagType: 'primary'
      },
      {
        value: '0',
        label: '失败',
        tagType: 'danger'
      }
    ]
  },
  {
    label: '日期',
    prop: 'date'
  },
  {
    width: 280,
    type: 'operation',
    label: '操作',
    operationType: ['delete'],
    fixed: 'right'
  }
]);
const handleClickedDelete = (row, index) => {
  tableData.value.splice(index, 1);
  ElMessage.success(`删除-${row.name}-${index}`);
};
const handleClickSelect = (selection: any[]) => {
  selectionList.value = selection;
};
const handleClear = () => {
  epTableRef.value.clearSelection();
};
</script>

<template>
  <div>
    <el-button @click="handleClear">清空</el-button>
    <ep-table
      ref="epTableRef"
      :data="tableData"
      :column
      @click-row-delete="handleClickedDelete"
      @selection-change="handleClickSelect"
    />
  </div>
</template>

<style scoped lang="scss"></style>
