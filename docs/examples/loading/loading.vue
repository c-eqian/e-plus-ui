<script setup lang="ts">
import { EpDiamondLoading, EpLetterLoading, EpSlideLoading } from 'e-plus-ui';
import { ref } from 'vue';
const loading = ref(true);
const handleSwitch = () => {
  loading.value = !loading.value;
};
</script>

<template>
  <div class="cz-space-y-3">
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

<style scoped lang="scss"></style>
