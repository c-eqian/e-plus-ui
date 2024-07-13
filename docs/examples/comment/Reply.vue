<script setup lang="ts">
import { EpComment, ICommentConfig, ICommentData } from 'e-plus-ui';
import { initEmoji } from '../../utils/emoji';
type Item = {
  commentName: string;
  avatar: string;
  userId: number;
  commentId: number;
  createDate: string;
  text: string;
  children: {
    commentName: string;
    avatar: string;
    userId: number;
    commentId: number;
    createDate: string;
    text: string;
    parentId: number;
    children: {
      replyId: number;
      commentName: string;
      avatar: string;
      userId: number;
      parentId: number;
      commentId: number;
      createDate: string;
      text: string;
      children: {
        replyId: number;
        commentName: string;
        avatar: string;
        userId: number;
        parentId: number;
        commentId: number;
        createDate: string;
        text: string;
      }[];
    }[];
  }[];
};
type DataType = {
  total: number;
  list: Item[];
};
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
            text: '也许换个环境能激发一些新想法。',
          },
          {
            commentName: '展昭',
            avatarUrl: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
            userId: 3,
            parentId: 99,
            commentId: 101,
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
            createDate: '2024-07-06',
            text: '去哪？',
            children: [
              {
                commentName: '王林',
                avatarUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
                userId: 6,
                parentId: 666,
                commentId: 669,
                createDate: '2024-07-07',
                text: '我带你去SHA人。',
              },
              {
                commentName: '许立国',
                avatarUrl: 'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
                userId: 8,
                parentId: 666,
                commentId: 670,
                createDate: '2024-07-07',
                children: [
                  {
                    commentName: '王林',
                    avatarUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
                    userId: 6,
                    parentId: 666,
                    commentId: 671,
                    createDate: '2024-07-07',
                    text: '这杀千刀的许立国',
                    children: [
                      {
                        commentName: '许立国',
                        avatarUrl: 'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
                        userId: 8,
                        parentId: 666,
                        commentId: 672,
                        createDate: '2024-06-05',
                        text: '主子，主子，我错了，真错了',
                      },
                    ]
                  }
                ],
                text: '极品!极品啊!',
              },
            ]
          },
          {
            commentName: '许立国',
            avatarUrl: 'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
            userId: 8,
            parentId: 666,
            commentId: 668,
            createDate: '2024-06-05',
            text: '等日后老子有一天修为高了，一定要让这煞星好看，大不了老子拼了……拼……',
          },
        ]
      },
    },
  ],
};

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
        :data="commentData"
        :config="fieldsConfig"
    ></ep-comment>
  </div>
</template>

<style scoped lang="scss"></style>
