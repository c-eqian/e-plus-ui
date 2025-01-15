<script setup lang="ts">
// 文本省略组件
import { ElButton } from 'element-plus';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import type { ITextFoldProps } from './type';

defineOptions({
  name: 'EpTextFold'
});
const props = withDefaults(defineProps<ITextFoldProps>(), {
  line: 3,
  position: 'right'
});
const computedLine = computed(() => {
  const _line = Math.trunc(Number(props.line));
  return _line > 0 ? _line : 3;
});
const computedIsFold = computed(() => props.isFold);
// 文本是否是展开状态 默认为收起
const currentIsFold = ref(true);
//文本是否超出行数，默认否
const isMaxLine = ref(false);

const textBoxRef = ref<HTMLDivElement>();
const textFoldRef = ref<HTMLDivElement>();
const observer = ref<ResizeObserver>();
onMounted(() => {
  observer.value = new ResizeObserver(() => {
    if (currentIsFold.value && textBoxRef.value && textFoldRef.value) {
      isMaxLine.value = textFoldRef.value.clientHeight < textBoxRef.value.scrollHeight;
    }
  });
  observer.value.observe(textBoxRef.value as any);
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <div class="ep-text-fold" :style="{ '--line-clamp-num': computedLine }">
    <div ref="textFoldRef" class="ep-text-box" :class="{ 'over-hidden': currentIsFold }">
      <div ref="textBoxRef">
        <el-button
          v-if="isMaxLine && computedIsFold && props.position === 'right'"
          :class="{ 'over-hidden': currentIsFold, 'end-btn': 1 }"
          type="primary"
          plain
          link
          @click="currentIsFold = !currentIsFold"
        >
          {{ currentIsFold ? '展开' : '收起' }}
        </el-button>
        <slot />
      </div>
    </div>
    <div
      v-if="isMaxLine && computedIsFold && props.position === 'left'"
      class="ep-text__action ep-select-none"
    >
      <div class="ep-text__btn" @click="currentIsFold = !currentIsFold">
        <slot name="expand" :is-fold="currentIsFold">
          <el-button type="primary" plain link>{{ currentIsFold ? '展开' : '收起' }}</el-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
