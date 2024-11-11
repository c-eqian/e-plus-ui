<script setup lang="ts">
import { ElButton } from 'element-plus';
import { ref } from 'vue';
const emits = defineEmits(['search', 'reset', 'toggle']);
defineOptions({
  name: 'QueryButtons',
});
const isUnfolding = ref(false);
const handleUnfolding = () => {
  isUnfolding.value = !isUnfolding.value;
  emits('toggle', isUnfolding.value);
};
</script>

<template>
  <div>
    <ElButton type="primary" icon="Search" @click="emits('search')"
      >搜索</ElButton
    >
    <ElButton icon="Refresh" @click="emits('reset')">重置</ElButton>
    <ElButton link @click="handleUnfolding">
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
