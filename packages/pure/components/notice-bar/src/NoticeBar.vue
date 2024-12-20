<script setup lang="ts">
import { pixelUnits } from '@e-plus-ui/utils';
import { useRafTimeout, useResizeObserver } from '@eqian/utils-vue';
import { computed, nextTick, onMounted, ref, type Ref } from 'vue';
import { EpIcon } from '../../icon';
import type { NoticeBarProps } from './type';
const verticalRef = ref<HTMLElement>();
const horizontalRef = ref<HTMLElement>();
const textRef = ref<HTMLElement>();
const currentIndex = ref(0);
const emits = defineEmits(['close']);
const isClosed = ref(false);
const props = withDefaults(defineProps<NoticeBarProps>(), {
  list: () => [],
  speed: 3000,
  width: '100%',
  height: 50,
  step: 100,
  customStyle: () => ({})
});
const computedVertical = computed(() => {
  return props.list.length > 0;
});
defineOptions({
  name: 'EpNoticeBar'
});
const computedList = computed(() => props.list);
const computedText = computed(() => props.text);
const horizontal = ref({
  order: 1,
  oneTime: 0,
  twoTime: 0,
  warpWidth: 0,
  textWidth: 0
});
// 计算垂直方向的样式
const computedVerticalStyle = computed(() => {
  return {
    width: pixelUnits(props.width),
    height: pixelUnits(props.height),
    '--enter-move': pixelUnits(props.height),
    '--leave-move': pixelUnits(-props.height),
    ...props.customStyle
  };
});
const computedHorizontalStyle = computed(() => {
  return {
    width: pixelUnits(props.width),
    height: pixelUnits(props.height),
    '--text-width--': `${computedText.value?.length}em`
  };
});
const verticalMove = () => {
  currentIndex.value = (currentIndex.value + 1) % computedList.value.length;
};
const startMove = () => {
  if (computedVertical.value) {
    verticalMove(); // 垂直滚动
    return;
  } else {
    changeAnimation();
  }
};
const { start, close } = useRafTimeout(startMove, {
  delay: props.speed,
  isInterval: computedVertical.value
});
useResizeObserver([verticalRef as Ref<HTMLElement>, horizontalRef as Ref<HTMLElement>], () => {
  startMove();
});
const reset = () => {
  setTimeout(() => {
    start();
  }, props.speed);
};
// 改变 animation 动画调用
const changeAnimation = () => {
  if (horizontal.value.order === 1) {
    textRef.value!.style.cssText = `animation: firstAnimation ${horizontal.value.oneTime}s  linear;opactity: 1;`;
    horizontal.value.order = 2;
  } else {
    textRef.value!.style.cssText = `animation: lastAnimation ${horizontal.value.twoTime}s linear infinite; opacity: 1;`;
  }
};
// 计算 animation 滚动时长
const computeAnimationTime = () => {
  horizontal.value.oneTime = horizontal.value.textWidth / props.step;
  horizontal.value.twoTime = (horizontal.value.textWidth + horizontal.value.warpWidth) / props.step;
};
// 初始化 animation 各项参数
const initAnimation = () => {
  nextTick(() => {
    horizontal.value.warpWidth = horizontalRef.value?.offsetWidth || 0;
    horizontal.value.textWidth = textRef.value?.offsetWidth || 0;
    document.styleSheets[0].insertRule(
      `@keyframes firstAnimation {0% {left: 0px;} 100% {left: -${horizontal.value.textWidth}px;}}`
    );
    document.styleSheets[0].insertRule(
      `@keyframes lastAnimation {0% {left: ${horizontal.value.warpWidth}px;} 100% {left: -${horizontal.value.textWidth}px;}}`
    );
    computeAnimationTime();
  });
};
// 监听 animation 动画的结束
const listenerAnimationend = () => {
  textRef.value?.addEventListener(
    'animationend',
    () => {
      changeAnimation();
    },
    false
  );
};
const init = () => {
  start();
  if (!computedVertical.value) {
    initAnimation();
    listenerAnimationend();
  }
};
const handleClose = () => {
  isClosed.value = true;
  close();
  emits('close');
};
onMounted(() => {
  init();
});
</script>

<template>
  <div v-if="!isClosed" class="cz-notice-container">
    <div v-if="props.icon || $slots['left-icon']" class="cz-notice-left-icon">
      <EpIcon v-if="!$slots['left-icon']"><Bell /></EpIcon>
      <slot v-else name="left-icon" />
    </div>
    <div v-if="!computedVertical" :style="computedHorizontalStyle">
      <div ref="horizontalRef" class="horizontal-wrap-text-box">
        <div ref="textRef" class="horizontal-wrap-text">
          {{ computedText }}
        </div>
      </div>
    </div>
    <div v-else ref="verticalRef" :style="computedVerticalStyle" class="slider-vertical">
      <transition-group name="slide">
        <div
          v-for="(item, index) in computedList"
          v-show="currentIndex === index"
          :key="item"
          class="scroll-view"
          @mouseenter="() => close()"
          @mouseleave="reset"
        >
          <div class="slide-text">{{ item }}</div>
        </div>
      </transition-group>
    </div>
    <div v-if="props.closeable || $slots['right-icon']" class="cz-notice-right-icon">
      <EpIcon v-if="props.closeable" style="cursor: pointer" @click="handleClose"
        ><CircleClose
      /></EpIcon>
      <slot v-else name="right-icon" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
