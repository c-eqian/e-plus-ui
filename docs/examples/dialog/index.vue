<script setup lang="ts">
import { EpDialog, type DialogComponentProps, type DialogProps } from 'e-plus-ui';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
const visible = ref(false);

// el-dialog参数
const dialogProps: DialogComponentProps = {
  modal: true,
  closeOnClickModal: false,
  title: '组件式弹窗'
};
// 底部参数
const footerProps: DialogProps['footerProps'] = {
  // 底部位置
  position: 'center'
};
const handleConfirm = () => {
  ElMessage.success('点击确定');
};
const handleClose = () => {
  ElMessage.success('点击取消');
};
</script>

<template>
  <div>
    <EpDialog
      v-model:visible="visible"
      :dialog-props="dialogProps"
      :is-use-full-screen="true"
      :footer-props="footerProps"
      @confirmed="handleConfirm"
      @canceled="handleClose"
    >
      <div>默认内容</div>
      <div>默认内容</div>
      <div>默认内容</div>
      <div>默认内容</div>
    </EpDialog>
    <el-button @click="visible = true">打开弹窗（组件式）</el-button>
  </div>
</template>

<style scoped></style>
