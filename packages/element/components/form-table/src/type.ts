import type {
  FormSchema,
  UseFormSchemaReturnType
} from '@e-plus-ui/element/components/form-schema';
import type {
  EpTable,
  TableColumnConfig,
  UseTableReturnType
} from '@e-plus-ui/element/components/table';
import type { ComponentProps, Recordable, ReturnPromise } from '@e-plus-ui/utils';
import type { ElTable } from 'element-plus';
import type { ComponentInternalInstance } from 'vue';
type TableSchema<T> = {
  columns: TableColumnConfig<T>[];
} & ComponentProps<typeof ElTable> &
  ComponentProps<typeof EpTable>;

type PromiseAble<R = unknown> = () => Promise<R>;
type RequestHandler = <T = object>(params: T) => NonNullable<Recordable>;
export type ResponseList<T extends object> = {
  list: T[];
  total: number;
  [p: string]: unknown;
};

// 获取 BaseFormTableProps['api'] 的返回类型
type ResponseHandler<R> = (data: R) => ResponseList<any>;
export type BaseFormTableProps<R> = {
  /**
   * API接口请求
   */
  api?: PromiseAble<R>;
  /**
   * 立即请求
   * @default true
   */
  immediate?: boolean;
  /**
   * 请求固定参数，如果时动态参数，请使用 `requestHandler`
   */
  params?: Recordable;
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
  responseHandler?: ResponseHandler<R>;
};
/**
 * 参数类型
 */
export type FormTableProps<T = any, F = any, R = any> = {
  /**
   * 表单配置
   */
  formSchema?: FormSchema<F>;
  /**
   * 表格配置
   */
  tableSchema?: TableSchema<T>;
  /**
   * 标题
   */
  title?: string;
} & BaseFormTableProps<R>;

export type FormTableEmits = {
  /**
   * 注册实列
   * @param event
   * @param currentInstance
   */
  (event: 'registry', currentInstance: ComponentInternalInstance): void;
};

export type OmitTableReturn<T> = Omit<UseTableReturnType<T>, 'registry'>;
export type OmitFormSchemaReturn = Omit<UseFormSchemaReturnType, 'registry'>;
/**
 * 搜索表格hooks
 */
export type FormTableReturn<T = any> = {
  /**
   * 重载表格数据
   * @param parms
   */
  resetTable: () => ReturnPromise;
  /**
   * 搜索
   * @param parms
   */
  searchTable: (parms?: Recordable) => ReturnPromise;
  /**
   * 注册搜索表单实列
   * @param instance
   */
  registry: (instance: ComponentInternalInstance) => void;
  /**
   * table实列
   */
  getTableInstance: () => OmitTableReturn<T>;
  /**
   * 表单实列
   */
  getFormSchemaInstance: () => OmitFormSchemaReturn;
};
/**
 * 搜索表格
 */
export type UseFormTable = <T = any, F = any, R = any>(
  props: FormTableProps<T, F, R>
) => FormTableReturn<T>;
