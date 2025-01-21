<script setup lang="ts">
import { isArray } from '@eqian/utils-vue';
import { computed, watchEffect } from 'vue';
import ContextMenuItem from './ContextMenuItem.vue';
import Separator from './ContextMenuSeparator.vue';
import { needSeparator, tryGeneratorKey } from './utils/helper';
import { getLevel, setLevel } from './utils/level';
import type { ContextMenuProps } from './type';
defineOptions({
  name: 'ContextMenu'
});
const props = withDefaults(
  defineProps<
    ContextMenuProps & {
      isSub?: boolean;
    }
  >(),
  {
    contextMenus: () => [],
    isSub: false
  }
);
const contextMenus = computed(() => props.contextMenus);

watchEffect(() => {
  if (props.isSub) {
    setLevel();
  }
});
</script>

<template>
  <ul :data-context-level="getLevel()" class="ep-context-list">
    <template v-for="(item, index) in contextMenus" :key="tryGeneratorKey(item)">
      <!--          分离器-->
      <Separator v-if="needSeparator(contextMenus, index)" />
      <ContextMenuItem v-if="isArray(item)" :items="item" />
      <ContextMenuItem v-else :items="[item]" />
    </template>
  </ul>
</template>

<style scoped lang="scss"></style>
