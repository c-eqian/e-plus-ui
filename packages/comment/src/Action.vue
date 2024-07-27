<script setup lang="ts">
import { Collection, CollectionFill, ChatDotSquare } from '@e-plus-ui/icons';
import EpIcon from '../../icon';
import { computed, ref } from 'vue';
import { isBoolean } from 'co-utils-vue';
const emits = defineEmits(['click-like', 'click-reply']);
const isLike = defineModel();
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
  emits('click-like', {
    isLike: isLike.value,
    likeDone,
  });
};
const handleReply = () => {
  state.value.reply = !state.value.reply;
  emits('click-reply', {
    reply: state.value.reply,
    replyDone,
  });
};
const state = ref({
  reply: false,
});
defineExpose({
  likeDone,
  replyDone,
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
    class="cz-flex cz-space-x-10 cz-py-2 dark:cz-text-gray-400 cz-text-gray-600 cz-text-xs"
  >
    <div
      class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1"
      @click="handleLike"
      :class="{
        'cz-text-[--global-checked-color]': isLike,
      }"
    >
      <EpIcon :color="_iconColor">
        <CollectionFill v-if="isLike" />
        <Collection v-else />
      </EpIcon>
      <span>{{ isLike ? '已赞' : '点赞' }}</span>
    </div>
    <div
      class="cz-flex cz-select-none cz-cursor-pointer cz-items-center cz-space-x-1"
      @click="handleReply"
    >
      <EpIcon><ChatDotSquare /></EpIcon>
      <span>{{ state.reply ? '取消回复' : '回复' }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
