import { computed, defineComponent, h, PropType, provide, toRef } from 'vue';
import type { FormSchema, FormContext } from './type';
import { ElForm } from 'element-plus';
import { isString, useOmit } from 'co-utils-vue';
import FormItem from './components/FormItem';

export default defineComponent({
  name: 'EpFormSchema',
  props: {
    model: {
      type: Object as PropType<FormContext['model']>,
      default: () => {},
    },
    config: {
      type: Object as PropType<FormSchema>,
      default: () => {},
    },
  },
  setup(props) {
    const formProps = computed(() => props.config);
    const items = computed(() => props.config.items);
    /**
     * 如果不传入model
     * 内部自动根据表单项创建，使用useFormSchema方法获取值
     */
    const createModel = () => {
      const emptyModel = Object.create(null);
      items.value.forEach((item) => {
        if (isString(item.prop)) {
          emptyModel[item.prop] = item.defaultValue ?? '';
        }
      });
      return emptyModel;
    };
    /**
     * 是否传入model
     */
    const formModel = toRef(props.model || createModel());
    provide('EPFormSchema', formModel);
    return {
      formModel,
      formProps,
      items,
    };
  },
  render() {
    /**
     * 渲染表单
     */
    const renderForm = () => {
      const isFormValid = !!this.formProps.isSearch;
      const filterProps = useOmit(this.formProps, ['items', 'isSearch']);
      return h(
        ElForm,
        {
          model: this.formModel,
          ...filterProps,
        },
        {
          default: () =>
            this.items.map((item) => {
              return h(FormItem, {
                item,
              });
            }),
        }
      );
    };
    return <div>{renderForm()}</div>;
  },
});
