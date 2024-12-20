<script setup lang="ts">
const props = defineProps({
  is: {
    type: String
  }
});
</script>

<template>
  <component :is="props.is" />
</template>

<style scoped lang="scss"></style>
