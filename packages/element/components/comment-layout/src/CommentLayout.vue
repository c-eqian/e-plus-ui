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
  <div class="cz-flex cz-h-full cz-w-full cz-comment-box last:cz-mt-3">
    <div v-if="$slots.avatar">
      <slot name="avatar" />
    </div>
    <div class="cz-flex-1 cz-text-sm">
      <div class="cz-flex cz-text-[#945c5f] cz-text-sm">
        <div v-if="$slots.left" class="cz-flex-1 cz-px-2 cz-text-sm">
          <slot name="left" />
        </div>
        <div v-if="$slots.right">
          <slot name="right" />
        </div>
      </div>
      <div class="cz-px-2 cz-py-2">
        <div v-if="$slots.content" class="cz-w-full">
          <slot name="content" />
        </div>
        <div ref="replyRef" class="cz-pt-2 cz-w-full">
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
        v-if="$slots.default && $slots.default()"
        :style="computedSubStyle"
        class="cz-bg-[#f8f9fa] dark:cz-bg-[#181818] cz-comment-sub cz-mb-2 cz-p-2 cz-px-4 cz-rounded"
      >
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
