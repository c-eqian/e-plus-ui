import type { FormSchemaReturn, UseFormSchemaReturnType } from '../type';
import { nextTick, onUnmounted, ref, unref } from 'vue';

export const useFormSchema = (): UseFormSchemaReturnType => {
  const formInstance = ref<FormSchemaReturn | null>(null);
  const registeredRef = ref<boolean>(false);
  const getFormInstance = async () => {
    const instance = unref(formInstance);
    if (!instance) {
      console.warn('获取表单示例失败~~');
      return null;
    }
    await nextTick();
    return instance;
  };
  const registry = async (instance: FormSchemaReturn) => {
    onUnmounted(() => {
      formInstance.value = null;
    });
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
    getFieldsValues: <T = any>(serialize = true) => {
      const instance = unref(formInstance);
      return instance?.getFieldsValues(serialize) as T;
    },
  };
  return {
    registry,
    ...instanceMethods,
    getFormInstance,
  };
};
