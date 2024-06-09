<script setup lang="ts">
import { ILineProps } from './type';
import { pixelUnits } from '../../utils/pixelUnits';
import { computed } from 'vue';

defineOptions({
  name: 'EpLine',
});

const props = withDefaults(defineProps<ILineProps>(), {
  direction: 'horizontal',
  position: 'center',
  borderWidth: '1px',
  borderType: 'solid',
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
        ? `0 ${pixelUnits(props.margin)}`
        : `${pixelUnits(props.margin)} 0`,
    '--cz-line-border-width': pixelUnits(props.borderWidth),
    '--cz-line-border-type': props.borderType,
    '--cz-line-border-color': props.color || 'var(--global-neutral-color-5)',
  };
});
const styleName = computed(() => {
  return {
    'cz-line-text__right': props.position === 'right',
    'cz-line-text__left': props.position === 'left',
    'cz-line-text__offset': !!props.offset,
  };
});
</script>

<template>
  <div :style="varStyles">
    <div class="cz-line" :class="styleName">
      <span class="cz-line-text">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.cz-line {
  display: flex;
  align-items: center;
  margin: 16px 0;
  width: 100%;
  &::before,
  &::after {
    position: relative;
    width: var(--cz-line-offset);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ddd;
    content: '';
  }
  &-text {
    &__left,
    &__offset {
      &::before {
        width: var(--cz-line-offset);
      }
      &::after {
        width: calc(100% - var(--cz-line-offset));
      }
    }
    &__right {
      &::before {
        width: calc(100% - var(--cz-line-offset));
      }
      &::after {
        width: var(--cz-line-offset);
      }
    }
  }
}
.cz-line-text {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  padding: 0 16px;
}
</style>
