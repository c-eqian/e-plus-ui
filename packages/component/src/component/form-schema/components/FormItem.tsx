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
import { FormItemsSchema } from '../type';
import {
  useColProps,
  useFormItemProps,
  useFormProps,
} from '../hooks/useFormItem';
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
    const { type, ..._props } = computedItem.value;
    const formModel = inject<Ref<any>>('EPFormSchema', {} as any);
    const createCol = () => {
      if (isString(type) && componentsMap.has(type)) {
        const com = componentsMap.get(type) as DefineComponent;
        return h(
          ElCol,
          { ...useColProps(computedItem.value) },
          {
            default: () =>
              h(com, {
                modelValue: formModel.value[_props.prop],
                'onUpdate:modelValue': (val: any) => {
                  formModel.value[_props.prop] = val;
                },
                ...useFormProps(computedItem.value),
              }),
          }
        );
      }
      return null;
    };
    const createRow = () => {
      return h(ElRow, null, {
        default: () => createCol(),
      });
    };
    return () =>
      h(
        ElFormItem,
        {
          ...useFormItemProps(computedItem.value, formModel),
        },
        {
          default: () => createRow(),
        }
      );
  },
});
