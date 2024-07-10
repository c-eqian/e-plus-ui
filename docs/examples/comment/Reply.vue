<script setup lang="ts">
import { EpComment, type ICommentData } from 'e-plus-ui'
const commentData: ICommentData = {
  title: '99',
  list: [
    {
      userInfo: {
        username: '张无忌',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 1
      },
      subComment: {
        total: 66,
        list: [
          {
            userInfo: {
              username: '张无忌',
              avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
              userId: 63
            },
            replyId: 1,
            // 如果 replyInfo为空，则是二级评论中回复的二级评论
            replyInfo: {
              userInfo: {
                username: '小龙女',
                avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
                userId: 1
              },
              content: '如果 replyInfo为空，则是二级评论'
            },
            createDate: '2023-05-02',
            content: '如果 replyInfo不为空，则是二级评论中回复的二级评论'
          },
          {
            userInfo: {
              username: '小龙女',
              avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
              userId: 63
            },
            replyId: 1,
            // 如果 replyInfo为空，则是二级评论
            replyInfo: {},
            createDate: '2023-05-02',
            content: '如果 replyInfo为空，则是二级评论'
          }
        ]
      },
      commentId: 1,
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
      commentId: 2,
      createDate: '2018-05-02',
    }
  ]
}
</script>

<template>
  <div>
    <ep-comment :data="commentData"></ep-comment>
  </div>
</template>

<style scoped lang="scss">

</style>
