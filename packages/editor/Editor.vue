<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Image from '../image/index.vue';
const emits = defineEmits<{ (event: 'onSubMit', v: string): void }>();
const valueComputed = defineModel('value', {
  type: String,
  default: '',
});
const placeholder = defineModel('placeholder', {
  type: String,
  default: '留下点什么吧...',
});
const isLogin = defineModel('isLogin', {
  type: Boolean,
  default: false,
});
const emojiRef = ref<HTMLDivElement | null>(null);
const isShowEmojiSelect = ref(false);
const isTextareaFocus = ref(false);
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
onBeforeUnmount(() => {
  valueComputed.value = '';
});
defineOptions({
  name: 'EpEditor',
});
</script>

<template>
  <div class="cz-w-full">
    <div class="comment-title">
      <slot />
    </div>
    <div
      class="comment-input-wrapper"
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
          <div class="comment-input">
            <textarea
              v-model.trim="input"
              :placeholder="placeholder"
              class="comment-textarea"
              @blur="handleBlur"
              @focus="handleFocus"
            />
          </div>
          <div class="emoji-container cz-flex cz-justify-between">
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
            class="emoji-wrapper animate__fadeInDown"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-title {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 10px;
}

.comment-input-wrapper {
  border: 1px solid rgba(144, 147, 153, 0.31);
  border-radius: 4px;
  padding: 10px;
  margin: 0 0 10px;
}

img {
  border-style: none;
}

.comment-input {
  position: relative;
}
.is-focus {
  transition: 0.5s all;
  box-shadow: 0 0 0 1px #409eff inset;
}
.comment-textarea {
  font-size: 0.875rem;
  color: var(--cz-secondary-color, #4c4948);
  outline: none;
  padding: 10px 5px;
  min-height: 80px;
  max-height: 360px;
  resize: none;
  width: 100%;
  border-radius: 4px;
}
//@media (min-width: 960px) {
//  .comment-textarea {
//    background: url(@/assets/commentBack.webp) 100% 100% no-repeat;
//  }
//}

.emoji-container,
.send-wrapper {
  display: flex;
  align-items: center;
}

.emoji-container {
  margin: 5px 0;
}

.emoji-item {
  cursor: pointer;
  display: block;
  float: left;
}

.emoji-wrapper {
  max-height: 150px;
  overflow-y: auto;
}

.emoji {
  user-select: none;
  margin: 0.25rem;
  display: inline-block;
  vertical-align: middle;
}
</style>
