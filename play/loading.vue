<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(true);
</script>

<template>
  <div>
    <ep-card title="动态加载">
      <ep-loading :loading="loading"></ep-loading>
    </ep-card>
    <ep-card title="动态加载-beat">
      <ep-loading :loading="loading" loading-type="beat"></ep-loading>
    </ep-card>
    <ep-card title="金刚石">
      <ep-diamond-loading></ep-diamond-loading>
    </ep-card>
    <ep-card title="信笺">
      <ep-letter-loading></ep-letter-loading>
    </ep-card>
  </div>
</template>

<style scoped lang="scss"></style>
