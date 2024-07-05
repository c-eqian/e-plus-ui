import {
  useFormatDate,
  useLabelByVal,
  useOmit,
  usePick,
  isFunction,
} from 'co-utils-vue';
import { ElButton, ElFormItem, ElTableColumn, ElTag } from 'element-plus';
import { defineComponent, h, inject, type PropType, unref } from 'vue';

import CopyText from '../../copy-text/index.vue';
import type { ITableColumnConfig, TagType, TRender } from '../type';
import Buttons from './Buttons';
export const TableColumnProps = {
  columnItem: {
    type: Object as PropType<ITableColumnConfig>,
    default: () => ({} as ITableColumnConfig),
  },
  columns: {
    type: Object as PropType<ITableColumnConfig[]>,
    default: () => [] as ITableColumnConfig[],
  },
  /**
   * 是否使用表单
   */
  useFormValidation: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'default',
  },
  /**
   * 以下使用el-table-column几个参数
   */
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
};

export default defineComponent({
  name: 'EpTableColumn',
  props: TableColumnProps,
  emits: ['click-row-view'],
  setup() {
    const eventListeners: any = inject('EVENT-CLICKED');
    return { eventListeners };
  },
  render() {
    const { columnItem, useFormValidation, columns } = this.$props;
    /**
     * 渲染表格操作
     * @param item
     * @param row
     * @param $index
     */
    const renderOperation = (
      item: ITableColumnConfig,
      row: any,
      $index: number
    ) => {
      if (item.type === 'operation' || item.fixed) {
        if (!item.operationType) {
          item.operationType = ['add', 'edit', 'view', 'delete'];
        }
        if (!item.fixed) item.fixed = !!item;
        if (!item.width) item.width = '200';
        return h(Buttons, {
          row,
          column: item,
          index: $index,
        });
      }
      return null;
    };
    /**
     * 获取插槽
     * @param item
     */
    const getSlots = (item: ITableColumnConfig) => {
      // 检测是否开启表单校验
      const hasRules =
        useFormValidation &&
        !(item.children?.length || !item.prop || !item?.rules);
      /**
       * 表单渲染
       * @param index
       * @param render
       * @param row
       */
      const formItemRender = (
        index: number,
        render: () => any,
        row: any = null
      ) => {
        if (item.isCopy) {
          return (
            <CopyText>
              <ElButton
                link
                type="primary"
                onClick={() => this.eventListeners.view?.(row, index)}
              >
                {render()}
              </ElButton>
            </CopyText>
          );
        }
        if (!hasRules) {
          return render();
        }

        const formItemProp = Object.create(null);
        if (this.useFormValidation && item.rules) {
          const field = `data[${index}].${item.prop as string}`;
          if (typeof item.rules === 'boolean') {
            formItemProp.rules = {
              required: item.rules,
              message: `${item.label} 为必填项`,
              trigger: 'blur',
            };
          } else {
            formItemProp.rules = item?.rules;
          }
          // 定义一个检验字段标识，后面使用定位到首个校验错误字段时用到
          formItemProp.field = field;
          formItemProp.prop = field;
        }

        return (
          <ElFormItem
            {...formItemProp}
            key={item.prop}
            class="column-form-item__mini"
          >
            {render()}
          </ElFormItem>
        );
      };
      /**
       * 根据数据下标，筛选出有需要校验的字段prop
       * @param index
       */
      const filterPropValidator = (index: number) => {
        // 筛选配置有rules 并且开启表单模式
        if (this.$props.useFormValidation) {
          const propsHasRules = columns.filter(
            (columnItem) => columnItem.rules
          );
          return propsHasRules
            ? propsHasRules.map(
                (propRulesItem) => `data[${index}].${propRulesItem.prop}`
              )
            : [];
        }
        return [];
      };
      /**
       * 处理深层嵌套
       * e.g user.name
       * @param row
       * @param prop
       */
      const deepObjectValue = (row: ITableColumnConfig, prop: string): any => {
        if (!prop) return prop;
        const keys = prop.split('.');
        return keys.reduce((obj, k) => (obj || {})[k], row);
      };
      return {
        /**
         * 自定义表头
         */
        header: (() => {
          if (
            this.$slots.header ||
            (item.headerRender && isFunction(item.headerRender))
          ) {
            const headerRender = item!.headerRender as TRender;
            return (scoped: any) =>
              headerRender({
                row: scoped.row,
                index: scoped.$index,
                column: { ...item },
              });
          }
          if (hasRules) {
            const isRequired = (() => {
              if (Array.isArray(item.rules)) {
                return item.rules?.some((_i) => _i.required);
              }
              if (typeof item.rules === 'boolean') return item.rules;
              return !!item.rules?.required;
            })();
            return () =>
              h(
                'div',
                {
                  class: {
                    required: isRequired && this.useFormValidation,
                  },
                },
                item.label
              );
          }
          return undefined;
        })(),
        default:
          !item.type ||
          ['operation', 'expand'].includes(item.type) ||
          item.dictKey
            ? ({ row, $index }: any) => {
                if ($index < 0 && !item.render)
                  return deepObjectValue(row, item.prop!);
                return formItemRender(
                  $index,
                  () => {
                    const renderCtx = () => {
                      /**
                       * 自定渲染器，优先级最高
                       */
                      if (isFunction(item.render)) {
                        return item.render({
                          row,
                          index: $index,
                          column: { ...item },
                          // 自定义返回一个检验器的数据键
                          validator: filterPropValidator($index),
                        });
                      }
                      if (item?.children) {
                        // eslint-disable-next-line.md no-use-before-define
                        return item.children.map((it) => columnRender(it));
                      }
                      /**
                       * 校验是否是表格的操作
                       */
                      if (item.fixed || item.type === 'operation') {
                        // 是操作，但是没有自定义插槽, 使用内置操作
                        if (!item.slotKey)
                          return renderOperation(item, row, $index);
                      }
                      if (
                        this.$slots[item.slotKey as string] ||
                        this.$slots[item.prop as string]
                      ) {
                        /**
                         * 默认先使用自定义的插槽名称
                         * slotKey相当于prop的值别名
                         * 如果没有默认值，使用prop的值
                         */
                        return (
                          this.$slots[item.slotKey as string] ||
                          this.$slots[item.prop as string]
                        )?.({
                          row,
                          $index,
                          index: $index,
                          column: { ...item },
                          // 自定义返回一个检验器的数据键
                          validator: filterPropValidator($index),
                          value: deepObjectValue(row, item.prop!),
                          propKey: item.prop,
                        });
                      }
                      /**
                       * 有字典，使用字典组件
                       */
                      /**
                       * 有枚举
                       * dictKey 优先级高于 dictEnum
                       */
                      if (item.dictEnum) {
                        const tagType: TagType = useLabelByVal(
                          item.dictEnum,
                          deepObjectValue(row, item.prop!),
                          {
                            labelKey: 'tagType',
                          }
                        );
                        if (tagType) {
                          return (
                            <ElTag type={tagType}>
                              {useLabelByVal(
                                item.dictEnum,
                                deepObjectValue(row, item.prop!)
                              )}
                            </ElTag>
                          );
                        }
                        return useLabelByVal(
                          item.dictEnum,
                          deepObjectValue(row, item.prop!)
                        );
                      }
                      /**
                       * 格式化数据
                       */
                      if (typeof item.format === 'function') {
                        return item.format(row);
                      }
                      if (item.isFormatTime) {
                        return useFormatDate(
                          deepObjectValue(row, item.prop!) || '',
                          'yyyy-MM-dd HH:mm:ss'
                        );
                      }
                      const _res = deepObjectValue(row, item.prop!);
                      return !_res && _res !== 0 ? '-' : _res;
                    };
                    return renderCtx();
                  },
                  row
                );
              }
            : undefined,
      };
    };
    /**
     * 渲染column
     * @param item
     */
    const columnRender = (item: ITableColumnConfig) => {
      let _columnItemOpts = {} as any;
      if (item) {
        _columnItemOpts = { ...useOmit(item, ['children', 'columnsExtra']) };
        const unrefExtra = unref(item.columnsExtra);
        if (unrefExtra && unrefExtra.visible) {
          const extra = useOmit(unrefExtra, ['visible']);
          Object.assign(_columnItemOpts, extra);
        } else {
          Object.assign(_columnItemOpts, unrefExtra);
        }
      }
      const _columnProps = Object.assign(
        {},
        _columnItemOpts,
        this.$props,
        usePick(item, ['label', 'prop', 'type'])
      );
      return (
        <ElTableColumn
          {..._columnProps}
          v-slots={getSlots(item)}
        ></ElTableColumn>
      );
    };
    return columnRender(columnItem);
  },
});
