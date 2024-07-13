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
const computedImageStyle = computed(() => {
  return {
    width: pixelUnits(props.width),
    height: pixelUnits(props.height),
    borderRadius: !props.round ? pixelUnits(props.borderRadius) : false,
  };
});
const computedImageCls = computed(() => {
  return {
    'hover:cz-scale-150': !props.round && props.scale,
    'cz-rounded-full': !props.scale && props.round,
  };
});
</script>

<template>
  <div class="cz-relative cz-w-full cz-box-border cz-overflow-hidden cz-h-full">
    <img
      :src="imageUrl"
      alt="图片"
      :class="computedImageCls"
      class="cz-cursor-pointer cz-bg-cover cz-bg-center cz-bg-no-repeat"
      style="transition: all 0.5s ease 0.1s"
      :style="computedImageStyle"
      v-bind="$attrs"
    />
    <slot />
  </div>
</template>

<style lang="less" scoped></style>
