<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { DiamondLoadingProps } from './type';

defineOptions({
  name: 'EpDiamondLoading'
});
const props = withDefaults(defineProps<DiamondLoadingProps>(), {
  size: 40,
  bgColor: '#41b883'
});
const _diamondStyle = ref({
  width: `${parseInt(`${props.size / 4}`, 10)}px`,
  height: `${parseInt(`${props.size / 4}`, 10)}px`,
  '--ep-diamond-bg-color': props.bgColor
});
const diamondStyle = computed(() => _diamondStyle.value);
const styles = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${parseInt(`${props.size / 4}`, 10)}px`
  };
});
</script>

<template>
  <div :style="styles" class="ep-spinner-loading spinner--rotate-diamond">
    <div :style="diamondStyle" class="ep-diamond-loading" />
    <div :style="diamondStyle" class="ep-diamond-loading" />
    <div :style="diamondStyle" class="ep-diamond-loading" />
  </div>
</template>

<style lang="scss" scoped></style>
