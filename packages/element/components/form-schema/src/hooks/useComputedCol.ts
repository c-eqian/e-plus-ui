import { computed, inject } from 'vue';
import type { FormItemsSchema } from '../type';

export const useComputedCol = () => {
  return computed(() => {
    const formItems = inject<FormItemsSchema[]>('form-items');
    if (formItems && formItems.length > 0) {
      const filterCollapse = formItems.some(item => item.collapse);
      return {
        isCollapse: filterCollapse
      };
    }
  });
};
