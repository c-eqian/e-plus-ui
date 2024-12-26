<script setup lang="ts">
import { EpAuthPage } from '@e-plus-ui/element';
const bgUrl = new URL('./login-page-bg.svg', import.meta.url).href;
</script>

<template>
  <div style="width: 100%; height: 500px">
    <EpAuthPage :config="{ bgUrl, offsetR: '200' }" />
  </div>
</template>

<style scoped></style>
