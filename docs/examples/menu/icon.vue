<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import { defineMenu, EpMenu } from 'e-plus-ui';
import { ElIcon } from 'element-plus';
import { h } from 'vue';
const config = defineMenu({
  items: [
    {
      path: '/',
      title: '首页',
      // el图标库-字符串形式
      icon: 'Edit'
    },
    {
      path: '/user/manage',
      title: '用户管理',
      // 自定义图标
      icon: () => h(ElIcon, null, () => h(Edit)),
      children: [
        {
          path: '/user/list',
          title: '用户列表',
          icon: () => h(ElIcon, null, () => h(Edit))
        },
        {
          path: '/user/permission',
          title: '用户权限',
          icon: () => h(ElIcon, null, () => h(Edit))
        }
      ]
    }
  ]
});
</script>

<template>
  <div>
    <div style="height: 380px; width: 200px">
      <EpMenu :menu-config="config" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
