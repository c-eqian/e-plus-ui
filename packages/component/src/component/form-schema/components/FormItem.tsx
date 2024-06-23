import {
  computed,
  type DefineComponent,
  defineComponent,
  h,
  inject,
  type PropType,
  Ref,
} from 'vue';
import { ElCol, ElFormItem, ElRow } from 'element-plus';
import type { FormItemsSchema, FormSchemaType } from '../type';
import {
  useColProps,
  useFormItemProps,
  useFormProps,
} from '../hooks/useFormItem';
import { componentsMap } from './index';
import { isFunction, isString } from 'co-utils-vue';

export default defineComponent({
  name: 'EpFormItem',
  props: {
    item: {
      type: Object as PropType<FormItemsSchema>,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    const computedItem = computed(() => props.item);
    const { type, render, slotKey, ..._props } = computedItem.value;
    const formModel = inject<Ref<any>>('EPFormSchema', {} as any);
    const getSlots = () => {
      //   如果使用插槽
      if (slotKey || slots[_props.prop!]) {
        return slots[slotKey || _props.prop!]?.({
          item: computedItem,
          model: formModel,
        });
      }
      if (isFunction(render)) {
        return render({
          item: computedItem,
          model: formModel,
        });
      }
      if (isString(type) && componentsMap.has(type as FormSchemaType)) {
        const com = componentsMap.get(
          type as FormSchemaType
        ) as DefineComponent;
        return h(com, {
          modelValue: formModel.value[_props.prop],
          'onUpdate:modelValue': (val: any) => {
            formModel.value[_props.prop] = val;
          },
          ...useFormProps(computedItem.value),
        });
      }
      return null;
    };
    const createCol = () => {
      return h(
        ElCol,
        { ...useColProps(computedItem.value) },
        {
          default: () =>
            h(
              ElFormItem,
              {
                ...useFormItemProps(computedItem.value, formModel),
              },
              {
                default: () => getSlots(),
              }
            ),
        }
      );
    };
    const createRow = () => {
      return h(ElRow, null, {
        default: () => createCol(),
      });
    };
    return () => createRow();
  },
});
