<script setup lang="ts">
import { isEmpty } from '@eqian/utils-vue';
import ContextRender from './ContextMenu.vue';
import ContextMenuIcon from './ContextMenuIcon.vue';
import type { ContextMenuItem } from './type';
import type { PropType } from 'vue';

const props = defineProps({
  items: {
    type: Object as PropType<ContextMenuItem[]>,
    default: () => ({}) as unknown as ContextMenuItem
  }
});
const { items } = props;
</script>

<template>
  <template v-for="item in items" :key="item.label">
    <li
      v-if="item.children && !isEmpty(item.children)"
      :class="item.disabled ? 'ep-context--item__disabled' : ''"
    >
      <div class="hover:ep-bg-sky-200 ep-rounded-[2px]">
        <ContextMenuIcon :icon="item.icon" />
        <span>{{ item?.label }}</span>
      </div>

      <ContextRender :context-menus="item.children" is-sub />
    </li>
    <li
      v-else
      class="ep-cursor-pointer hover:ep-bg-sky-200 ep-rounded-[2px]"
      :class="item.disabled ? 'ep-context--item__disabled' : ''"
      @click="
        e => {
          item.disabled ? null : item.onClick?.(e);
        }
      "
    >
      <div class="ep-flex ep-items-center ep-p-1 ep-space-x-1">
        <ContextMenuIcon :icon="item.icon" />
        <span class="ep-inline-block">
          {{ item?.label }}
        </span>
      </div>
    </li>
  </template>
</template>

<style scoped lang="scss"></style>
