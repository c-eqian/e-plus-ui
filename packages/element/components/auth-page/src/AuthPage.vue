<script setup lang="ts">
import { EpFormSchema, useFormSchema } from '@e-plus-ui/element/components/form-schema';
import { pixelUnits } from '@e-plus-ui/utils';
import { isFunction } from '@eqian/utils-vue';
import { computed, reactive, useSlots } from 'vue';
import { authProps } from './authProps';
import type { AuthEmits, AuthPageConfig } from './type';
defineOptions({
  name: 'EpAuthPage'
});
const emits = defineEmits<AuthEmits>();
const props = withDefaults(defineProps<AuthPageConfig>(), {
  config: () => authProps
});
const stateData = reactive({
  isRemember: false
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
const { registry, validate, getFieldsValues, setFieldsValues, resetFields } = useFormSchema();
const handleConfirm = async () => {
  const hasDefaultSlot = slots['form-schema'];
  if (!hasDefaultSlot) {
    await validate();
  }
  const data = hasDefaultSlot ? null : getFieldsValues();
  emits('confirm', config.value.useRemember ? { ...data, isRemember: stateData.isRemember } : data);
};
const setValues = (data: Record<any, any>, isRemember = false) => {
  setFieldsValues(data);
  stateData.isRemember = isRemember;
};
const getValues = () => {
  const data = getFieldsValues();
  return config.value.useRemember ? { ...data, isRemember: stateData.isRemember } : data;
};
const resetValues = (isRemember = false) => {
  resetFields();
  stateData.isRemember = isRemember;
};
defineExpose({
  getValues,
  setValues,
  resetValues
});
</script>

<template>
  <div
    class="ep-auth-container ep-h-full ep-w-full ep-relative"
    :style="{
      '--auth-bg-image': config.bgUrl
        ? `url(${config.bgUrl})`
        : `linear-gradient(0deg,#FFF1EB 0%,#ACE0F9 100%)`,
      '--ep-absolute-right': config.center ? '50%' : pixelUnits(config.offsetR)
    }"
  >
    <div
      class="ep-absolute ep-h-full ep-flex ep-items-center ep-right-[--ep-absolute-right]"
      :class="{
        'ep-translate-x-1/2': !!config.center
      }"
    >
      <div
        v-if="!$slots.default"
        class="ep-bg-[#fff]/70 ep-auth-login ep-border-2 ep-border-white ep-flex ep-flex-col ep-min-h-96 ep-rounded-3xl ep-w-[380px] ep-py-5 ep-px-10"
      >
        <div class="ep-pt-2 ep-pb-5">
          <h1 class="ep-auth-login--title ep-font-[500] ep-text-2xl">{{ config.loginTitle }}</h1>
        </div>
        <div class="ep-flex-1 ep-auth-login--form ep-pt-5">
          <EpFormSchema
            v-if="!$slots['form-schema']"
            :config="formSchemaConfig"
            @registry="registry"
          >
            <template #remember>
              <div
                class="ep-flex ep-items-center ep-w-full"
                :class="config.useRemember ? 'ep-justify-between' : 'ep-justify-end'"
              >
                <el-checkbox v-if="config.useRemember" v-model="stateData.isRemember">{{
                  config.rememberText
                }}</el-checkbox>
                <el-button plain text type="primary" @click="emits('findPassword')">{{
                  config.forgetPasswordText
                }}</el-button>
              </div>
            </template>
          </EpFormSchema>
          <slot v-else name="form-schema" />
        </div>
        <div class="ep-w-full ep-auth-login--btn ep-mb-10">
          <el-button class="ep-w-full" type="primary" @click="handleConfirm">{{
            config.loginText
          }}</el-button>
          <div
            v-if="config.useUserAgent"
            class="ep-service-agreement ep-text-center ep-py-3 ep-text-xs"
          >
            <span class="ep-text-[#99999a]">登录即视为同意</span>
            <a href="#" class="ep-pl-2 ep-service-agreement--text">《服务协议》</a>
          </div>
        </div>
      </div>
      <slot name="default" />
    </div>
  </div>
</template>
