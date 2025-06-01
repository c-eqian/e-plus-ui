import { computed, ref, toValue, watch, type MaybeRef, type Ref } from 'vue';
import { magicObject, toArray, tryOnScopeDispose } from '../helper/helper';
import type { MaybeArray } from '../types';
export type WebElement = HTMLElement | HTMLDivElement | Element | null;
export type MaybeRefWebElement = MaybeRef<WebElement>;
export type InterObserverTarget = MaybeArray<MaybeRefWebElement>;
export type InterObserverReturn = {
  /**
   * 暂停监听
   */
  pause: () => void;
  /**
   * 恢复监听
   */
  resume: () => void;
  /**
   * 停止
   */
  stop: () => void;
  /**
   * 是否激活状态
   */
  isActive: Ref<boolean>;
};
export type InterObserverOptions = {
  /**
   * 是否立即执行监听
   * @default true
   */
  immediate?: boolean;
} & IntersectionObserverInit;
const createIntersect = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit
) => {
  return new IntersectionObserver(callback, options);
};
/**
 *
 * @param target 目标元素
 * @param callback 回调函数
 * @param options 其他配置项
 */
export const useIntersectObserver = (
  target: InterObserverTarget,
  callback: IntersectionObserverCallback,
  options?: InterObserverOptions
): InterObserverReturn => {
  let observer: IntersectionObserver | null = null;
  const { immediate = true, ...opts } = magicObject(options);
  const isActive = ref(immediate);
  const targets = computed(() => {
    const _target = toValue(target);
    return toArray(_target).filter(Boolean).map(toValue);
  });
  const cleanup = () => {
    observer?.disconnect();
  };
  const stopWatcher = watch(
    () => [targets.value, isActive.value] as const,
    ([_target]) => {
      cleanup();
      if (!isActive.value || !_target.length) return;
      observer = createIntersect(callback, opts);
      _target.forEach(el => el && observer?.observe(el));
    },
    { immediate, flush: 'post' }
  );
  const stop = () => {
    cleanup();
    stopWatcher();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
};
