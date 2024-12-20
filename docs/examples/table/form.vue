<script setup lang="ts">
import { defineTableColumns } from 'e-plus-ui';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
const epTableRef = ref();
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom'
  },
  {
    date: '2016-05-02',
    name: 'Tom'
  }
]);
const column = defineTableColumns<(typeof tableData.value)[0]>([
  {
    label: '名称',
    prop: 'name',
    // 设置必填校验
    rules: true
  },
  {
    label: '日期',
    prop: 'date'
  }
]);
const handleEdit = async () => {
  console.log(tableData);
  await epTableRef.value?.validate();
  ElMessage.success('检验通过');
};
</script>

<template>
  <el-button type="primary" @click="handleEdit">提交</el-button>
  <ep-table ref="epTableRef" use-form-validation :data="tableData" :column>
    <template #name="scope">
      <el-input v-model="scope.row.name" clearable />
    </template>
  </ep-table>
</template>

<style scoped lang="scss"></style>
