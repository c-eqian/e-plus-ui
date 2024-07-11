<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Image from '../image/index.vue';
const emits = defineEmits<{ (event: 'onSubMit', v: string): void }>();
const valueComputed = defineModel('value', {
  type: String,
  default: '',
});
const props = defineProps({
  placeholder: {
    type: String,
    default: '留下点什么吧...',
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
});
const emojiRef = ref<HTMLDivElement | null>(null);
const isShowEmojiSelect = ref(false);
const isTextareaFocus = ref(false);
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const input = ref('');
const isShowAction = ref(false);
const handleFocus = () => {
  isShowAction.value = true;
  isTextareaFocus.value = true;
};
const handleBlur = () => {
  isShowAction.value = !!input.value.trim();
  isTextareaFocus.value = false;
};
onMounted(() => {
  // 点击表情容器外，隐藏
  onClickOutside(emojiRef, () => {
    isShowEmojiSelect.value = false;
  });
});
const focus = () => {
  textareaRef.value?.focus();
};
onBeforeUnmount(() => {
  valueComputed.value = '';
});
defineOptions({
  name: 'EpEditor',
});
defineExpose({
  focus,
});
</script>

<template>
  <div class="cz-w-full cz-editor">
    <div
      class="editor-input-wrapper"
      :class="[isTextareaFocus ? 'is-focus' : '']"
    >
      <div class="cz-flex">
        <div class="avatar">
          <Image
            width="36"
            height="36"
            round
            url="https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg"
          />
        </div>
        <div class="cz-ml-3 cz-w-full">
          <div class="editor-input cz-relative">
            <textarea
              v-model.trim="input"
              ref="textareaRef"
              :placeholder="props.placeholder"
              class="editor-textarea"
              @blur="handleBlur"
              @focus="handleFocus"
            />
          </div>
          <div
            class="emoji-container cz-my-1.5 cz-items-center cz-flex cz-justify-between"
          >
            <div
              class="cursor-pointer"
              @click="isShowEmojiSelect = !isShowEmojiSelect"
            >
              <img alt="" class="cz-w-6 cz-h-6" src="./emoji.svg" />
            </div>
            <div v-show="isShowAction">
              <el-button>提交</el-button>
            </div>
          </div>
          <div
            v-show="isShowEmojiSelect"
            ref="emojiRef"
            class="emoji-wrapper cz-max-h-40 cz-overflow-y-auto animate__fadeInDown"
          ></div>
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
