<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { sliderVerifyDefault } from './defaultProps';
import SliderBase from './SliderBase.vue';
import type { SliderVerifierProps } from './type';
const sliderRef = useTemplateRef('sliderRef');
const emits = defineEmits(['success', 'reset']);
const props = withDefaults(defineProps<SliderVerifierProps>(), sliderVerifyDefault);

const resetSliderVerify = () => {
  sliderRef.value?.resetSliderVerify();
};
const verifySuccess = (data: any) => {
  const { sw, sl } = data;
  if (sl >= sw) {
    sliderRef.value?.verifySuccess();
    emits('success');
    return;
  }
  resetSliderVerify();
};
const handleStop = (data: any) => {
  verifySuccess(data);
};
defineExpose({
  resetSliderVerify
});
</script>

<template>
  <SliderBase v-bind="props" ref="sliderRef" @slider-mouse-up="handleStop"> </SliderBase>
</template>
