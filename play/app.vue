<template>
  <div class="play">
    <ep-card>
      如果要监听 current-page 和 page-size 的改变，使用 v-model 双向绑定是个更好的选择。
    </ep-card>
  </div>

</template>
<script setup lang="ts">
</script>
<style lang="less">
html, body, #app{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.play{
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-container {
  width: 500px;
  height: 800px;
}
</style>
