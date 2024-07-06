<script lang="ts" setup>
import { computed, ref } from 'vue';

defineOptions({
  name: 'EpDiamondLoading',
});
const props = defineProps({
  size: {
    type: Number,
    default: 40,
  },
  bgColor: {
    type: String,
    default: '#41b883',
  },
});
const _diamondStyle = ref({
  width: `${parseInt(`${props.size / 4}`, 10)}px`,
  height: `${parseInt(`${props.size / 4}`, 10)}px`,
  '--cz-diamond-bg-color': props.bgColor,
});
const diamondStyle = computed(() => _diamondStyle.value);
const styles = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${parseInt(`${props.size / 4}`, 10)}px`,
  };
});
</script>

<template>
  <div :style="styles" class="cz-spinner-loading spinner--rotate-diamond">
    <div :style="diamondStyle" class="cz-diamond-loading" />
    <div :style="diamondStyle" class="cz-diamond-loading" />
    <div :style="diamondStyle" class="cz-diamond-loading" />
  </div>
</template>

<style lang="scss" scoped>
@import 'index';
</style>
