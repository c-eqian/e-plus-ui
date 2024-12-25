<script setup lang="ts">
import EpAuthPage from './components/auth-page/AuthPage.vue';
const bgUrl = new URL('./assets/login-page-bg.svg', import.meta.url).href;
</script>

<template>
  <EpAuthPage :config="{ bgUrl, offsetR: '200' }" />
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
