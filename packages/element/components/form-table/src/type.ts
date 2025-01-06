import type { FormSchema } from '@e-plus-ui/element/components/form-schema';
import type { EpTable, TableColumnConfig } from '@e-plus-ui/element/components/table';
import type { Recordable } from '@e-plus-ui/utils';
import type { Component, VNodeProps } from 'vue';
type ExtractPropTypes<T extends Component> = T extends new (...args: any) => any
  ? Omit<InstanceType<T>['$props'], keyof VNodeProps>
  : never;
type TableConfig = {
  columns: TableColumnConfig[];
} & ExtractPropTypes<typeof EpTable>;

type PromiseAble<T = unknown> = () => Promise<T>;
type RequestHandler = <T = object>(params: T) => NonNullable<Recordable<string>>;
export type ResponseList<T extends object> = {
  list: T[];
  total: number;
  [p: string]: unknown;
};
// 提取函数的返回类型，同时排除 undefined
type NonNullableFunction<T> = T extends (...args: any) => infer R ? (...args: any) => R : never;

// 获取 UseFormTable['api'] 的返回类型
type APIResponse =
  NonNullableFunction<NonNullable<UseFormTable['api']>> extends (...args: any) => infer R
    ? R
    : never;
type ResponseHandler = (data: APIResponse) => ResponseList<any>;
export type UseFormTable = {
  /**
   * API
   */
  api: PromiseAble;
  /**
   * 请求固定参数，如果时动态参数，请使用 `beforeRequest`
   */
  params?: Recordable<string>;
  /**
   * 数据列表键，支持链式
   * @default list
   * @example
   * ```js
   * response = {
   * data:{
   *    list: [],
   *    total:0
   *    }
   * }
   * listKey='data.list'
   * ```
   */
  listKey?: string;
  /**
   * 数据分页键
   * @default total
   * @example
   * ```js
   * response = {
   * data:{
   *    list: [],
   *    total:0
   *    }
   * }
   * totalKey='data.total'
   * ```
   */
  totalKey?: string;
  /**
   * 分页页码键
   * @default pageNum
   */
  pageNumKey?: string;
  /**
   * 分页大小键
   * @default pageSize
   */
  pageSizeKey?: string;
  /**
   * 请求前处理
   */
  requestHandler?: RequestHandler;
  /**
   * 响应成功数据处理
   */
  responseHandler?: ResponseHandler;
};
/**
 * 参数类型
 */
export type FormTableProps = {
  /**
   * 表单配置
   */
  formSchema: FormSchema;
  /**
   * 表格配置
   */
  tableConfig: TableConfig;
  /**
   * 标题
   */
  title?: string;
} & UseFormTable;

export type FormTableEmits = {
  /**
   * 搜索事件
   * @param event
   * @param args
   */
  (event: 'search', ...args: any[]): void;
  /**
   * 重置事件
   * @param event
   * @param args
   */
  (event: 'reset', ...args: any[]): void;
};
