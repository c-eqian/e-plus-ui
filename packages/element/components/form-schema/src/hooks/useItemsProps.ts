import { computed, ref, shallowRef, unref, watch, type ComputedRef, type Ref } from 'vue';
import type { FormItemsSchema, FormSchema } from '../type';

export type UseItemsPropsReturn = {
  itemsCaches: ComputedRef<FormItemsSchema[]>;
  configItems: ComputedRef<FormItemsSchema[]>;
  renderItems: Ref<FormItemsSchema[]>;
  needToggle: ComputedRef<boolean>;
  isToggle: Ref<boolean>;
  updateSearchSchema: (toggle: boolean) => void;
};

// 计算渲染表单项（响应式）
export function useItemsProps(
  items: Ref<FormItemsSchema[]>,
  formProps: ComputedRef<FormSchema>
): UseItemsPropsReturn {
  const isSearch = computed(() => !!unref(formProps).isSearch);
  const cols = computed(() => unref(formProps).columns || 3);
  const rows = computed(() => unref(formProps).rows || 1);
  const renderTotal = computed(() => cols.value * rows.value);

  const configItems = computed<FormItemsSchema[]>(() => items.value);

  const itemsCaches = computed<FormItemsSchema[]>(() => {
    if (!isSearch.value) return [];
    const total = renderTotal.value;
    if (items.value.length <= total) return [];
    return items.value.slice(0, total);
  });

  const needToggle = computed(() => isSearch.value && items.value.length > renderTotal.value);

  const renderItems = shallowRef<FormItemsSchema[]>([]);
  const isToggle = ref(false);

  const recompute = () => {
    if (!isSearch.value) {
      renderItems.value = items.value;
      return;
    }
    if (isToggle.value) {
      renderItems.value = items.value;
    } else {
      renderItems.value = items.value.length <= renderTotal.value ? items.value : itemsCaches.value;
    }
  };

  watch([items, cols, rows, isSearch, isToggle], recompute, {
    immediate: true,
    deep: false
  });

  const updateSearchSchema = (toggle: boolean) => {
    isToggle.value = toggle;
    recompute();
  };

  return {
    itemsCaches,
    configItems,
    renderItems,
    needToggle,
    isToggle,
    updateSearchSchema
  };
}
