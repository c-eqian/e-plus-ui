<script setup lang="ts">
defineOptions({
  name: 'EpCommentLayout',
});
</script>

<template>
  <div class="cz-flex cz-h-full cz-w-full cz-comment-box">
    <div v-if="$slots.avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="cz-flex-1 cz-text-sm">
      <div class="cz-flex cz-text-[#945c5f] cz-text-sm">
        <div v-if="$slots.left" class="cz-flex-1 cz-px-2 cz-text-sm">
          <slot name="left"></slot>
        </div>
        <div v-if="$slots.right">
          <slot name="right"></slot>
        </div>
      </div>
      <div class="cz-px-2 cz-py-2">
        <div class="cz-w-full" v-if="$slots.content">
          <slot name="content"></slot>
        </div>
        <div class="cz-pt-2 cz-w-full">
          <div v-if="$slots.actions">
            <slot name="actions"></slot>
          </div>

          <div v-if="$slots['editor-reply']">
            <slot name="editor-reply" />
          </div>
        </div>
      </div>
      <!--          二级评论-->
      <div
        v-if="$slots.default && $slots.default()"
        class="cz-bg-[#f8f9fa] dark:cz-bg-[#181818] cz-mb-2 cz-p-2 cz-px-4 cz-rounded"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.cz-comment-box:last-child {
  margin-top: 12px;
}
</style>
