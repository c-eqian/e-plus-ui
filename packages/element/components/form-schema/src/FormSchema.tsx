import { isEmpty, isFunction, isString, useOmit } from '@eqian/utils-vue';
import { ElCol, ElForm, ElRow, type FormInstance } from 'element-plus';
import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  provide,
  reactive,
  ref,
  toRef,
  type PropType,
  type Ref,
  type SlotsType,
  type VNode
} from 'vue';
import { FORM_SCHEMA_APP_INSTANCE, FORM_SCHEMA_LISTENER, FORM_SCHEMA_MODEL } from './constants';
import FormItem from './FormItem';
import { useFormItem } from './hooks/useFormItem';
import { useFormValidate } from './hooks/useFormValidate';
import { useFormValues } from './hooks/useFormValues';
import { useItemsProps } from './hooks/useItemsProps';
import FilterButtons from './QueryButtons.vue';
import type { FormContext, FormItemsSchema, FormSchema, FormSchemaSlots } from './type';

export default defineComponent({
  name: 'EpFormSchema',
  props: {
    model: {
      type: Object as PropType<FormContext['model']>,
      default: () => ({})
    },
    config: {
      type: Object as PropType<FormSchema>,
      default: () => {}
    }
  },
  emits: ['registry', 'search', 'reset'],
  slots: Object as SlotsType<FormSchemaSlots>,
  setup(props, { emit }) {
    const formProps = computed(() => props.config);
    const items: any = toRef(props.config?.items ?? []);
    const { itemsCaches, configItems, renderItems, needToggle } = useItemsProps(items, formProps);
    const epFormSchemaRef = ref<FormInstance>();
    const listenerEvents = ref();
    const isToggle = ref(false);
    /**
     * 如果不传入model
     * 内部自动根据表单项创建，使用useFormSchema方法获取值
     * 如果传入默认值，重置时，使用该默认值
     */
    const createModel = () => {
      const _model = isEmpty(props.model) ? Object.create(null) : props.model;
      items.value?.forEach((item: any) => {
        if (item.prop && isString(item.prop)) {
          _model[item.prop] = _model[item.prop] ? _model[item.prop] : (item.defaultValue ?? '');
        }
      });
      return _model;
    };
    /**
     * 是否传入model
     */
    const formModel = toRef(createModel());
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
          .map((item: any) => {
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
    const updateSearchSchema = (isToggle: boolean) => {
      renderItems.value = isToggle ? configItems.value : itemsCaches.value;
    };
    const getInstance = () => {
      return getCurrentInstance();
    };
    provide(FORM_SCHEMA_MODEL, formModel);
    provide(FORM_SCHEMA_LISTENER, listenerEvents);
    provide(FORM_SCHEMA_APP_INSTANCE, getInstance());
    const { validate, resetFields, clearValidate, validateField, scrollIntoView } = useFormValidate(
      epFormSchemaRef as Ref<FormInstance>
    );
    const { appendFields, deleteField, updateOrAppendFields } = useFormItem(
      getFormSchema,
      updateFormSchema
    );
    const { getFieldsValues, setFieldsValues, resetFieldsValues } = useFormValues(
      getModel,
      updateFieldValue
    );
    const listener = (args: Record<string, any>) => {
      listenerEvents.value = args;
    };
    onMounted(() => {
      emit('registry', getInstance);
    });
    return {
      formModel,
      formProps,
      renderItems,
      needToggle,
      isToggle,
      emit,
      epFormSchemaRef,
      updateSearchSchema,
      updateOrAppendFields,
      appendFields,
      setFieldsValues,
      getFieldsValues,
      resetFieldsValues,
      validate,
      scrollIntoView,
      deleteField,
      getModel,
      createModel,
      listener,
      resetFields,
      clearValidate,
      validateField
    };
  },
  render() {
    /**
     * 需要动态渲染的
     */
    const renderDynamicShow = (item: FormItemsSchema) => {
      if (isFunction(item.componentProps?.dynamicShow)) {
        return item.componentProps?.dynamicShow({
          model: this.getModel(),
          item
        });
      }
      return true;
    };
    const createItemRender = (isSearch: boolean, inlineSearch: boolean) => {
      return h(
        ElRow,
        {
          class: 'ep-form-schema-row ep-flex'
        },
        () => {
          const columns = this.formProps.columns;
          const colSpan = this.formProps.colSpan;
          const itemsNode: any[] = this.renderItems.map((item: FormItemsSchema) => {
            return renderDynamicShow(item)
              ? h(
                  FormItem,
                  {
                    item,
                    key: item.prop || item.label,
                    colSpan,
                    isSearch,
                    columns
                  },
                  {
                    ...this.$slots
                  }
                )
              : undefined;
          });
          if (isSearch && inlineSearch) {
            itemsNode.push(
              <ElCol class={'!ep-flex-1 ep-justify-end'}>{createRenderFilter()}</ElCol>
            );
          }
          return itemsNode;
        }
      );
    };
    const createRenderFilter = () => {
      return h(
        FilterButtons,
        {
          needToggle: this.needToggle,
          onSearch: () => this.emit('search', this.getFieldsValues()),
          onReset: () => {
            this.resetFieldsValues();
            this.formModel = this.createModel();
            this.emit('reset', this.formModel);
          },
          onToggle: (v: boolean) => {
            this.isToggle = v;
            this.updateSearchSchema(v);
          }
        },
        {
          ...this.$slots
        }
      );
    };
    const createRow = () => {
      const isSearch = !!this.formProps.isSearch;
      const inlineSearch =
        this.formProps.inlineSearch === void 0 ? true : !!this.formProps.inlineSearch;
      const renderNodes: VNode[] = [];
      const formItemsRender = createItemRender(isSearch, inlineSearch);
      renderNodes.push(formItemsRender);
      // 处理查询
      if (isSearch && !inlineSearch) {
        const row = (
          <ElRow>
            <ElCol class={'!ep-flex ep-justify-end ep-w-100%'}>{createRenderFilter()}</ElCol>
          </ElRow>
        );
        renderNodes.push(row);
      }
      return renderNodes;
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
          ...filterProps
        }),
        () => createRow()
      );
    };
    return <div>{renderForm()}</div>;
  }
});
