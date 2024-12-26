<script setup lang="ts"></script>

<template>
  <div class="ep-h-full">
    <ep-card title="标题">
      这是卡片
      <template #title> 自定义标题 </template>
    </ep-card>
  </div>
</template>

<style scoped lang="scss">
.demo-mr {
  .ep-button {
    margin-right: 10px;
  }
}
</style>
