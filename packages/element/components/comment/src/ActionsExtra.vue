<script setup lang="ts">
import { Delete, More, Warning } from '@e-plus-ui/icons';
import { EpLine } from '@e-plus-ui/pure';
import { ElButton, ElIcon, ElPopover } from 'element-plus';
const emits = defineEmits(['delete', 'complaint']);
</script>

<template>
  <el-popover :width="80" placement="left" trigger="click">
    <template #reference>
      <ElIcon class="ep-rotate-90 ep-cursor-pointer">
        <More />
      </ElIcon>
    </template>
    <slot v-if="$slots.actions && $slots.actions()" name="actions" />
    <div v-else class="ep-flex ep-space-y-1 ep-flex-col">
      <el-button size="small" link type="danger" :icon="Delete" @click="emits('delete', 0)"
        >删 除</el-button
      >
      <ep-line />
      <el-button link size="small" :icon="Warning" @click="emits('complaint', 1)">投 诉</el-button>
    </div>
  </el-popover>
</template>

<style scoped lang="scss"></style>
