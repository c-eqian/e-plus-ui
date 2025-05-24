import { isArray, isEmpty, isFunction, isObject, isString, useCamelize } from '@eqian/utils-vue';
import { ElCol, ElFormItem } from 'element-plus';
import {
  computed,
  defineComponent,
  h,
  inject,
  ref,
  unref,
  type Component,
  type ComponentInternalInstance,
  type DefineComponent,
  type PropType,
  type Ref
} from 'vue';
import { componentsMap } from './componentsMap';
import {
  FORM_SCHEMA_APP_INSTANCE,
  FORM_SCHEMA_LISTENER,
  FORM_SCHEMA_MODEL,
  GROUP_LIST
} from './constants';
import GroupComponent from './GroupBy';
import { useColProps, useFormItemProps, useFormProps } from './hooks/useFormItem';
import type { FormItemsSchema, FormSchemaType, IGroupOptions } from './type';
export default defineComponent({
  name: 'FormItem',
  props: {
    item: {
      type: Object as PropType<FormItemsSchema>,
      default: () => ({})
    },
    columns: {
      type: Number,
      default: 3
    },
    colSpan: {
      type: Number,
      default: 8
    },
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const computedItem = computed(() => props.item);
    const isSearch = computed(() => props.isSearch);
    const columns = computed(() => props.columns);
    const { type, globalComponent, render, slotKey, ..._props } = computedItem.value;
    const formModel = inject<Ref<any>>(FORM_SCHEMA_MODEL, {} as any);
    const listener = inject<Ref<any>>(FORM_SCHEMA_LISTENER, {} as any);
    const appInstance = inject<ComponentInternalInstance>(
      FORM_SCHEMA_APP_INSTANCE,
      {} as ComponentInternalInstance
    );
    const getComponentSlots = () => {
      if (computedItem.value?.componentProps?.slots) {
        return computedItem.value?.componentProps?.slots;
      }
      return {} as any;
    };
    const getModel = () => {
      return formModel;
    };
    const getListenerEvents = (item: FormItemsSchema) => {
      const collector: Record<string, any> = {};
      /**
       * 事件应以onXX
       */
      if (listener.value && isObject(listener.value)) {
        const entries = Object.entries(listener.value);
        for (const [key, f] of entries) {
          if (isFunction(f)) {
            collector[key] = (...args: any) => {
              f(
                {
                  item,
                  model: formModel
                },
                ...args
              );
            };
          }
        }
      }
      return collector;
    };
    const options = ref<IGroupOptions[]>([]);
    /**
     * 渲染分组组件
     * @param _type
     * @param com
     */
    const groupBaseRender = (_type: FormSchemaType, com: any) => {
      const optionsOrAPI = computedItem.value.componentProps?.groupOptions;
      if (optionsOrAPI && isArray(optionsOrAPI)) {
        options.value = optionsOrAPI;
      } else if (optionsOrAPI && !isArray(optionsOrAPI) && options.value.length === 0) {
        optionsOrAPI.api(optionsOrAPI.params).then(res => {
          options.value = res;
        });
      }
      return h(
        com,
        {
          modelValue: formModel.value[_props.prop],
          'onUpdate:modelValue': (val: any) => {
            formModel.value[_props.prop] = val;
          },
          ...useFormProps(computedItem, getModel),
          ...getListenerEvents(computedItem.value)
        },
        {
          default: () =>
            h(GroupComponent, {
              options: options.value,
              componentKey: _type
            })
        }
      );
    };
    const getColSlots = () => {
      //   如果使用插槽
      if (slotKey || (_props.prop && slots[_props.prop])) {
        return slots[slotKey || _props.prop!]?.({
          item: computedItem,
          model: formModel
        });
      }
      if (isFunction(render)) {
        return render?.({
          item: unref(computedItem),
          model: formModel
        });
      }
      const renderComponent = (com: any) => {
        if (
          GROUP_LIST.includes(type as FormSchemaType) ||
          (type === 'select' && !isEmpty(_props.componentProps?.groupOptions))
        ) {
          return groupBaseRender(type as FormSchemaType, com);
        }
        return h(
          com,
          {
            modelValue: formModel.value[_props.prop],
            'onUpdate:modelValue': (val: any) => {
              formModel.value[_props.prop] = val;
            },
            ...useFormProps(computedItem, getModel),
            ...getListenerEvents(computedItem.value)
          },
          { ...getComponentSlots() }
        );
      };
      if (isString(type) && componentsMap.has(type as FormSchemaType)) {
        const com = componentsMap.get(type as FormSchemaType) as DefineComponent;
        return renderComponent(com);
      }
      if (!isEmpty(globalComponent)) {
        const components = (appInstance?.appContext?.components ?? {}) as Record<string, Component>;
        const _components =
          components[globalComponent!] ?? components[useCamelize(globalComponent!, true)];
        if (!_components) {
          console.warn(
            `请确保组件：${globalComponent}已被Vue应用实列中全局注册，或组件名称是否正确`
          );
          return null;
        }
        return renderComponent(_components);
      }
      return null;
    };
    const createCol = () => {
      return h(
        ElCol,
        { ...useColProps(computedItem.value, columns, props.colSpan) },
        {
          default: () =>
            h(
              ElFormItem,
              {
                ...useFormItemProps(computedItem.value, formModel, isSearch.value)
              },
              {
                default: () => getColSlots()
              }
            )
        }
      );
    };
    return () => createCol();
  }
});
