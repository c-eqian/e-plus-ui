<script lang="ts" setup>
import {
  nextTick,
  onBeforeUnmount,
  type PropType,
  ref,
  watchEffect,
} from 'vue';
import Image from '../image/index.vue';
import { ElButton, ElPopover } from 'element-plus';
import type { EmojiData } from './type';
import { Position } from '@e-plus-ui/icons';

const emits = defineEmits<{ (event: 'click-submit', v: string): void }>();
const valueComputed = defineModel({
  type: String,
  default: '',
});
const props = defineProps({
  placeholder: {
    type: String,
    default: '留下点什么吧...',
  },
  emojis: {
    type: Array as PropType<EmojiData[]>,
    default: () => [],
  },
  useEmojis: {
    type: Boolean,
    default: false,
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
});
const emojiRef = ref<HTMLDivElement | null>(null);
const isTextareaFocus = ref(false);
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const isShowAction = ref(false);
const isShow = ref(false);
const emojiList = ref<EmojiData[]>([]);
watchEffect(() => {
  if (props.useEmojis) {
    emojiList.value = props.emojis;
  }
});
const handleFocus = () => {
  isShowAction.value = true;
  isTextareaFocus.value = true;
};
const handleBlur = () => {
  isShowAction.value = !!valueComputed.value.trim();
  isTextareaFocus.value = false;
};
const focus = () => {
  textareaRef.value?.focus();
};
const handleClickEmoji = (item: EmojiData) => {
  const selectStart = textareaRef.value?.selectionStart ?? 0;
  const selectEnd = textareaRef.value?.selectionEnd ?? 0;
  valueComputed.value =
    valueComputed.value.substring(0, selectStart) +
    item.name +
    valueComputed.value.substring(selectEnd);
  nextTick(() => {
    textareaRef.value?.focus(); // 聚焦，否则连续点击追加回无效
    textareaRef.value?.setSelectionRange(
      selectStart + item.name.length,
      selectStart + item.name.length
    );
  });
};
const handleSubmit = () => {
  emits('click-submit', valueComputed.value);
};
const setEmojis = (list: EmojiData[]) => {
  if (props.useEmojis) {
    emojiList.value = list;
  }
};
onBeforeUnmount(() => {
  valueComputed.value = '';
});
defineOptions({
  name: 'EpEditor',
});
defineExpose({
  focus,
  isShow,
  setEmojis,
});
</script>

<template>
  <div class="cz-w-full cz-editor">
    <div
      class="editor-input-wrapper"
      :class="[isTextareaFocus ? 'is-focus' : '']"
    >
      <div class="cz-flex">
        <div class="avatar cz-pt-1.5">
          <Image
            width="24"
            height="24"
            round
            url="https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg"
          />
        </div>
        <div class="cz-ml-3 cz-w-full">
          <div class="editor-input cz-relative">
            <textarea
              v-model.trim="valueComputed"
              ref="textareaRef"
              :placeholder="props.placeholder"
              class="editor-textarea"
              @blur="handleBlur"
              @focus="handleFocus"
            />
          </div>
          <div
            class="emoji-container cz-py-1.5 cz-items-center cz-flex"
            :class="[props.useEmojis ? 'cz-justify-between' : 'cz-justify-end']"
          >
            <el-popover
              trigger="click"
              width="260px"
              @show="isShow = true"
              @hide="isShow = false"
            >
              <template #reference>
                <div
                  v-if="props.useEmojis"
                  class="cz-cursor-pointer"
                  title="表情包"
                >
                  <img alt="" class="cz-w-6 cz-h-6" src="./emoji.svg" />
                </div>
              </template>
              <div
                ref="emojiRef"
                class="emoji-wrapper cz-max-h-40 cz-overflow-y-auto animate__fadeInDown"
              >
                <span
                  v-for="item in emojiList"
                  :key="item.name"
                  class="emoji-item cz-p-[5px]"
                  @click="handleClickEmoji(item)"
                >
                  <img
                    :src="item.url"
                    :title="item.name"
                    :alt="item.name"
                    class="cz-w-6 cz-h-6 emoji"
                  />
                </span>
              </div>
            </el-popover>
            <div>
              <ElButton
                :disabled="valueComputed.length === 0"
                size="small"
                :icon="Position"
                type="primary"
                @click="handleSubmit"
                >提交</ElButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'style.scss';

//@media (min-width: 960px) {
//  .comment-textarea {
//    background: url(@/assets/commentBack.webp) 100% 100% no-repeat;
//  }
//}
</style>
