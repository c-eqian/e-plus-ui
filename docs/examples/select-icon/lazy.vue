<script setup lang="ts">
import { icons } from '@e-plus-ui/icons/global';
import { EpSelectIcon } from 'e-plus-ui';
import { ref, watchEffect } from 'vue';
const icon = ref('');
watchEffect(
  () => {
    console.log(icon.value);
  },
  {
    flush: 'post'
  }
);
</script>

<template>
  <div class="cz-w-96">
    <EpSelectIcon
      v-model="icon"
      lazy-loadable
      :lazy-load-value="50"
      :icons="Object.keys(icons)"
    ></EpSelectIcon>
  </div>
</template>

<style scoped lang="scss"></style>
