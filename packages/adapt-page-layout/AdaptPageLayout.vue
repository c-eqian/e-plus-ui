<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, unref } from 'vue';
import { useCalcElHeight, useResizeListener } from './hooks/useAdaptPageLayout';
import { useDebounce, useMerge, useOmit, useThrottle } from '@eqian/utils-vue';
import {
  AdaptPageLayoutProps,
  ContainerTypeCls,
  ContainerTypeStyles,
} from './types';

defineOptions({
  name: 'EpAdaptPageLayout',
});
const props = withDefaults(defineProps<AdaptPageLayoutProps>(), {
  config: () => ({ extraHeight: 0 }),
});
const config = computed(() =>
  useMerge({ extraHeight: 0 }, unref(props.config))
);
const adaptPageLayoutRef = ref<HTMLDivElement | null>(null);
const headerRef = ref<HTMLDivElement | null>(null);
const searchRef = ref<HTMLDivElement | null>(null);
const toolbarRef = ref<HTMLDivElement | null>(null);
const contentRef = ref<HTMLDivElement | null>(null);
const footerRef = ref<HTMLDivElement | null>(null);
const adaptPageHeight = reactive({
  aHeight: 0,
  hHeight: 0,
  sHeight: 0,
  tHeight: 0,
  cHeight: 0,
  fHeight: 0,
});

const calcElHeight = () => {
  adaptPageHeight.aHeight = useCalcElHeight(adaptPageLayoutRef).ch;
  adaptPageHeight.hHeight = useCalcElHeight(headerRef)._h;
  adaptPageHeight.sHeight = useCalcElHeight(searchRef)._h;
  adaptPageHeight.tHeight = useCalcElHeight(toolbarRef)._h;
  adaptPageHeight.fHeight = useCalcElHeight(footerRef)._h;
  adaptPageHeight.cHeight =
    adaptPageHeight.aHeight -
    Object.values(useOmit(adaptPageHeight, ['cHeight', 'aHeight'])).reduce(
      (a, b) => a + b,
      unref(config).extraHeight
    );
};
const calcElHeightDebounceFn = useDebounce(calcElHeight, 100);
const calcElHeightThrottleFn = useThrottle(calcElHeight, 100);
onMounted(() => {
  calcElHeightDebounceFn();
});
nextTick(async () => {
  calcElHeightDebounceFn();
});
useResizeListener(calcElHeightThrottleFn, [
  adaptPageLayoutRef,
  headerRef,
  searchRef,
  contentRef,
  footerRef,
  toolbarRef,
]);
const getClsOrStyle = (key: ContainerTypeCls | ContainerTypeStyles) => {
  return unref(config)[key] ?? '';
};
</script>

<template>
  <div
    ref="adaptPageLayoutRef"
    class="cz-h-full cz-w-full"
    :class="getClsOrStyle('adaptClass')"
    :style="getClsOrStyle('adaptStyle')"
  >
    <div
      v-if="$slots.header"
      ref="headerRef"
      class="cz-border-dashed cz-border-b cz-py-1"
      :class="getClsOrStyle('headerClass')"
      :style="getClsOrStyle('headerStyle')"
    >
      <slot name="header"></slot>
    </div>
    <div
      v-if="$slots.search"
      ref="searchRef"
      class="cz-border-dashed cz-border-b cz-py-3"
      :class="getClsOrStyle('searchClass')"
      :style="getClsOrStyle('searchStyle')"
    >
      <slot name="search"></slot>
    </div>
    <div
      v-if="$slots.toolbar"
      ref="toolbarRef"
      class="cz-border-dashed cz-border-b cz-py-3"
      :class="getClsOrStyle('toolbarClass')"
      :style="getClsOrStyle('toolbarStyle')"
    >
      <slot name="toolbar"></slot>
    </div>
    <div
      v-if="$slots.content"
      ref="contentRef"
      :class="getClsOrStyle('contentClass')"
      :style="getClsOrStyle('contentStyle')"
    >
      <slot name="content" :height="adaptPageHeight.cHeight"></slot>
    </div>
    <div
      v-if="$slots.footer"
      ref="footerRef"
      class="cz-py-2 cz-flex cz-justify-end"
      :class="getClsOrStyle('footerClass')"
      :style="getClsOrStyle('footerStyle')"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
