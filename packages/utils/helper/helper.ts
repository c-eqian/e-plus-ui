import { isArray, isEquals, isFunction, isObject } from '@eqian/utils-vue';
import { getCurrentScope, onScopeDispose } from 'vue';
import type { Recordable } from '@e-plus-ui/utils';
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

/**
 * 魔法对象，当尝试从一个可选对象中获取某个属性时，或许有用
 * @param obj
 */
export function magicObject<T>(obj: T): NonNullable<T> {
  return obj ?? (Object.create(null) as unknown as NonNullable<T>);
}

/**
 * 剔除空值
 * @param values
 * @param emptyValues 默认为 `[undefined, null, '']`
 */
export const omitEmpty = (
  values: Recordable,
  emptyValues: unknown[] = [undefined, null, '']
): Recordable => {
  const result: Record<string, any> = Object.create(null);
  if (!values || !isObject(values)) return values;
  const keys = Object.keys(values);
  keys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(values, key)) {
      const value = values[key];
      // 如果 value 不在 emptyValues 数组中，则保留该属性
      if (!emptyValues.some(emptyVal => isEquals(emptyVal, value))) {
        result[key] = value;
      }
    }
  });
  return result;
};
