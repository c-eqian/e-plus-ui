<template>
  <div class="cz-w-full cz-h-full cz-bg-white cz-p-3">
    <ep-adapt-page-layout>
      <template #header>
        <div>
          <h6>反馈管理</h6>
        </div>
      </template>
      <template #search>
        <Form></Form>
      </template>
      <template #toolbar>
        <div>
          <el-button size="small" type="primary" icon="Plus">新增</el-button>
          <el-button size="small" type="success" icon="FolderAdd"
            >导入</el-button
          >
          <el-button size="small" type="danger" icon="Delete">删除</el-button>
        </div>
      </template>
      <template #content="{ height }">
        <Table :height="height"></Table>
      </template>
      <template #footer>
        <ep-pagination :total="100"></ep-pagination>
      </template>
    </ep-adapt-page-layout>
  </div>
</template>
<script setup lang="ts">
import Form from './form.vue';
import Table from './table.vue';
</script>
<style lang="less"></style>
