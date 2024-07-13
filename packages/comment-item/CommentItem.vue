<script setup lang="ts">
import CommentLayout from '../comment-layout/CommentLayout.vue';
import { ElIcon } from 'element-plus';
import { ChatDotSquare, Star } from '@element-plus/icons-vue';
import Image from '../image/index.vue';
import {
  computed,
  ComputedRef,
  inject,
  nextTick,
  type PropType,
  reactive,
  ref,
} from 'vue';
import type { CommentDataRow, ICommentConfig } from '../comment';
import { useBeforeDate, deepObjectValue } from 'co-utils-vue';
import { onClickOutside } from '@vueuse/core';
import { defaultFields } from '../comment/commentProps';
import { COMMENT_FIELD_CONFIG } from '../comment/constants';
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
const fields = inject(
  COMMENT_FIELD_CONFIG,
  defaultFields
) as ComputedRef<ICommentConfig>;
const editorRef = ref();
const commentRef = ref();
const { username, content, avatar, createDate } = fields.value;
onClickOutside(commentRef, () => {
  state.isReply = false;
});
const state = reactive({
  isReply: false,
});
const handleReply = () => {
  state.isReply = !state.isReply;
  if (state.isReply) {
    nextTick(() => {
      editorRef.value?.focus();
    });
  }
};
defineOptions({
  name: 'EpCommentItem',
});
</script>

<template>
  <comment-layout ref="commentRef">
    <template #avatar>
      <Image
        :url="deepObjectValue(data, avatar!)"
        width="36"
        round
        height="36"
      />
    </template>
    <template #right>
      <time>{{ useBeforeDate(data[createDate!]) }}</time>
    </template>
    <template #left>
      <div v-if="!$slots.reply" class="cz-relative cz-w-fit">
        <span class="cz-pr-1">{{ deepObjectValue(data, username) }}</span>
      </div>
      <div class="cz-flex">
        <slot name="reply"></slot>
      </div>
    </template>
    <template #content>
      <div v-text="data[content!]" />
      <slot name="reply-content"> </slot>
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
          class="cz-flex cz-select-none cz-cursor-pointer cz-items-center cz-space-x-1"
          @click="handleReply"
        >
          <el-icon><ChatDotSquare /></el-icon>
          <span>{{ state.isReply ? '取消回复' : '回复' }}</span>
        </div>
      </div>
    </template>
    <template v-if="state.isReply" #editor-reply>
      <EpEditor ref="editorRef"></EpEditor>
    </template>
    <template v-if="$slots['sub-comment']" #sub>
      <slot name="sub-comment"></slot>
    </template>
  </comment-layout>
</template>

<style scoped lang="scss"></style>
