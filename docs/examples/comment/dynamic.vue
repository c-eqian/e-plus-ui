<script setup lang="ts">
import { ref } from 'vue';
import { initEmoji } from '../../utils/emoji';
import type { ICommentConfig, ICommentData } from 'e-plus-ui';
const commentData = ref<ICommentData>({
  total: 0,
  list: []
});
/**
 *
 * @param data
 */
const handleLoad = () => {
  setTimeout(() => {
    commentData.value = {
      total: 1,
      list: [
        {
          commentName: '李慕婉',
          avatarUrl:
            'https://puui.qpic.cn/vpic_cover/l3535rml86l/l3535rml86l_1704079822_hz.jpg/496',
          userId: 7,
          parentId: 666,
          commentId: 666,
          createDate: '2024-07-06',
          text: '内容内容'
        }
      ]
    };
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
</script>

<template>
  <div>
    <el-button @click="handleLoad">加载</el-button>
    <el-comment :data="commentData" :config="fieldsConfig" />
  </div>
</template>

<style scoped lang="scss"></style>
