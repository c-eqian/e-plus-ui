<template>
  <div class="play">
    <div class="cz-max-w-5xl cz-mx-auto cz-my-0 cz-w-full cz-h-96">
      <ep-card>
        <Form></Form>
      </ep-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { EpCard } from '../packages';
import Form from './form.vue';
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
  width: 800px;
  height: 800px;
}
</style>
