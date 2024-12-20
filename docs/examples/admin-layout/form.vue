<script setup lang="ts">
import { defineFormSchema } from 'e-plus-ui';
type FormModel = {
  name: string;
  cascade: string;
  render: string;
  test: string;
  test1: string;
  test2: string;
};
const handleSearch = (p: any) => {
  console.log(p);
};
const searchSchema = defineFormSchema<FormModel>({
  isSearch: 1,
  labelWidth: '90px',
  columns: 3,
  items: [
    {
      type: 'input',
      label: '框架名称',
      defaultValue: '哈哈哈哈',
      prop: 'name',
      col: 12
    },
    {
      type: 'input',
      label: '框架名称',
      prop: 'test2',
      col: 12
    },
    {
      type: 'input',
      label: '技术组',
      prop: 'render'
    },
    {
      type: 'input',
      label: '技术组1',
      prop: 'test'
    },
    {
      type: 'input',
      label: '技术组2',
      prop: 'test1'
    }
  ]
});
</script>

<template>
  <div>
    <ep-form-schema :config="searchSchema" @search="handleSearch" />
  </div>
</template>

<style lang="scss"></style>
