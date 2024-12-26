<script setup lang="ts">
import { ArrowDown } from '@e-plus-ui/icons';
import { isBoolean } from '@eqian/utils-vue';
import { ElButton } from 'element-plus';
import { computed, ref } from 'vue';
const props = defineProps({
  isReply: {
    type: Boolean,
    default: false
  }
});
const cls = computed(() => {
  return {
    'ep-ml-10': !props.isReply,
    'ep-ml-6': props.isReply
  };
});
const emits = defineEmits(['load']);
const isLoading = ref(false);
const loadDone = (val = true) => {
  if (isBoolean(val)) {
    isLoading.value = !val;
    return;
  }
  isLoading.value = false;
};
const handleLoad = () => {
  isLoading.value = true;
  emits('load', loadDone);
};
</script>

<template>
  <div
    class="ep-text-xs ep-flex ep-items-center ep-cursor-pointer ep-space-x-1 ep-text-[--global-primary-color]"
    :class="cls"
  >
    <ElButton type="primary" plain :loading="isLoading" link :icon="ArrowDown" @click="handleLoad">
      {{ isLoading ? '加载中' : '加载更多' }}
    </ElButton>
  </div>
</template>

<style scoped lang="scss"></style>
