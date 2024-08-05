<script setup lang="ts">
import { ElButton } from 'element-plus';
import { More, Delete, Warning } from '@element-plus/icons-vue';
const emits = defineEmits(['delete', 'complaint']);
</script>

<template>
  <el-popover :width="200" trigger="click">
    <template #reference>
      <el-button size="small" :icon="More" class="cz-rotate-90"></el-button>
    </template>
    <slot v-if="$slots.actions && $slots.actions()" name="actions"></slot>
    <div v-else class="cz-flex cz-flex-col">
      <el-button size="small" :icon="Delete" @click="emits('delete', 0)"
        >删 除</el-button
      >
      <el-button size="small" :icon="Warning" @click="emits('complaint', 1)"
        >投 诉</el-button
      >
    </div>
  </el-popover>
</template>

<style scoped lang="scss"></style>
