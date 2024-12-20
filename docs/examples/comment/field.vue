<script setup lang="ts">
import { EpComment, type ICommentConfig } from 'e-plus-ui';

const commentData = {
  total: 99,
  list: [
    {
      // 非username字段
      commentName: '张无忌',
      // 评论人信息没有userInfo包裹
      avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
      userId: 1,
      commentId: 99,
      createDate: '2023-10-02',
      // 非content字段
      text: '你周末一般都喜欢干什么呀？'
    },
    {
      commentName: '王林',
      avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
      userId: 2,
      // 非content字段
      text: '如果有一天自己变成了超人你最想干什么呢？',
      commentId: 666,
      createDate: '2018-05-02'
    }
  ]
};

/**
 * 通过配置修改字段值
 */
const fieldsConfig: ICommentConfig = {
  commentFields: {
    content: 'text',
    username: 'commentName',
    avatar: 'avatar',
    userId: 'userId'
  }
};
</script>

<template>
  <div>
    <ep-comment :data="commentData" :config="fieldsConfig" />
  </div>
</template>

<style scoped lang="scss"></style>
