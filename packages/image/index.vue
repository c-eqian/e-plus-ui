<script lang="ts" setup>
import { computed } from 'vue';
import type { IImage } from './type';
import { pixelUnits } from '../utils/pixelUnits';
defineOptions({
  name: 'EpImage',
});
const props = withDefaults(defineProps<IImage>(), {
  width: '100%',
  height: '100%',
  url: '',
  borderRadius: 0,
});
const imageUrl = computed(() => props.url);
const computedImageStyle = computed<any>(() => {
  return {
    width: pixelUnits(props.width),
    height: pixelUnits(props.height),
    borderRadius: !props.round ? pixelUnits(props.borderRadius) : false,
  };
});
const computedImageCls = computed(() => {
  return {
    'hover:cz-scale-150': props.scale,
  };
});
</script>

<template>
  <span
    class="cz-inline-flex cz-justify-center cz-text-gray-50 cz-items-center cz-bg-[#c0c4cc] cz-text-center cz-text-sm cz-cursor-pointer cz-w-full cz-box-border cz-overflow-hidden cz-h-full"
    :style="computedImageStyle"
    :class="{
      'cz-rounded-full': props.round,
    }"
  >
    <img
      v-if="!$slots.default"
      :src="imageUrl"
      alt="图片"
      :class="computedImageCls"
      class="cz-w-full cz-block cz-h-full cz-bg-cover cz-object-cover cz-bg-center cz-bg-no-repeat"
      style="transition: all 0.5s ease 0.1s"
      v-bind="$attrs"
    />
    <slot />
  </span>
</template>

<style lang="less" scoped></style>
