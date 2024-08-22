import type { FormSchemaReturn, UseFormSchemaReturnType } from '../type';
import {
  type ComponentInternalInstance,
  ComponentPublicInstance,
  nextTick,
  onUnmounted,
  ref,
  unref,
} from 'vue';

export const useFormSchema = (): UseFormSchemaReturnType => {
  const formInstance = ref<ComponentInternalInstance | null>(null);
  const registeredRef = ref<boolean>(false);
  const getFormInstance = async () => {
    const instance = unref(formInstance);
    if (!instance) {
      console.warn(`获取表单示例失败-----[${instance}]`);
      return null;
    }
    await nextTick();
    return instance.proxy as FormSchemaReturn & ComponentPublicInstance;
  };
  const registry = async (getInstance: () => ComponentInternalInstance) => {
    onUnmounted(() => {
      formInstance.value = null;
    });
    const instance = getInstance();
    if (unref(formInstance) === instance && unref(registeredRef)) {
      return;
    }
    formInstance.value = instance;
    registeredRef.value = true;
  };
  const instanceMethods: FormSchemaReturn = {
    validate: async (...args) => {
      const instance = await getFormInstance();
      return instance?.validate(...args);
    },
    validateField: async (...args) => {
      const instance = await getFormInstance();
      return instance?.validateField(...args);
    },
    resetFields: async (...args) => {
      const instance = await getFormInstance();
      return instance?.resetFields(...args);
    },
    clearValidate: async (...args) => {
      const instance = await getFormInstance();
      return instance?.clearValidate(...args);
    },
    scrollIntoView: async (...args) => {
      const instance = await getFormInstance();
      return instance?.scrollIntoView(...args);
    },
    setFieldsValues: async (values: Record<string, any>) => {
      const instance = await getFormInstance();
      return instance?.setFieldsValues(values);
    },
    getFieldsValues: async <T = any>(serialize = true) => {
      const instance = await getFormInstance();
      return instance?.getFieldsValues(serialize) as T;
    },
    appendFields: async (item, to) => {
      const instance = await getFormInstance();
      return instance?.appendFields(item, to);
    },
    deleteField: async (prop: string) => {
      const instance = await getFormInstance();
      return instance?.deleteField(prop);
    },
  };
  return {
    registry,
    ...instanceMethods,
    getFormInstance,
  };
};
