<script setup lang="ts">
  import * as Ep from 'e-plus-ui';
  console.log(3333, Ep)
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
  ]
  const column = [
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
  ]
</script>

<template>
  <EpTable :data="tableData" :column>

  </EpTable>
</template>

<style scoped lang="scss">

</style>
