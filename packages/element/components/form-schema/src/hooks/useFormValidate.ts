import type { FormItemsSchema } from '../type';
import type { FormInstance, FormValidateCallback } from 'element-plus';
import type { Ref } from 'vue';

export const useFormValidate = (formInstanceRef: Ref<FormInstance>) => {
  /**
   * 自定义平滑滚动定位到对应的视图
   * @param field
   */
  const scrollIntoView = (field: string) => {
    (formInstanceRef.value?.$el as HTMLElement)
      ?.querySelector(`[field="${field}"]`)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
  };
  const validate = async (isScrollToField?: boolean, callback?: FormValidateCallback) => {
    if (isScrollToField) {
      try {
        return await formInstanceRef.value?.validate(callback);
      } catch (error) {
        const fieldModel = error as Record<string, FormItemsSchema['rules']>;
        // 取出第一个校验失败的数据
        const errId = Object.keys(fieldModel)[0];
        scrollIntoView(errId);
        return Promise.reject(error);
      }
    }
    return formInstanceRef.value?.validate(callback);
  };
  /**
   * 校验表单某个字段验证
   * @param arg
   */
  const validateField: FormInstance['validateField'] = (...arg) => {
    if (!formInstanceRef.value) {
      console.warn('表单启用失败');
      return Promise.resolve(true);
    }
    return formInstanceRef.value?.validateField(...arg);
  };
  /**
   * 重置表单
   * @param arg
   */
  const resetFields: FormInstance['resetFields'] = (...arg) => {
    if (!formInstanceRef.value) {
      console.warn('表单启用失败');
      return Promise.resolve(true);
    }
    return formInstanceRef.value?.resetFields(...arg);
  };
  /**
   * 清空某个字段的表单有验证信息
   * @param arg
   */
  const clearValidate: FormInstance['clearValidate'] = (...arg) => {
    return formInstanceRef.value?.clearValidate(...arg);
  };
  return {
    validate,
    resetFields,
    clearValidate,
    validateField,
    scrollIntoView
  };
};
