import { isObject } from '@eqian/utils-vue';
import {
  onUnmounted,
  ref,
  unref,
  type ComponentInternalInstance,
  type ComponentPublicInstance
} from 'vue';
import type { FormSchemaReturn, UseFormSchemaReturnType } from '../type';

export const useFormSchema = (_listener?: Record<string, any>): UseFormSchemaReturnType => {
  const formInstance = ref<ComponentInternalInstance | null>(null);
  const registeredRef = ref<boolean>(false);
  const getFormInstance = () => {
    const instance = unref(formInstance);
    if (!instance) {
      console.warn(`获取表单示例失败-----[${instance}]`);
      return null;
    }
    return instance.proxy as FormSchemaReturn & ComponentPublicInstance;
  };
  const registry = (getInstance: () => ComponentInternalInstance) => {
    onUnmounted(() => {
      formInstance.value = null;
    });
    const instance = getInstance();
    if (unref(formInstance) === instance && unref(registeredRef)) {
      return;
    }
    formInstance.value = instance;
    registeredRef.value = true;
    if (isObject(_listener)) {
      (instance.proxy as FormSchemaReturn & ComponentPublicInstance)?.listener(_listener);
    }
  };
  const instanceMethods: FormSchemaReturn = {
    validate: (...args) => {
      const instance = getFormInstance();
      return instance!.validate(...args);
    },
    validateField: (...args) => {
      const instance = getFormInstance();
      return instance!.validateField(...args);
    },
    resetFields: (...args) => {
      const instance = getFormInstance();
      return instance?.resetFields(...args);
    },
    clearValidate: (...args) => {
      const instance = getFormInstance();
      return instance?.clearValidate(...args);
    },
    scrollIntoView: (...args) => {
      const instance = getFormInstance();
      return instance?.scrollIntoView(...args);
    },
    setFieldsValues: (values: Record<string, any>) => {
      const instance = getFormInstance();
      return instance?.setFieldsValues(values);
    },
    getFieldsValues: <T = any>(...args: any) => {
      const instance = getFormInstance();
      return instance?.getFieldsValues(...args) as T;
    },
    appendFields: (item, to) => {
      const instance = getFormInstance();
      return instance?.appendFields(item, to);
    },
    updateOrAppendFields: (prop, item) => {
      const instance = getFormInstance();
      return instance?.updateOrAppendFields(prop, item);
    },
    deleteField: (prop: string) => {
      const instance = getFormInstance();
      return instance?.deleteField(prop);
    },
    listener: (args: Record<string, any>) => {
      const instance = getFormInstance();
      return instance?.listener(args);
    }
  };
  return {
    registry,
    ...instanceMethods,
    getFormInstance
  };
};
