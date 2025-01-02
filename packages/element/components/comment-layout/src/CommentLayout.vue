<script setup lang="ts">
/** 评论布局 */
import { computed, ref } from 'vue';
import type { CommentLayoutProps } from './type';
const props = withDefaults(defineProps<CommentLayoutProps>(), {});
const computedSubStyle = computed(() => {
  return props.subStyle;
});
defineOptions({
  name: 'EpCommentLayout'
});
const replyRef = ref<HTMLDivElement>();
defineExpose({
  replyRef
});
</script>

<template>
  <div class="ep-flex ep-h-full ep-w-full ep-comment-box last:ep-mt-3">
    <div v-if="$slots.avatar">
      <slot name="avatar" />
    </div>
    <div class="ep-flex-1 ep-text-sm">
      <div class="ep-flex ep-text-[#945c5f] ep-text-sm">
        <div v-if="$slots.left" class="ep-flex-1 ep-px-2 ep-text-sm">
          <slot name="left" />
        </div>
        <div v-if="$slots.right">
          <slot name="right" />
        </div>
      </div>
      <div class="ep-px-2 ep-py-2">
        <div v-if="$slots.content" class="ep-w-full">
          <slot name="content" />
        </div>
        <div ref="replyRef" class="ep-pt-2 ep-w-full">
          <div v-if="$slots.actions">
            <slot name="actions" />
          </div>
          <div v-if="$slots['editor-reply']">
            <slot name="editor-reply" />
          </div>
        </div>
      </div>
      <!--          二级评论-->
      <div
        v-if="$slots.default"
        :style="computedSubStyle"
        class="ep-bg-[#f8f9fa] dark:ep-bg-[#181818] ep-comment-sub ep-mb-2 ep-p-2 ep-px-4 ep-rounded"
      >
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
