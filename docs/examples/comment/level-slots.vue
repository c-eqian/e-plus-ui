<script setup lang="ts">
import { Lv2, Lv8 } from '@e-plus-ui/icons';
import { EpComment, EpIcon, type ICommentData } from 'e-plus-ui';

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
        '我从来不是那样的人，不能耐心地拾起一地碎片，把它们凑合在一起，然后对自己说，这个修补好了的东西，' +
        '跟新的完全一样。一样东西破碎了就是破碎了，我宁愿记住它最好时的模样，而不想把它修补好，然后终生看着那些碎了的地方'
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 2
      },
      ipAddress: '广州',
      level: 5,
      content:
        '勇敢并不是一个人手中拿着枪，而是在你动手之前你已经知道自己会输，但依然会动手，而且无论如何会坚持到底。',
      commentId: 66,
      createDate: '2018-05-02'
    }
  ]
};
</script>

<template>
  <ep-comment :data="commentData">
    <template #level="{ item }">
      <ep-icon width="20" height="20" color="#67C23A">
        <Lv2 v-if="item.level === 1" />
        <Lv8 v-else />
      </ep-icon>
    </template>
  </ep-comment>
</template>

<style scoped lang="scss"></style>
