<template>
  <div class="play">
    <ep-manager-layout :config="_config">
      <template #main>
        <adapt-layout></adapt-layout>
      </template>
      <template #header>
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </template>
    </ep-manager-layout>
  </div>
</template>
<script setup lang="ts">
import AdaptLayout from './adapt-layout.vue';
import { defineMenu } from '../packages';
import { ManagerBasic } from '../packages/manager-layout/type';
import { Ref, ref } from 'vue';
const _config: Ref<ManagerBasic> = ref({
  menus: defineMenu({
    items: [
      {
        path: '/',
        title: '首页',
      },
      {
        path: '/user/manage',
        title: '用户管理',
        children: [
          {
            path: '/user/list',
            title: '用户列表',
          },
          {
            path: '/user/permission',
            title: '用户权限',
          },
        ],
      },
    ],
  }),
  classNames: {
    headerClass: 'cz-bg-[#cae1fe]',
  },
});
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #ebeff4;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.play {
  width: 100%;
  height: 100%;
}
</style>
