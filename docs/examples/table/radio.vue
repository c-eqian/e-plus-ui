<script setup lang="ts">
  import { defineTableColumns, EpTable } from 'e-plus-ui'
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  const advTableRef = ref();
  const tableData = ref([
    {
      id: 1,
      date: '2016-05-03',
      name: 'Tom1',
      status: '1'
    },
    {
      id: 2,
      date: '2016-05-02',
      name: 'Tom2',
      status: '1'
    },
    {
      id: 3,
      date: '2016-05-02',
      name: 'Tom3',
      status: '0'
    },
    {
      id: 4,
      date: '2016-05-02',
      name: 'Tom4',
      status: '1'
    },
    {
      id: 5,
      date: '2016-05-02',
      name: 'Tom5',
      status: '0'
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
      label: '状态',
      prop: 'status',
      dictEnum: [
        {
          value: '1',
          label: '成功',
          tagType: 'primary'
        },
        {
          value: '0',
          label: '失败',
          tagType: 'danger'
        }
      ]
    },
    {
      label: '日期',
      prop: 'date'
    },
    {
      width: 280,
      type: 'operation',
      label: '操作',
      operationType: ['delete'],
      fixed: 'right'
    }
  ])
  const handleClickedDelete = (row, index) =>{
    tableData.value.splice(index, 1)
    ElMessage.success(`删除-${row.name}-${index}`)
  }
  const handleDbClickRow = (row:any)=>{
    ElMessage.success(`双击-${row.name}`)
  }
  const handleCurrentClickRow = (row:any) =>{
    ElMessage.success(`选中当前行-${row.name}`)
  }
</script>

<template>
  <div>
    <EpTable
      ref="advTableRef"
      :data="tableData"
      id-key="id"
      highlightCurrentRow
      :column
      @click-row-delete="handleClickedDelete"
      @dbClick-row="handleDbClickRow"
      @current-change="handleCurrentClickRow"
    >
    </EpTable>
  </div>

</template>

<style scoped lang="scss">

</style>
