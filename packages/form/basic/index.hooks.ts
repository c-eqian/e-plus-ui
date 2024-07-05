import { computed, inject } from 'vue';
import type { FormContext } from '../type';
import { formContextDefault } from './model';

export function useProps<T = any>(props: T) {
  return computed(() => props);
}
export function useContextProps() {
  return computed(() => {
    return inject<FormContext>('EP-FORM-CONTEXT', formContextDefault);
  });
}
