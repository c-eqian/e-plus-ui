<script setup lang="ts">
  import { defineTableColumns, EpTable } from 'e-plus-ui'
  import { ref } from 'vue'
  const advTableRef = ref();
  const params = ref({
    pageNum: 1,
    pageSize: 2
  })
  const tableData = ref([
    {
      date: '2016-05-03',
      name: 'Tom',
      status: '1'
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      status: '1'
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      status: '0'
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      status: '1'
    },
    {
      date: '2016-05-02',
      name: 'Tom',
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
  const handlePageChange = (val:any)=>{
    console.log(val)
  }
</script>

<template>
  <el-button @click="params.pageNum=2">切换分页</el-button>
  <div>
    <EpTable
      ref="advTableRef"
      :data="tableData"
      pagination
      v-model:pa-limit="params.pageSize"
      v-model:pa-page="params.pageNum"
      @page-change="handlePageChange"
      :pa-total="tableData.length"
      :column
    >
    </EpTable>
  </div>

</template>

<style scoped lang="scss">

</style>
