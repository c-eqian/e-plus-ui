<script setup lang="ts">
import { Auth } from '@e-plus-ui/icons';
import { EpComment, EpIcon, type ICommentConfig, type ICommentData } from 'e-plus-ui';
import { h } from 'vue';
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
      content:
        'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。' +
        'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。' +
        'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。' +
        'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。' +
        'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。' +
        'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。' +
        'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。'
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
    }
  ]
};
/**
 * 配置
 */
const fieldsConfig: ICommentConfig = {
  // 显示IP属地
  showIpAddress: true,
  showLevel: () => {
    return h(
      EpIcon,
      {
        width: 12,
        height: 12,
        color: '#f8c828'
      },
      [h(Auth)]
    );
  }
  // 如果字段也为ipAddress，可不填
  // ipAddress: 'ipAddress'
};
</script>

<template>
  <div>
    <ep-comment :data="commentData" :config="fieldsConfig" />
  </div>
</template>

<style scoped lang="scss"></style>
