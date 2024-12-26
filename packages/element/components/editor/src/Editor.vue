<script lang="ts" setup>
import { Position } from '@e-plus-ui/icons';
import { EpImage } from '@e-plus-ui/pure';
import { ElButton, ElPopover } from 'element-plus';
import { nextTick, onBeforeUnmount, ref, watchEffect } from 'vue';
import type { EditorProps, EmojiData } from './type';

const emits = defineEmits<{ (event: 'submit', v: string): void }>();
const valueComputed = defineModel({
  type: String,
  default: ''
});
const props = withDefaults(defineProps<EditorProps>(), {
  placeholder: '留下点什么吧...',
  emojis: () => [],
  useEmojis: false,
  autoFocus: false
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
  emits('submit', valueComputed.value);
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
  name: 'EpEditor'
});
defineExpose({
  focus,
  isShow,
  setEmojis
});
</script>

<template>
  <div class="ep-w-full ep-editor">
    <div class="editor-input-wrapper" :class="[isTextareaFocus ? 'is-focus' : '']">
      <div class="ep-flex">
        <div class="avatar ep-pt-1.5">
          <EpImage
            width="24"
            height="24"
            round
            url="https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg"
          />
        </div>
        <div class="ep-ml-3 ep-w-full">
          <div class="editor-input ep-relative">
            <textarea
              ref="textareaRef"
              v-model.trim="valueComputed"
              :placeholder="props.placeholder"
              class="editor-textarea"
              @blur="handleBlur"
              @focus="handleFocus"
            />
          </div>
          <div
            class="emoji-container ep-py-1.5 ep-items-center ep-flex"
            :class="[props.useEmojis ? 'ep-justify-between' : 'ep-justify-end']"
          >
            <el-popover trigger="click" width="260px" @show="isShow = true" @hide="isShow = false">
              <template #reference>
                <div v-if="props.useEmojis" class="ep-cursor-pointer" title="表情包" />
              </template>
              <div
                ref="emojiRef"
                class="emoji-wrapper ep-max-h-40 ep-overflow-y-auto animate__fadeInDown"
              >
                <span
                  v-for="item in emojiList"
                  :key="item.name"
                  class="emoji-item ep-p-[5px]"
                  @click="handleClickEmoji(item)"
                >
                  <img
                    :src="item.url"
                    :title="item.name"
                    :alt="item.name"
                    class="ep-w-6 ep-h-6 emoji"
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

<style lang="scss" scoped></style>
