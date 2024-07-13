<script setup lang="ts">
import CommentLayout from '../comment-layout/CommentLayout.vue';
import { ElIcon } from 'element-plus';
import { ChatDotSquare, Star } from '@element-plus/icons-vue';
import Image from '../image/index.vue';
import { computed, nextTick, type PropType, reactive, ref } from 'vue';
import type { CommentDataRow, ICommentConfig } from '../comment';
import {
  useBeforeDate,
  deepObjectValue,
  isArray,
  isFunction,
} from 'co-utils-vue';
import { onClickOutside } from '@vueuse/core';
const props = defineProps({
  isSubReply: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object as PropType<CommentDataRow>,
    default: () => ({}),
  },
  config: {
    type: Object as PropType<ICommentConfig>,
    default: () => ({}),
  },
});
const data = computed(() => props.data);
const config = computed(() => props.config);
const placeholder = ref('留下点什么吧...');
const editorRef = ref();
const commentRef = ref();
const { username, content, avatar, createDate, emojis } = config.value;
onClickOutside(commentRef, () => {
  state.isReply = false;
});
const state = reactive({
  isReply: false,
});
const handleReply = () => {
  state.isReply = !state.isReply;
  console.log(99, data.value);
  if (state.isReply) {
    nextTick(() => {
      editorRef.value?.focus();
      placeholder.value = `回复 @${deepObjectValue(data.value, username)}`;
    });
  }
};
const handleEmoji = () => {
  if (isArray(emojis)) return emojis;
  if (isFunction(emojis)) return emojis();
  return [];
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
      <time>{{ useBeforeDate(deepObjectValue(data, createDate ?? '')) }}</time>
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
      <div v-text="deepObjectValue(data, content ?? '')" />
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
      <EpEditor
        :placeholder="placeholder"
        :emojis="handleEmoji()"
        ref="editorRef"
      ></EpEditor>
    </template>
    <template v-if="$slots['sub-comment']" #sub>
      <slot name="sub-comment"></slot>
    </template>
  </comment-layout>
</template>

<style scoped lang="scss"></style>
