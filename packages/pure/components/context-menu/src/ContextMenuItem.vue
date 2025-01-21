<script setup lang="ts">
import { ArrowRight } from '@e-plus-ui/icons';
import { isEmpty } from '@eqian/utils-vue';
import { computed, type PropType } from 'vue';
import ContextRender from './ContextMenu.vue';
import ContextMenuIcon from './ContextMenuIcon.vue';
import { useContextMenuSub } from './hooks/useContextMenuSub';
import type { ContextMenuItem } from './type';

const props = defineProps({
  items: {
    type: Object as PropType<ContextMenuItem[]>,
    default: () => ({}) as unknown as ContextMenuItem
  }
});
const { items } = props;
const hasIcon = computed(() => {
  return props.items.some(item => item.icon);
});
const { mouseLeaveHandler, mouseEnterHandler } = useContextMenuSub();
</script>

<template>
  <template v-for="item in items" :key="item.label">
    <li
      v-if="item.children && !isEmpty(item.children)"
      :class="item.disabled ? 'ep-context--item__disabled' : ''"
      class="ep-relative"
      @mouseenter="mouseEnterHandler"
      @mouseleave="mouseLeaveHandler"
    >
      <div class="hover:ep-bg-sky-200 ep-cursor-pointer ep-my-1 ep-group ep-rounded-md">
        <div class="ep-inline-flex ep-p-1 ep-space-x-1">
          <ContextMenuIcon :has-icon="hasIcon" :icon="item.icon" />
          <span class="ep-inline-block">{{ item?.label }}</span>
          <ContextMenuIcon :icon="ArrowRight" />
          <ContextRender
            class="ep-absolute ep-context-sub ep-hidden ep-bg-white ep-shadow-xl ep-rounded-[2px]"
            :context-menus="item.children"
            is-sub
          />
        </div>
      </div>
    </li>
    <li
      v-else
      class="ep-cursor-pointer ep-my-1 hover:ep-bg-sky-200 ep-rounded-md"
      :class="item.disabled ? 'ep-context--item__disabled' : ''"
      @click="
        e => {
          item.disabled ? null : item.onClick?.(e);
        }
      "
    >
      <div class="ep-flex ep-items-center ep-p-1 ep-space-x-1">
        <ContextMenuIcon :has-icon="hasIcon" :icon="item.icon" />
        <span class="ep-inline-block">
          {{ item?.label }}
        </span>
      </div>
    </li>
  </template>
</template>

<style scoped lang="scss"></style>
