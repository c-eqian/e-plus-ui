<script setup lang="ts">
  import { EpMenu, defineMenu } from 'e-plus-ui'
  import { Edit } from '@element-plus/icons-vue'
  import {  ElIcon } from 'element-plus'
  import { h } from 'vue'
  const config = defineMenu({
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
      },
    ]
  })
</script>

<template>
    <div style="height: 380px;width: 200px">
      <EpMenu :menu-config="config">

      </EpMenu>
    </div>
</template>

<style scoped lang="scss">

</style>
