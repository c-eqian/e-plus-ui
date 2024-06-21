import type { FormItemsSchema } from '../type';
import { computed, inject } from 'vue';

export const useComputedCol = (props: FormItemsSchema) => {
  const { col } = props;
  return computed(() => {
    const formItems = inject<FormItemsSchema[]>('form-items');
    if (formItems && formItems.length > 0) {
      const filterCollapse = formItems.some((item) => item.collapse);
      return {
        isCollapse: filterCollapse,
      };
    }
  });
};
