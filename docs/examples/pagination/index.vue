<script setup lang="ts">
import { EpPagination, EpCard } from 'e-plus-ui'
import {ElMessage} from "element-plus";
import {ref} from "vue";
const queryParams = ref({
  page: 1,
  limit: 10
})
const handlePagination = ({ page, limit })=>{
  ElMessage.success(`当前页码：${page}，当前分页大小：${limit}`)
}
</script>

<template>
  <EpCard title="基础用法">
    <EpPagination :total="300"></EpPagination>
  </EpCard>
  <EpCard title="大小">
    <EpPagination size="default" :total="300"></EpPagination>
  </EpCard>
  <EpCard title="分页改变">
    <EpPagination v-model:page="queryParams.page" v-model:limit="queryParams.limit" :total="300" @pagination="handlePagination"></EpPagination>
  </EpCard>
</template>

<style scoped lang="scss">

</style>
