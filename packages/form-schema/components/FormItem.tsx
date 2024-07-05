import {
  computed,
  type DefineComponent,
  defineComponent,
  h,
  inject,
  type PropType,
  type Ref,
  type Slot,
  unref,
} from 'vue';
import { ElCol, ElFormItem } from 'element-plus';
import type { FormItemsSchema, FormSchemaType } from '../type';
import {
  useColProps,
  useFormItemProps,
  useFormProps,
} from '../hooks/useFormItem';
import { componentsMap } from './index';
import { isFunction, isString } from 'co-utils-vue';
import { FORM_SCHEMA_MODEL } from '../constants';

export default defineComponent({
  name: 'EpFormItem',
  props: {
    item: {
      type: Object as PropType<FormItemsSchema>,
      default: () => ({}),
    },
    columns: {
      type: Number,
      default: 3,
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const computedItem = computed(() => props.item);
    const isSearch = computed(() => props.isSearch);
    const columns = computed(() => props.columns);
    const { type, render, slotKey, ..._props } = computedItem.value;
    const formModel = inject<Ref<any>>(FORM_SCHEMA_MODEL, {} as any);
    const getComponentSlots = () => {
      if (computedItem.value?.componentProps?.slots) {
        return computedItem.value?.componentProps?.slots;
      }
      return {} as Slot;
    };
    const getModel = () => {
      return formModel;
    };
    const getColSlots = () => {
      //   如果使用插槽
      if (slotKey || slots[_props.prop!]) {
        return slots[slotKey || _props.prop!]?.({
          item: computedItem,
          model: formModel,
        });
      }
      if (isFunction(render)) {
        return render({
          item: unref(computedItem),
          model: formModel,
        });
      }
      if (isString(type) && componentsMap.has(type as FormSchemaType)) {
        const com = componentsMap.get(
          type as FormSchemaType
        ) as DefineComponent;
        return h(
          com,
          {
            modelValue: formModel.value[_props.prop],
            'onUpdate:modelValue': (val: any) => {
              formModel.value[_props.prop] = val;
            },
            ...useFormProps(computedItem, getModel),
          },
          { ...getComponentSlots() }
        );
      }
      return null;
    };
    const createCol = () => {
      return h(
        ElCol,
        { ...useColProps(computedItem.value, columns) },
        {
          default: () =>
            h(
              ElFormItem,
              {
                ...useFormItemProps(
                  computedItem.value,
                  formModel,
                  isSearch.value
                ),
              },
              {
                default: () => getColSlots(),
              }
            ),
        }
      );
    };
    return () => createCol();
  },
});
