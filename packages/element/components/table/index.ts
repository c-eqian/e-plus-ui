import Table from './src/Table';
import type { TableColumnConfig } from './src/type';
export const EpTable: typeof Table = Table;
export * from './src/type';
export * from './src/hooks/useTable';
export type EpTableInstance = InstanceType<typeof Table>;
/**
 * 定义表格辅助函数
 * @param columns
 */
export const defineTableColumns = <T = any>(columns: TableColumnConfig<T>[]) => {
  return columns;
};
