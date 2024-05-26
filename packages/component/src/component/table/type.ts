import type { FormItemRule } from 'element-plus';
import type { Ref, VNode } from 'vue';
/**
 * 扩展参数
 */
export type TableExtraPropsType = { [k: string]: any };
export interface IEnumItem extends TableExtraPropsType {
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
  tagType?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
}
export interface IColumnsExtra extends TableExtraPropsType {
  /**
   * 显示隐藏状态
   */
  visible?: boolean;
  /**
   * 额外设置列宽，优先级高于column['width']
   * 暂时用不上！！！
   */
  width?: number | string;
}

/**
 * 自定义渲染方法参数类型
 */
export interface IRenderData<T = any> {
  /**
   * 数据行
   */
  row: T;
  /**
   * 数据索引
   */
  index: number;
  /**
   * 数据列
   */
  column: ITableColumnConfig<T>;
  /**
   * 自定义返回一个检验器的数据键
   * 如果没有此键，那么在表单校验时，应该使用data[index].prop
   */
  validator?: string[];
}

/**
 * 自定义渲染
 */
export interface TRender<T = any> {
  (scoped: IRenderData<T>): VNode | null | string | number;
}

/**
 * 操作类型
 */
export type OperationType = 'add' | 'edit' | 'delete' | 'view';
/**
 * 操作类型
 * 支持配置权限
 */
export type OperationTypeMap = {
  /**
   * 操作类型
   */
  type: OperationType;
  /**
   * 权限标识
   */
  permission: string[];
};
export interface ITableColumnConfig<T = any> extends TableExtraPropsType {
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
   * 表头名称
   */
  label: string;
  /**
   * 数据键
   */
  prop?: keyof T extends infer E ? (E extends string ? E : string) : string;
  /**
   * 是否显示提示
   * @default false
   */
  tooltip?: boolean;
  /**
   * 自定义渲染器
   */
  render?: TRender<T>;
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
  dictEnum?: IEnumItem[];
  /**
   * 表单校验:主要用于表格内的表单编辑
   */
  rules?: FormItemRule | FormItemRule[] | boolean;
  /**
   * 子节点数据
   */
  children?: ITableColumnConfig[];
  /**
   * 文本溢出显示...
   */
  showOverflowTooltip?: boolean;
  /**
   * 自定义格式化数据 优先级低于插槽使用
   * @param row
   */
  format?: (row: T) => void;
  /**
   * 操作栏固定方法
   */
  fixed?: string | boolean;
  /**
   * 扩展参数，基本作用于 el-table的参数
   */
  columnsExtra?: Ref<IColumnsExtra> | IColumnsExtra;
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
  operationType?: (OperationType | OperationTypeMap)[];
}

/**
 * 定义表格数据列
 * @param columns
 */
export const defineTableColumns = <T = any>(columns: ITableColumnConfig<T>[]) =>
  columns;
/**
 * 操作类型名称
 * 默认局限于 add(新增) edit(修改) delete(删除) view(查看)
 */
export const defineTableConfigOperationLabel = (
  operationTypeLabel: Record<OperationType, string>
) => {
  return operationTypeLabel;
};
