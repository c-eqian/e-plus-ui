<script setup lang="ts">
import {ref} from "vue";

const loading = ref(true)
const handleSwitch = ()=>{
  loading.value = !loading.value
}
</script>

<template>
<div>
  <ep-card title="loading">
    <ep-button @click="handleSwitch">切换</ep-button>
    <ep-loading :loading></ep-loading>
  </ep-card>
  <ep-card title="diamond-loading">
    <ep-diamond-loading :size="40"></ep-diamond-loading>
  </ep-card>
  <ep-card title="letter-loading">
    <ep-letter-loading></ep-letter-loading>
  </ep-card>
</div>
</template>

<style scoped lang="scss">

</style>
