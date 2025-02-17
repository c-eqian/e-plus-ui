<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { sliderVerifyDefault } from './defaultProps';
import SliderBase from './SliderBase.vue';
import type { SliderVerifierProps } from './type';
const sliderRef = useTemplateRef('sliderRef');
const emits = defineEmits(['success']);
const props = withDefaults(defineProps<SliderVerifierProps>(), sliderVerifyDefault);

const verifySuccess = (data: any) => {
  const { sw, sl } = data;
  if (sl >= sw) {
    sliderRef.value?.verifySuccess();
    emits('success');
    return;
  }
  sliderRef.value?.resetSliderVerify();
};
const handleStop = (data: any) => {
  verifySuccess(data);
};
</script>

<template>
  <SliderBase v-bind="props" ref="sliderRef" @slider-mouse-up="handleStop"> </SliderBase>
</template>
