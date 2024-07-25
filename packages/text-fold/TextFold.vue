<template>
  <div class="cz-text-fold">
    <div
      ref="textFoldRef"
      class="cz-text-box"
      :class="{ 'over-hidden': currentIsFold }"
    >
      <div ref="textBoxRef">
        <el-button
          v-if="isMaxLine && computedIsFold && props.position === 'right'"
          @click="currentIsFold = !currentIsFold"
          :class="{ 'over-hidden': currentIsFold, 'end-btn': 1 }"
          type="primary"
          plain
          link
        >
          {{ currentIsFold ? '展开' : '收起' }}
        </el-button>
        <slot></slot>
      </div>
    </div>
    <div class="cz-text__action cz-select-none">
      <div
        v-if="isMaxLine && computedIsFold && props.position === 'left'"
        class="cz-text__btn"
        @click="currentIsFold = !currentIsFold"
      >
        <slot name="expand" :isFold="currentIsFold">
          <el-button type="primary" plain link>{{
            currentIsFold ? '展开' : '收起'
          }}</el-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { ElButton } from 'element-plus';
import type { TextFoldProps } from './type';

defineOptions({
  name: 'EpTextFold',
});
const props = withDefaults(defineProps<TextFoldProps>(), {
  line: 3,
  position: 'right',
});
const computedLine = computed(() => {
  const _line = Math.trunc(Number(props.line));
  return _line > 0 ? _line : 1;
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
  observer.value = new ResizeObserver((entry) => {
    if (currentIsFold.value && textBoxRef.value && textFoldRef.value) {
      isMaxLine.value =
        textFoldRef.value.clientHeight < textBoxRef.value.scrollHeight;
    }
  });
  observer.value.observe(textBoxRef.value as any);
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<style lang="scss" scoped>
@use './style.scss' with (
  $line: v-bind(computedLine)
);
</style>
