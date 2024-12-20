<script setup lang="ts">
import { useDebounce, useMerge, useOmit, useThrottle } from '@eqian/utils-vue';
import { computed, nextTick, onMounted, ref, unref } from 'vue';
import { useCalcElHeight, useResizeListener } from './hooks/useAdaptPage';
import type { AdaptPageProps, ContainerTypeCls, ContainerTypeStyles } from './type';

defineOptions({
  name: 'EpAdaptPage'
});
const props = withDefaults(defineProps<AdaptPageProps>(), {
  config: () => ({ extraHeight: 0 })
});
const config = computed(() => useMerge({ extraHeight: 0 }, unref(props.config)));
const adaptPageLayoutRef = ref<HTMLDivElement | null>(null);
const headerRef = ref<HTMLDivElement | null>(null);
const searchRef = ref<HTMLDivElement | null>(null);
const toolbarRef = ref<HTMLDivElement | null>(null);
const contentRef = ref<HTMLDivElement | null>(null);
const footerRef = ref<HTMLDivElement | null>(null);
const adaptPageHeight = ref({
  aHeight: 0,
  hHeight: 0,
  sHeight: 0,
  tHeight: 0,
  fHeight: 0
});
const cHeight = ref(0);
const calcElHeight = () => {
  adaptPageHeight.value.aHeight = useCalcElHeight(adaptPageLayoutRef).ch;
  adaptPageHeight.value.hHeight = useCalcElHeight(headerRef)._h;
  adaptPageHeight.value.sHeight = useCalcElHeight(searchRef)._h;
  adaptPageHeight.value.tHeight = useCalcElHeight(toolbarRef)._h;
  adaptPageHeight.value.fHeight = useCalcElHeight(footerRef)._h;
  cHeight.value =
    adaptPageHeight.value.aHeight -
    Object.values(useOmit(adaptPageHeight.value, ['aHeight'])).reduce(
      (a, b) => a + b,
      unref(config).extraHeight
    );
};
const calcElHeightDebounceFn = useDebounce(calcElHeight, 100);
const calcElHeightThrottleFn = useThrottle(calcElHeight, 100);
onMounted(() => {
  calcElHeightDebounceFn();
});
nextTick(() => {
  calcElHeightDebounceFn();
});
useResizeListener(calcElHeightThrottleFn, [
  adaptPageLayoutRef,
  headerRef,
  searchRef,
  contentRef,
  footerRef,
  toolbarRef
]);
const getClsOrStyle = (key: ContainerTypeCls | ContainerTypeStyles) => {
  return unref(config)[key] ?? null;
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
      <slot name="header" />
    </div>
    <div
      v-if="$slots.search"
      ref="searchRef"
      class="cz-border-dashed cz-border-b cz-py-3"
      :class="getClsOrStyle('searchClass')"
      :style="getClsOrStyle('searchStyle')"
    >
      <slot name="search" />
    </div>
    <div
      v-if="$slots.toolbar"
      ref="toolbarRef"
      class="cz-border-dashed cz-border-b cz-py-3"
      :class="getClsOrStyle('toolbarClass')"
      :style="getClsOrStyle('toolbarStyle')"
    >
      <slot name="toolbar" />
    </div>
    <div
      v-if="$slots.content"
      ref="contentRef"
      :class="getClsOrStyle('contentClass')"
      :style="getClsOrStyle('contentStyle')"
    >
      <slot name="content" :height="cHeight" />
    </div>
    <div
      v-if="$slots.footer"
      ref="footerRef"
      class="cz-py-2 cz-flex cz-justify-end"
      :class="getClsOrStyle('footerClass')"
      :style="getClsOrStyle('footerStyle')"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
