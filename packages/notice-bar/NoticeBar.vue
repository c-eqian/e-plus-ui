<template>
  <div
    class="cz-px-4 cz-rounded cz-notice-bar"
    :style="{ height: `${pixelUnits(height)}` }"
  >
    <div v-if="vertical">
      <el-carousel
        height="40px"
        direction="vertical"
        :autoplay="true"
        indicator-position="none"
        :interval="interval"
      >
        <el-carousel-item v-for="v in computedList" :key="v">{{
          v
        }}</el-carousel-item>
      </el-carousel>
    </div>
    <div
      v-else
      :style="{ color, fontSize: `${fontSize}px` }"
      class="cz-flex cz-items-center"
    >
      <slot name="prefixIcon"></slot>
      <div
        ref="noticeBoxRef"
        class="cz-flex-1 cz-flex cz-items-center cz-relative cz-overflow-hidden"
      >
        <div ref="textRef" class="cz-whitespace-nowrap cz-absolute cz-left-0">
          {{ computedList }}
        </div>
      </div>
      <slot name="suffixIcon"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref } from 'vue';
import { ElCarousel } from 'element-plus';
import { NoticeBarProps } from './type';
import { pixelUnits } from '../utils/pixelUnits';

defineOptions({
  name: 'EpNoticeBar',
});
const props = withDefaults(defineProps<NoticeBarProps>(), {
  fontSize: 14,
  height: 40,
  delay: 1000,
  speed: 100,
  list: () => [],
});

const state = reactive({
  boxWidth: 0,
  textWidth: 0,
  oneTime: 0,
  twoTime: 0,
  order: 1,
});
const noticeBoxRef = ref<HTMLDivElement>();
const textRef = ref<HTMLDivElement>();
const computedList = computed(() => props.list);
const interval = computed(() => (props.delay > 2000 ? props.delay : 2000));

// 初始化 animation 各项参数
const initAnimation = () => {
  nextTick(() => {
    state.boxWidth = noticeBoxRef.value?.offsetWidth || 0;
    state.textWidth = textRef.value?.offsetWidth || 0;
    document.styleSheets[0].insertRule(
      `@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${state.textWidth}px;}}`
    );
    document.styleSheets[0].insertRule(
      `@keyframes twoAnimation {0% {left: ${state.boxWidth}px;} 100% {left: -${state.textWidth}px;}}`
    );
    computeAnimationTime();
    setTimeout(() => {
      changeAnimation();
    }, props.delay);
  });
};

// 计算 animation 滚动时长
const computeAnimationTime = () => {
  state.oneTime = state.textWidth / props.speed;
  state.twoTime = (state.textWidth + state.boxWidth) / props.speed;
};

// 改变 animation 动画调用
const changeAnimation = () => {
  if (!textRef.value) return;
  if (state.order === 1) {
    textRef.value.style.cssText = `animation: oneAnimation ${state.oneTime}s linear; opactity: 1;}`;
    state.order = 2;
  } else {
    textRef.value.style.cssText = `animation: twoAnimation ${state.twoTime}s linear infinite; opacity: 1;`;
  }
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

// 页面加载时
onMounted(() => {
  if (props.vertical) return;
  initAnimation();
  listenerAnimationend();
});
</script>

<style lang="scss" scoped>
@use './style.scss';
</style>
