<script setup lang="ts"></script>

<template>
  <div class="demo-mr">
    <ep-image
      scale
      width="100"
      height="100"
      url="https://s3.bmp.ovh/imgs/2022/11/23/84077c18f8e3acfa.jpg"
    />
  </div>
  <div class="demo-mr">
    <ep-image
      scale
      round
      width="100"
      height="100"
      url="https://s3.bmp.ovh/imgs/2022/11/23/84077c18f8e3acfa.jpg"
    />
  </div>
</template>

<style scoped lang="scss">
.demo-mr {
  .ep-image {
    margin-right: 50px;
  }
}
</style>
