import type { FormSchema } from '@e-plus-ui/element/components/form-schema';
import type { EpTable, TableColumnConfig } from '@e-plus-ui/element/components/table';
import type { Component, VNodeProps } from 'vue';
type ExtractPropTypes<T extends Component> = T extends new (...args: any) => any
  ? Omit<InstanceType<T>['$props'], keyof VNodeProps>
  : never;
type TableConfig = {
  columns: TableColumnConfig[];
} & ExtractPropTypes<typeof EpTable>;
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
   * 数据列表
   */
  tableData: any[];
};
