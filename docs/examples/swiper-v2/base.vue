<script setup lang="ts">
import {ref} from 'vue'
const wallpapers = ref([
  'https://s3.bmp.ovh/imgs/2023/09/04/dc27244e6096e1f5.jpg',
  'https://s3.bmp.ovh/imgs/2023/09/04/1c4ec0b3c9428a5c.jpg',
  'https://s3.bmp.ovh/imgs/2023/09/04/add9a55f616dd641.jpg',
  'https://s3.bmp.ovh/imgs/2023/09/04/ab950e872f1f2248.jpg',
  'https://s3.bmp.ovh/imgs/2023/09/04/f081116e993842d5.jpg',
  'https://s3.bmp.ovh/imgs/2023/09/04/10c78ac4bd26b35c.jpg'
]);
</script>

<template>
          <div class="h-500px m-t-15px w-100%">
              <cz-swiper-v2>
                  <cz-swiper-item v-for="item in wallpapers" class="w-100% h-100%" :key="item"
                  >
                      <img :src="item" class="w-100% h-100%" style="object-fit: cover;width: 100%;height: 100%" alt="">
                  </cz-swiper-item>
              </cz-swiper-v2>
          </div>
</template>

<style scoped lang="scss">
</style>