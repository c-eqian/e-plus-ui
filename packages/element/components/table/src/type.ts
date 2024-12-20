import type { FormItemRule, FormValidateCallback } from 'element-plus';

import type { ComponentInternalInstance, Ref, VNode } from 'vue';

export type TagType = 'primary' | 'success' | 'info' | 'warning' | 'danger';
/**
 * 额外参数
 * 主要是组件库的相关参数
 */
export type ExtraParameters = {
  [k: string]: any;
};
export type EnumItem = {
  /**
   * 选择框显示的标签
   */
  label: string;
  /**
   * 标签对应的值
   */
  value: string | number | boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 枚举标签类型，应用于el-tag组件
   */
  tagType?: TagType;
} & ExtraParameters;
export type ColumnsExtra = {
  /**
   * 显示隐藏状态
   */
  visible?: boolean;
  /**
   * 额外设置列宽，优先级高于column['width']
   * 暂时用不上！！！
   */
  width?: number | string;
} & ExtraParameters;
interface IRenderData<T = any> {
  row: T;
  index: number;
  column: TableColumnConfig<T>;
  /**
   * 自定义返回一个检验器的数据键
   * 如果没有此键，那么在表单校验时，应该使用data[index].prop
   */
  validator?: string[];
}

/**
 * 渲染器
 */
export type TRender<T = any> = (
  scoped: IRenderData<T>
) => VNode<any, any, any> | VNode<any, any, any>[] | null | string | number | undefined;

export type OperationType = 'add' | 'edit' | 'delete' | 'view';
export type PermissionFn<T = any> = (scoped: IRenderData<T>) => boolean;
export type Permission<T = any> = string[] | PermissionFn<T>;
export type OperationTypeMap<T = any> = {
  /**
   * 操作类型，可以使用内置、亦可以使用自定义
   * 如果使用自定义时，type的值将会作为事件的回调参数
   */
  type?: OperationType | string;
  /**
   * 自定义操作名称，如果使用内置时可以为空，默认使用内置标签
   * 优先级高于operationTypeLabel
   */
  label?: string;
  /**
   * 自定义渲染
   * 优先级高于type
   */
  render?: TRender;
  /**
   * 权限
   * 接收一个数组（预留-使用接口权限校验）
   * 或接收一个具有返回布尔值的方法，false将不会显示该操作
   */
  permission?: Permission<T>;
  /**
   * 额外参数
   * el组件参数
   */
  extra?: ExtraParameters;
};
export type TableColumnConfig<T = any> = {
  /**
   * 列宽
   */
  width?: number | string;
  /**
   * 对齐方式
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 自定义插槽名称
   * 优先级高于prop
   * 如果没有则默认名称为prop的值
   */
  slotKey?: string;
  /**
   * column key
   * 默认使用 prop
   */
  key?: string;
  /**
   * 显示名
   */
  label?: string;
  /**
   * 数据键
   */
  prop?: keyof T extends infer E ? (E extends string ? E : string) : string;
  /**
   * 是否显示提示，默认false
   */
  tooltip?: boolean;
  /**
   * 自定义渲染器
   */
  render?: TRender<T> | TRender<T>[];
  /**
   * 表头渲染器
   */
  headerRender?: TRender<T>;
  /**
   * 字典编码，如果传入该值，则不需要slots，默认已经创建
   * dictKey 优先级高于 dictEnum
   */
  dictKey?: string;
  /**
   * 枚举显示
   * dictKey 优先级高于 dictEnum
   */
  dictEnum?: EnumItem[];
  /**
   * 表单校验:主要用于表格内的表单编辑
   */
  rules?: FormItemRule | FormItemRule[] | boolean;
  children?: TableColumnConfig[];
  /**
   * 文本溢出显示...
   */
  showOverflowTooltip?: boolean;
  /**
   * 自定义格式化数据 优先级低于插槽使用
   * @param row
   */
  format?: (row: T) => void;
  fixed?: string | boolean;
  /**
   * 扩展参数，基本作用于 el-table的参数
   */
  columnsExtra?: Ref<ColumnsExtra> | ColumnsExtra;
  /**
   * 表格中是否需要设置复制按钮
   * 一般用于ID这类
   */
  isCopy?: boolean;
  /**
   * 提供方便渲染时间的格式化方式 优先级低于format
   * 默认格式为 'yyyy-MM-dd HH:mm:ss'
   * 如果需要其他格式，请使用format自定义格式化
   */
  isFormatTime?: boolean;
  /**
   * 拓展operation，用于数据操作 默认支持 add(新增) edit(修改) delete(删除) view(查看)
   * 当使用operation类型时，fixed默认启用
   */
  type?: 'index' | 'selection' | 'expand' | 'operation';
  /**
   * 需要type=operation
   * 操作类型， 默认add(新增) edit(修改) delete(删除) view(查看)
   */
  operationType?: (OperationType | OperationTypeMap<T>)[] | TRender<T>;
} & ExtraParameters;

// 定义重载的AddFieldColumns类型
export type AddFieldColumns = {
  (columns: TableColumnConfig | TableColumnConfig[], to?: string | boolean, front?: boolean): void;
  (columns: TableColumnConfig | TableColumnConfig[], front?: boolean): void;
  (columns: TableColumnConfig | TableColumnConfig[]): void;
};

export type RowData =
  | Record<string, any>
  | Record<string, any>[]
  | string
  | number
  | (string | number)[];

// UseTableReturnType接口
export type UseTableReturnType<T> = {
  /**
   * 重置表单
   * @param args
   */
  resetFields: (...args: any[]) => void;
  /**
   * 清除检验状态
   * @param args
   */
  clearValidate: (...args: any[]) => void;
  /**
   * 表单校验
   * @param isScrollToField
   * @param callback
   */
  validate: (isScrollToField?: boolean, callback?: FormValidateCallback) => Promise<any>;
  /**
   * 表单校验某字段
   * @param args
   */
  validateField: (...args: any[]) => void;
  /**
   * 清空选中状态
   */
  clearSelection: () => void;
  /**
   * 选择状态
   * @param row
   * @param selected
   */
  toggleRowSelection: (row: RowData, selected?: boolean) => void;
  /**
   * 添加列
   * @param columns 数据列，支持单个或者数组
   * @param to 指定位置添加，如果是boolean，值相当于front参数
   * @param front 是否首部添加，如果为false 向尾部添加
   */
  addFieldColumns: AddFieldColumns;
  /**
   * 注册函数
   * @param instance
   */
  registry: (instance: ComponentInternalInstance) => void;
  /**
   * 根据prop删除列 支持单个或者数组
   */
  deleteFieldColumns: (
    propValues: TableColumnConfig<T>['prop'][] | TableColumnConfig<T>['prop']
  ) => void;
  /**
   * 更新列
   * @param columns 支持单个或者数组
   * @param fullUpdate 替换还是合并，为true时，直接替换，否则合并，默认合并
   */
  updateFieldColumns: (
    columns: TableColumnConfig<T>[] | TableColumnConfig<T>,
    fullUpdate?: boolean
  ) => void;
};
