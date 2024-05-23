<script setup lang="ts">
import type { PropType } from 'vue';
import { Shadow } from './type';
import { ElCard } from 'element-plus';
defineOptions({
  name: 'EpCard',
});
const props = defineProps({
  shadow: {
    type: String as PropType<Shadow>,
    default: 'never',
  },
});
</script>

<template>
  <el-card :shadow="props.shadow">
    测试66
    <slot></slot>
  </el-card>
</template>

<style scoped lang="scss"></style>
