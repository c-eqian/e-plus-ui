<script lang="ts" setup>
import { computed, type PropType, ref } from 'vue';

defineOptions({
  name: 'EpLetterLoading',
});
const props = defineProps({
  size: {
    type: Number,
    default: 60,
  },
  letters: {
    type: Array as PropType<string[]>,
    default: () => ['Q', 'C', 'Y', 'C', 'M', 'M'],
    validator: (letters: string[]) => letters.length === 6,
  },
  bgColor: {
    type: String,
    default: '#41b883',
  },
});
const _innerStyles = ref({
  transform: `scale(${props.size / 2 / 75})`,
  '--cz-letter-bg-color': props.bgColor,
});
const innerStyles = computed(() => _innerStyles.value);
const styles = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
  };
});
const faces = computed(() => {
  const _faces = ['front', 'back', 'left', 'right', 'bottom', 'top'];
  return _faces.map((face, index) => ({
    side: face,
    letter: props.letters[index],
  }));
});
</script>

<template>
  <div :style="styles" class="cz-spinner cz-spinner--socker">
    <div :style="innerStyles" class="cz-spinner-inner">
      <div class="cz-cube cz-panelLoad">
        <div
          v-for="{ side, letter } of faces"
          :key="side"
          :class="`cz-cube-face cz-cube-face-${side}`"
        >
          {{ letter }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'index';
</style>
