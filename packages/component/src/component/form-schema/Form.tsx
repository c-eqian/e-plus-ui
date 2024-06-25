import {
  computed,
  defineComponent,
  h,
  onMounted,
  PropType,
  provide,
  reactive,
  Ref,
  ref,
  toRef,
} from 'vue';
import type { FormSchema, FormContext } from './type';
import { ElForm, type FormInstance } from 'element-plus';
import { isString, useOmit } from 'co-utils-vue';
import FormItem from './components/FormItem';
import { useFormValues } from './hooks/useFormValues';
import { FORM_SCHEMA_MODEL } from './constants';
import { useFormValidate } from './hooks/useFormValidate';

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
  emits: ['registry'],
  setup(props, { emit }) {
    const formProps = computed(() => props.config);
    const items = computed(() => props.config.items);
    const epFormSchemaRef = ref<FormInstance>();
    /**
     * 如果不传入model
     * 内部自动根据表单项创建，使用useFormSchema方法获取值
     */
    const createModel = () => {
      const emptyModel: Record<string, any> = Object.create(null);
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
    const getModel = () => {
      return formModel;
    };
    /**
     * 更新字段值
     * 只有配置prop情况下才会更新
     * @param prop
     * @param value
     */
    const updateFieldValue = (prop: string, value: unknown) => {
      if (prop in formModel.value) {
        formModel.value[prop] = value;
      } else {
        const propValues = items.value
          .map((item) => {
            return item.prop;
          })
          .filter(Boolean);
        if (propValues.includes(prop)) {
          formModel.value[prop] = value;
        }
      }
    };
    provide(FORM_SCHEMA_MODEL, formModel);
    const {
      validate,
      resetFields,
      clearValidate,
      validateField,
      scrollIntoView,
    } = useFormValidate(epFormSchemaRef as Ref<FormInstance>);
    onMounted(() => {
      const { getFieldsValues, setFieldsValues } = useFormValues(
        getModel,
        updateFieldValue
      );
      emit('registry', {
        validate,
        resetFields,
        clearValidate,
        validateField,
        setFieldsValues,
        scrollIntoView,
        getFieldsValues,
      });
    });
    return {
      formModel,
      formProps,
      items,
      epFormSchemaRef,
      validate,
      resetFields,
      clearValidate,
      validateField,
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
        reactive({
          model: this.formModel,
          ref: (_ref: any) => (this.epFormSchemaRef = _ref),
          ...filterProps,
        }),
        {
          default: () =>
            this.items.map((item) => {
              return h(FormItem, {
                item,
                isSearch: isFormValid,
              });
            }),
        }
      );
    };
    return <div>{renderForm()}</div>;
  },
});
