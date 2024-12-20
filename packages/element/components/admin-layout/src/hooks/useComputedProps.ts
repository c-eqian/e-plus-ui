import { computed, inject, unref, type ComputedRef } from 'vue';
import { __MANAGER_LAYOUT_KEY__ } from '../constants';
import type { AdminBasicProps, AdminLayoutProps } from '../type';

export const useComputedProps = () => {
  const props = inject<ComputedRef<AdminLayoutProps>>(__MANAGER_LAYOUT_KEY__);
  return computed(() => unref(props)) as ComputedRef<AdminBasicProps>;
};
