import { useMerge, useOmit } from 'co-utils-vue';
import {
  ElCol,
  ElForm,
  ElFormItem,
  ElRow,
  FormValidateCallback,
} from 'element-plus';
import { defineComponent, PropType } from 'vue';

import { IOperationType } from '@/constant';
import { toCamelCased } from '@/hooks/use-utils';

import { FormContext, IZkFormConfig, IZkFormItemConfig } from './type';
import ZkComponent from './ZkComponent.vue';

type FormInstance = InstanceType<typeof ElForm>;
export default defineComponent({
  name: 'ZkForm',
  components: {
    ZkComponent,
  },
  props: {
    model: {
      type: Object as PropType<IZkFormConfig['model']>,
      default: () => {},
    },
    labelWidth: {
      type: String as PropType<IZkFormConfig['labelWidth']>,
      default: '',
    },
    optType: {
      type: String as PropType<IOperationType>,
      default: '',
    },
    formItems: {
      type: Array as PropType<IZkFormItemConfig[]>,
      default: () => [],
    },
  },
  setup(props) {
    const toRefModel = toRef(props.model);
    const toRefOptType = toRef(props.optType);
    const zkFormRef = ref<FormInstance>();
    // 将model注入，供子组件使用
    provide<FormContext>('form-context', {
      model: toRefModel,
      optType: toRefOptType,
    });
    /**
     * 自定义平滑滚动定位到对应的视图
     * @param field
     */
    const scrollIntoView = (field: string) => {
      (zkFormRef.value?.$el as HTMLElement)
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
          return await zkFormRef.value?.validate(callback);
        } catch (error) {
          const fieldModel = error as Record<
            string,
            IZkFormItemConfig['rules']
          >;
          // 取出第一个校验失败的数据
          const errId = Object.keys(fieldModel)[0];
          scrollIntoView(errId);
          // scrollToField(errId);
          return Promise.reject(error);
        }
      }
      return zkFormRef.value?.validate(callback);
    };
    /**
     * 校验表单某个字段验证
     * @param arg
     */
    const validateField: FormInstance['validateField'] = (...arg) => {
      if (!zkFormRef.value) {
        console.warn('表单启用失败');
        return Promise.resolve(true);
      }
      return zkFormRef.value?.validateField(...arg);
    };
    /**
     * 重置表单
     * @param arg
     */
    const resetFields: FormInstance['resetFields'] = (...arg) => {
      if (!zkFormRef.value) console.warn('表单启用失败');
      return zkFormRef.value?.resetFields(...arg);
    };
    /**
     * 清空某个字段的表单有验证信息
     * @param arg
     */
    const clearValidate: FormInstance['clearValidate'] = (...arg) => {
      return zkFormRef.value?.clearValidate(...arg);
    };
    watchEffect(() => {
      if (!(props.formItems.length < 1)) {
        clearValidate();
      }
    });
    return {
      zkFormRef,
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
    const getSlots = (item: IZkFormItemConfig) => {
      return {
        default: item
          ? () => {
              /**
               * 有插槽, 默认使用插槽
               */
              if (item.slot || this.$slots[item.prop!]) {
                return this.$slots[item.slot || item.prop!]?.({
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
                  <ZkComponent
                    name={toCamelCased(`Zk-${item.type}`)}
                    item={{ ...item }}
                    key={item.type}
                  ></ZkComponent>
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
    const handleFormItemRule = (item: IZkFormItemConfig) => {
      if (typeof item.rules === 'boolean') {
        return {
          required: item.rules,
          message: `${item.label} 为必填项`,
          trigger: 'blur',
        };
      }
      return item.rules;
    };
    /**
     * 渲染表单组件
     */
    const renderFormItem = () => {
      if (!this.formItems.length) return null;
      return this.formItems.map((formItem) => {
        let span = {};
        if (!formItem.col?.span) {
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
        <ElForm ref="zkFormRef" model={this.toRefModel} {...setFormProps()}>
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
