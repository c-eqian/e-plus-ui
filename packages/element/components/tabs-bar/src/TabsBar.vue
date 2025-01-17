<script setup lang="ts">
import { ArrowLeft, ArrowRight, Close } from '@e-plus-ui/icons';
import { EpIcon } from '@e-plus-ui/pure/components/icon';
import { EpLine } from '@e-plus-ui/pure/components/line';
import { EpTextFold } from '@e-plus-ui/pure/components/text-fold';
import { pixelUnits } from '@e-plus-ui/utils/pixel-units';
import { ElButton } from 'element-plus';
import { computed } from 'vue';
import { useTabs } from './hooks/useTabs';
import type { TabsBarProps } from './type';
defineOptions({
  name: 'EpTabsBar'
});
const emits = defineEmits<{
  /**
   * 点击tab事件
   * @param event
   * @param tab
   */
  (event: 'selectTab', tab: any): void;
  /**
   * 删除项
   * @param event
   * @param tab
   */
  (event: 'deleteTab', tab: any): void;
  /**
   * 更新
   * @param event
   * @param v
   */
  (event: 'update:modelValue', v: string): void;
}>();
defineSlots<{
  /**
   * 右侧插槽
   */
  right: () => void;
  /**
   * 左侧插槽
   */
  left: () => void;
}>();
const props = withDefaults(defineProps<TabsBarProps>(), {
  modelValue: '',
  tabs: () => [],
  showScrollButton: true
});
const ableGetterValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});
const computeTabs = computed(() => {
  return props.tabs;
});
const calcTabWidth = computed(() => {
  const w = props.maxTabWidth ? pixelUnits(props.maxTabWidth) : '150px';
  return {
    '--ep-tab-max-width': w
  };
});
const {
  currentTabView,
  scrollDirection,
  showButton,
  isAbleLeftButton,
  isAbleRightButton,
  removeTab
} = useTabs(ableGetterValue);
const handleItem = (path: string, tab: any) => {
  ableGetterValue.value = path;
  currentTabView();
  emits('selectTab', tab);
};
</script>

<template>
  <div
    v-if="computeTabs.length > 0"
    :class="showButton && showScrollButton ? '' : 'ep-px-2.5'"
    :style="calcTabWidth"
    class="ep-flex ep-w-full ep-items-center ep-space-x-1 ep-border-b ep-border-[#f1f3f6] ep-bg-white ep-select-none"
  >
    <slot name="left" />
    <el-button
      v-show="showButton && showScrollButton"
      text
      class="ep-px-2 ep-h-full ep-flex ep-items-center ep-cursor-pointer"
      :icon="ArrowLeft"
      :disabled="isAbleLeftButton"
      @click="scrollDirection('left')"
    />
    <div
      class="ep-tabs-scroll ep-flex-1 ep-w-full ep-overflow-hidden"
      :class="{
        '!ep-mr-5': !showButton,
        '!ep-ml-5': !showButton
      }"
    >
      <div class="ep-w-full ep-flex-1 ep-tabs ep-flex ep-px-2.5">
        <div
          v-for="(tab, index) in computeTabs"
          :key="tab.path"
          :data-tab-index="index"
          :data-tab-active="ableGetterValue === tab.path"
          :class="ableGetterValue === tab.path ? 'is-active' : ''"
          :style="props.tabStyle"
          class="ep-tabs--item ep-flex ep-flex-shrink-0 ep-min-w-24 ep-max-w-[var(--ep-tab-max-width)] ep-cursor-pointer ep-transition-opacity ep-duration-150"
          @click="() => handleItem(tab.path, tab)"
        >
          <div
            :class="
              ableGetterValue === tab.path
                ? 'is-active ep-z-10 ep-bg-[var(--el-color-primary)]/15'
                : 'ep-z-0'
            "
            class="ep-tab-name ep-rounded-tr-lg ep-rounded-tl-lg ep-group ep-select-none ep-w-full ep-flex ep-items-center"
          >
            <ep-icon width="14" height="14">
              <component :is="tab.icon" />
            </ep-icon>
            <ep-text-fold
              class="ep-flex-1 ep-pl-1 ep-flex ep-items-center"
              :line="1"
              :title="tab.name"
            >
              {{ tab.name }}
            </ep-text-fold>
            <div
              v-if="props.closeable"
              class="hover:ep-scale-125 ep-ml-1 ep-close-btn"
              @click="removeTab($event, tab)"
            >
              <ep-icon width="14" height="14">
                <Close />
              </ep-icon>
            </div>
            <svg
              class="ep-absolute ep-bottom-0 group-[.is-active]:ep-fill-[#e0e9fb] -ep-left-[7px] ep-fill-transparent ep-transition-all ep-duration-150"
              height="7"
              width="7"
            >
              <path d="M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z" />
            </svg>
            <svg
              class="ep-absolute ep-bottom-0 group-[.is-active]:ep-fill-[#e0e9fb] -ep-right-[7px] ep-fill-transparent ep-transition-all ep-duration-150"
              height="7"
              width="7"
            >
              <path d="M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z" />
            </svg>
          </div>
          <ep-line color="#e4e4e7" margin="2" direction="vertical" />
        </div>
      </div>
    </div>
    <el-button
      v-show="showButton && showScrollButton"
      text
      class="ep-px-2 ep-h-full ep-flex ep-items-center ep-cursor-pointer"
      :icon="ArrowRight"
      :disabled="isAbleRightButton"
      @click="scrollDirection('right')"
    />
    <slot name="right" />
  </div>
</template>

<style scoped lang="scss"></style>
