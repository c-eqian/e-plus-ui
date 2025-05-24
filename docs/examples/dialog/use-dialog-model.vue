<script setup lang="ts">
import { useDialogModel } from '@e-plus-ui/element';
import { h } from 'vue';

const handleConfirm = (done: () => void): void => {
  done();
};

const { open } = useDialogModel({
  render: () =>
    h('div', null, {
      default: () => '韩时尚'
    }),
  onOpened() {
    console.log('弹窗被打开之后执行');
  },
  onOpen() {
    console.log('弹窗被打开之前执行');
  },
  onClose() {
    console.log('弹窗被关闭之前执行');
  },
  onClosed() {
    console.log('弹窗被关闭之后执行');
  },
  onCanceled() {
    console.log('弹窗按钮关闭');
  },
  onConfirmed: handleConfirm
});
</script>

<template>
  <div class="ep-m-2">
    <el-button @click="() => open()">函数式-打开</el-button>
  </div>
</template>
