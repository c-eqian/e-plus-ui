import {
  computed,
  defineComponent,
  h,
  onMounted,
  PropType,
  provide,
  reactive,
  ref,
  toRef,
  unref,
} from 'vue';
import type { FormSchema, FormContext } from './type';
import {
  ElForm,
  type FormInstance,
  type FormValidateCallback,
} from 'element-plus';
import { isString, useOmit } from 'co-utils-vue';
import FormItem from './components/FormItem';
import type { IFormItemConfig } from '../form/type';
import { useFormValues } from './hooks/useFormValues';

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
  setup(props) {
    const formProps = computed(() => props.config);
    const items = computed(() => props.config.items);
    const epFormSchemaRef = ref<InstanceType<typeof ElForm>>();
    /**
     * 自定义平滑滚动定位到对应的视图
     * @param field
     */
    const scrollIntoView = (field: string) => {
      (epFormSchemaRef.value?.$el as HTMLElement)
        ?.querySelector(`[field="${field}"]`)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
    };
    /**
     * 对整个表单的内容进行验证
     * @param isScrollToField 是否需要定位到第一个错误字段
     * @param callback 自定义回调函数
     */
    const validate = async (
      isScrollToField?: boolean,
      callback?: FormValidateCallback
    ) => {
      if (isScrollToField) {
        try {
          return await epFormSchemaRef.value?.validate(callback);
        } catch (error) {
          const fieldModel = error as Record<string, IFormItemConfig['rules']>;
          // 取出第一个校验失败的数据
          const errId = Object.keys(fieldModel)[0];
          scrollIntoView(errId);
          return Promise.reject(error);
        }
      }
      return epFormSchemaRef.value?.validate(callback);
    };

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
     * 校验表单某个字段验证
     * @param arg
     */
    const validateField: FormInstance['validateField'] = (...arg) => {
      if (!epFormSchemaRef.value) {
        console.warn('表单启用失败');
        return Promise.resolve(true);
      }
      return epFormSchemaRef.value?.validateField(...arg);
    };
    /**
     * 重置表单
     * @param arg
     */
    const resetFields: FormInstance['resetFields'] = (...arg) => {
      if (!epFormSchemaRef.value) {
        console.warn('表单启用失败');
        return Promise.resolve(true);
      }
      return epFormSchemaRef.value?.resetFields(...arg);
    };
    /**
     * 清空某个字段的表单有验证信息
     * @param arg
     */
    const clearValidate: FormInstance['clearValidate'] = (...arg) => {
      return epFormSchemaRef.value?.clearValidate(...arg);
    };
    const getModelValues = () => {
      if (!unref(epFormSchemaRef)) return {};
    };
    /**
     * 是否传入model
     */
    const formModel = toRef(props.model || createModel());
    provide('EPFormSchemaModel', formModel);
    const { getFieldsValues } = useFormValues();
    return {
      formModel,
      formProps,
      items,
      epFormSchemaRef,
      validate,
      resetFields,
      clearValidate,
      getFieldsValues,
      validateField,
    };
  },
  render() {
    onMounted(() => {
      this.$emit('registry', {
        validate: this.validate,
        resetFields: this.resetFields,
        clearValidate: this.clearValidate,
        validateField: this.validateField,
        getFieldsValues: this.getFieldsValues,
      });
    });
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
