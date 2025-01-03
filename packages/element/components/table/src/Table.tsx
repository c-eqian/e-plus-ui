import { EpPagination } from '@e-plus-ui/element/components/pagination';
import { isEmpty } from '@eqian/utils-vue';
import { ElForm, ElRadio, ElTable, ElTableColumn, type FormValidateCallback } from 'element-plus';

import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  provide,
  ref,
  unref,
  watch,
  watchEffect,
  type PropType
} from 'vue';
import { useColumns } from './hooks/useColumns';
import AdvTableColumn from './TableColumn';
import type { OperationType, TableColumnConfig } from './type';

// import './style.scss';
type FormInstance = InstanceType<typeof ElForm>;

/** 数据表格 */
export default defineComponent({
  name: 'EpTable',
  inheritAttrs: true,
  props: {
    data: {
      /**
       * 数据项
       */
      type: Array as PropType<any[]>,
      default: () => []
    },
    /**
     * 表格高度
     * @default 100%
     */
    height: {
      type: [Number, String],
      default: '100%'
    },
    /**
     * 悬浮样式
     * @default dark
     */
    tooltipEffect: {
      type: String,
      default: 'dark'
    },
    /**
     * 是否使用边框
     * @default false
     */
    border: {
      type: Boolean,
      default: false
    },
    /**
     * 是否支持排序
     * @deprecated 暂时不维护
     */
    sortable: {
      type: Boolean,
      default: false
    },
    /**
     * 高亮当前行
     * @default false
     */
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    /**
     * 配置highlightCurrentRow时需要单选框
     */
    idKey: {
      type: String,
      default: ''
    },
    /**
     * 数据列配置
     * @deprecated 使用columns代替
     * @since 1.7.0
     */
    column: {
      type: Array as PropType<TableColumnConfig[]>,
      default: () => []
    },
    /**
     * 数据列配置
     */
    columns: {
      type: Array as PropType<TableColumnConfig[]>,
      default: () => []
    },
    /**
     * 是否使用表单验证
     */
    useFormValidation: {
      type: Boolean,
      default: false
    },
    formModelExtender: {
      type: Object,
      default: () => ({})
    },
    operationLabel: {
      type: Object as PropType<Record<OperationType, string>>,
      default: () => {
        return {};
      }
    },
    // 分页属性
    /**
     * 是否需要使用分页
     * @default false
     */
    pagination: {
      type: Boolean,
      default: false
    },
    /**
     * 分页总数
     */
    paTotal: {
      type: Number,
      default: 0
    },
    /**
     * 当前页
     * @default 1
     */
    paPage: {
      type: Number,
      default: 1
    },
    /**
     * 分页大小
     * @default 20
     */
    paLimit: {
      type: Number,
      default: 20
    },
    /**
     * 可选分页大小
     * @default [10, 20, 30, 50]
     */
    paPageSizes: {
      type: Array<number>,
      default: () => [10, 20, 30, 50]
    },
    /**
     * 分页其他属性，不常用的统一放在此处,必须以pa开头，如需要设置pagerCount属性，则paPagerCount
     */
    paExtra: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({})
    }
  },
  emits: [
    'current-change',
    'selection-change',
    'click-row',
    'click-btn',
    'click-row-delete',
    'click-row-add',
    'click-row-view',
    'registry',
    'click-row-edit',
    'dbClick-row',
    'page-change',
    'update:pa-page',
    'update:pa-limit'
  ],
  setup(props, { emit }) {
    const epFormRef = ref<FormInstance>();
    const epTable = ref<InstanceType<typeof ElTable>>();
    const columns = ref(props.columns ?? props.column);
    const dataComputed = ref(props.data);
    const columnsComputed = computed(() => {
      return columns.value.filter(columnsItem => {
        if (
          unref(columnsItem.columnsExtra) &&
          typeof unref(columnsItem.columnsExtra)?.visible === 'boolean'
        ) {
          return unref(columnsItem.columnsExtra)?.visible;
        }
        return columnsItem;
      });
    });
    watchEffect(() => {
      dataComputed.value = props.data;
    });
    provide('EVENT-CLICKED', {
      btn: (...args: any[]) => emit('click-btn', ...args),
      delete: (...args: any[]) => emit('click-row-delete', ...args),
      view: (...args: any[]) => emit('click-row-view', ...args),
      add: (...args: any[]) => emit('click-row-add', ...args),
      edit: (...args: any[]) => emit('click-row-edit', ...args)
    });
    const instance = getCurrentInstance();
    const appContext = instance?.appContext.config.globalProperties;
    provide('PINIA-KEY', appContext);
    const currentRow = ref<any>(null);
    const currentId = ref<string | number>('');
    /**
     * 绑定数据对象，如果需要表单校验时
     * 表单校验时，要绑定此对象
     */
    const formModels = computed(() => {
      if (props.useFormValidation) {
        return {
          data: props.data,
          // 其他额外的数据
          ...props.formModelExtender
        };
      }
      return undefined;
    });
    /**
     * 自定义平滑滚动定位到对应的视图
     * @param field
     */
    const scrollIntoView = (field: string) => {
      (epFormRef.value?.$el as HTMLElement)?.querySelector(`[field="${field}"]`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    };
    /**
     * 使用element-plus表单字典定位到某个字段
     * @param arg
     */
    // const scrollToField: FormInstance['scrollToField'] = (...arg) => {
    //   return epFormRef.value?.scrollToField(...arg);
    // };
    /**
     * 对整个表单的内容进行验证
     * @param isScrollToField 是否需要定位到第一个错误字段
     * @param callback 自定义回调函数
     */
    const validate = async (isScrollToField?: boolean, callback?: FormValidateCallback) => {
      // 没有启用表单校验，返回真值
      if (!props.useFormValidation) return true;
      if (isScrollToField) {
        try {
          return await epFormRef.value?.validate(callback);
        } catch (error) {
          const fieldModel = error as Record<string, TableColumnConfig['rules']>;
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
        console.warn('表单启用失败，useFormValidation 是否配置正确');
        return Promise.resolve(true);
      }
      return epFormRef.value?.validateField(...arg);
    };
    /**
     * 重置表单
     * @param arg
     */
    const resetFields: FormInstance['resetFields'] = (...arg) => {
      if (!epFormRef.value) console.warn('表单启用失败，useFormValidation 是否配置正确');
      return epFormRef.value?.resetFields(...arg);
    };
    /**
     * 清空某个字段的表单有验证信息
     * @param arg
     */
    const clearValidate: FormInstance['clearValidate'] = (...arg) => {
      if (!epFormRef.value) {
        console.warn('表单启用失败，useFormValidation 是否配置正确');
      }
      return epFormRef.value?.clearValidate(...arg);
    };
    /**
     * 重置表单字段
     */
    watch(
      () => props.useFormValidation,
      val => {
        if (!val) {
          resetFields();
        }
      }
    );
    watch(
      () => [props.useFormValidation, props.data.length],
      () => {
        if (props.useFormValidation && props.data.length > 0) {
          clearValidate();
        }
      }
    );
    /**
     * 双击行
     * @param list
     */
    const handleSelectionChange = (list: any[]) => {
      emit('selection-change', list);
    };
    const handleRowDbClick = (row: any) => {
      emit('dbClick-row', row);
    };
    const getColumns = () => {
      return columns;
    };
    const updateColumns = (_data: TableColumnConfig[]) => {
      columns.value = _data;
    };
    /** 不知道数据的格式 */
    const handleCurrentChange = (row: any) => {
      currentRow.value = row;
      currentId.value = row?.[props.idKey!] ?? '';
      emit('current-change', row);
    };
    const getTableInstance = (): any => {
      return instance?.proxy;
    };
    const getData = () => {
      return dataComputed.value;
    };
    const { addFieldColumns, deleteFieldColumns, updateFieldColumns } = useColumns(() => {
      return {
        getColumns,
        updateColumns
      };
    });
    onMounted(() => {
      emit('registry', getTableInstance);
    });
    return {
      epFormRef,
      epTable,
      dataComputed,
      columnsComputed,
      // dictValue,
      getColumns,
      getData,
      updateColumns,
      formModels,
      currentId,
      currentRow,
      resetFields,
      clearValidate,
      validate,
      validateField,
      addFieldColumns,
      deleteFieldColumns,
      updateFieldColumns,
      handleSelectionChange,
      handleRowDbClick,
      handleCurrentChange,
      setCurrentRow(row: any) {
        epTable.value?.setCurrentRow(row);
      },
      toggleRowSelection(row: any, selected: boolean) {
        epTable.value?.toggleRowSelection(row, selected);
      },
      clearSelection() {
        epTable.value?.clearSelection();
      }
    };
  },
  render() {
    /**
     * 处理插槽
     */
    const setTableProps = () => {
      const _props = Object.assign({}, this.$props, this.$attrs);
      Reflect.deleteProperty(_props, 'column');
      Reflect.deleteProperty(_props, 'columns');
      Reflect.deleteProperty(_props, 'data');
      Reflect.deleteProperty(_props, 'formModelExtender');
      Reflect.deleteProperty(_props, 'useFormValidation');
      Reflect.deleteProperty(_props, 'paExtra');
      Reflect.deleteProperty(_props, 'operationlabel');
      Reflect.deleteProperty(_props, 'palimit');
      Reflect.deleteProperty(_props, 'sortable');
      Reflect.deleteProperty(_props, 'papagesizes');
      return _props;
    };
    /**
     * 渲染单选框
     */
    const radioRender = () => {
      if (!this.$props.highlightCurrentRow || !this.$props.idKey) return null;
      return (
        <ElTableColumn
          width="55"
          align="center"
          v-slots={{
            default: ({ row }: any) => {
              return (
                <ElRadio v-model={this.currentId} label={row[this.$props.idKey as string]}>
                  &nbsp;
                </ElRadio>
              );
            }
          }}
        />
      );
    };
    const tableRender = () => {
      return (
        <ElTable
          ref="epTable"
          stripe
          {...setTableProps()}
          data={this.dataComputed}
          onRow-dblclick={this.handleRowDbClick}
          onSelection-change={this.handleSelectionChange}
          onCurrent-change={this.handleCurrentChange}
          class="ep-el-table"
          header-cell-class-name="ep-table__header"
          cell-class-name="ep-table__cell"
        >
          {radioRender()}
          {this.$slots.default
            ? this.$slots.default()
            : this.columnsComputed.map(item => {
                return (
                  <AdvTableColumn
                    useFormValidation={this.useFormValidation}
                    columns={this.columnsComputed}
                    columnItem={item}
                    key={item.prop || item.key}
                    v-slots={this.$slots}
                  ></AdvTableColumn>
                );
              })}
        </ElTable>
      );
    };
    /**
     * 分页
     */
    const handlePagination = () => {
      const createUpdateModel = (key: string) => {
        if (['page', 'limit'].includes(key)) {
          return {
            [`onUpdate:${key}`]: (val: any) => {
              key === 'limit'
                ? this.$emit('update:pa-limit', val)
                : this.$emit('update:pa-page', val);
            }
          };
        }
        return {};
      };
      if (this.$props.pagination) {
        const paProps = {} as any;
        Object.keys(this.$props).forEach(key => {
          if (key.startsWith('pa')) {
            const __key__ = key.replace('pa', '').toLowerCase();
            if (key === 'paExtra' && !isEmpty(this.$props[key])) {
              Object.keys(this.$props[key]).forEach(_key => {
                paProps[_key.replace('pa', '').toLowerCase()] = this.$props[key][_key];
              });
            } else {
              paProps[__key__] = this.$props[key];
            }
            Object.assign(paProps, createUpdateModel(__key__));
          }
        });
        return h(EpPagination, {
          ...paProps,
          onPageChange: (...args: any[]) => this.$emit('page-change', ...args)
        });
      }
    };
    return (
      <div>
        {this.$props.useFormValidation ? (
          <ElForm ref="epFormRef" model={this.formModels}>
            {tableRender()}
          </ElForm>
        ) : (
          tableRender()
        )}
        {handlePagination()}
      </div>
    );
  }
});
