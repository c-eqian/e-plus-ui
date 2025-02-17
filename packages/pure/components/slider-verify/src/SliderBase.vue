<script lang="ts" setup>
import { Check, DArrowRight } from '@e-plus-ui/icons';
import { EpIcon } from '@e-plus-ui/pure/components/icon';
import { computed, nextTick, ref, useTemplateRef, watch, type CSSProperties } from 'vue';
import { sliderVerifyDefault } from './defaultProps';
import type { SliderVerifierProps } from './type';
const sliderLeft = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const isSuccess = ref(false);
const sliderVerifyWith = ref(0);
let bw: number;
const emits = defineEmits(['sliderMouseMove', 'sliderMouseUp', 'sliderMouseDown']);
const props = withDefaults(defineProps<SliderVerifierProps>(), sliderVerifyDefault);
const sliderVerifyRef = useTemplateRef('sliderVerifyRef');
const sliderVerifyBlockRef = useTemplateRef('sliderVerifyBlockRef');
const text = computed(() => {
  return isSuccess.value ? props.successText : props.tipText;
});
const calcSliderVerifyWith = () => {
  const vw = parseInt(`${sliderVerifyRef.value?.clientWidth ?? props.width}`, 10);
  bw = parseInt(`${sliderVerifyBlockRef.value?.clientWidth ?? 48}`, 10);
  sliderVerifyWith.value = vw - bw;
};

const computedSize = computed<CSSProperties>(() => {
  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
    '--slider-border-radius': `${props.radius}px`
  };
});
const createData = () => {
  return {
    // 滑动容器宽度
    sw: sliderVerifyWith.value,
    // 滑块宽度
    bw,
    // 滑动距离左侧
    sl: sliderLeft.value
  };
};
const handleOnMousedown = (e: MouseEvent) => {
  isDragging.value = true;
  startX.value = e.clientX - sliderLeft.value;
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
  emits('sliderMouseDown', createData());
};
const resetSliderVerify = () => {
  isSuccess.value = false;
  isDragging.value = false;
  sliderLeft.value = 0;
};
const verifySuccess = () => {
  // 验证结果
  isSuccess.value = true;
};

// 拖动处理
const onDrag = (e: MouseEvent) => {
  if (!isDragging.value) return;
  const newLeft = e.clientX - startX.value;
  sliderLeft.value = Math.max(0, Math.min(sliderVerifyWith.value, newLeft));
};
// 停止拖动
const stopDrag = () => {
  isDragging.value = false;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
  emits('sliderMouseUp', createData());
};
const computedModalStyle = computed<CSSProperties>(() => {
  return {
    width: `${sliderLeft.value}px`,
    backgroundColor: props.sliderBgColor ?? 'var(--el-color-success)'
  };
});
watch(
  () => sliderLeft.value,
  () => {
    emits('sliderMouseMove', createData());
  }
);
nextTick(() => {
  calcSliderVerifyWith();
});
defineExpose({
  resetSliderVerify,
  verifySuccess
});
</script>

<template>
  <div
    ref="sliderVerifyRef"
    class="ep-slider-verify ep-bg-[#f0f2f5] dark:ep-bg-[deep] ep-flex ep-rounded-[var(--slider-border-radius)] ep-justify-center ep-items-center ep-border ep-text-xs ep-relative"
    :style="computedSize"
  >
    <div class="ep-slider-content ep-z-10 ep-text-center ep-size-fit">
      <div class="ep-slider-content__text !ep-bg-clip-text ep-text-transparent">
        <template v-if="!$slots.default">
          {{ text }}
        </template>
        <slot name="default"></slot>
      </div>
    </div>
    <div
      ref="sliderVerifyBlockRef"
      :style="{
        left: `${sliderLeft}px`
      }"
      :class="isSuccess ? 'is-success' : ''"
      class="ep-slider-block ep-cursor-pointer ep-bg-white ep-absolute ep-top-0 ep-h-full ep-w-12"
      @mousedown="handleOnMousedown"
    >
      <ep-icon v-if="!$slots['slider-block']">
        <component
          :is="isSuccess ? (props.sliderSuccessIcon ?? Check) : (props.sliderIcon ?? DArrowRight)"
        />
      </ep-icon>
      <slot name="slider-block"></slot>
    </div>
    <div
      :style="computedModalStyle"
      class="ep-slider-modal ep-absolute ep-left-0 ep-h-full ep-content-none"
    ></div>
  </div>
</template>
