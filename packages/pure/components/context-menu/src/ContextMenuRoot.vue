<script setup lang="ts">
import { computed, useTemplateRef, type CSSProperties } from 'vue';
import ContextRender from './ContextMenu.vue';
import { useContextMenu } from './hooks/useContextMenu';
import type { ContextMenuProps } from './type';
defineOptions({
  name: 'EpContextMenu'
});
const props = withDefaults(defineProps<ContextMenuProps>(), {
  contextMenus: () => [],
  zIndex: 2000
});
const contextListRef = useTemplateRef('contextListRef');
const contextMenus = computed(() => props.contextMenus);
const { x, y, isOpen } = useContextMenu(contextListRef);
const computedStyle = computed<CSSProperties>(() => {
  return {
    left: `${x.value}px`,
    top: `${y.value}px`,
    zIndex: props.zIndex
  };
});
</script>

<template>
  <div class="ep-context-root ep-size-fit">
    <slot />
    <teleport v-if="isOpen" to="body">
      <div
        ref="contextListRef"
        class="ep-context-menus ep-text-xs ep-shadow-xl ep-bg-white"
        :style="computedStyle"
      >
        <ContextRender :context-menus="contextMenus" />
      </div>
    </teleport>
  </div>
</template>

<style scoped lang="scss"></style>
