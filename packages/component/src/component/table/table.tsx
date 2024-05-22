import {
  isFunction,
  useFormatDate,
  useLabelByVal,
  useOmit,
} from "co-utils-vue";
import {
  ElButton,
  ElForm,
  ElRadio,
  ElTable,
  ElTableColumn,
  FormValidateCallback,
} from "element-plus";
import {
  computed,
  defineComponent,
  h,
  PropType,
  ref,
  unref,
  watch,
  watchEffect,
} from "vue";
import CopyText from "../copy-text/index.vue";
import "./index.less";
import type { ITableColumnConfig, OperationType, TRender } from "./type";
type FormInstance = InstanceType<typeof ElForm>;
const EpTable = defineComponent({
  name: "EpTable",
  props: {
    data: {
      type: Array as PropType<any[] /** 不知道数据的格式 */>,
      default: () => [],
    },
    height: {
      type: [Number, String],
      default: "100%",
    },
    tooltipEffect: {
      type: String,
      default: "dark",
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
      default: "",
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
    "current-change",
    "selection-change",
    "click-row",
    "click-row-delete",
    "click-row-add",
    "click-row-view",
    "click-row-edit",
    "dbClick-row",
  ],
  setup(props, { emit }) {
    const zkFormRef = ref<FormInstance>();
    const zkTable = ref<InstanceType<typeof ElTable>>();
    const dataComputed = computed(() => props.data);
    const columnsComputed = computed(() => {
      return props.column.filter((columnsItem) => {
        if (
          unref(columnsItem.columnsExtra) &&
          typeof unref(columnsItem.columnsExtra)?.visible === "boolean"
        ) {
          return unref(columnsItem.columnsExtra)?.visible;
        }
        return columnsItem;
      });
    });
    const currentRow = ref<any>(null);
    const currentId = ref<string | number>("");
    // const dictValue = ref<Record<string, IDict[]>>()
    // const dictList = columnsComputed.value.map(item => item.dictKey).filter(Boolean)
    // if (dictList.length) {
    //   useGetDictValueByKeys(dictList as string[]).then(res => {
    //     dictValue.value = res
    //   })
    // }
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
      (zkFormRef.value?.$el as HTMLElement)
        ?.querySelector(`[field="${field}"]`)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
    };
    /**
     * 使用element-plus表单字典定位到某个字段
     * @param arg
     */
    // const scrollToField: FormInstance['scrollToField'] = (...arg) => {
    //   return zkFormRef.value?.scrollToField(...arg);
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
          return await zkFormRef.value?.validate(callback);
        } catch (error) {
          const fieldModel = error as Record<
            string,
            ITableColumnConfig["rules"]
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
    const validateField: FormInstance["validateField"] = (...arg) => {
      if (!zkFormRef.value) {
        console.warn("表单启用失败，useFormValidation 是否配置正确");
        return Promise.resolve(true);
      }
      return zkFormRef.value?.validateField(...arg);
    };
    /**
     * 重置表单
     * @param arg
     */
    const resetFields: FormInstance["resetFields"] = (...arg) => {
      if (!zkFormRef.value)
        console.warn("表单启用失败，useFormValidation 是否配置正确");
      return zkFormRef.value?.resetFields(...arg);
    };
    /**
     * 清空某个字段的表单有验证信息
     * @param arg
     */
    const clearValidate: FormInstance["clearValidate"] = (...arg) => {
      if (!zkFormRef.value) {
        console.warn("表单启用失败，useFormValidation 是否配置正确");
      }
      return zkFormRef.value?.clearValidate(...arg);
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
      emit("selection-change", list);
    };
    const handleRowDbClick = (row: any) => {
      emit("dbClick-row", row);
    };
    /** 不知道数据的格式 */
    const handleCurrentChange = (row: any) => {
      currentRow.value = row;
      currentId.value = row?.[props.idKey!] ?? "";
      emit("current-change", row);
    };
    return {
      zkFormRef,
      zkTable,
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
        zkTable.value?.setCurrentRow(row);
      },
      toggleRowSelection(row: any, selected: boolean) {
        zkTable.value?.toggleRowSelection(row, selected);
      },
      clearSelection() {
        zkTable.value?.clearSelection();
      },
    };
  },
  render() {
    /**
     * 处理插槽
     */
    const setTableProps = () => {
      const _props = Object.assign({}, this.$props, this.$attrs);
      Reflect.deleteProperty(_props, "column");
      Reflect.deleteProperty(_props, "formModelExtender");
      Reflect.deleteProperty(_props, "useFormValidation");
      return _props;
    };
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
      const operationTypeLabel = Object.assign(
        {},
        {
          add: "新增",
          edit: "编辑",
          delete: "删除",
          view: "查看",
        },
        this.$props.operationLabel
      );
      const operationMap: Record<OperationType, any> = {
        add: (
          <ElButton
            type={"primary"}
            link
            icon={"Plus"}
            onClick={() => this.$emit("click-row-add", row, $index)}
          >
            {operationTypeLabel.add}
          </ElButton>
        ),
        edit: (
          <ElButton
            type={"info"}
            link
            icon={"Edit"}
            onClick={() => this.$emit("click-row-edit", row, $index)}
          >
            {operationTypeLabel.edit}
          </ElButton>
        ),
        view: (
          <ElButton
            type={"primary"}
            link
            icon={"ZoomIn"}
            onClick={() => this.$emit("click-row-view", row, $index)}
          >
            {operationTypeLabel.view}
          </ElButton>
        ),
        delete: (
          <ElButton
            type={"danger"}
            link
            icon={"Delete"}
            onClick={() => this.$emit("click-row-delete", row, $index)}
          >
            {operationTypeLabel.delete}
          </ElButton>
        ),
      };
      if (item.type === "operation" || item.fixed) {
        if (!item.operationType) {
          item.operationType = ["add", "edit", "view", "delete"];
        }
        if (!item.fixed) item.fixed = !!item;
        if (!item.width) item.width = "200";
        return (
          <div>
            {item.operationType
              .map((operationItem) => {
                if (typeof operationItem === "string")
                  return operationMap[operationItem];
                const { type } = operationItem;
                return operationMap[type];
              })
              .filter(Boolean)}
          </div>
        );
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
        this.useFormValidation &&
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
                onClick={() => this.$emit("click-row-view", row)}
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
          if (typeof item.rules === "boolean") {
            formItemProp.rules = {
              required: item.rules,
              message: `${item.label} 为必填项`,
              trigger: "blur",
            };
          } else {
            formItemProp.rules = item?.rules;
          }
          // 定义一个检验字段标识，后面使用定位到首个校验错误字段时用到
          formItemProp.field = field;
          formItemProp.prop = field;
        }

        return (
          <el-form-item
            {...formItemProp}
            key={item.prop}
            class="column-form-item__mini"
          >
            {render()}
          </el-form-item>
        );
      };
      /**
       * 根据数据下标，筛选出有需要校验的字段prop
       * @param index
       */
      const filterPropValidator = (index: number) => {
        // 筛选配置有rules 并且开启表单模式
        if (this.$props.useFormValidation) {
          const propsHasRules = this.$props.column.filter(
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
        const keys = prop.split(".");
        return keys.reduce((obj, k) => (obj || {})[k], row);
      };
      return {
        /**
         * 自定义表头
         */
        header: (() => {
          if (item.headerRender && isFunction(item.headerRender)) {
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
              if (typeof item.rules === "boolean") return item.rules;
              return !!item.rules?.required;
            })();
            return () =>
              h(
                "div",
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
          ["operation", "expand"].includes(item.type) ||
          item.dictKey
            ? ({ row, $index }: any) => {
                if ($index < 0) return deepObjectValue(row, item.prop!);
                return formItemRender(
                  $index,
                  () => {
                    const renderCtx = () => {
                      /**
                       * 自定渲染器，优先级最高
                       */
                      if (item.render) {
                        return item.render({
                          row,
                          index: $index,
                          column: { ...item },
                          // 自定义返回一个检验器的数据键
                          validator: filterPropValidator($index),
                        });
                      }
                      if (item?.children) {
                        // eslint-disable-next-line no-use-before-define
                        return item.children.map((it) => renderColumns(it));
                      }
                      /**
                       * 校验是否是表格的操作
                       */
                      if (item.fixed || item.type === "operation") {
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
                      // if (item.dictKey) {
                      //   return (
                      //     <ZKDictTag
                      //       dictKey={item.dictKey}
                      //       options={this.dictValue && this.dictValue[item.dictKey]}
                      //       value={row[item.prop!]}
                      //     ></ZKDictTag>
                      //   )
                      // }
                      /**
                       * 有枚举
                       * dictKey 优先级高于 dictEnum
                       */
                      if (item.dictEnum) {
                        const tagType = useLabelByVal(
                          item.dictEnum,
                          deepObjectValue(row, item.prop!),
                          {
                            labelKey: "tagType",
                          }
                        );
                        if (tagType) {
                          return (
                            <el-tag type={tagType}>
                              {useLabelByVal(
                                item.dictEnum,
                                deepObjectValue(row, item.prop!)
                              )}
                            </el-tag>
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
                      if (typeof item.format === "function") {
                        return item.format(row);
                      }
                      if (item.isFormatTime) {
                        return useFormatDate(
                          deepObjectValue(row, item.prop!) || "",
                          "yyyy-MM-dd HH:mm:ss"
                        );
                      }
                      const _res = deepObjectValue(row, item.prop!);
                      return !_res && _res !== 0 ? "-" : _res;
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
    const renderColumns = (item: ITableColumnConfig) => {
      const _columnItemOpts = {
        ...useOmit(item, ["children", "columnsExtra"]),
      };
      const unrefExtra = unref(item.columnsExtra);
      if (unrefExtra && unrefExtra.visible) {
        const extra = useOmit(unrefExtra, ["visible"]);
        Object.assign(_columnItemOpts, extra);
      } else {
        Object.assign(_columnItemOpts, unrefExtra);
      }
      return (
        <ElTableColumn
          {..._columnItemOpts}
          key={item.prop || item.key}
          v-slots={getSlots(item)}
          prop={item.prop}
          type={_columnItemOpts.type}
          label={item.label}
        ></ElTableColumn>
      );
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
          ref="zkTable"
          {...setTableProps()}
          onRow-dblclick={this.handleRowDbClick}
          onSelection-change={this.handleSelectionChange}
          onCurrent-change={this.handleCurrentChange}
        >
          {radioRender()}
          {this.$slots.default
            ? this.$slots.default()
            : this.columnsComputed.map((item) => {
                return renderColumns(item);
              })}
        </ElTable>
      );
    };
    return (
      <el-form ref="zkFormRef" model={this.formModels}>
        {tableRender()}
      </el-form>
    );
  },
});
export default EpTable;
