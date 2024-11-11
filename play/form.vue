<template>
  <div>
    <ep-card title="搜索" class="cz-w-1/2">
      <div class="cz-py-4">
        <el-button @click="handleReset">重置表单</el-button>
      </div>
      <ep-form-schema @search="handleSearch" :config="searchSchema">
      </ep-form-schema>
    </ep-card>
  </div>
</template>
<script setup lang="ts">
import { defineFormSchema, useFormSchema } from '../packages';
const { resetFields } = useFormSchema();
interface FormModel {
  name: string;
  cascade: string;
  render: string;
  test: string;
  test1: string;
  test2: string;
}
const handleReset = () => {
  resetFields();
};
const handleSearch = (p: any) => {
  console.log(p);
};
const searchSchema = defineFormSchema<FormModel>({
  isSearch: 2,
  labelWidth: '90px',
  columns: 2,
  items: [
    {
      type: 'input',
      label: '框架名称',
      defaultValue: '哈哈哈哈',
      prop: 'name',
      col: 12,
    },
    {
      type: 'input',
      label: '框架名称',
      prop: 'test2',
      col: 12,
    },
    {
      type: 'input',
      label: '技术组',
      prop: 'render',
    },
    {
      type: 'input',
      label: '技术组1',
      prop: 'test',
    },
    {
      type: 'input',
      label: '技术组2',
      prop: 'test1',
    },
  ],
});
</script>
<style lang="less"></style>
