<script setup lang="ts">
import {
  EpComment,
  ICommentConfig,
  type ICommentData,
  EpLine,
} from '../packages';
import { Delete, Warning } from '@element-plus/icons-vue';
import { ElButton } from 'element-plus';
const commentData: ICommentData = {
  total: 99,
  list: [
    {
      userInfo: {
        username: '张无忌',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 1,
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
        'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。',
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 2,
      },
      ipAddress: '广州',
      level: 5,
      content: 'SVG 图标提供额外的属性, 提供的详细属性请继续阅读。',
      commentId: 66,
      createDate: '2018-05-02',
    },
  ],
};
/**
 * 配置
 */
const fieldsConfig: ICommentConfig = {
  // 显示IP属地
  showIpAddress: true,
  showLevel: true,
  actionsExtra: true,
  // 如果字段也为ipAddress，可不填
  // ipAddress: 'ipAddress'
};
</script>

<template>
  <div>
    <ep-comment :data="commentData" :config="fieldsConfig">
      <template #actions-extra="{ item }">
        <div class="cz-flex cz-flex-col">
          <el-button
            v-if="item?.userInfo.userId === 2"
            size="small"
            link
            type="danger"
            :icon="Delete"
            >删 除1</el-button
          >
          <EpLine></EpLine>
          <el-button link size="small" :icon="Warning">投 诉2</el-button>
        </div>
      </template>
    </ep-comment>
  </div>
</template>

<style scoped lang="scss"></style>
