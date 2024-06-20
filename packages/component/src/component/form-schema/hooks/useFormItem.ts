import type { FormItemsSchema } from '../type';
import { useOmit } from 'co-utils-vue';
import type { FormItemType } from '../../form/type';

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
  const selectKeyList: FormItemType[] = [
    'select',
    'daterange',
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
  return {
    ...useFilterProps(props),
    placeholder: placeholder || `${getPlaceholder()}`,
  };
};
