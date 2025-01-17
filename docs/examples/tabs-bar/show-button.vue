<script setup lang="ts">
import { EpTabsBar } from 'e-plus-ui';
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
</script>

<template>
  <EpTabsBar v-model="activeTab" :show-scroll-button="false" :tabs="tabs" />
</template>

<style scoped lang="scss"></style>
