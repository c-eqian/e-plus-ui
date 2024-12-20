<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { computed } from 'vue';
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
});
const icon = computed(() => props.icon);
</script>

<template>
  <el-icon>
    <component :is="icon" />
  </el-icon>
</template>

<style scoped lang="scss"></style>
