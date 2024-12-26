<script lang="ts" setup>
/**
 * 图片组件
 */
import { pixelUnits } from '@e-plus-ui/utils';
import { computed } from 'vue';
import type { ImageProps } from './type';
defineOptions({
  name: 'EpImage'
});
const props = withDefaults(defineProps<ImageProps>(), {
  width: '100%',
  height: '100%',
  url: '',
  loading: true,
  borderRadius: 0
});
const imageUrl = computed(() => props.url);
const emits = defineEmits(['error']);
const computedImageStyle = computed<any>(() => {
  return {
    width: pixelUnits(props.width),
    height: pixelUnits(props.height),
    borderRadius: !props.round ? pixelUnits(props.borderRadius) : false
  };
});
const computedImageCls = computed(() => {
  return {
    'hover:ep-scale-150': props.scale
  };
});
</script>

<template>
  <span
    class="ep-inline-flex ep-justify-center ep-items-center ep-text-center ep-text-sm ep-cursor-pointer ep-w-full ep-box-border ep-overflow-hidden ep-h-full"
    :style="computedImageStyle"
    :class="{
      'ep-rounded-full': props.round,
      'ep-bg-[#c0c4cc]': !!$slots.default,
      'ep-text-gray-50': !!$slots.default,
      'is-skeleton': props.loading && !$slots.default
    }"
  >
    <img
      v-if="!$slots.default"
      :src="imageUrl"
      alt=""
      :class="computedImageCls"
      class="ep-w-full ep-block ep-h-full ep-bg-cover ep-object-cover ep-bg-center ep-bg-no-repeat"
      style="transition: all 0.5s ease 0.1s"
      v-bind="$attrs"
      @error="e => emits('error', e)"
    />
    <slot />
  </span>
</template>

<style lang="scss" scoped></style>
