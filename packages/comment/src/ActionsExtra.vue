<script setup lang="ts">
import { ElButton, ElIcon, ElPopover } from 'element-plus';
import { More, Delete, Warning } from '@element-plus/icons-vue';
import EpLine from '../../line/index.vue';
const emits = defineEmits(['delete', 'complaint']);
</script>

<template>
  <el-popover :width="80" placement="left" trigger="click">
    <template #reference>
      <ElIcon class="cz-rotate-90 cz-cursor-pointer">
        <More></More>
      </ElIcon>
    </template>
    <slot v-if="$slots.actions && $slots.actions()" name="actions"></slot>
    <div v-else class="cz-flex cz-space-y-1 cz-flex-col">
      <el-button
        size="small"
        link
        type="danger"
        :icon="Delete"
        @click="emits('delete', 0)"
        >删 除</el-button
      >
      <ep-line></ep-line>
      <el-button
        link
        size="small"
        :icon="Warning"
        @click="emits('complaint', 1)"
        >投 诉</el-button
      >
    </div>
  </el-popover>
</template>

<style scoped lang="scss">
.el-button + .el-button {
  margin-left: 0 !important;
}
</style>
