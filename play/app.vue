<template>
  <div class="play">
    <ep-card shadow="hover">
      <Index></Index>
    </ep-card>
  </div>
</template>
<script setup lang="ts">
import Index from './index.vue';
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.play {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-container {
  width: 500px;
  height: 800px;
}
</style>
