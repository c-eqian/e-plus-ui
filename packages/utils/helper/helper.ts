import { isArray, isFunction } from '@eqian/utils-vue';
import { getCurrentScope, onScopeDispose } from 'vue';
type AnyFunction = (...args: any[]) => any;
/**
 * 是否为promise
 * @param value
 */
export const isPromiseLike = <T = any>(value: T | PromiseLike<T>): value is PromiseLike<T> => {
  return value instanceof Promise || isFunction((value as any)?.then);
};

export const tryExecPromise = async <T extends Function, A extends any[]>(fn: T, ...args: A) => {
  if (isFunction(fn)) {
    if (isPromiseLike(fn)) {
      return await fn(...args);
    } else {
      return fn(...args);
    }
  }
};

export const tryCall = <A extends any[]>(fns: AnyFunction[] | AnyFunction, ...args: A) => {
  if (isArray(fns)) {
    fns.forEach(fn => tryCall(fn, ...args));
  } else if (isFunction(fns)) {
    fns(...args);
  }
};

export function tryOnScopeDispose(fn: any) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
export function toArray<T>(value: T): T extends readonly any[] ? T : [T] {
  return Array.isArray(value) ? (value as any) : ([value] as [T]);
}
