<script setup lang="ts">
import { ArrowDown, ArrowUp } from '@e-plus-ui/icons';
import { ElButton, ElIcon } from 'element-plus';
import { computed, ref } from 'vue';
const emits = defineEmits(['search', 'reset', 'toggle']);
defineOptions({
  name: 'QueryButtons'
});
const props = defineProps({
  needToggle: {
    type: Boolean,
    default: false
  }
});
const needToggle = computed(() => props.needToggle);
const isUnfolding = ref(false);
const handleUnfolding = () => {
  isUnfolding.value = !isUnfolding.value;
  emits('toggle', isUnfolding.value);
};
</script>

<template>
  <div>
    <slot name="query-buttons" />
    <template v-if="!$slots['query-buttons']">
      <ElButton type="primary" icon="Search" @click="emits('search')">搜索</ElButton>
      <ElButton icon="Refresh" @click="emits('reset')">重置</ElButton>
    </template>
    <slot name="query-add" />
    <ElButton v-if="needToggle" link @click="handleUnfolding">
      {{ isUnfolding ? '收起' : '展开' }}
      <el-icon v-if="isUnfolding">
        <ArrowUp />
      </el-icon>
      <el-icon v-else>
        <ArrowDown />
      </el-icon>
    </ElButton>
  </div>
</template>

<style scoped lang="scss"></style>
