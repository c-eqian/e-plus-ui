<script setup lang="ts">
import { ArrowLeft, ArrowRight, Close } from '@e-plus-ui/icons';
import { EpIcon } from '@e-plus-ui/pure/components/icon';
import { EpLine } from '@e-plus-ui/pure/components/line';
import { EpTextFold } from '@e-plus-ui/pure/components/text-fold';
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
const props = withDefaults(defineProps<TabsBarProps>(), {
  modelValue: '',
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
const tabs = computed(() => {
  return props.tabs;
});
const {
  currentTabView,
  scrollDirection,
  showButton,
  isAbleLeftButton,
  isAbleRightButton,
  removeTab
} = useTabs();
const handleItem = (path: string, tab: any) => {
  ableGetterValue.value = path;
  currentTabView();
  emits('selectTab', tab);
};
</script>

<template>
  <div
    v-if="tabs.length > 0"
    :class="showButton && showScrollButton ? '' : 'cz-px-2.5'"
    class="cz-flex cz-w-full cz-items-center cz-space-x-1 cz-border-b cz-border-[#f1f3f6] cz-bg-white cz-select-none"
  >
    <el-button
      v-show="showButton && showScrollButton"
      text
      class="cz-px-2 cz-h-full cz-flex cz-items-center cz-cursor-pointer"
      :icon="ArrowLeft"
      :disabled="isAbleLeftButton"
      @click="scrollDirection('left')"
    />
    <div
      class="ep-tabs-scroll cz-flex-1 cz-w-full cz-overflow-hidden"
      :class="{
        '!cz-mr-5': !showButton,
        '!cz-ml-5': !showButton
      }"
    >
      <div class="cz-w-full cz-flex-1 ep-tabs cz-flex cz-px-2.5">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.path"
          :data-tab-index="index"
          :data-tab-active="ableGetterValue === tab.path"
          :class="ableGetterValue === tab.path ? 'is-active' : ''"
          class="ep-tabs--item cz-flex cz-flex-shrink-0 cz-min-w-24 cz-max-w-[150px] cz-cursor-pointer cz-transition-opacity cz-duration-150"
          @click="() => handleItem(tab.path, tab)"
        >
          <div
            :class="
              ableGetterValue === tab.path
                ? 'is-active cz-z-10 cz-bg-[var(--el-color-primary)]/15'
                : 'cz-z-0'
            "
            class="ep-tab-name cz-group cz-select-none cz-w-full cz-flex cz-items-center"
          >
            <ep-icon width="14" height="14">
              <component :is="tab.icon" />
            </ep-icon>
            <ep-text-fold
              class="cz-flex-1 cz-pl-1 cz-flex cz-items-center"
              :line="1"
              :title="tab.name"
            >
              {{ tab.name }}
            </ep-text-fold>
            <div class="hover:cz-scale-125 cz-ml-1 ep-close-btn" @click="removeTab($event, tab)">
              <ep-icon width="14" height="14">
                <Close />
              </ep-icon>
            </div>
            <svg
              class="cz-absolute cz-bottom-0 group-[.is-active]:cz-fill-[#e0e9fb] -cz-left-[7px] cz-fill-transparent cz-transition-all cz-duration-150"
              height="7"
              width="7"
            >
              <path d="M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z" />
            </svg>
            <svg
              class="cz-absolute cz-bottom-0 group-[.is-active]:cz-fill-[#e0e9fb] -cz-right-[7px] cz-fill-transparent cz-transition-all cz-duration-150"
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
      class="cz-px-2 cz-h-full cz-flex cz-items-center cz-cursor-pointer"
      :icon="ArrowRight"
      :disabled="isAbleRightButton"
      @click="scrollDirection('right')"
    />
  </div>
</template>

<style scoped lang="scss"></style>
