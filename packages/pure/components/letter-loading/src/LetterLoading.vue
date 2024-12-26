<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { LetterLoadingProps } from './type';

defineOptions({
  name: 'EpLetterLoading'
});
const props = withDefaults(defineProps<LetterLoadingProps>(), {
  size: 60,
  letters: () => ['Q', 'C', 'Y', 'C', 'M', 'M'],
  bgColor: '#41b883'
});
const _innerStyles = ref({
  transform: `scale(${props.size / 2 / 75})`,
  '--ep-letter-bg-color': props.bgColor
});
const innerStyles = computed(() => _innerStyles.value);
const styles = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`
  };
});
const faces = computed(() => {
  const _faces = ['front', 'back', 'left', 'right', 'bottom', 'top'];
  return _faces.map((face, index) => ({
    side: face,
    letter: props.letters[index]
  }));
});
</script>

<template>
  <div :style="styles" class="ep-spinner ep-spinner--socker">
    <div :style="innerStyles" class="ep-spinner-inner">
      <div class="ep-cube ep-panelLoad">
        <div
          v-for="{ side, letter } of faces"
          :key="side"
          :class="`ep-cube-face ep-cube-face-${side}`"
        >
          {{ letter }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
