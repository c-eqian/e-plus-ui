<script setup lang="ts">
import { EpIcon } from '@e-plus-ui/pure/components/icon';
import { pixelUnits } from '@e-plus-ui/utils/pixel-units';
import { isObject, isString } from '@eqian/utils-vue';
import { ElInput, ElPopover, ClickOutside as vClickOutside } from 'element-plus';
import { computed, provide, ref, watch, watchEffect } from 'vue';
import { useIconSelect } from './hooks/useIconSelect';
import IconContainer from './IconContainer.vue';
import type { IconData, SelectIconProps } from './type';
defineOptions({
  name: 'EpSelectIcon'
});
const value = defineModel({
  type: String,
  default: ''
});
const props = withDefaults(defineProps<SelectIconProps>(), {
  componentProps: () => {
    return {
      placeholder: '请选择图标'
    };
  },
  popoverWidth: 500,
  searchable: true,
  showTotal: true,
  lazyLoadValue: 100,
  lazyLoadable: true,
  icons: () => []
});
const { visible, toggleVisible } = useIconSelect();
const emits = defineEmits(['selectIcon']);
const searchIcon = ref('');
const computedIcons = computed(() => props.icons);
const cloneIcons = ref<IconData[]>([]);
watchEffect(() => {
  cloneIcons.value = computedIcons.value;
});
provide('ICONS-SELECTOR', cloneIcons);
const onClickOutside = () => {
  toggleVisible(false);
};
const handleSelect = (name: string) => {
  value.value = name;
  toggleVisible(false);
  emits('selectIcon', name);
};
const handleFilterIcon = (name: string) => {
  cloneIcons.value = computedIcons.value.filter(item => {
    if (isString(item)) return item.includes(name);
    if (isObject(item)) return item?.name?.includes(name);
    return false;
  });
};
watch(
  () => visible.value,
  () => {
    if (!visible.value) {
      searchIcon.value = '';
    }
  }
);
watch(
  () => searchIcon.value,
  v => {
    if (!visible.value) {
      cloneIcons.value = computedIcons.value;
    } else {
      handleFilterIcon(v);
    }
  }
);
</script>

<template>
  <div class="ep-select-icon ep-w-full">
    <ElPopover
      :fallback-placements="['bottom', 'top', 'right', 'left']"
      :visible="visible"
      :width="pixelUnits(props.popoverWidth)"
      :teleported="false"
    >
      <template #reference>
        <ElInput
          v-model="value"
          v-click-outside="onClickOutside"
          v-bind="props.componentProps"
          clearable
          style="width: 100%"
          @click="() => toggleVisible(true)"
          @focus="() => toggleVisible(true)"
        >
          <template #suffix>
            <ep-icon v-if="value">
              <component :is="value" />
            </ep-icon>
          </template>
        </ElInput>
      </template>
      <IconContainer
        v-model="searchIcon"
        :searchable="props.searchable"
        :show-total="props.showTotal"
        :lazy-load-value="props.lazyLoadValue"
        :lazy-loadable="props.lazyLoadable"
        @select-icon="handleSelect"
      ></IconContainer>
    </ElPopover>
  </div>
</template>

<style scoped lang="scss"></style>
