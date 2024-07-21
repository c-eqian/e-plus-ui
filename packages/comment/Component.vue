<script setup lang="ts">
const props = defineProps({
  is: {
    type: String,
  },
});
</script>

<template>
  <component :is="props.is"> </component>
</template>

<style scoped lang="scss"></style>
