import { computed, inject } from 'vue';
export function useContextProps() {
  return computed<any>(() => {
    return inject('EPFormSchema');
  });
}
