<script setup lang="ts">
import {EpComment, EpImage, type ICommentData, EpIcon} from 'e-plus-ui'
import { Level6 } from '@e-plus-ui/icons'
import {isEmpty} from "@eqian/utils-vue";
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
      content: '你永远也不可能真正了解一个人，除非你站在他的角度考虑问题。',
      subComment: {
        total: 3,
        list: [
          {
            userInfo: {
              username: '柳眉',
              avatar: 'https://pic2.zhimg.com/v2-0d9128a6c6d807bf615403443b915c51_r.jpg',
              userId: 1
            },
            commentId: 36,
            ipAddress: '深圳',
            level: 1,
            createDate: '2022-11-02',
            content: '生活总是让我们遍体鳞伤，但到后来，那些受伤的地方一定会变成我们最强壮的地方。',
          },
          {
            userInfo: {
              username: '王林',
              avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
              userId: 2
            },
            commentId: 39,
            ipAddress: '广州',
            level: 1,
            createDate: '2024-05-02',
            content: '有时候遗忘比记住要好得多。',
            reply: {
              userInfo: {
                username: '柳眉',
                avatar: 'https://pic2.zhimg.com/v2-0d9128a6c6d807bf615403443b915c51_r.jpg',
                userId: 1
              },
              commentId: 36,
              ipAddress: '深圳',
              level: 1,
              createDate: '2022-11-02',
              content: '生活总是让我们遍体鳞伤，但到后来，那些受伤的地方一定会变成我们最强壮的地方。',
            }
          },
          {
            userInfo: {
              username: '柳眉',
              avatar: 'https://pic2.zhimg.com/v2-0d9128a6c6d807bf615403443b915c51_r.jpg',
              userId: 1
            },
            commentId: 56,
            ipAddress: '深圳',
            level: 1,
            createDate: '2024-06-07',
            content: '不要轻易说出你的理想，不给别人嘲笑你的机会。',
            reply: {
              userInfo: {
                username: '王林',
                avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
                userId: 2
              },
              commentId: 39,
              ipAddress: '广州',
              level: 1,
              createDate: '2024-05-02',
              content: '有时候遗忘比记住要好得多。',
            }
          },
        ]
      }
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
        userId: 2
      },
      ipAddress: '广州',
      level: 5,
      content: '你知道什么是妥协吗？是彼此都退让一步，达成一致意见。',
      commentId: 66,
      createDate: '2023-05-02',
    }
  ]
}
</script>

<template>
    <ep-comment :data="commentData">
      <template #content="{item, isSubReply, level1, reply}">
        <div>
          {{item.content}}
          <div v-if="isSubReply && !isEmpty(reply)" class="cz-border cz-rounded-2xl cz-my-1 cz-text-[12px] cz-text-gray-600">
            <div class="cz-p-2">{{reply.content}}</div>
          </div>
        </div>
      </template>
    </ep-comment>
</template>

<style scoped lang="scss">

</style>
