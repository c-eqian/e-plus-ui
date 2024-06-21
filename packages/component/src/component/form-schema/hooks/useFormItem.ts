import type { FormItemsSchema, FormSchemaType } from '../type';
import { useMerge, useOmit } from 'co-utils-vue';

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
    'rules',
  ];
  return useOmit(props, deleteProps);
};
/**
 * 获取组件参数
 * @param props
 */
export const useFormItemProps = (props: FormItemsSchema) => {
  const { placeholder, type, label } = props;
  const selectKeyList: FormSchemaType[] = [
    'select',
    'date-range',
    'date-time-range',
    'date-time',
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
  });
};
