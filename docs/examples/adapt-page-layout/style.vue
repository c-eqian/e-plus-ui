<template>
  <div class="play">
    <div class="cz-w-full cz-h-full cz-bg-white cz-p-3">
      <ep-adapt-page-layout :config="config">
        <template #search>
          <Form></Form>
        </template>
        <template #content="{ height }">
          <Table :height="height"></Table>
        </template>
      </ep-adapt-page-layout>
    </div>
  </div>
</template>
<script setup lang="ts">
import Form from './form.vue';
import Table from './table.vue';
import { AdaptPageLayoutProps } from 'e-plus-ui'
const config:AdaptPageLayoutProps['config'] = {
  searchStyle: {
    border: '1px dashed silver',
    padding: '5px',
  }
}
</script>
<style lang="less">
.play {
  padding: 10px;
  width: 100%;
  height: 600px;
}
</style>
