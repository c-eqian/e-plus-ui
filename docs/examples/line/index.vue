<script setup lang="ts">

</script>

<template>
<EpLine>居中</EpLine>
  <ep-line position="left">左侧</ep-line>
  <ep-line position="left"></ep-line>
  <ep-line position="right">右侧</ep-line>
  <ep-line offset="100" linear>offset 100</ep-line>
  <ep-line dashed>虚线</ep-line>
  <ep-line linear>居中渐变</ep-line>
  <h2>垂直方向</h2>
  <div class="cz-flex">
    <ep-line direction="vertical" linear></ep-line>
    <div>链接</div>
    <ep-line direction="vertical" margin="16"></ep-line>
    <div>链接</div>
    <ep-line direction="vertical" border-width="2"></ep-line>
    <div>链接</div>
  </div>
</template>

<style scoped lang="scss">

</style>
