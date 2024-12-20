<script setup lang="ts">
import { EpComment, EpLine, type ICommentConfig, type ICommentData } from 'e-plus-ui';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
const isUseSlot = ref(false);
const commentRef = ref<InstanceType<typeof EpComment>>();
const commentData: ICommentData = {
  total: 99,
  list: [
    {
      commentName: '张无忌',
      avatarUrl: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
      userId: 1,
      commentId: 36,
      ipAddress: '深圳',
      level: 1,
      createDate: '2016-05-02',
      subComment: {
        total: 0,
        list: []
      },
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
      commentName: '王林',
      avatarUrl:
        'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
      userId: 6,
      // 非content字段
      content: '婉儿，来~',
      commentId: 666,
      createDate: '2024-05-02',
      subComment: {
        total: 2,
        list: [
          {
            commentName: '李慕婉',
            avatarUrl:
              'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
            userId: 7,
            parentId: 666,
            commentId: 667,
            createDate: '2024-07-06',
            content: '去哪？'
          },
          {
            commentName: '王林',
            avatarUrl:
              'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
            userId: 6,
            parentId: 666,
            commentId: 669,
            createDate: '2024-07-07',
            content: '我带你去SHA人。',
            reply: {
              commentName: '李慕婉',
              avatarUrl:
                'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
              userId: 7,
              parentId: 666,
              commentId: 667,
              createDate: '2024-07-06',
              content: '去哪？'
            }
          },
          {
            commentName: '许立国',
            avatarUrl:
              'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
            userId: 8,
            parentId: 666,
            commentId: 670,
            createDate: '2024-07-07',
            content: '极品!极品啊!',
            reply: {
              commentName: '李慕婉',
              avatarUrl:
                'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
              userId: 7,
              parentId: 666,
              commentId: 667,
              createDate: '2024-07-06',
              content: '去哪？'
            }
          },
          {
            commentName: '王林',
            avatarUrl:
              'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
            userId: 6,
            parentId: 666,
            commentId: 671,
            createDate: '2024-07-07',
            content: '这杀千刀的许立国',
            reply: {
              commentName: '许立国',
              avatarUrl:
                'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
              userId: 8,
              parentId: 666,
              commentId: 670,
              createDate: '2024-07-07',
              content: '极品!极品啊!'
            }
          },
          {
            commentName: '许立国',
            avatarUrl:
              'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
            userId: 8,
            parentId: 666,
            commentId: 672,
            createDate: '2024-06-05',
            content: '主子，主子，我错了，真错了',
            reply: {
              commentName: '王林',
              avatarUrl:
                'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
              userId: 6,
              parentId: 666,
              commentId: 671,
              createDate: '2024-07-07',
              content: '这杀千刀的许立国'
            }
          },
          {
            commentName: '许立国',
            avatarUrl:
              'https://puui.qpic.cn/vpic_cover/w3533s42ici/w3533s42ici_1702637681_hz.jpg/496',
            userId: 8,
            parentId: 666,
            commentId: 668,
            createDate: '2024-06-05',
            content: '等日后老子有一天修为高了，一定要让这煞星好看，大不了老子拼了……拼……'
          }
        ]
      }
    }
  ]
};
/**
 * 配置
 */
const fieldsConfig: ICommentConfig = {
  // 显示IP属地
  showIpAddress: true,
  showLevel: true,
  actionsExtra: true,
  commentFields: {
    username: 'commentName',
    avatar: 'avatarUrl',
    userId: 'userId'
  }
  // 如果字段也为ipAddress，可不填
  // ipAddress: 'ipAddress'
};
const handleActions = (type: 0 | 1, { item }: any) => {
  if (type === 0) {
    commentRef.value?.deleteComment(item);
  }
  ElMessage.success(`点击${type === 0 ? '删除' : '投诉'}-----${item.commentName}`);
};
</script>

<template>
  <div>
    <el-button @click="isUseSlot = !isUseSlot">{{ isUseSlot ? '使用内置' : '使用插槽' }}</el-button>
    <ep-comment
      ref="commentRef"
      :data="commentData"
      :config="fieldsConfig"
      @actions="handleActions"
    >
      <template v-if="isUseSlot" #actions-extra="{ item }">
        <div class="cz-flex cz-flex-col">
          <el-button
            v-if="item?.userInfo.userId === 2"
            size="small"
            link
            type="danger"
            icon="Delete"
            >删 除1</el-button
          >
          <EpLine />
          <el-button link size="small" icon="Warning">投 诉2</el-button>
        </div>
      </template>
    </ep-comment>
  </div>
</template>

<style scoped lang="scss"></style>
