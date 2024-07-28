<script setup lang="ts">
import { EpComment, ICommentConfig, ICommentData, IResolveParams } from 'e-plus-ui';
import { initEmoji } from '../../utils/emoji';
import { ElMessage } from 'element-plus';
import {ref} from "vue";
const commentRef = ref<InstanceType<typeof EpComment>>()
const commentData: ICommentData = {
  total: '99',
  list: [
    {
      // 非username字段
      commentName: '张无忌',
      // 评论人信息没有userInfo包裹
      avatarUrl: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
      userId: 1,
      commentId: 99,
      createDate: '2023-10-02',
      like: true,
      likeCount: 1,
      // 非content字段
      text: '你玩过最好玩的游戏是什么呢？',
      subComment: {
        total: 2,
        list: [
          {
            commentName: '赵敏',
            avatarUrl: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
            userId: 2,
            parentId: 99,
            commentId: 100,
            likeCount: 99,
            createDate: '2023-12-02',
            text: '也许换个环境能激发一些新想法。',
          },
          {
            commentName: '展昭',
            avatarUrl: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
            userId: 3,
            parentId: 99,
            commentId: 101,
            likeCount: 0,
            createDate: '2024-05-02',
            text: '张大侠，这光明顶上数百号人的性命就全在你一念之间！',
          },
        ]
      },
    },
    {
      commentName: '王林',
      avatarUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
      userId: 6,
      // 非content字段
      text: '婉儿，来~',
      commentId: 666,
      createDate: '2024-05-02',
      subComment: {
        total: 2,
        list: [
          {
            commentName: '李慕婉',
            avatarUrl: 'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
            userId: 7,
            parentId: 666,
            commentId: 667,
            likeCount: 0,
            createDate: '2024-07-06',
            text: '去哪？',
          },
          {
            commentName: '许立国',
            avatarUrl: 'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
            userId: 8,
            parentId: 666,
            commentId: 668,
            createDate: '2024-06-05',
            likeCount: 0,
            text: '等日后老子有一天修为高了，一定要让这煞星好看，大不了老子拼了……拼……',
          },
        ]
      },
    },
  ],
};
/**
 *
 * @param data
 */
const handleReply = (data: IResolveParams) => {
  const { resolve, clear, value, item } = data
  setTimeout(()=>{
    resolve({
      commentName: '李慕婉',
      avatarUrl: 'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
      userId: 7,
      parentId: 666,
      commentId: 666,
      createDate: '2024-07-06',
      text: value,
      reply: item
    })
    clear(true)
  }, 500)
};
/** 点赞
 * @param data
 */
const handleLike = (data: IResolveParams)=> {
  const { likeDone, isLike, item } = data
  setTimeout(()=>{
    likeDone(!isLike)
    commentRef.value.updateLikeCount(item, !isLike ? item.likeCount + 1 : item.likeCount - 1)
    ElMessage.success(!isLike? `点赞` : '取消点赞')
  }, 500)
}
/**
 * 通过配置修改字段值
 */
const fieldsConfig: ICommentConfig = {
  content: 'text',
  username: 'commentName',
  avatar: 'avatarUrl',
  userId: 'userId',
  emojis: initEmoji(),
};
</script>

<template>
  <div>
    <ep-comment
        ref="commentRef"
      @confirm-reply="handleReply"
      @click-like="handleLike"
      :data="commentData"
      :config="fieldsConfig"
    ></ep-comment>
  </div>
</template>

<style scoped lang="scss"></style>
