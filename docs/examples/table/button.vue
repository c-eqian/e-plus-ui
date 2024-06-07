<script setup lang="ts">
  import { defineTableColumns } from 'e-plus-ui'
  import { h, ref } from 'vue'
  import { ElCheckbox, ElMessage } from 'element-plus'
  const hasPermission = ref(true);
  const checkbox = ref(false)
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
      operationType: [
        {
          label: '提交',
          type: 'add',
          /**
           * 组件库相关参数
           */
          extra: {
            type: 'primary',
            icon: 'Plus'
          }
        },
        {
          label: '删除',
          type: 'delete',
        //   权限类
          permission: () => hasPermission.value,
          /**
           * 组件库相关参数
           */
          extra: {
            type: 'danger',
            link: true,
            icon: 'Close'
          }
        },
        {
          render: ()=> h(ElCheckbox, {
            'model:value': checkbox.value,
            'update:modelValue':value=> checkbox.value = value,
            label: '是否选择'
          })
        }
      ],
      fixed: 'right'
    }
  ])
  const switchPermission = async () =>{
    hasPermission.value = !hasPermission.value
  }
  const handleClickedBtn = (type,row, index) =>{
    console.log(type)
    ElMessage.success(`点击类型-${type}-${row.name}`)
  }
</script>

<template>
  <div>
    <el-button @click="switchPermission">切换权限</el-button>
    <ep-table
      :data="tableData"
      :column
      @click-btn="handleClickedBtn"
    >
    </ep-table>
  </div>

</template>

<style scoped lang="scss">

</style>
