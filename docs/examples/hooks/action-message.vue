<script setup lang="ts">
import { useConfirmDialog } from 'e-plus-ui';
const handle = () => {
  useConfirmDialog(
    {
      presetPrefix: '是否删除'
    },
    {
      message: '测试用户'
    }
  );
};
const handlePromise = () => {
  useConfirmDialog(
    {
      presetPrefix: '是否删除',
      onResolve: () => {
        return new Promise(resolve => {
          // 模拟两秒后返回
          setTimeout(() => {
            resolve(true);
          }, 2000);
        });
      }
    },
    {
      message: '测试用户'
    }
  );
};
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-button @click="handle"> 基本用法 </el-button>
    </el-col>
    <el-col :span="6">
      <el-button @click="handlePromise"> 异步操作 </el-button>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss"></style>
