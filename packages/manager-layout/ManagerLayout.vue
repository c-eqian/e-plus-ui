<script setup lang="ts">
import type { ManagerLayout } from './type';
import {
  computed,
  defineAsyncComponent,
  provide,
  shallowRef,
  unref,
  watch,
} from 'vue';
import { isFunction, useMerge } from '@eqian/utils-vue';
import { __MANAGER_LAYOUT_KEY__ } from './constants';
import { managerProps } from './managerProps';
const adminPage = shallowRef();
const props = withDefaults(defineProps<ManagerLayout>(), {
  config: () => ({
    layout: 'LTB',
    transition: true,
  }),
});

defineOptions({
  name: 'EpManagerLayout',
});
const layout = computed(() => {
  const { layout } = unref(props.config);
  if (isFunction(layout)) {
    return layout();
  }
  return unref(props.config).layout;
});
const computedProps = computed(() =>
  useMerge(managerProps, unref(props.config))
);
provide(__MANAGER_LAYOUT_KEY__, computedProps);

watch(
  () => layout.value,
  () => {
    adminPage.value = defineAsyncComponent(() => {
      return layout.value === 'TLB'
        ? import('./components/TLB.vue')
        : layout.value === 'TTB'
        ? import('./components/TTB.vue')
        : import('./components/LTB.vue');
    });
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <component :is="adminPage" v-bind="$attrs">
    <template v-if="$slots.main" #main>
      <slot name="main"></slot>
    </template>
    <template v-if="$slots.header" #header>
      <slot name="header"></slot>
    </template>
    <template v-if="$slots.aside" #aside>
      <slot name="header"></slot>
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </component>
</template>

<style scoped lang="scss"></style>
