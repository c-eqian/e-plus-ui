<script setup lang="ts">
// import { EpLine } from '@e-plus-ui/pure';
import { ref } from 'vue';
const loading = ref(true);
const handleSwitch = () => {
  loading.value = !loading.value;
};
</script>

<template>
  <div class="cz-w-[500px]">
    <ep-card title="loading">
      <ep-button @click="handleSwitch">切换</ep-button>
      <ep-slide-loading :loading />
    </ep-card>
    <ep-card title="diamond-loading">
      <template #body>
        <ep-diamond-loading :size="40" />
      </template>
    </ep-card>
    <ep-card title="letter-loading">
      <ep-letter-loading />
    </ep-card>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
