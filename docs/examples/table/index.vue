<script setup lang="ts">
import { defineTableColumns } from 'e-plus-ui';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
];
const columns = defineTableColumns<(typeof tableData)[0]>([
  {
    label: '名称',
    prop: 'name'
  },
  {
    label: '日期',
    prop: 'date'
  },
  {
    label: '地址',
    prop: 'address'
  }
]);
</script>

<template>
  <ep-table :data="tableData" :columns />
</template>

<style scoped lang="scss"></style>
