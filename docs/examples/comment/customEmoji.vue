<script setup lang="ts">
import { EpComment, ICommentConfig} from 'e-plus-ui'
import {initEmoji} from "../../utils/emoji";
const commentData = {
  title: '99',
  list: [
    {
      userInfo: {
        username: '张无忌',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 1
      },
      commentId: 36,
      createDate: '2016-05-02',
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。'
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 2
      },
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。',
      commentId: 66,
      createDate: '2018-05-02',
    }
  ]
}

/**
 * 通过配置修改字段值
 */
const fieldsConfig: ICommentConfig = {
  emojis: initEmoji(),
  useEmojis: true
}
</script>

<template>
  <div>
    <ep-comment :data="commentData" :config="fieldsConfig"></ep-comment>
  </div>
</template>

<style scoped lang="scss">

</style>
