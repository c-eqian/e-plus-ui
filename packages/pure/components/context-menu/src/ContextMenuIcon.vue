<script setup lang="ts">
import type { Component, PropType } from 'vue';
const props = defineProps({
  icon: [String, Object] as PropType<Component | string>,
  hasIcon: Boolean
});
const { icon, hasIcon = false } = props;
</script>

<template>
  <component :is="icon" v-if="icon" class="ep-w-3 ep-h-3" />
  <span v-else-if="hasIcon" class="ep-w-3 ep-h-3" />
</template>

<style scoped lang="scss"></style>
