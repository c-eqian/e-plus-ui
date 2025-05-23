<script setup lang="ts">
import { EpSliderVerify } from 'e-plus-ui';
import { ElMessage } from 'element-plus';
import { useTemplateRef } from 'vue';
const handleSuccess = () => {
  ElMessage.success('验证成功');
};
const sliderVerifyRef = useTemplateRef('sliderVerifyRef');
const handleReset = () => {
  // 重置状态
  sliderVerifyRef.value?.resetSliderVerify();
};
</script>

<template>
  <div class="ep-flex ep-gap-4">
    <EpSliderVerify ref="sliderVerifyRef" @success="handleSuccess"> </EpSliderVerify>
    <el-button @click="handleReset">重置</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
