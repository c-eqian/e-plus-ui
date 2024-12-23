<script setup lang="ts">
import { EpFormSchema, useFormSchema } from '@e-plus-ui/element';
import { isFunction } from '@eqian/utils-vue';
import { computed, useSlots } from 'vue';
import { authProps } from './authProps';
import bgSvg from './login-page-bg.svg';
import type { AuthEmits, AuthPageProps } from './type';
defineOptions({
  name: 'EpAuthPage'
});
const emits = defineEmits<AuthEmits>();
const props = withDefaults(defineProps<AuthPageProps>(), authProps);
const formSchemaConfig = computed(() => {
  if (isFunction(props.formSchema)) {
    return props.formSchema();
  }
  return props.formSchema;
});
const slots = useSlots();
const { registry, validate, getFieldsValues } = useFormSchema();
const handleConfirm = async () => {
  const hasDefaultSlot = slots['form-schema'];
  if (!hasDefaultSlot) {
    await validate();
  }
  const data = hasDefaultSlot ? null : getFieldsValues();
  emits('confirm', data);
};
</script>

<template>
  <div
    class="cz-auth-container cz-h-full cz-w-full cz-relative"
    :style="{
      '--auth-bg-image': bgUrl ? `url(${bgUrl})` : `url(${bgSvg})`
    }"
  >
    <div class="cz-absolute cz-h-full cz-flex cz-items-center cz-right-56">
      <div
        v-if="!$slots.default"
        class="cz-bg-[#fff]/70 cz-auth-login cz-border-2 cz-border-white cz-flex cz-flex-col cz-min-h-96 cz-rounded-3xl cz-w-[380px] cz-py-5 cz-px-10"
      >
        <div class="cz-pt-2 cz-pb-5">
          <h1 class="cz-auth-login--title cz-font-[500] cz-text-2xl">{{ props.loginTitle }}</h1>
        </div>
        <div class="cz-flex-1 cz-auth-login--form cz-pt-5">
          <EpFormSchema
            v-if="!$slots['form-schema']"
            :config="formSchemaConfig"
            @registry="registry"
          >
            <template #remember>
              <div
                class="cz-flex cz-items-center cz-w-full"
                :class="props.useRemember ? 'cz-justify-between' : 'cz-justify-end'"
              >
                <el-checkbox v-if="props.useRemember">{{ props.rememberText }}</el-checkbox>
                <el-button plain text type="primary">{{ props.forgetPasswordText }}</el-button>
              </div>
            </template>
          </EpFormSchema>
          <slot v-else name="form-schema" />
        </div>
        <div class="cz-w-full cz-auth-login--btn cz-mb-10">
          <el-button class="cz-w-full" type="primary" @click="handleConfirm">{{
            props.loginText
          }}</el-button>
          <div class="cz-service-agreement cz-text-center cz-py-3 cz-text-xs">
            <span class="cz-text-[#99999a]">登录即视为同意</span>
            <a href="#" class="cz-pl-2 cz-service-agreement--text">《服务协议》</a>
          </div>
        </div>
      </div>
      <slot name="default" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cz-auth-container {
  background-size: cover;
  background: var(--auth-bg-image) no-repeat fixed center center;
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
