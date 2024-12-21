<script setup lang="ts">
import { defineFormSchema, EpFormSchema } from '@e-plus-ui/element';
defineOptions({
  name: 'EpAuthPage'
});
const FORM_CONFIG = defineFormSchema({
  columns: 1,
  items: [
    {
      label: '',
      prop: 'userName',
      type: 'input',
      placeholder: '请输入用户名',
      rules: true
    },
    {
      label: '',
      prop: 'password',
      type: 'input',
      placeholder: '请输入密码',
      rules: true
    },
    {
      label: '',
      prop: 'remember',
      type: 'input',
      placeholder: '请输入密码',
      slotKey: 'remember'
    }
  ]
});
</script>

<template>
  <div class="cz-auth-container cz-h-full cz-w-full cz-relative">
    <div class="cz-absolute cz-h-full cz-flex cz-items-center cz-right-56">
      <div
        class="cz-bg-[#fff]/70 cz-auth-login cz-border-2 cz-border-white cz-flex cz-flex-col cz-min-h-96 cz-rounded-3xl cz-w-[380px] cz-py-5 cz-px-10"
      >
        <div class="cz-pt-2 cz-pb-5">
          <h1 class="cz-auth-login--title cz-font-[500] cz-text-2xl">欢迎登录</h1>
        </div>
        <div class="cz-flex-1 cz-auth-login--form cz-pt-5">
          <EpFormSchema :config="FORM_CONFIG">
            <template #remember>
              <div class="cz-flex cz-items-center cz-w-full cz-justify-between">
                <el-checkbox>记住密码</el-checkbox>
                <el-button plain text type="primary">找回密码</el-button>
              </div>
            </template>
          </EpFormSchema>
        </div>
        <div class="cz-w-full cz-auth-login--btn cz-mb-10">
          <el-button class="cz-w-full" type="primary">登录</el-button>
          <div class="cz-service-agreement cz-text-center cz-py-3 cz-text-xs">
            <span class="cz-text-[#99999a]">登录即视为同意</span>
            <a href="#" class="cz-pl-2 cz-service-agreement--text">《服务协议》</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cz-auth-container {
  background-size: cover;
  background: url('../../assets/login-page-bg.svg') no-repeat fixed center center;
  .cz-auth-login {
    &--title {
      position: relative;
      width: fit-content;
      &:before {
        position: absolute;
        content: '';
        width: 50%;
        left: 0;
        height: 5px;
        bottom: -5px;
        background-color: #116ee7;
      }
    }
  }
  .cz-service-agreement--text {
    color: #3c93ff;
  }
}
</style>
