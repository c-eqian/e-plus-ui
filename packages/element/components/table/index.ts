import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Table from './src/Table';
import type { TableColumnConfig } from './src/type';
export const EpTable: SFCWithInstall<typeof Table> = withInstall(Table);
export * from './src/type';
export * from './src/hooks/useTable';
/**
 * 定义表格辅助函数
 * @param columns
 */
export const defineTableColumns = <T = any>(columns: TableColumnConfig<T>[]) => {
  return columns;
};
