<template>
  <div class="play">
    <ep-manager-layout :config="_config">
      <template #main>
        <adapt-layout></adapt-layout>
      </template>
      <template #header>
        <div class="cz-flex cz-justify-end cz-items-center cz-h-full">
          <el-dropdown @command="handleClick">
            <el-avatar
              src="https://s3.bmp.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg"
            />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="House">我的主页</el-dropdown-item>
                <el-dropdown-item icon="Setting" command="layout"
                >切换布局</el-dropdown-item
                >
                <el-dropdown-item icon="User">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>管理员</span>
        </div>
      </template>
    </ep-manager-layout>
  </div>
</template>
<script setup lang="ts">
import AdaptLayout from './adapt-layout.vue';
import { defineMenu } from 'e-plus-ui';
import { ManagerBasic } from 'e-plus-ui';
import { h, Ref, ref } from 'vue';
import { ElIcon } from 'element-plus';
import { Edit } from '@element-plus/icons-vue';
const _config: Ref<ManagerBasic> = ref({
  layout: 'LTB',
  menus: defineMenu({
    items: [
      {
        path: '/',
        title: '首页',
        // el图标库-字符串形式
        icon: 'Edit',
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
            icon: () => h(ElIcon, null, () => h(Edit)),
          },
          {
            path: '/user/permission',
            title: '用户权限',
            icon: () => h(ElIcon, null, () => h(Edit)),
          },
        ],
      },
    ],
  }),
  classNames: {
    headerClass: 'cz-bg-[#cae1fe]',
  },
});
const handleClick = (cmd: string) => {
  if (cmd === 'layout') {
    _config.value.layout = _config.value.layout === 'LTB' ? 'TLB' : 'LTB';
  }
};
</script>
<style lang="less" scoped>
.play {
  width: 100%;
  height: 800px;
}
</style>
