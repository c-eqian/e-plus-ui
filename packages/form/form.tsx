import { useMerge, useOmit, isArray, isFunction } from 'co-utils-vue';
import {
  ElCol,
  ElForm,
  ElFormItem,
  ElRow,
  type FormValidateCallback,
} from 'element-plus';
import {
  defineComponent,
  type PropType,
  provide,
  ref,
  toRef,
  watchEffect,
} from 'vue';

import type {
  FormContext,
  FormItemRules,
  IFormConfig,
  IFormItemConfig,
} from './type';
import EpComponent from './EpComponent.vue';
import { camelCase } from '../utils';

type FormInstance = InstanceType<typeof ElForm>;
export default defineComponent({
  name: 'EpForm',
  components: {
    EpComponent,
  },
  props: {
    model: {
      type: Object as PropType<IFormConfig['model']>,
      default: () => {},
    },
    labelWidth: {
      type: String as PropType<IFormConfig['labelWidth']>,
      default: '',
    },
    formItems: {
      type: Array as PropType<IFormItemConfig[]>,
      default: () => [],
    },
  },
  setup(props) {
    const toRefModel = toRef(props.model);
    const epFormRef = ref<FormInstance>();
    // 将model注入，供子组件使用
    provide<FormContext>('EP-FORM-CONTEXT', {
      model: toRefModel,
    });
    /**
     * 自定义平滑滚动定位到对应的视图
     * @param field
     */
    const scrollIntoView = (field: string) => {
      (epFormRef.value?.$el as HTMLElement)
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
          return await epFormRef.value?.validate(callback);
        } catch (error) {
          const fieldModel = error as Record<string, IFormItemConfig['rules']>;
          // 取出第一个校验失败的数据
          const errId = Object.keys(fieldModel)[0];
          scrollIntoView(errId);
          // scrollToField(errId);
          return Promise.reject(error);
        }
      }
      return epFormRef.value?.validate(callback);
    };
    /**
     * 校验表单某个字段验证
     * @param arg
     */
    const validateField: FormInstance['validateField'] = (...arg) => {
      if (!epFormRef.value) {
        console.warn('表单启用失败');
        return Promise.resolve(true);
      }
      return epFormRef.value?.validateField(...arg);
    };
    /**
     * 重置表单
     * @param arg
     */
    const resetFields: FormInstance['resetFields'] = (...arg) => {
      if (!epFormRef.value) console.warn('表单启用失败');
      return epFormRef.value?.resetFields(...arg);
    };
    /**
     * 清空某个字段的表单有验证信息
     * @param arg
     */
    const clearValidate: FormInstance['clearValidate'] = (...arg) => {
      return epFormRef.value?.clearValidate(...arg);
    };
    watchEffect(() => {
      if (!(props.formItems.length < 1)) {
        clearValidate();
      }
    });
    return {
      epFormRef,
      toRefModel,
      validate,
      resetFields,
      clearValidate,
      validateField,
    };
  },
  render() {
    /**
     * 获取插槽
     * @param item
     */
    const getSlots = (item: IFormItemConfig) => {
      return {
        default: item
          ? () => {
              /**
               * 有插槽, 默认使用插槽
               */
              if (item.slotKey || this.$slots[item.prop!]) {
                return this.$slots[item.slotKey || item.prop!]?.({
                  item,
                  model: this.toRefModel,
                });
              }
              /**
               * 使用 type 模板
               * 在tsx中使用component，似乎不支持，需要单独提取到模板组件中
               */
              if (item.type) {
                return (
                  <EpComponent
                    name={camelCase(`Ep-form-${item.type}`)}
                    item={{ ...item }}
                    key={item.type}
                  ></EpComponent>
                );
              }
              return null;
            }
          : undefined,
      };
    };
    const setFormProps = () => {
      return useMerge(
        useOmit(this.$props, ['formItems', 'model']),
        this.$attrs
      );
    };
    const handleValidatorFn = (_rule: FormItemRules) => {
      if (isFunction(_rule.validatorFn)) {
        return {
          ...useOmit(_rule, ['validator']),
          validator: _rule.validatorFn(this.toRefModel),
        };
      }
      return _rule;
    };
    const handleFormItemRule = (item: IFormItemConfig) => {
      if (typeof item.rules === 'boolean') {
        return {
          required: item.rules,
          message: `${item.label} 为必填项`,
          trigger: 'blur',
        };
      }
      if (isArray(item.rules)) {
        return item.rules.map((_rule) => handleValidatorFn(_rule));
      }
      return item.rules ? handleValidatorFn(item.rules) : item.rules;
    };
    /**
     * 渲染表单组件
     */
    const renderFormItem = () => {
      if (!this.formItems.length) return null;
      return this.formItems.map((formItem) => {
        let span = {};
        if (typeof formItem.col !== 'number' && !formItem.col?.span) {
          span = useMerge(
            { xs: 24, sm: 12, md: 12, lg: 8, xl: 8 },
            formItem.col as any
          );
        } else {
          span = useMerge(span, formItem.col as any);
        }
        return (
          <ElCol {...span}>
            <ElFormItem
              {...{
                field: formItem.prop,
              }}
              key={formItem.prop}
              label={formItem.label}
              prop={formItem.prop}
              rules={handleFormItemRule(formItem)}
              labelWidth={formItem.width}
              v-slots={getSlots(formItem)}
            ></ElFormItem>
          </ElCol>
        );
      });
    };
    return (
      <section>
        <ElForm ref="epFormRef" model={this.toRefModel} {...setFormProps()}>
          <ElRow>{renderFormItem()}</ElRow>
          {this.$slots.default ? (
            <ElRow>
              <ElCol>{this.$slots.default?.()}</ElCol>
            </ElRow>
          ) : null}
        </ElForm>
      </section>
    );
  },
});
