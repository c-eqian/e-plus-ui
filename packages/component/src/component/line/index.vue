<script setup lang="ts">
import { ILineProps } from './type';
import { pixelUnits } from '../../utils/pixelUnits';
import { computed, useSlots } from 'vue';
import './index.less';
defineOptions({
  name: 'EpLine',
});
const slots = useSlots();
const hasText = computed(() => {
  if (slots.default) {
    const defaultSlots = slots.default?.();
    if (defaultSlots) {
      return Boolean(
        defaultSlots[0].children !== 'v-if' && defaultSlots[0].children?.length
      );
    }
  }
  return false;
});
const props = withDefaults(defineProps<ILineProps>(), {
  direction: 'horizontal',
  position: 'center',
  borderWidth: '1px',
  margin: '8px',
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
    '--cz-line-offset': getPosition.value,
    '--cz-line-margin':
      props.direction === 'horizontal'
        ? `${pixelUnits(props.margin)} 0`
        : `0 ${pixelUnits(props.margin)}`,
    '--cz-line-border-width': pixelUnits(props.borderWidth),
    '--cz-line-border-color': props.color || 'var(--global-neutral-color-5)',
  };
});
const styleName = computed(() => {
  return {
    'cz-line-text__right': props.position === 'right',
    'cz-line-text__left': props.position === 'left',
    'cz-line-text__offset': !!props.offset,
    'cz-line-horizontal': props.direction === 'horizontal',
    'cz-line-vertical': props.direction === 'vertical',
    'is-dashed': props.dashed,
    'is-center': props.position === 'center' && !props.offset,
    'is-linear':
      (props.position === 'center' && props.linear) ||
      (!hasText.value && props.linear),
  };
});
</script>

<template>
  <div :style="varStyles">
    <div class="cz-line" :class="styleName">
      <span :class="{ 'cz-line-text': hasText }">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
