<script setup lang="ts">
  import { defineTableColumns } from 'e-plus-ui'
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: '广电',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: '重庆',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: '湖南',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: '北京',
    },
  ]
  const column = defineTableColumns<typeof tableData[0]>([
    {
      label: '名称',
      prop: 'name',
    },
    {
      label: '日期',
      prop: 'date'
    },
    {
      label: '地址',
      prop: 'address',
      slotKey: 'slotName',
    }
  ])
</script>

<template>
  <ep-table :data="tableData" :column>
<template #name="{row}">
  <div>{{row.name}}-默认插槽</div>
</template>
    <template #slotName="{row}">
      <div>{{row.address}}-自定义插槽名称</div>
    </template>
  </ep-table>
</template>

<style scoped lang="scss">

</style>
