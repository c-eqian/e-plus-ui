<script setup lang="ts">
import {
  EpComment,
  type ICommentConfig,
  type ICommentData,
  type IResolveParams,
  type LoadData
} from 'e-plus-ui';
import { ElMessage } from 'element-plus';
import { initEmoji } from '../../utils/emoji';
const commentData: ICommentData = {
  total: 99,
  hasMore: true,
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
            createDate: '2023-12-02',
            text: '也许换个环境能激发一些新想法。'
          },
          {
            commentName: '展昭',
            avatarUrl: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
            userId: 3,
            parentId: 99,
            commentId: 101,
            createDate: '2024-05-02',
            text: '张大侠，这光明顶上数百号人的性命就全在你一念之间！'
          }
        ]
      }
    },
    {
      commentName: '王林',
      avatarUrl:
        'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
      userId: 6,
      // 非content字段
      text: '婉儿，来~',
      commentId: 666,
      createDate: '2024-05-02',
      subComment: {
        total: 2,
        hasMore: true,
        list: [
          {
            commentName: '李慕婉',
            avatarUrl:
              'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
            userId: 7,
            parentId: 666,
            commentId: 667,
            createDate: '2024-07-06',
            text: '去哪？'
          },
          {
            commentName: '许立国',
            avatarUrl:
              'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
            userId: 8,
            parentId: 666,
            commentId: 668,
            createDate: '2024-06-05',
            text: '等日后老子有一天修为高了，一定要让这煞星好看，大不了老子拼了……拼……'
          }
        ]
      }
    }
  ]
};
/**
 *
 * @param data
 */
const handleReply = (data: IResolveParams) => {
  const { resolve, clear, value, item } = data;
  setTimeout(() => {
    resolve?.({
      commentName: '李慕婉',
      avatarUrl: 'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
      userId: 7,
      parentId: 666,
      commentId: 666,
      createDate: '2024-07-06',
      text: value,
      reply: item
    });
    clear?.(true);
  }, 500);
};
/** 点赞
 * @param data
 */
const handleLike = (data: IResolveParams) => {
  const { likeDone, isLike } = data;
  setTimeout(() => {
    likeDone?.(!isLike);
    ElMessage.success(!isLike ? `点赞` : '取消点赞');
  }, 500);
};
/**
 * 通过配置修改字段值
 */
const fieldsConfig: ICommentConfig = {
  commentFields: {
    content: 'text',
    username: 'commentName',
    avatar: 'avatarUrl',
    userId: 'userId'
  },
  emojis: initEmoji()
};
/**
 * 加载更多评论数据
 * @param isSubReply 是否是加载二级评论数据
 * @param item isSubReply 为false时不存在
 * @param resolve 加载数据
 */
const handleLoad = ({ isSubReply, resolve }: LoadData) => {
  console.log(isSubReply);
  setTimeout(() => {
    resolve(
      [
        {
          commentName: '李慕婉',
          avatarUrl:
            'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
          userId: 7,
          parentId: 666,
          commentId: new Date().getTime.toString(),
          createDate: new Date(),
          text: '加载更多评论数据'
        },
        {
          commentName: '徐立功',
          avatarUrl:
            'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
          userId: 7,
          parentId: 666,
          commentId: new Date().getTime.toString(),
          createDate: new Date(),
          text: '加载更多评论数据2222'
        }
      ],
      !isSubReply
    ); // 第二个参数表示是否还有数据
  }, 2000);
};
</script>

<template>
  <div>
    <ep-comment
      :data="commentData"
      :load="handleLoad"
      :config="fieldsConfig"
      @confirm-reply="handleReply"
      @click-like="handleLike"
    />
  </div>
</template>

<style scoped lang="scss"></style>
