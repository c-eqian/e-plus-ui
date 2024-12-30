<script setup lang="ts">
import { EpDialog, useDialogModel, type DialogComponentProps } from '@e-plus-ui/element';
import { ElMessage } from 'element-plus';
import { h, ref } from 'vue';
const visible = ref(false);
const dialogProps: DialogComponentProps = {
  modal: true,
  closeOnClickModal: false,
  title: '组件式弹窗'
};
const handleConfirm = (): Promise<boolean> => {
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
const handleOpened = () => {
  console.log('打开后');
};
const { open } = useDialogModel({
  render: () =>
    h('div', null, {
      default: () => '韩时尚'
    }),
  onConfirm: handleConfirm,
  footerProps: {
    isUseConfirmLoading: true
  }
});
</script>

<template>
  <div>
    <EpDialog
      v-model:visible="visible"
      :dialog-props="dialogProps"
      :is-use-full-screen="true"
      :footer-props="{
        position: 'center',
        isUseConfirmLoading: true
      }"
      @confirm="handleConfirm"
      @cancel="handleClose"
      @opened="handleOpened"
    >
      <div>默认内容</div>
      <div>默认内容</div>
      <div>默认内容</div>
      <div>默认内容</div>
    </EpDialog>
    <el-button @click="visible = true">组件式-打开</el-button>
  </div>
  <div class="ep-m-2">
    <el-button @click="() => open()">函数式-打开</el-button>
  </div>
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
