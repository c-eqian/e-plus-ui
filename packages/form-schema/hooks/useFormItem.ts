import type { FormItemsSchema, FormSchemaType, FormItemRules } from '../type';
import {
  isArray,
  isEmpty,
  isFunction,
  isNumber,
  isNumeric,
  isString,
  useMerge,
  useOmit,
} from '@eqian/utils-vue';
import { ComputedRef, type Ref, unref } from 'vue';

/**
 * 参数过滤，获取组件参数
 * @param props
 */
export const useFilterProps = (props: FormItemsSchema) => {
  const deleteProps: (keyof FormItemsSchema)[] = [
    'col',
    'slotKey',
    'type',
    'prop',
    'label',
    'componentProps',
    'rules',
  ];
  return useOmit(props, deleteProps);
};
/**
 * 获取表单参数
 * @param props
 * @param columns
 * @param isSearch
 */
export const useColProps = (
  props: FormItemsSchema,
  columns: ComputedRef<number>,
  isSearch: ComputedRef<boolean>
) => {
  const _columns = unref(columns);
  if (!isSearch.value) {
    const DEFAULT = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 };
    const { col = {} } = props;
    if (isNumber(col)) {
      return {
        span: col,
      };
    } else if (isEmpty(col)) {
      return {
        span:
          isNumeric(_columns) && +_columns > 0 && +_columns < 24
            ? Math.floor(24 / +_columns)
            : 24,
      };
    }
    return useMerge({}, DEFAULT, col);
  }
  const cols = isNumeric(_columns) ? _columns : 3;
  return {
    span: Math.floor(24 / cols),
  };
};
/**
 * 获取表单参数
 * @param props
 * @param model
 * @param isSearch
 */
export const useFormItemProps = (
  props: FormItemsSchema,
  model: any,
  isSearch?: boolean
) => {
  const { rules, prop, label } = props;
  if (isSearch) {
    return {
      prop,
      label,
    };
  }
  const handleValidatorFn = (_rule: FormItemRules) => {
    if (isFunction(_rule.validatorFn)) {
      return {
        field: prop,
        ...useOmit(_rule, ['validator']),
        validator: _rule.validatorFn(model),
      };
    }
    return _rule;
  };
  if (typeof rules === 'boolean') {
    return {
      prop,
      label,
      rules: {
        required: rules,
        message: `${label} 为必填项`,
        trigger: 'blur',
      },
    };
  }
  if (isArray(rules)) {
    return {
      prop,
      label,
      rules: rules.map((_rule) => handleValidatorFn(_rule)),
    };
  }
  return rules
    ? {
        prop,
        label,
        rules: handleValidatorFn(rules),
      }
    : { rules, prop, label };
};
/**
 * 获取组件参数
 * @param props
 * @param getModel
 */
export const useFormProps = (
  props: ComputedRef<FormItemsSchema>,
  getModel: () => Ref<any>
) => {
  const { placeholder, type, label, componentProps } = unref(props);
  const selectKeyList: FormSchemaType[] = [
    'select',
    'date-picker',
    'time-select',
    'cascade',
    'time-picker',
  ];
  const getPlaceholder = () => {
    if (type && selectKeyList.includes(type)) {
      return '请选择' + label;
    }
    return '请输入' + label;
  };
  const filterProps = useFilterProps(unref(props));
  const comProps: Record<string, any> = {
    placeholder: placeholder || `${getPlaceholder()}`,
    ...useOmit(componentProps ?? {}, ['slots']),
  };
  if (componentProps) {
    if (!isEmpty(componentProps)) {
      const { dynamicDisable } = componentProps;
      if (isFunction(dynamicDisable)) {
        return useMerge(comProps, filterProps, {
          disabled: dynamicDisable({
            model: getModel(),
            item: unref(props),
          }),
        });
      }
      return useMerge(comProps, filterProps);
    }
  }
  return useMerge(comProps, filterProps);
};

export const useFormItem = (
  getFormSchema: () => Ref<FormItemsSchema[]>,
  updateFormSchema: (_items: FormItemsSchema[]) => void
) => {
  const getSchemaKeys = () => {
    const formSchemas = getFormSchema();
    return Object.entries(unref(formSchemas));
  };
  const appendFields = (
    items: FormItemsSchema | FormItemsSchema[],
    to?: string | boolean
  ) => {
    const formSchemas = getFormSchema();
    const add = (_index: number) => {
      if (isArray(items)) {
        formSchemas.value.splice(_index, 0, ...items);
      } else {
        formSchemas.value.splice(_index, 0, items);
      }
    };
    if (isString(to)) {
      for (const entry of getSchemaKeys()) {
        const [index, value] = entry;
        if (value.prop && value.prop == to) {
          add(+index + 1);
          return;
        }
      }
    } else if (typeof to === 'boolean' && !to) {
      add(0);
    } else {
      add(formSchemas.value.length);
    }
    updateFormSchema(formSchemas.value);
  };
  const deleteField = (prop: string) => {
    if (!prop) return;
    const formSchemas = getFormSchema();
    for (const entry of getSchemaKeys()) {
      const [index, value] = entry;
      if (value.prop && value.prop == prop) {
        formSchemas.value.splice(+index, 1);
        updateFormSchema(formSchemas.value);
        return;
      }
    }
  };
  /**
   * 更新字段属性，如果不存在，将会进行新增
   * @param prop
   * @param item
   * @param to
   */
  const updateOrAppendFields = (
    prop: string,
    item: FormItemsSchema,
    to?: string
  ) => {
    if (!prop) return;
    const formSchemas = getFormSchema();
    const _indexProp = formSchemas.value.findIndex(
      (schema) => schema.prop === prop
    );
    if (_indexProp > -1) {
      const oddSchema = formSchemas.value[_indexProp];
      if (item.prop) {
        Reflect.deleteProperty(item, 'prop');
      }
      formSchemas.value[_indexProp] = useMerge(oddSchema, item);
      updateFormSchema(formSchemas.value);
    } else {
      appendFields(item, to);
    }
  };
  return {
    appendFields,
    updateOrAppendFields,
    deleteField,
  };
};
