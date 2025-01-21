<script setup lang="ts">
import { defineContextMenu, EpContextMenu } from 'e-plus-ui';
import { ref } from 'vue';
const textClick = ref('右键菜单');
const defineContext = defineContextMenu([
  {
    label: '新建文件',
    icon: 'FolderAdd'
  },
  {
    label: '更多设置',
    icon: 'Setting',
    children: [
      {
        label: '修改中心',
        icon: 'Edit'
      },
      {
        label: '反馈中心',
        icon: 'Warning'
      },
      {
        label: '消息中心',
        icon: 'Message',
        disabled: true
      },
      {
        label: '导出设置',
        icon: 'Operation'
      }
    ]
  },
  {
    label: '刷新',
    icon: 'Refresh'
  },
  {
    label: '退出',
    icon: 'Close'
  }
]);
</script>

<template>
  <div class="ep-flex ep-justify-center">
    <EpContextMenu :context-menus="defineContext">
      <div class="ep-h-72 ep-w-72 ep-bg-sky-300">右键我试试----{{ textClick }}</div>
    </EpContextMenu>
  </div>
</template>

<style scoped lang="scss"></style>
