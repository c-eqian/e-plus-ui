<script setup lang="ts">
const props = defineProps({
  icon: String
});
const { icon } = props;
</script>

<template>
  <component :is="icon" v-if="icon" class="ep-w-3 ep-h-3" />
</template>

<style scoped lang="scss"></style>
