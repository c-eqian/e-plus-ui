<script setup lang="ts">
import { Lv1, Vip } from '@e-plus-ui/icons';
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
      content: '所有随风而逝的都属于昨天的，所有历经风雨留下来的才是面向未来的。'
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 2
      },
      ipAddress: '广州',
      level: 5,
      content: '生活没有义务满足我们的期望，我们应该接受现实并因情况不是更糟而感恩。',
      commentId: 66,
      createDate: '2018-05-02'
    }
  ]
};
/**
 * 配置
 */
const fieldsConfig: ICommentConfig<(typeof commentData)['list'][0]> = {
  // 自定义等级图标
  showLevel: ({ item }) => {
    if (item.level === 1) {
      return h(
        EpIcon,
        {
          width: 20,
          height: 20
        },
        {
          default: () => h(Vip)
        }
      );
    } else {
      return h(
        EpIcon,
        {
          width: 20,
          height: 20
        },
        {
          default: () => h(Lv1)
        }
      );
    }
  }
};
</script>

<template>
  <ep-comment :data="commentData" :config="fieldsConfig" />
</template>

<style scoped lang="scss"></style>
