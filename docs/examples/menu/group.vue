<script setup lang="ts">
import { defineMenu, EpMenu } from 'e-plus-ui';
const config = defineMenu({
  items: [
    {
      path: '/',
      title: '首页',
      icon: 'Edit'
    },
    {
      path: '/user/manage',
      title: '测试管理',
      icon: 'Edit',
      children: [
        {
          title: '测试部',
          group: true,
          children: [
            {
              path: '/user/list1',
              title: '测试部-1',
              icon: 'Edit'
            },
            {
              path: '/user/list2',
              title: '测试部-2',
              icon: 'Edit'
            }
          ]
        },
        {
          path: '/user/permission',
          title: '研发部',
          group: true,
          children: [
            {
              path: '/user/list3',
              title: '研发部-1',
              icon: 'Edit'
            },
            {
              path: '/user/list4',
              title: '研发部-2',
              icon: 'Edit'
            }
          ]
        }
      ]
    }
  ]
});
</script>

<template>
  <div>
    <div style="height: 380px; width: 200px; overflow: auto">
      <EpMenu :menu-config="config" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
