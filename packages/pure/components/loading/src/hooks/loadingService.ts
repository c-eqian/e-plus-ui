import { createApp, type ComponentPublicInstance } from 'vue';
import Loading from '../Loading.vue';
import type { LoadingExpose, LoadingProps } from '../type';
export const createLoadingService = (options?: LoadingProps) => {
  const loadingInstance = createApp(Loading, options);
  const vm: ComponentPublicInstance & LoadingExpose = loadingInstance.mount(
    document.createElement('div')
  );
  return {
    instance: loadingInstance,
    vm,
    get $el(): HTMLElement {
      return vm.$el;
    }
  };
};
