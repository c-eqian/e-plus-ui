<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import Dialog from './components/dialog/Dialog';
import type { DialogComponentProps } from './components/dialog/type';
const visible = ref(false);
const dialogProps: DialogComponentProps = {
  modal: true,
  closeOnClickModal: false,
  title: '组件式弹窗'
};
const handleConfirm = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      ElMessage.success('确定');
      resolve(true);
    }, 3000);
  });
};
const handleClose = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      ElMessage.success('取消');
      resolve(true);
    }, 3000);
  });
};
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :dialog-props="dialogProps"
    :is-use-full-screen="true"
    :footer-props="{
      position: 'center',
      isUseConfirmLoading: true
    }"
    :before-confirm="handleConfirm"
    :before-close="handleClose"
  >
    <div>默认内容</div>
    <div>默认内容</div>
    <div>默认内容</div>
    <div>默认内容</div>
  </Dialog>

  <el-button @click="visible = true">组件式-打开</el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
