<script setup lang="ts">
import Image from '../../image/index.vue';
</script>

<template>
  <div class="cz-flex cz-h-full cz-w-full">
    <div v-if="$slots.avatar">
      <slot name="avatar"></slot>
    </div>
    <div v-else>
      <Image
        url="https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg"
        width="36"
        round
        height="36"
      />
    </div>
    <div class="cz-flex-1 cz-text-sm">
      <div class="cz-flex cz-text-[#945c5f] cz-text-sm">
        <div v-if="$slots.left" class="cz-flex-1 cz-px-2 cz-text-sm">
          <slot name="left"></slot>
        </div>
        <div v-if="$slots.right">
          <slot name="right"></slot>
        </div>
      </div>
      <div class="cz-px-2 cz-py-4">
        <div class="cz-w-full" v-if="$slots.content">
          <slot name="content"></slot>
        </div>
        <div class="cz-pt-2 cz-w-full" v-if="$slots.action">
          <slot name="action"></slot>
        </div>
      </div>
      <!--          二级评论-->
      <div v-if="$slots.sub" class="cz-bg-[#f8f9fa] cz-p-4 cz-rounded">
        <slot name="sub"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
