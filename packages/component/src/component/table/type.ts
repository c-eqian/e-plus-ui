import type { FormItemRule } from 'element-plus';
import type { Ref, VNode } from 'vue';

export interface IEnumItem {
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
  tagType?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  [k: string]: any;
}
export interface IColumnsExtra {
  /**
   * 显示隐藏状态
   */
  visible?: boolean;
  /**
   * 额外设置列宽，优先级高于column['width']
   * 暂时用不上！！！
   */
  width?: number | string;
  // 主要是组件库的相关参数
  [k: string]: any;
}
interface IRenderData<T = any> {
  row: T;
  index: number;
  // eslint-disable-next-line no-use-before-define
  column: ITableColumnConfig<T>;
  /**
   * 自定义返回一个检验器的数据键
   * 如果没有此键，那么在表单校验时，应该使用data[index].prop
   */
  validator?: string[];
}
export interface TRender<T = any> {
  (scoped: IRenderData<T>): VNode | null | string | number;
}
export type OperationType = 'add' | 'edit' | 'delete' | 'view';
export type OperationTypeMap = {
  type: OperationType;
  permission: string[];
};
export interface ITableColumnConfig<T = any> {
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
  label: string;
  prop?: keyof T extends infer E ? (E extends string ? E : string) : string;
  // /**
  //  * 开启单选框
  //  */
  // radio?: boolean;
  /**
   * 是否显示提示，默认false
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
  /**
   * 其他扩展参数
   */
  [k: string]: any;
}
export const defineTableColumns = <T = any>(
  columns: ITableColumnConfig<T>[]
) => {
  return columns;
};
export const defineTableConfigOperationLabel = (
  operationTypeLabel: Record<OperationType, string>
) => {
  return operationTypeLabel;
};
