import { computed, defineComponent, h, type PropType } from 'vue';
import { ElFormItem, ElRow } from 'element-plus';
import { FormItemsSchema } from '../type';
import { useFormItemProps } from '../hooks/useFormItem';

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
    const createCol = () => {};
    const createRow = () => {
      return h(ElRow);
    };
    return () =>
      h(ElFormItem, {
        ...useFormItemProps(computedItem.value),
      });
  },
});
