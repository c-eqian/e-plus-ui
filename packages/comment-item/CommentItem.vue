<script setup lang="ts">
import CommentLayout from '../comment-layout/CommentLayout.vue';
import { ElIcon } from 'element-plus';
import { ChatDotSquare, Star } from '@element-plus/icons-vue';
import Image from '../image/index.vue';
import { computed, PropType, reactive } from 'vue';
import type { CommentDataRow } from '../comment';
import { isEmpty, useBeforeDate } from 'co-utils-vue';
const props = defineProps({
  isSubReply: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object as PropType<CommentDataRow>,
    default: () => ({}),
  },
});
const data = computed(() => props.data);
const state = reactive({
  isReply: false,
});
const handleReply = () => {
  state.isReply = !state.isReply;
};
defineOptions({
  name: 'EpCommentItem',
});
</script>

<template>
  <comment-layout>
    <template #avatar>
      <Image :url="data.userInfo.avatar" width="36" round height="36" />
    </template>
    <template #right>
      <time>{{ useBeforeDate(data.createDate) }}</time>
    </template>
    <template #left>
      <div v-if="!props.isSubReply" class="cz-relative cz-w-fit">
        <span class="cz-pr-1">{{ data.userInfo.username }}</span>
      </div>
      <div v-else class="cz-flex">
        <div class="cz-flex">
          <div class="cz-relative cz-w-fit">
            <span>{{ data.userInfo?.username }}</span>
          </div>
          <span v-if="data.replyId && !isEmpty(data.replyInfo)" class="cz-px-1">
            <strong>回复</strong>
            {{ data.replyInfo?.userInfo?.username }}
          </span>
        </div>
      </div>
    </template>
    <template #content>
      <div v-text="data.content" />
      <div
        v-if="isSubReply && data.replyId && !isEmpty(data.replyInfo)"
        class="cz-border cz-my-1 cz-text-[12px] cz-text-gray-600"
      >
        <div class="cz-p-2">“{{ data.replyInfo?.content }}”</div>
      </div>
    </template>
    <template #action>
      <div
        class="cz-flex cz-space-x-10 cz-py-2 dark:cz-text-gray-400 cz-text-gray-600 cz-text-xs"
      >
        <div class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1">
          <el-icon><Star /></el-icon>
          <span>点赞</span>
        </div>
        <div
          class="cz-flex cz-cursor-pointer cz-items-center cz-space-x-1"
          @click="handleReply"
        >
          <el-icon><ChatDotSquare /></el-icon>
          <span>{{ state.isReply ? '取消回复' : '回复' }}</span>
        </div>
      </div>
    </template>
    <template v-if="state.isReply" #reply>
      <EpEditor></EpEditor>
    </template>
    <template v-if="$slots['sub-comment']" #sub>
      <slot name="sub-comment"></slot>
    </template>
  </comment-layout>
</template>

<style scoped lang="scss"></style>
