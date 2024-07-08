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
  loadingIcon: 'cz-icon-loading-one',
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
      'cz-btn-fluid': props.fluid,
      'cz-btn-radius': props.radius,
      'cz-btn-disabled': props.disabled,
    },
    props.type ? `cz-btn-${props.type}` : '',
    size.value ? `cz-btn-${size.value}` : '',
    props.border ? `cz-border-${props.border}` : '',
  ];
});
</script>

<template>
  <button
    class="cz-btn"
    :class="classes"
    :style="styles"
    :type="nativeType"
    @click="onClick"
  >
    <i v-if="prefixIcon" :class="`cz-icon ${prefixIcon}`"></i>
    <i
      v-if="loading"
      :class="loadingIcon"
      class="cz-icon cz-anim cz-anim-rotate cz-anim-loop"
    ></i>
    <span>
      <slot></slot>
    </span>
    <i v-if="suffixIcon" :class="`cz-icon ${suffixIcon}`"></i>
  </button>
</template>
