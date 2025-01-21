<script setup lang="ts">
import { defineContextMenu, EpContextMenu } from 'e-plus-ui';
import { ref } from 'vue';
const textClick = ref('右键菜单');
const defineContext = defineContextMenu([
  [
    {
      label: '新建文件',
      icon: 'Plus',
      onClick: () => {
        textClick.value = '新建文件';
      }
    },
    {
      label: '新建文件1',
      icon: 'Plus',
      disabled: true,
      onClick: () => {
        textClick.value = '新建文件1';
      }
    },
    {
      label: '新建文件2',
      icon: 'Plus',
      onClick: () => {
        textClick.value = '新建文件2';
      }
    }
  ],
  {
    label: '新建文件3',
    icon: 'Edit'
  },
  {
    label: '新建文件4',
    icon: 'Edit'
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
