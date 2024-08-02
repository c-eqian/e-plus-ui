<script setup lang="ts">
  import { EpMenu, defineMenu } from 'e-plus-ui'
  const config = defineMenu({
    mode: 'horizontal',
    ellipsis: true,
    items: [
      {
        path: '/',
        title: '首页',
        icon: 'House'
      },
      {
        path: '/board',
        title: '看板',
        icon: 'Search'
      },
      {
        path: '/user/manage2',
        title: '用户管理',
        icon: 'User',
        children: [{
          path: '/user/list2',
          title: '用户列表',
          icon: 'User'
        },
          {
            path: '/user/permission2',
            title: '用户权限',
            icon:'Message'
          }
        ]
      },
      {
        path: '/board1',
        title: '看板',
        icon: 'ZoomOut'
      },
      {
        path: '/board2',
        title: '看板',
        icon: 'ZoomOut'
      },
    ]
  })
</script>

<template>
    <div style="height: 380px;max-width: 180px">
      <EpMenu :menu-config="config">

      </EpMenu>
    </div>
</template>

<style scoped lang="scss">

</style>
