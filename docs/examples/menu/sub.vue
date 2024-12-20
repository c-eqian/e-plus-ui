<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import { defineMenu, EpMenu } from 'e-plus-ui';
import { ElIcon } from 'element-plus';
import { h, reactive, ref } from 'vue';
const isCollapse = ref(false);
const config = defineMenu(
  reactive({
    collapse: isCollapse,
    items: [
      {
        path: '/',
        title: '首页',
        icon: 'Edit'
      },
      {
        path: '/user/manage',
        title: '用户管理',
        icon: () => h(ElIcon, null, () => h(Edit)),
        children: [
          {
            path: '/user/list',
            title: '管理列表',
            children: [
              {
                path: '/user/list-1',
                title: '账号管理',
                icon: 'User'
              },
              {
                path: '/user/list-2',
                title: '文件管理',
                icon: 'Folder'
              }
            ],
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
  })
);
</script>

<template>
  <div style="height: 380px; width: 200px">
    <el-button @click="isCollapse = !isCollapse">{{ isCollapse ? '折叠' : '展开' }}</el-button>
    <EpMenu :menu-config="config" />
  </div>
</template>

<style scoped lang="scss"></style>
