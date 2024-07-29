import '../index.less';

import {
  ElForm,
  ElRadio,
  ElTable,
  ElTableColumn,
  type FormInstance,
  type FormValidateCallback,
} from 'element-plus';
import {
  computed,
  defineComponent,
  type PropType,
  provide,
  ref,
  unref,
  watch,
  watchEffect,
} from 'vue';

import type { ITableColumnConfig, OperationType } from '../type';
import EpTableColumn from './TableColumn';
export default defineComponent({
  name: 'EpTable',
  props: {
    data: {
      type: Array as PropType<any[] /** 不知道数据的格式 */>,
      default: () => [],
    },
    height: {
      type: [Number, String],
      default: '100%',
    },
    tooltipEffect: {
      type: String,
      default: 'dark',
    },
    border: {
      type: Boolean,
      default: false,
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false,
    },
    /**
     * 配置highlightCurrentRow时需要
     * 单选框
     */
    idKey: {
      type: String,
      default: '',
    },
    column: {
      type: Array as PropType<ITableColumnConfig[]>,
      default: () => [],
    },
    /**
     * 是否使用表单验证
     */
    useFormValidation: {
      type: Boolean,
      default: false,
    },
    formModelExtender: {
      type: Object,
      default: () => ({}),
    },
    operationLabel: {
      type: Object as PropType<Record<OperationType, string>>,
      default: () => {
        return {};
      },
    },
  },
  emits: [
    'current-change',
    'selection-change',
    'click-row',
    'click-btn',
    'click-row-delete',
    'click-row-add',
    'click-row-view',
    'click-row-edit',
    'dbClick-row',
  ],
  setup(props, { emit }) {
    const czFormRef = ref<FormInstance>();
    const epTable = ref<InstanceType<typeof ElTable>>();
    const dataComputed = computed(() => props.data);
    const columnsComputed = computed(() => {
      return props.column.filter((columnsItem) => {
        if (
          unref(columnsItem.columnsExtra) &&
          typeof unref(columnsItem.columnsExtra)?.visible === 'boolean'
        ) {
          return unref(columnsItem.columnsExtra)?.visible;
        }
        return columnsItem;
      });
    });
    provide('EVENT-CLICKED', {
      btn: (...args: any[]) => emit('click-btn', ...args),
      delete: (...args: any[]) => emit('click-row-delete', ...args),
      view: (...args: any[]) => emit('click-row-view', ...args),
      add: (...args: any[]) => emit('click-row-add', ...args),
      edit: (...args: any[]) => emit('click-row-edit', ...args),
    });
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
          ...props.formModelExtender,
        };
      }
      return undefined;
    });
    /**
     * 自定义平滑滚动定位到对应的视图
     * @param field
     */
    const scrollIntoView = (field: string) => {
      (czFormRef.value?.$el as HTMLElement)
        ?.querySelector(`[field="${field}"]`)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
    };
    /**
     * 使用element-plus表单字典定位到某个字段
     * @param arg
     */
    // const scrollToField: FormInstance['scrollToField'] = (...arg) => {
    //   return czFormRef.value?.scrollToField(...arg);
    // };
    /**
     * 对整个表单的内容进行验证
     * @param isScrollToField 是否需要定位到第一个错误字段
     * @param callback 自定义回调函数
     */
    const validate = async (
      isScrollToField?: boolean,
      callback?: FormValidateCallback
    ) => {
      // 没有启用表单校验，返回真值
      if (!props.useFormValidation) return true;
      if (isScrollToField) {
        try {
          return await czFormRef.value?.validate(callback);
        } catch (error) {
          const fieldModel = error as Record<
            string,
            ITableColumnConfig['rules']
          >;
          // 取出第一个校验失败的数据
          const errId = Object.keys(fieldModel)[0];
          scrollIntoView(errId);
          // scrollToField(errId);
          return Promise.reject(error);
        }
      }
      return czFormRef.value?.validate(callback);
    };
    /**
     * 校验表单某个字段验证
     * @param arg
     */
    const validateField: FormInstance['validateField'] = (...arg) => {
      if (!czFormRef.value) {
        console.warn('表单启用失败，useFormValidation 是否配置正确');
        return Promise.resolve(true);
      }
      return czFormRef.value?.validateField(...arg);
    };
    /**
     * 重置表单
     * @param arg
     */
    const resetFields: FormInstance['resetFields'] = (...arg) => {
      if (!czFormRef.value)
        console.warn('表单启用失败，useFormValidation 是否配置正确');
      return czFormRef.value?.resetFields(...arg);
    };
    /**
     * 清空某个字段的表单有验证信息
     * @param arg
     */
    const clearValidate: FormInstance['clearValidate'] = (...arg) => {
      if (!czFormRef.value) {
        console.warn('表单启用失败，useFormValidation 是否配置正确');
      }
      return czFormRef.value?.clearValidate(...arg);
    };
    /**
     * 重置表单字段
     */
    watch(
      () => props.useFormValidation,
      (val) => {
        if (!val) {
          resetFields();
        }
      }
    );
    watchEffect(() => {
      if (!(props.data.length < 1)) {
        props.useFormValidation && clearValidate();
      }
    });
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
    /** 不知道数据的格式 */
    const handleCurrentChange = (row: any) => {
      currentRow.value = row;
      currentId.value = row?.[props.idKey!] ?? '';
      emit('current-change', row);
    };
    return {
      czFormRef,
      epTable,
      dataComputed,
      columnsComputed,
      // dictValue,
      formModels,
      currentId,
      currentRow,
      resetFields,
      clearValidate,
      validate,
      validateField,
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
      },
    };
  },
  render() {
    /**
     * 处理插槽
     */
    const setTableProps = () => {
      const _props = Object.assign({}, this.$props, this.$attrs);
      Reflect.deleteProperty(_props, 'column');
      Reflect.deleteProperty(_props, 'formModelExtender');
      Reflect.deleteProperty(_props, 'useFormValidation');
      return _props;
    };
    /**
     * 渲染单选框
     */
    const radioRender = () => {
      if (!this.$props.highlightCurrentRow || !this.$props.idKey) return null;
      return (
        <ElTableColumn
          width="35"
          align="center"
          v-slots={{
            default: ({ row }: any) => {
              return (
                <ElRadio
                  v-model={this.currentId}
                  label={row[this.$props.idKey as string]}
                >
                  &nbsp;
                </ElRadio>
              );
            },
          }}
        />
      );
    };
    const tableRender = () => {
      return (
        <ElTable
          ref="epTable"
          {...setTableProps()}
          onRow-dblclick={this.handleRowDbClick}
          onSelection-change={this.handleSelectionChange}
          onCurrent-change={this.handleCurrentChange}
        >
          {radioRender()}
          {this.$slots.default
            ? this.$slots.default()
            : this.columnsComputed.map((item) => {
                return (
                  <EpTableColumn
                    useFormValidation={this.useFormValidation}
                    columns={this.columnsComputed}
                    columnItem={item}
                    key={item.prop || item.key}
                    v-slots={this.$slots}
                  ></EpTableColumn>
                );
              })}
        </ElTable>
      );
    };
    return (
      <ElForm ref="czFormRef" model={this.formModels}>
        {tableRender()}
      </ElForm>
    );
  },
});
