<script setup lang="ts">
import { EpIcon } from '@e-plus-ui/pure/components/icon';
import { useIntersectObserver } from '@e-plus-ui/utils/helper/useInterObserver';
import { isString, useDebounce } from '@eqian/utils-vue';
import { ElInput } from 'element-plus';
import { useTemplateRef } from 'vue';
import { useLazyIcon } from './hooks/useLazyIcon';
const emits = defineEmits(['selectIcon']);

const searchIcon = defineModel({
  type: String,
  default: ''
});
const handleClick = (icon: string) => {
  emits('selectIcon', icon);
};
const props = defineProps({
  searchable: {
    type: Boolean,
    default: true
  },
  showTotal: {
    type: Boolean,
    default: true
  },
  lazyLoadable: {
    type: Boolean,
    default: true
  },
  lazyLoadValue: {
    type: Number,
    default: 100
  }
});
const { iconsList, rawIcons, lazyIcons } = useLazyIcon(props);
const observerRef = useTemplateRef('observerRef');
const lazyIconsDebounced = useDebounce(lazyIcons, 200);
useIntersectObserver(observerRef, entries => {
  // 如果 intersectionRatio 为 0，则目标在视野外，
  if (entries[0].intersectionRatio <= 0) return;
  lazyIconsDebounced();
});
lazyIconsDebounced();
</script>

<template>
  <div class="ep-p-2 ep-icon-container">
    <el-input
      v-if="props.searchable"
      v-model="searchIcon"
      style="width: 100%"
      placeholder="输入关键字搜索"
    >
    </el-input>
    <main class="ep-w-full ep-icon-wrapper ep-mt-2 ep-max-h-96 ep-overflow-auto">
      <div v-if="iconsList.length > 0" class="ep-flex ep-py-2 ep-flex-wrap">
        <div
          v-for="icon in iconsList"
          :key="isString(icon) ? icon : icon.name"
          :title="isString(icon) ? icon : icon.name"
          class="ep-cursor-pointer dark:hover:ep-bg-sky-200/80 dark:ep-text-white hover:ep-bg-sky-50 ep-m-1 ep-p-2 ep-w-24 ep-border ep-flex ep-flex-col ep-justify-center"
          @click="() => handleClick(isString(icon) ? icon : icon.name)"
        >
          <span class="ep-inline-block ep-my-0 ep-mx-auto">
            <ep-icon width="20" height="20">
              <component :is="isString(icon) ? icon : icon.icon" />
            </ep-icon>
          </span>
          <span class="ep-text-xs ep-text-center">{{ isString(icon) ? icon : icon.name }}</span>
        </div>
        <div ref="observerRef"></div>
      </div>
    </main>
    <h3 v-if="props.showTotal" class="ep-pt-2 ep-float-right !ep-text-xs ep-icon-title">
      {{ rawIcons.length }} 个
    </h3>
  </div>
</template>

<style scoped lang="scss"></style>
