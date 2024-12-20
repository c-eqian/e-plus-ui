<script setup lang="ts">
import { pixelUnits } from '@e-plus-ui/utils';
import { computed } from 'vue';
import type { IconProps } from './type';
const props = withDefaults(defineProps<IconProps>(), {
  prefix: 'icon',
  name: '',
  color: 'currentColor',
  width: '1rem',
  height: '1rem'
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const computedStyle = computed(() => {
  return {
    color: props.color?.startsWith('--') ? `var(${props.color})` : props.color,
    width: pixelUnits(props.width),
    height: pixelUnits(props.height)
  };
});
defineOptions({
  name: 'EpIcon',
  inheritAttrs: true
});
</script>

<template>
  <i class="cz-icon cz-inline-flex" :style="computedStyle">
    <slot v-if="$slots.default" />
    <svg
      v-else
      aria-hidden="true"
      class="cz-fill-current"
      :width="pixelUnits(props.width)"
      :height="pixelUnits(props.height)"
    >
      <use :xlink:href="symbolId" />
    </svg>
  </i>
</template>

<style scoped lang="scss"></style>
