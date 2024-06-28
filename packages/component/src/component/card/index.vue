<script setup lang="ts">
import { CardProps } from './type';
import { computed, useSlots } from 'vue';

defineOptions({
  name: 'EpCard',
});
const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'hover',
});
const title = computed(() => props.title);
const slots = useSlots();
const classes = computed(() => {
  return {
    shadow: props.shadow === 'always',
    'is-hover-shadow': props.shadow === 'hover',
  };
});
</script>

<template>
  <div class="cz-card" :class="classes">
    <div class="cz-card-header" v-if="slots.title || title || slots.extra">
      <span class="cz-card-header-title">
        <slot name="title">{{ title }}</slot>
      </span>
      <span class="cz-card-header-extra" v-if="slots.extra">
        <slot name="extra"></slot>
      </span>
    </div>
    <div class="cz-card-body">
      <slot name="body" v-if="slots.body"></slot>
      <slot v-else></slot>
    </div>
    <div class="cz-card-footer" v-if="slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'index';
</style>
