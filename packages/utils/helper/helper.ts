import { isFunction } from '@eqian/utils-vue';

/**
 * 是否为promise
 * @param value
 */
export const isPromiseLike = <T = any>(value: T | PromiseLike<T>): value is PromiseLike<T> => {
  return value instanceof Promise || isFunction((value as any)?.then);
};

export const tryExecPromise = async <T extends Function>(fn: T) => {
  if (isFunction(fn)) {
    if (isPromiseLike(fn)) {
      return await fn();
    } else {
      return fn();
    }
  }
};
