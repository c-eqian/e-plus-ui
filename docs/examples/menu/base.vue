<script setup lang="ts">
import { EpMenu, defineMenu } from 'e-plus-ui'
const config = defineMenu({
  items: [
    {
      path: '/',
      title: '首页',
    },
    {
      path: '/user/manage',
      title: '用户管理',
      children: [{
        path: '/user/list',
        title: '用户列表',
      },
        {
          path: '/user/permission',
          title: '用户权限',
        }
      ]
    },
  ]
})
</script>

<template>
<div>
  <div style="height: 380px;width: 200px">
    <EpMenu :menu-config="config">

    </EpMenu>
  </div>

</div>
</template>

<style scoped lang="scss">

</style>
