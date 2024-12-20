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
    'hover:cz-scale-150': props.scale
  };
});
</script>

<template>
  <span
    class="cz-inline-flex cz-justify-center cz-items-center cz-text-center cz-text-sm cz-cursor-pointer cz-w-full cz-box-border cz-overflow-hidden cz-h-full"
    :style="computedImageStyle"
    :class="{
      'cz-rounded-full': props.round,
      'cz-bg-[#c0c4cc]': !!$slots.default,
      'cz-text-gray-50': !!$slots.default,
      'is-skeleton': props.loading && !$slots.default
    }"
  >
    <img
      v-if="!$slots.default"
      :src="imageUrl"
      alt=""
      :class="computedImageCls"
      class="cz-w-full cz-block cz-h-full cz-bg-cover cz-object-cover cz-bg-center cz-bg-no-repeat"
      style="transition: all 0.5s ease 0.1s"
      v-bind="$attrs"
      @error="e => emits('error', e)"
    />
    <slot />
  </span>
</template>

<style lang="scss" scoped></style>
