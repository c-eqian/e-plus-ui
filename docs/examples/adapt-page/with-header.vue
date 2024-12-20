<script setup lang="ts">
import { defineTableColumns } from 'e-plus-ui';
import Form from './form.vue';
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
  },
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
  },
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
  },
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
const column = defineTableColumns<(typeof tableData)[0]>([
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
  <div class="play">
    <div class="cz-w-full cz-h-full cz-bg-white cz-p-3">
      <ep-adapt-page>
        <template #header>
          <div>
            <h6>反馈管理</h6>
          </div>
        </template>
        <template #search>
          <Form />
        </template>
        <template #content="{ height }">
          <ep-table :height="height" :data="tableData" :column />
        </template>
      </ep-adapt-page>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.play {
  padding: 10px;
  width: 100%;
  height: 600px;
}
</style>
