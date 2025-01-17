<script setup lang="ts">
import { EpTabsBar } from 'e-plus-ui';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
const activeTab = ref('/a/test');
const tabs = ref<any[]>([
  {
    name: `TabBarTabBarTabBarTabBar`,
    path: `/a/test`,
    icon: 'Menu'
  }
]);
for (let i = 0; i < 20; i++) {
  tabs.value.push({
    name: `权限控制${i}`,
    path: `/a/${i}`,
    icon: 'Setting'
  });
}
const handleDelete = (tab: any) => {
  const index = tabs.value.findIndex(item => item.path === tab.path);
  if (index > -1) {
    const isActiveTab = tabs.value[index].path === activeTab.value;
    tabs.value.splice(index, 1);
    if (!isActiveTab || tabs.value.length === 1) return;
    if (index > tabs.value.length - 1) {
      activeTab.value = tabs.value[index - 1].path;
    } else {
      activeTab.value = tabs.value[index].path;
    }
  }
};
const handleSelect = (tab: any) => {
  ElMessage.success(`点击-${tab.name}`);
};
</script>

<template>
  <EpTabsBar
    v-model="activeTab"
    :tabs="tabs"
    closeable
    @delete-tab="handleDelete"
    @select-tab="handleSelect"
  />
</template>

<style scoped lang="scss"></style>
