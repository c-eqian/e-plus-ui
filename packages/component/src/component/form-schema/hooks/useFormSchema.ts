import type { FormSchemaReturn } from '../type';
import { nextTick, onUnmounted, ref, unref } from 'vue';

export const useFormSchema = () => {
  const formInstance = ref<FormSchemaReturn | null>(null);
  const registry = async (instance: FormSchemaReturn) => {
    onUnmounted(() => {
      formInstance.value = null;
    });
    if (unref(formInstance)) {
      return;
    }
    await nextTick(() => {
      formInstance.value = instance;
    });
  };
};
