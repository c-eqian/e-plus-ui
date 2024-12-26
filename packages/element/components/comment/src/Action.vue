<script setup lang="ts">
import { ChatDotSquare, Collection, CollectionFill } from '@e-plus-ui/icons';
import { EpIcon } from '@e-plus-ui/pure';
import { isBoolean } from '@eqian/utils-vue';
import { computed, ref } from 'vue';
const emits = defineEmits(['clickLike', 'clickReply']);
const isLike = defineModel();
const props = defineProps({
  likeCount: {
    type: Number,
    default: 0
  }
});
const likeCount = computed(() => props.likeCount);
const likeDone = (val: boolean) => {
  if (isBoolean(val)) {
    isLike.value = val;
  } else {
    isLike.value = !!val;
  }
};
const replyDone = (val: boolean) => {
  if (isBoolean(val)) {
    state.value.reply = val;
  } else {
    state.value.reply = !!val;
  }
};
const handleLike = () => {
  emits('clickLike', {
    isLike: isLike.value,
    likeDone
  });
};
const handleReply = () => {
  emits('clickReply', {
    reply: state.value.reply
  });
};
const updateReplyState = (val?: boolean) => {
  if (isBoolean(val)) {
    state.value.reply = !!val;
    replyDone(!!val);
    return;
  }
  replyDone(!state.value.reply);
};
const state = ref({
  reply: false
});
defineExpose({
  likeDone,
  replyDone,
  updateReplyState
});
const _iconColor = computed(() => {
  if (isLike.value) {
    return '--global-checked-color';
  }
  return 'currentColor';
});
</script>

<template>
  <div
    class="ep-flex ep-space-x-10 ep-py-2 dark:ep-text-gray-400 ep-text-gray-600 ep-text-xs ep-justify-between"
  >
    <div class="ep-flex-1 ep-flex ep-space-x-10">
      <div
        class="ep-flex ep-items-center ep-cursor-pointer ep-space-x-1"
        :class="{
          'ep-text-[--global-checked-color]': isLike
        }"
        @click="handleLike"
      >
        <EpIcon :color="_iconColor">
          <CollectionFill v-if="isLike" />
          <Collection v-else />
        </EpIcon>
        <span>{{ isLike ? '已赞' : '点赞' }} {{ likeCount > 0 ? `${likeCount}` : '' }}</span>
      </div>
      <div
        class="ep-flex ep-select-none ep-cursor-pointer ep-items-center ep-space-x-1"
        @click="handleReply"
      >
        <EpIcon><ChatDotSquare /></EpIcon>
        <span>{{ state.reply ? '取消回复' : '回复' }}</span>
      </div>
    </div>
    <div v-if="$slots.actions && $slots.actions()">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
