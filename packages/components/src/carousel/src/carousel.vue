<template>
  <div class="cz-carousel-container">
    <div
      class="cz-carousel"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div
        v-for="(item, index) in list"
        v-show="index === current"
        :key="item.url + new Date()"
        class="cz-carousel__item"
      >
        <a><img :src="item.url" alt="" class="cz-carousel__img" /></a>
      </div>
      <div class="cz-carousel__arrow">
        <div class="cz-carousel__arrow-pre" @click="handlePre">
          <i class="cz-iconfont cz-icon__pre" />
        </div>
        <div class="cz-carousel__arrow-next" @click="handleNext">
          <i class="cz-iconfont cz-icon__next" />
        </div>
      </div>
    </div>
    <div class="cz-indicator">
      <span
        v-for="(item, index) in list"
        :key="item.url + new Date()"
        class="cz-indicator__item"
        :class="[
          current === index ? 'cz-indicator__active' : 'cz-indicator__default'
        ]"
        @click="handleIndicator(index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { carouselProps } from '../types';
defineOptions({
  name: 'ECarousel'
});
const current = ref(0);
const intervalId = ref<any>(null);
const props = defineProps(carouselProps);
const list = computed(() => props.list);
/**
 * 指示灯处理
 * @param index
 */
const handleIndicator = (index: number) => {
  current.value = index;
};
const init = () => {
  intervalId.value && clearInterval(intervalId.value);
  intervalId.value = setInterval(() => {
    current.value =
      current.value === props.list.length - 1 ? 0 : (current.value += 1);
  }, props.duration);
};
// 上一张
const handlePre = () => {
  current.value =
    current.value === 0 ? props.list.length - 1 : (current.value -= 1);
};
// 下一张
const handleNext = () => {
  current.value =
    current.value === props.list.length - 1 ? 0 : (current.value += 1);
};
// 鼠标离开
const handleMouseLeave = () => {
  const carouselArrow = document.querySelector(
    '.cz-carousel__arrow'
  ) as HTMLElement;
  carouselArrow.style.display = 'none';
  init();
};
// 鼠标进入
const handleMouseEnter = () => {
  intervalId.value && clearInterval(intervalId.value);
  const carouselArrow = document.querySelector(
    '.cz-carousel__arrow'
  ) as HTMLElement;
  carouselArrow.style.display = 'flex';
};
onMounted(() => {
  init();
});
</script>
<style scoped lang="less">
@import '../style/carousel.scss';
</style>
