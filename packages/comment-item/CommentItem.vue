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
import {
  useBeforeDate,
  deepObjectValue,
  isArray,
  isFunction,
  isBoolean,
} from 'co-utils-vue';
import { onClickOutside } from '@vueuse/core';
import {
  __COMMENT_CLICK_KEY__,
  __COMMENT_FIELD_CONFIG_KEY__,
} from '../comment/constants';
import { defaultFields } from '../comment/commentProps';
const props = defineProps({
  isSubReply: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object as PropType<CommentDataRow>,
    default: () => ({}),
  },
  level1: {
    type: Object as PropType<CommentDataRow>,
    default: () => ({}),
  },
});
const data = computed(() => props.data);
const level1 = computed(() => props.level1);
const placeholder = ref('留下点什么吧...');
const editorRef = ref();
const commentRef = ref();
const inputValue = ref('');
const clickReplyMapFn = inject(__COMMENT_CLICK_KEY__, {});
const config = inject(
  __COMMENT_FIELD_CONFIG_KEY__,
  defaultFields
) as ComputedRef<ICommentConfig>;
const {
  username,
  content,
  avatar,
  createDate,
  emojis,
  showIpAddress,
  ipAddress,
} = config.value;
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
      placeholder.value = `回复 @${deepObjectValue(data.value, username)}`;
    });
  }
};
const handleEmoji = () => {
  if (isArray(emojis)) return emojis;
  if (isFunction(emojis)) return emojis();
  return [];
};
const handleClearValue = (close = false) => {
  inputValue.value = '';
  if (close) {
    state.isReply = false;
  }
};
const isShowIpAddress = () => {
  if (isBoolean(showIpAddress)) {
    const address = deepObjectValue(data.value, ipAddress ?? '');
    return address ? `来自 · ${address}` : false;
  } else if (isFunction(showIpAddress)) {
    return showIpAddress({ item: data.value });
  }
  return false;
};
const handleClickSubmit = (value: string) => {
  if (isFunction(clickReplyMapFn['reply'])) {
    clickReplyMapFn['reply'](value, data.value, level1.value, handleClearValue);
  }
};
const handleLike = () => {
  if (isFunction(clickReplyMapFn['like'])) {
    clickReplyMapFn['like'](data.value, level1.value);
  }
};
const getImageSize = computed(() => {
  return {
    width: props.isSubReply ? 24 : 36,
    height: props.isSubReply ? 24 : 36,
  };
});
defineOptions({
  name: 'EpCommentItem',
});
</script>

<template>
  <comment-layout ref="commentRef">
    <template #avatar>
      <Image
        :url="deepObjectValue(data, avatar!)"
        :width="getImageSize.width"
        round
        :height="getImageSize.height"
      />
    </template>
    <template #right>
      <time>{{ useBeforeDate(deepObjectValue(data, createDate ?? '')) }}</time>
    </template>
    <template #left>
      <div class="cz-flex cz-items-center">
        <div v-if="!$slots.reply" class="cz-relative cz-w-fit">
          <span class="cz-pr-1">{{ deepObjectValue(data, username) }}</span>
        </div>
        <slot name="reply"></slot>
        <i v-if="!$slots.reply" class="cz-w-4 cz-h-4 cz-text-green-500">
          <svg
            viewBox="0 0 1682 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="831"
          >
            <path
              d="M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z"
              fill="#8CDBF4"
              p-id="832"
            ></path>
            <path
              d="M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z"
              fill="#FFFFFF"
              p-id="833"
            ></path>
            <path
              d="M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m950.857143-365.714285l73.142857-73.142858v146.285715h-73.142857z m73.142857-73.142858h146.285715v146.285715h-146.285715z m0 146.285715h146.285715v438.857143h-146.285715z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </i>
        <span
          v-if="isShowIpAddress()"
          v-html="isShowIpAddress()"
          class="cz-inline-block cz-px-2 cz-text-xs"
        ></span>
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
        <div
          class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1"
          @click="handleLike"
        >
          <ElIcon><Star /></ElIcon>
          <span>点赞</span>
        </div>
        <div
          class="cz-flex cz-select-none cz-cursor-pointer cz-items-center cz-space-x-1"
          @click="handleReply"
        >
          <ElIcon><ChatDotSquare /></ElIcon>
          <span>{{ state.isReply ? '取消回复' : '回复' }}</span>
        </div>
      </div>
    </template>
    <template v-if="state.isReply" #editor-reply>
      <EpEditor
        :placeholder="placeholder"
        :emojis="handleEmoji()"
        ref="editorRef"
        v-model="inputValue"
        @click-submit="handleClickSubmit"
      ></EpEditor>
    </template>
    <template v-if="$slots['sub-comment']" #sub>
      <slot name="sub-comment"></slot>
    </template>
  </comment-layout>
</template>

<style scoped lang="scss"></style>
