<script setup lang="ts">
import { EpFormSchema, useFormSchema } from '@e-plus-ui/element';
import { pixelUnits } from '@e-plus-ui/utils';
import { isFunction } from '@eqian/utils-vue';
import { computed, useSlots } from 'vue';
import { authProps } from './authProps';
import type { AuthEmits, AuthPageConfig } from './type';
defineOptions({
  name: 'EpAuthPage'
});
const emits = defineEmits<AuthEmits>();
const props = withDefaults(defineProps<AuthPageConfig>(), {
  config: () => authProps
});
const config = computed(() => {
  return {
    ...authProps,
    ...props.config
  };
});
const formSchemaConfig = computed(() => {
  if (isFunction(config.value.formSchema)) {
    return config.value.formSchema();
  }
  return config.value.formSchema;
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
      '--auth-bg-image': config.bgUrl
        ? `url(${config.bgUrl})`
        : `linear-gradient(0deg,#FFF1EB 0%,#ACE0F9 100%)`,
      '--cz-absolute-right': config.center ? '50%' : pixelUnits(config.offsetR)
    }"
  >
    <div
      class="cz-absolute cz-h-full cz-flex cz-items-center cz-right-[--cz-absolute-right]"
      :class="{
        'cz-translate-x-1/2': !!config.center
      }"
    >
      <div
        v-if="!$slots.default"
        class="cz-bg-[#fff]/70 cz-auth-login cz-border-2 cz-border-white cz-flex cz-flex-col cz-min-h-96 cz-rounded-3xl cz-w-[380px] cz-py-5 cz-px-10"
      >
        <div class="cz-pt-2 cz-pb-5">
          <h1 class="cz-auth-login--title cz-font-[500] cz-text-2xl">{{ config.loginTitle }}</h1>
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
                :class="config.useRemember ? 'cz-justify-between' : 'cz-justify-end'"
              >
                <el-checkbox v-if="config.useRemember">{{ config.rememberText }}</el-checkbox>
                <el-button plain text type="primary">{{ config.forgetPasswordText }}</el-button>
              </div>
            </template>
          </EpFormSchema>
          <slot v-else name="form-schema" />
        </div>
        <div class="cz-w-full cz-auth-login--btn cz-mb-10">
          <el-button class="cz-w-full" type="primary" @click="handleConfirm">{{
            config.loginText
          }}</el-button>
          <div
            v-if="config.useUserAgent"
            class="cz-service-agreement cz-text-center cz-py-3 cz-text-xs"
          >
            <span class="cz-text-[#99999a]">登录即视为同意</span>
            <a href="#" class="cz-pl-2 cz-service-agreement--text">《服务协议》</a>
          </div>
        </div>
      </div>
      <slot name="default" />
    </div>
  </div>
</template>
