<script setup lang="ts">
import { EpComment, type ICommentConfig, type ICommentData } from 'e-plus-ui';
const commentData: ICommentData = {
  total: 99,
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
      createDate: '2018-05-02'
    },
    {
      userInfo: {
        username: '许立国',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 3
      },
      commentId: 36,
      ipAddress: '深圳',
      level: 3,
      createDate: '2016-05-02',
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。'
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 4
      },
      ipAddress: '广州',
      level: 2,
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。',
      commentId: 66,
      createDate: '2018-05-02'
    },
    {
      userInfo: {
        username: '张无忌',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 5
      },
      commentId: 36,
      ipAddress: '深圳',
      level: 4,
      createDate: '2016-05-02',
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。'
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 6
      },
      ipAddress: '广州',
      level: 6,
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。',
      commentId: 66,
      createDate: '2018-05-02'
    }
  ]
};
/**
 * 配置
 */
const fieldsConfig: ICommentConfig = {
  showLevel: true
  // 如果字段也为ipAddress，可不填
  // ipAddress: 'ipAddress'
};
</script>

<template>
  <ep-comment :data="commentData" :config="fieldsConfig" />
</template>

<style scoped lang="scss"></style>
