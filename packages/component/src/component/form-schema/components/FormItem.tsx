import {
  computed,
  type DefineComponent,
  defineComponent,
  h,
  type PropType,
} from 'vue';
import { ElCol, ElFormItem, ElRow } from 'element-plus';
import { FormItemsSchema } from '../type';
import { useFormItemProps } from '../hooks/useFormItem';
import { useContextProps } from '../hooks/useContextProps';
import { componentsMap } from './index';
import { isString } from 'co-utils-vue';

export default defineComponent({
  name: 'EpFormItem',
  props: {
    item: {
      type: Object as PropType<FormItemsSchema>,
      default: () => ({}),
    },
  },
  setup(props, ctx) {
    const computedItem = computed(() => props.item);
    const formModel = useContextProps();
    const createCol = () => {
      const { type, ..._props } = computedItem.value;
      if (isString(type) && componentsMap.has(type)) {
        const com = componentsMap.get(type) as DefineComponent;
        return h(ElCol, { ...useFormItemProps(computedItem.value) }, [
          h(com, {
            modelValue: formModel.value[_props.prop],
            'onUpdate:modelValue': (val: any) =>
              (formModel.value[_props.prop] = val),
          }),
        ]);
      }
      return null;
    };
    const createRow = () => {
      return h(ElRow, {}, [createCol()]);
    };
    return () =>
      h(
        ElFormItem,
        {
          ...useFormItemProps(computedItem.value),
        },
        [createRow()]
      );
  },
});
