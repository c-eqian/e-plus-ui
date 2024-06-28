import { Ref, unref } from 'vue';
import { isEmpty, isObjectLike, useEmptyObject } from 'co-utils-vue';
import type { UpdateFieldValue } from '../types';
function transformFlatObjectToNested(
  nestedObj: Record<string, any>,
  flatKey: string,
  value: any
): void {
  let currentLevel = nestedObj;
  const pathArray = flatKey.split('.');
  for (let i = 0; i < pathArray.length - 1; i++) {
    const segment = pathArray[i];
    if (!currentLevel[segment]) {
      currentLevel[segment] = {};
    }
    currentLevel = currentLevel[segment];
  }
  currentLevel[pathArray[pathArray.length - 1]] = value;
}

export const useFormValues = (
  getModel: () => Ref<object>,
  updateFieldValue: UpdateFieldValue
) => {
  /**
   * 获取字段值
   * @param serialize 是否需要序列化
   * @default true
   * @example
   * ``` js
   * // 'a.b.c'=> {a:{b: {c:xxx}}}
   * ```
   */
  const getFieldsValues = <T extends Record<string, any>>(
    serialize = true
  ): T => {
    const model = unref(getModel());
    if (!isObjectLike(model)) {
      return {} as T;
    }
    const values: Record<string, any> = {};
    const modelEntries = Object.entries(model);
    for (const entry of modelEntries) {
      const [key, value] = entry;
      if (!serialize) {
        values[key] = value;
      } else {
        transformFlatObjectToNested(values, key, value);
      }
    }
    return values as T;
  };
  const setFieldsValues = (values: Record<string, any>) => {
    if (isEmpty(values)) {
      return;
    }
    for (const entry of Object.entries(values)) {
      const [prop, value] = entry;
      updateFieldValue(prop, value);
    }
  };
  const resetFieldsValues = () => {
    const model = unref(getModel());
    setFieldsValues(useEmptyObject(model));
  };
  return {
    getFieldsValues,
    setFieldsValues,
    resetFieldsValues,
  };
};
