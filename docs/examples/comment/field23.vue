<script setup lang="ts">
import { EpComment, ICommentConfig} from 'e-plus-ui'
import {initEmoji} from "../../utils/emoji";
const commentData = {
  title: '99',
  list: [
    {
      // 非username字段
      commentName: '张无忌',
      // 评论人信息没有userInfo包裹
      avatarUrl: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
      userId: 1,
      commentId: 99,
      createDate: '2016-05-02',
      // 非content字段
      contentText: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。'
    },
    {
      commentName: '王林',
      avatarUrl: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
      userId: 2,
      // 非content字段
      contentText: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。',
      commentId: 666,
      createDate: '2018-05-02',
    }
  ]
}

/**
 * 通过配置修改字段值
 */
const fieldsConfig: ICommentConfig = {
  content: 'contentText',
  username: 'commentName',
  avatar: 'avatarUrl',
  userId: 'userId',
  emojis: initEmoji()
}
</script>

<template>
  <div>
    <ep-comment :data="commentData" :config="fieldsConfig"></ep-comment>
  </div>
</template>

<style scoped lang="scss">

</style>
