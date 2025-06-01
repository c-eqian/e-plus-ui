import { isObjectLike } from '@eqian/utils-vue';
import { computed, toValue, unref, watch, type MaybeRef, type MaybeRefOrGetter } from 'vue';
import type { CallbackVoid, MaybeArray } from '../types';
import { toArray, tryOnScopeDispose } from './helper';

export type WindowEventName = keyof WindowEventMap;
export type DocumentEventName = keyof DocumentEventMap;
export type HTMLElementEventName = keyof HTMLElementEventMap;

/**
 * 参考vueuse
 * @see https://github.com/vueuse/vueuse/blob/main/packages/core/useEventListener/index.ts
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends WindowEventName>(
  event: MaybeRefOrGetter<MaybeArray<E>>,
  listener: MaybeRef<MaybeArray<(this: Window, ev: WindowEventMap[E]) => any>>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): CallbackVoid;
/**
 * 参考vueuse
 * @see https://github.com/vueuse/vueuse/blob/main/packages/core/useEventListener/index.ts
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends DocumentEventName>(
  target: DocumentOrShadowRoot,
  event: MaybeRefOrGetter<MaybeArray<E>>,
  listener: MaybeRef<MaybeArray<(this: Document, ev: DocumentEventMap[E]) => any>>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): CallbackVoid;
/**
 * 参考vueuse
 * @see https://github.com/vueuse/vueuse/blob/main/packages/core/useEventListener/index.ts
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends WindowEventName>(
  target: Window,
  event: MaybeRefOrGetter<MaybeArray<E>>,
  listener: MaybeRef<MaybeArray<(this: Window, ev: WindowEventMap[E]) => any>>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): CallbackVoid;
/**
 * 参考vueuse
 * @see https://github.com/vueuse/vueuse/blob/main/packages/core/useEventListener/index.ts
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends HTMLElementEventName>(
  target: MaybeRefOrGetter<MaybeArray<HTMLElement> | null | undefined>,
  event: MaybeRefOrGetter<MaybeArray<E>>,
  listener: MaybeRef<(this: HTMLElement, ev: HTMLElementEventMap[E]) => any>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): CallbackVoid;

export function useEventListener(...args: any[]) {
  const cleanups: Function[] = [];
  const cleanup = () => {
    cleanups.forEach(fn => fn());
    cleanups.length = 0;
  };
  const register = (
    el: EventTarget,
    event: string,
    listener: any,
    options: boolean | AddEventListenerOptions | undefined
  ) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e: any) => e != null);
    return test.every((e: any) => typeof e !== 'string') ? test : undefined;
  });
  const stopWatch = watch(
    () =>
      [
        firstParamTargets.value?.map((e: any) => (toValue(e) as any)?.$el ?? toValue(e)) ??
          [window].filter(e => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])) as unknown as string[],
        toArray(unref(firstParamTargets.value ? args[2] : args[1])) as Function[],
        toValue(firstParamTargets.value ? args[3] : args[2]) as
          | boolean
          | AddEventListenerOptions
          | undefined
      ] as const,
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();

      if (!raw_targets?.length || !raw_events?.length || !raw_listeners?.length) return;

      const optionsClone = isObjectLike(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap((el: any) =>
          raw_events.flatMap(event =>
            raw_listeners.map(listener => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: 'post', immediate: true }
  );

  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
