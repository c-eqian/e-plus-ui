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
  onConfirmed: handleConfirm
});
</script>

<template>
  <div class="ep-m-2">
    <el-button @click="() => open()">函数式-打开</el-button>
  </div>
</template>
