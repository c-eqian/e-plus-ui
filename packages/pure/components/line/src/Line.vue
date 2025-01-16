<script setup lang="ts">
/**
 * 分割线组件
 */
import { pixelUnits } from '@e-plus-ui/utils';
import { computed, useSlots } from 'vue';
import type { ILineProps } from './type';
defineOptions({
  name: 'EpLine'
});
const slots: any = useSlots();
const hasText = computed(() => {
  if (slots.default) {
    const defaultSlots = slots.default?.();
    if (defaultSlots) {
      return Boolean(defaultSlots[0].children !== 'v-if' && defaultSlots[0].children?.length);
    }
  }
  return false;
});
const props = withDefaults(defineProps<ILineProps>(), {
  direction: 'horizontal',
  position: 'center',
  borderWidth: '1px',
  margin: '8px'
});
const getPosition = computed(() => {
  if (props.offset) return pixelUnits(props.offset);
  if (props.position === 'left' || props.position === 'right') {
    return '5%';
  }
  return '50%';
});
const varStyles = computed(() => {
  return {
    '--ep-line-offset': getPosition.value,
    '--ep-line-margin':
      props.direction === 'horizontal'
        ? `${pixelUnits(props.margin)} 0`
        : `0 ${pixelUnits(props.margin)}`,
    '--ep-line-border-width': pixelUnits(props.borderWidth),
    '--ep-line-border-color': props.color || 'var(--global-neutral-color-5)'
  };
});
const styleName = computed(() => {
  return {
    'ep-line-text__right': props.position === 'right',
    'ep-line-text__left': props.position === 'left',
    'ep-line-text__offset': !!props.offset,
    'ep-line-horizontal': props.direction === 'horizontal',
    'ep-line-vertical': props.direction === 'vertical',
    'is-dashed': props.dashed,
    'is-center': props.position === 'center' && !props.offset,
    'is-linear': (props.position === 'center' && props.linear) || (!hasText.value && props.linear)
  };
});
</script>

<template>
  <div :style="varStyles">
    <div class="ep-line" :class="styleName">
      <span v-if="hasText" :class="{ 'ep-line-text': hasText }">
        <slot name="default" />
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
