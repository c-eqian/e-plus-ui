<script setup lang="ts">
import { defineTableColumns, EpTable } from 'e-plus-ui';
import { ElTableColumn } from 'element-plus';
import { h, ref } from 'vue';
const epTableRef = ref();
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    age: 18,
    address: '深圳'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    age: 18,
    address: '北京'
  }
]);
const columns = defineTableColumns<(typeof tableData.value)[0]>([
  {
    label: '用户信息',
    prop: '',
    render: () => [
      h(ElTableColumn, {
        label: '姓名',
        prop: 'name'
      }),
      h(ElTableColumn, {
        label: '年龄1',
        prop: 'age'
      })
    ]
  },
  {
    label: '日期',
    prop: 'date'
  }
]);
</script>

<template>
  <ep-table ref="epTableRef" :data="tableData" :columns />
</template>

<style scoped lang="scss"></style>
