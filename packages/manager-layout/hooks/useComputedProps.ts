import { computed, type ComputedRef, inject, unref } from 'vue';
import { ManagerLayout, ManagerBasic } from '../type';
import { __MANAGER_LAYOUT_KEY__ } from '../constants';

export const useComputedProps = () => {
  const props = inject<ComputedRef<ManagerLayout>>(__MANAGER_LAYOUT_KEY__);
  return computed(() => unref(props)) as ComputedRef<ManagerBasic>;
};
