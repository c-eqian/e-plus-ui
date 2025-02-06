<script setup lang="ts">
import { EpIcon } from '@e-plus-ui/pure/components/icon';
import { isString } from '@eqian/utils-vue';
import { inject } from 'vue';
import type { IconData } from './type';
const icons = inject<IconData[]>('ICONS-SELECTOR', []);
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
  }
});
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
    <main class="ep-w-full main-container ep-mt-2 ep-max-h-96 ep-overflow-auto">
      <div v-if="icons.length > 0" class="ep-flex ep-py-2 ep-flex-wrap">
        <div
          v-for="icon in icons"
          :key="isString(icon) ? icon : icon.name"
          :title="isString(icon) ? icon : icon.name"
          class="ep-cursor-pointer hover:ep-bg-sky-50 ep-m-1 ep-p-2 ep-w-24 ep-border ep-flex ep-flex-col ep-justify-center"
          @click="() => handleClick(isString(icon) ? icon : icon.name)"
        >
          <span class="ep-inline-block ep-my-0 ep-mx-auto">
            <ep-icon width="20" height="20" color="blue">
              <component :is="icon" />
            </ep-icon>
          </span>
          <span class="ep-text-xs ep-text-center">{{ isString(icon) ? icon : icon.name }}</span>
        </div>
      </div>
    </main>
    <h3 v-if="props.showTotal" class="ep-pt-2 ep-float-right !ep-text-xs ep-icon-title">
      {{ icons.length }} 个
    </h3>
  </div>
</template>

<style scoped lang="scss"></style>
