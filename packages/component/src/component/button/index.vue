<script setup lang="ts">
import './index.less';
import { computed } from 'vue';
import {
  ButtonBorder,
  ButtonEmits,
  ButtonNativeType,
  ButtonSize,
  ButtonType,
} from './interface';
import useProps from './index.hooks';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  prefixIcon?: string;
  suffixIcon?: string;
  loadingIcon?: string;
  borderStyle?: string;
  border?: ButtonBorder;
  fluid?: boolean;
  radius?: boolean;
  loading?: boolean;
  disabled?: boolean;
  nativeType?: ButtonNativeType;
}

defineOptions({
  name: 'EpButton',
});

const props = withDefaults(defineProps<ButtonProps>(), {
  borderStyle: 'soild',
  radius: false,
  loadingIcon: 'ep-icon-loading-one',
  nativeType: 'button',
  fluid: false,
  loading: false,
});

const { size } = useProps(props);

const emits = defineEmits(ButtonEmits);

const onClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emits('click', event);
  }
};

const styles = computed(() => {
  return {
    border: `1px ${props.borderStyle}`,
  };
});

const classes = computed(() => {
  return [
    {
      'ep-btn-fluid': props.fluid,
      'ep-btn-radius': props.radius,
      'ep-btn-disabled': props.disabled,
    },
    props.type ? `ep-btn-${props.type}` : '',
    size.value ? `ep-btn-${size.value}` : '',
    props.border ? `ep-border-${props.border}` : '',
  ];
});
</script>

<template>
  <button
    class="ep-btn cz-text-3xl"
    :class="classes"
    :style="styles"
    :type="nativeType"
    @click="onClick"
  >
    <i v-if="prefixIcon" :class="`ep-icon ${prefixIcon}`"></i>
    <i
      v-if="loading"
      :class="loadingIcon"
      class="ep-icon ep-anim ep-anim-rotate ep-anim-loop"
    ></i>
    <span>
      <slot></slot>
    </span>
    <i v-if="suffixIcon" :class="`ep-icon ${suffixIcon}`"></i>
  </button>
</template>
