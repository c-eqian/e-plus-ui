<script setup lang="ts">
import { EpComment, type ICommentData } from 'e-plus-ui';

const commentData: ICommentData = {
  title: '99',
  list: [
    {
      userInfo: {
        username: '思密达',
        avatar: 'https://pic.qqtn.com/up/2018-9/15367146891677274.jpg',
        userId: 1
      },
      commentId: 36,
      ipAddress: '深圳',
      level: 1,
      createDate: '2022-05-02',
      content: '你永远也不可能真正了解一个人，除非你站在他的角度考虑问题。'
    },
    {
      userInfo: {
        username: '王林',
        avatar:
          'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
        userId: 2
      },
      ipAddress: '广州',
      level: 5,
      content: '你知道什么是妥协吗？是彼此都退让一步，达成一致意见。',
      commentId: 66,
      createDate: '2023-05-02'
    }
  ]
};
</script>

<template>
  <ep-comment :data="commentData">
    <template #right="{ item }">
      <span class="ep-text-[12px]">{{ item.createDate }}</span>
    </template>
  </ep-comment>
</template>

<style scoped lang="scss"></style>
