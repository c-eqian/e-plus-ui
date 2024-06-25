import { inject, ref, Ref, unref } from 'vue';
import { isObjectLike } from 'co-utils-vue';
import { FORM_SCHEMA_MODEL } from '../constants';
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

export const useFormValues = () => {
  const formModel = inject<Ref<object>>(FORM_SCHEMA_MODEL, ref({}));
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
    const model = unref(formModel);
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
  return {
    getFieldsValues,
  };
};
