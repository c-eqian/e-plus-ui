<script setup lang="ts">
  import {  defineTableColumns } from 'e-plus-ui'
  import { ref } from 'vue'
  const advTableRef = ref()
  const tableData = ref([
    {
      date: '2016-05-03',
      name: 'Tom',
    },
    {
      date: '2016-05-02',
      name: 'Tom'
    }
  ])
  const column = defineTableColumns<typeof tableData.value[0]>([
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
  ])
  const handleEdit = async () =>{
    console.log(tableData)
   await advTableRef.value?.validate()
  }
</script>

<template>
  <el-button type="primary" @click="handleEdit">提交</el-button>
  <EpTable
    ref="advTableRef"
    use-form-validation
    :data="tableData"
    :column
  >
    <template #name="scope">
      <el-input clearable v-model="scope.row.name"></el-input>
    </template>
  </EpTable>
</template>

<style scoped lang="scss">

</style>
