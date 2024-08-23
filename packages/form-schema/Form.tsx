import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  provide,
  reactive,
  Ref,
  ref,
  toRef,
} from 'vue';
import type { FormItemsSchema } from './type';
import { ElForm, ElFormItem, ElRow, type FormInstance } from 'element-plus';
import { isEmpty, isString, useOmit } from '@eqian/utils-vue';
import FormItem from './components/FormItem';
import { useFormValues } from './hooks/useFormValues';
import { FORM_SCHEMA_MODEL } from './constants';
import { useFormValidate } from './hooks/useFormValidate';
import { useFormItem } from './hooks/useFormItem';
import FilterButtons from './components/FilterButtons';
import { FormSchemaProps } from './types/formProps';

export default defineComponent({
  name: 'EpFormSchema',
  props: FormSchemaProps,
  emits: ['registry', 'search', 'reset'],
  setup(props, { emit }) {
    const formProps = computed(() => props.config);
    const items = toRef(props.config.items);
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
    const formModel = toRef(isEmpty(props.model) ? createModel() : props.model);
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
    const getFormSchema = () => {
      return items;
    };
    const updateFormSchema = (_items: FormItemsSchema[]) => {
      items.value = _items;
    };
    provide(FORM_SCHEMA_MODEL, formModel);
    const {
      validate,
      resetFields,
      clearValidate,
      validateField,
      scrollIntoView,
    } = useFormValidate(epFormSchemaRef as Ref<FormInstance>);
    const { appendFields, deleteField } = useFormItem(
      getFormSchema,
      updateFormSchema
    );
    const { getFieldsValues, setFieldsValues, resetFieldsValues } =
      useFormValues(getModel, updateFieldValue);
    const getInstance = () => {
      return getCurrentInstance();
    };
    onMounted(() => {
      emit('registry', getInstance);
    });
    return {
      formModel,
      formProps,
      items,
      emit,
      epFormSchemaRef,
      appendFields,
      setFieldsValues,
      getFieldsValues,
      resetFieldsValues,
      validate,
      scrollIntoView,
      deleteField,
      resetFields,
      clearValidate,
      validateField,
    };
  },
  render() {
    const createRow = () => {
      return h(ElRow, null, () => {
        const isFormValid = !!this.formProps.isSearch;
        const columns = this.formProps.columns;
        const itemNodes = this.items.map((item) => {
          return h(FormItem, {
            item,
            key: item.prop || item.label,
            isSearch: isFormValid,
            columns,
          });
        });
        if (isFormValid) {
          itemNodes.push(
            h(ElFormItem, null, () =>
              h(FilterButtons, {
                onSearch: () => this.emit('search', this.getFieldsValues()),
                onReset: () => {
                  this.resetFieldsValues();
                  this.emit('reset', {});
                },
              })
            )
          );
        }
        return itemNodes;
      });
    };
    /**
     * 渲染表单
     */
    const renderForm = () => {
      const filterProps = useOmit(this.formProps, ['items', 'isSearch']);
      return h(
        ElForm,
        reactive({
          model: this.formModel,
          ref: (_ref: any) => (this.epFormSchemaRef = _ref),
          ...filterProps,
        }),
        () => createRow()
      );
    };
    return <div>{renderForm()}</div>;
  },
});
