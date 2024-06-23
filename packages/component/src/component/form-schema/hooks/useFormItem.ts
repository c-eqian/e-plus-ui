import type { FormItemsSchema, FormSchemaType, FormItemRules } from '../type';
import {
  isArray,
  isFunction,
  isNumber,
  useMerge,
  useOmit,
  usePick,
} from 'co-utils-vue';

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
 */
export const useColProps = (props: FormItemsSchema) => {
  const DEFAULT = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 };
  const { col } = props;
  if (isNumber(col)) {
    return {
      span: col,
    };
  }
  return useMerge({}, usePick(props, ['col']), DEFAULT);
};
/**
 * 获取表单参数
 * @param props
 * @param model
 */
export const useFormItemProps = (props: FormItemsSchema, model: any) => {
  const { rules, prop, label } = props;
  const handleValidatorFn = (_rule: FormItemRules) => {
    if (isFunction(_rule.validatorFn)) {
      return {
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
 */
export const useFormProps = (props: FormItemsSchema) => {
  const { placeholder, type, label } = props;
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
  return useMerge(useFilterProps(props), {
    placeholder: placeholder || `${getPlaceholder()}`,
    ...props.componentProps,
  });
};
