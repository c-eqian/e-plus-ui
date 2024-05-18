<template>
  <div class="demo-mr">
    <cz-image :src="image1" width="200" height="200" />
  </div>
  <div class="demo-mr">
    <cz-image :src="image2" width="300" height="300" />
  </div>
</template>
<script lang="ts" setup>
const image1 =   'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
const image2 = 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
</script>
<style scoped lang="scss">
.demo-mr {
  padding: 30px 0;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
</style>