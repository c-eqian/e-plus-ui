import { isString, useCamelize } from '@eqian/utils-vue';
import { nextTick, onBeforeUnmount, onMounted, shallowRef, toValue, type CSSProperties } from 'vue';
import type { UseLoadingProps } from '../type';
import { createLoadingService } from './loadingService';
const classNameToArray = (cls = '') => cls.split(' ').filter(item => !!item.trim());
const addClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return;
  el.classList.add(...classNameToArray(cls));
};
const getStyle = (element: HTMLElement, styleName: keyof CSSProperties): string => {
  if (!element || !styleName) return '';

  let key = useCamelize(styleName);
  if (key === 'float') key = 'cssFloat';
  try {
    const style = (element.style as any)[key];
    if (style) return style;
    const computed: any = document.defaultView?.getComputedStyle(element, '');
    return computed ? computed[key] : '';
  } catch {
    return (element.style as any)[key];
  }
};
const tryAddClass = (el: HTMLElement, cls: string) => {
  const originalPosition = getStyle(el, 'position');
  if (originalPosition !== 'absolute' && originalPosition !== 'fixed') {
    addClass(el, cls);
  }
};
export const useLoading = (options?: UseLoadingProps) => {
  let target: HTMLElement;
  const containerRef = shallowRef<HTMLElement | null>(null);
  const { target: _target, ...opts } = options ?? ({} satisfies UseLoadingProps);

  const instance = createLoadingService(opts);

  const reset = () => {
    target.contains(instance.$el) && target.removeChild(instance.$el);
  };
  onMounted(() => {
    if (containerRef.value) {
      const plain = toValue(containerRef.value);
      target = (plain as any)?.$el ?? plain;
    } else if (isString(_target)) {
      target = document.querySelector<HTMLElement>(_target) ?? document.body;
    } else {
      target = _target || document.body;
    }
    reset();
    tryAddClass(target, 'ep-loading-parent');
    target.appendChild(instance.$el);
  });
  onBeforeUnmount(() => {
    containerRef.value = null;
    reset();
    instance.instance && instance.instance.unmount();
  });
  const loadingState = (v: boolean) => {
    nextTick(() => instance.vm.setVisible?.(v));
  };
  return {
    loadingState,
    containerProps: {
      ref: containerRef
    }
  };
};
