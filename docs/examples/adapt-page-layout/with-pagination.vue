<template>
  <div class="play">
    <div class="cz-w-full cz-h-full cz-bg-white cz-p-3">
      <ep-adapt-page-layout>
        <template #search>
          <Form></Form>
        </template>
        <template #content="{ height }">
          <ep-table :height="height" :data="tableData" :column> </ep-table>
        </template>
        <template #footer>
          <ep-pagination :total="100"></ep-pagination>
        </template>
      </ep-adapt-page-layout>
    </div>
  </div>
</template>
<script setup lang="ts">
import Form from './form.vue';
import { defineTableColumns } from 'e-plus-ui';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
const column = defineTableColumns<(typeof tableData)[0]>([
  {
    label: '名称',
    prop: 'name',
  },
  {
    label: '日期',
    prop: 'date',
  },
  {
    label: '地址',
    prop: 'address',
  },
]);
</script>
<style lang="less" scoped>
.play {
  padding: 10px;
  width: 100%;
  height: 600px;
}
</style>
