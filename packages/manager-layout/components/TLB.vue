<script setup lang="ts">
import { ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import Aside from './Aside.vue';
</script>

<template>
  <div class="cz-ltb-layout cz-h-full cz-w-full">
    <ElContainer class="cz-w-full cz-h-full">
      <ElHeader class="cz-bg-[#cae1fe]">
        <slot name="header"></slot>
      </ElHeader>
      <ElContainer>
        <Aside></Aside>
        <ElMain v-if="$slots.main" class="cz-w-full cz-h-full">
          <slot name="main"></slot>
        </ElMain>
        <ElFooter v-if="$slots.footer" class="cz-bg-[#cae1fe]">
          <slot name="footer"></slot>
        </ElFooter>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style scoped lang="scss"></style>
