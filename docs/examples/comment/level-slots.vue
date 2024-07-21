<script setup lang="ts">
import {EpComment, ICommentConfig, type ICommentData, EpCard, EpIcon} from 'e-plus-ui'
import { Lv2, Lv8 } from '@e-plus-ui/icons'


import {h} from 'vue'
const commentData: ICommentData = {
  title: '99',
  list: [
    {
      userInfo: {
        username: '张无忌',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 1
      },
      commentId: 36,
      ipAddress: '深圳',
      level: 1,
      createDate: '2016-05-02',
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。'
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 2
      },
      ipAddress: '广州',
      level: 5,
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。',
      commentId: 66,
      createDate: '2018-05-02',
    }
  ]
}
</script>

<template>
    <ep-comment :data="commentData">
      <template #level="{item}">
        <ep-icon width="20" height="20" color="#67C23A">
          <Lv2 v-if="item.level==1" />
          <Lv8 v-else />
        </ep-icon>
      </template>
    </ep-comment>
</template>

<style scoped lang="scss">

</style>
