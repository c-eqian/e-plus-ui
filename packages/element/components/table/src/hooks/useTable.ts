import { isArray, isNumber, isString } from '@eqian/utils-vue';
import { onUnmounted, ref, unref } from 'vue';
import type { AddFieldColumns, RowData, TableColumnConfig, UseTableReturnType } from '../type';

import type { FormValidateCallback } from 'element-plus';
export const useEpTable = <T = any>(): UseTableReturnType<T> => {
  const tableInstance = ref<any>();

  const registry = (instance: any) => {
    if (unref(tableInstance)) return;
    tableInstance.value = instance();
  };

  onUnmounted(() => {
    tableInstance.value = undefined;
  });

  const resetFields = (...args: any[]) => {
    return tableInstance.value?.resetFields(...args);
  };

  const clearValidate = (...args: any[]) => {
    return tableInstance.value?.clearValidate(...args);
  };

  const validate = (isScrollToField?: boolean, callback?: FormValidateCallback): Promise<void> => {
    return tableInstance.value?.validate(isScrollToField, callback);
  };

  const validateField = (...args: any[]) => {
    return tableInstance.value?.clearValidate(...args);
  };

  /**
   * 新增列数
   * 暂时不考虑树形结构、自定义渲染el-table-column情况
   * @param columns
   * @param to 指定位置
   * @param front 指定位置的前面还是后面 默认在后面新增
   */
  const addFieldColumns: AddFieldColumns = function <T>(
    columns: TableColumnConfig<T>[] | TableColumnConfig<T>,
    to?: string | boolean,
    front?: boolean
  ) {
    return tableInstance.value?.addFieldColumns(columns, to, front);
  };

  const deleteFieldColumns = (
    propValues: TableColumnConfig<T>['prop'][] | TableColumnConfig<T>['prop']
  ) => {
    return tableInstance.value?.deleteFieldColumns(propValues);
  };

  const updateFieldColumns = (
    columns: TableColumnConfig<T>[] | TableColumnConfig<T>,
    fullUpdate?: boolean
  ) => {
    return tableInstance.value?.updateFieldColumns(columns, fullUpdate);
  };

  const clearSelection = () => {
    return tableInstance.value?.clearSelection();
  };

  const setSingleSelection = (data: any[], row: RowData, selected?: boolean) => {
    const rowKey = tableInstance.value.$attrs['row-key'] || tableInstance.value.$attrs.rowKey;
    const rowIndex = data.findIndex((_row: any) => _row[rowKey] === row);
    if (rowIndex > -1) {
      return tableInstance.value?.toggleRowSelection(data[rowIndex], !!selected);
    }
  };

  const toggleRowSelection = (row: RowData, selected?: boolean) => {
    const data = tableInstance.value?.getData() ?? [];
    if (isString(row) || isNumber(row)) {
      setSingleSelection(data, row, selected);
    } else if (isArray(row)) {
      row.forEach(_row => {
        if (isString(_row) || isNumber(_row)) {
          setSingleSelection(data, _row, selected);
        } else {
          return tableInstance.value?.toggleRowSelection(_row, !!selected);
        }
      });
    }
    return tableInstance.value?.toggleRowSelection(row, !!selected);
  };
  const getSelectedRows = () => {
    return tableInstance.value?.getSelectedRows();
  };
  return {
    resetFields,
    clearValidate,
    validate,
    validateField,
    addFieldColumns,
    deleteFieldColumns,
    updateFieldColumns,
    clearSelection,
    getSelectedRows,
    toggleRowSelection,
    registry
  };
};
