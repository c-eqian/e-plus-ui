<script lang="ts" setup>
import { useZIndex } from 'element-plus';
import { computed, defineProps, unref, useSlots, type CSSProperties } from 'vue';
import type { LoadingProps } from './type';
defineOptions({
  name: 'EpLoading'
});
const props = withDefaults(defineProps<LoadingProps>(), {
  text: '加载中...',
  size: 'default',
  type: 'dot',
  maskBackgroundColor: 'rgba(255, 255, 255, 0.7)',
  textColor: '#1890ff',
  iconColor: '#1890ff'
});
const $visible = defineModel('visible', {
  type: Boolean
});
const slots = useSlots();
const setVisible = (v: boolean) => {
  $visible.value = v;
};
const { nextZIndex } = useZIndex();
const loadingNum = props.zIndex ? props.zIndex : nextZIndex();
const computeStyle = computed<CSSProperties>(() => {
  const baseStyle: CSSProperties = {
    '--ep-loading-index': loadingNum,
    '--ep-loading-mask-color': unref(props.maskBackgroundColor),
    '--ep-loading-text-color': unref(props.textColor),
    '--ep-loading-icon-color': unref(props.iconColor)
  };
  if (slots.default) {
    baseStyle.position = 'relative';
  }
  return baseStyle;
});
defineExpose({ setVisible });
</script>

<template>
  <div class="ep-loading-wrap" :style="computeStyle">
    <div
      v-if="$visible"
      :class="[
        'ep-loading-overlay ep-loading',
        { 'loading-fullscreen': fullscreen, 'loading-active': $visible }
      ]"
    >
      <div class="ep-loading-spinner">
        <slot name="icon">
          <div
            :class="[`ep-loading-icon-${type}`, `ep-loading-icon-${type}-${size || 'default'}`]"
            aria-live="polite"
            aria-busy="true"
          >
            <span v-if="type === 'dot'" class="ep-spin-dot ep-spin-dot-spin">
              <i v-for="i in 4" :key="i" class="ep-spin-dot-item"></i>
            </span>
            <svg v-else-if="type === 'circle'" viewBox="0 0 50 50">
              <circle
                class="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="80, 200"
                stroke-dashoffset="0"
              />
            </svg>
          </div>
        </slot>
        <div v-if="text" class="ep-loading-text">{{ text }}</div>
      </div>
    </div>
    <slot name="default"></slot>
  </div>
</template>
