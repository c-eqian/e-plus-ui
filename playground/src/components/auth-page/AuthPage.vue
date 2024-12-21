<script setup lang="ts">
defineOptions({
  name: 'EpAuthPage'
});
</script>

<template>
  <div class="cz-auth-container cz-h-full cz-w-full cz-relative">
    <div class="cz-absolute cz-h-full cz-flex cz-items-center cz-right-96">
      <div class="cz-bg-[#fff]/70 cz-p-5">
        <h1>欢迎登录</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cz-auth-container {
  background-image: url('../../assets/login-page-bg.svg');
}
</style>
