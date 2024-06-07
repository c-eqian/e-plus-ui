<script setup lang="ts">
  import { defineTableColumns } from 'e-plus-ui'
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  const epTableRef = ref()
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
    },
    {
      width: 280,
      type: 'operation',
      label: '操作',
      fixed: 'right'
    }
  ])
  const handleEdit = async () =>{
    console.log(tableData)
   await epTableRef.value?.validate()
  }
  const handleClickedEdit = (row, index) =>{
    ElMessage.success(`修改-${row.name}-${index}`)
  }
  const handleClickedDelete = (row, index) =>{
    ElMessage.success(`删除-${row.name}-${index}`)
  }
  const handleClickedAdd = (row, index) =>{
    ElMessage.success(`新增-${row.name}-${index}`)
  }
  const handleClickedView = (row, index) =>{
    ElMessage.success(`查看-${row.name}-${index}`)
  }
</script>

<template>
  <ep-table
    ref="advTableRef"
    :data="tableData"
    :column
    @click-row-edit="handleClickedEdit"
    @click-row-add="handleClickedAdd"
    @click-row-delete="handleClickedDelete"
    @clickRowView="handleClickedView"
  >
  </ep-table>
</template>

<style scoped lang="scss">

</style>
