import { isArray, isBoolean, isEmpty, isString, useMerge } from '@eqian/utils-vue';
import { unref, type Ref } from 'vue';

import type { TableColumnConfig } from '../type';
export const useColumns = (getTableInstance: () => any) => {
  const filterType = (typeValue?: string) => {
    return typeValue && ['index', 'selection', 'expand', 'operation'].includes(typeValue);
  };
  /**
   * 新增列数
   * 暂时不考虑树形结构、自定义渲染el-table-column情况
   * @param columns
   * @param args
   */
  const addFieldColumns = (columns: TableColumnConfig[] | TableColumnConfig, ...[to, front]) => {
    const instance = getTableInstance();
    const columnsData = instance?.getColumns() as Ref<TableColumnConfig[]>;
    const findIndexByProp = (prop: string) => {
      return unref(columnsData).findIndex(item => item.prop === prop);
    };
    const insertTo = (_front: boolean, index?: number) => {
      const newColumns: TableColumnConfig[] = !isArray(columns) ? [columns] : columns;
      if (index === undefined || index > columnsData.value.length) {
        if (_front) {
          const firstColumn = columnsData.value[0];
          const isFilterType = filterType(firstColumn?.type);
          if (isFilterType) {
            columnsData.value.splice(1, 0, ...newColumns);
            return;
          }
          columnsData.value.unshift(...newColumns);
        } else {
          const lastIndex = columnsData.value.length - 1;
          const lastColumn = columnsData.value[lastIndex];
          const isFilterType =
            filterType(lastColumn?.type) || !isEmpty(lastColumn?.operationType ?? '');
          isFilterType
            ? columnsData.value.splice(lastIndex, 0, ...newColumns)
            : columnsData.value.push(...newColumns);
        }
        return;
      }
      if (!_front) {
        columnsData.value.splice(index + 1, 0, ...newColumns);
      } else {
        // const firstColumn = columnsData.value[0]
        // const isFilterType = filterType(firstColumn?.type)
        // console.log(columnsData.value)
        columnsData.value.splice(index, 0, ...newColumns);
      }
    };
    /**
     * 数据为空，并且指定新增位置，不做处理
     */
    if ((isEmpty(unref(columns)) && isString(to)) || isEmpty(columns)) {
      return;
    }
    if (isBoolean(to) || to === undefined) {
      insertTo(isBoolean(to) ? to : false);
      return;
    }
    const insertToIndex = findIndexByProp(to as string);
    insertTo(!!front, insertToIndex);
    return instance?.updateColumns(columnsData.value);
  };
  const deleteFieldColumns = (
    propValues: TableColumnConfig['prop'][] | TableColumnConfig['prop']
  ) => {
    const instance = getTableInstance();
    const columnsData = instance?.getColumns() as Ref<TableColumnConfig[]>;
    if (isArray(propValues)) {
      propValues.forEach(prop => {
        const entries = Object.entries(columnsData.value);
        for (const entry of entries) {
          const [index, column] = entry;
          if (column.prop === prop) {
            columnsData.value.splice(+index, 1);
            break;
          }
        }
      });
      return instance?.updateColumns(columnsData.value);
    } else {
      const index = columnsData.value.findIndex(column => column.prop === propValues);
      if (index > -1) {
        columnsData.value.splice(index, 1);
        return instance?.updateColumns(columnsData.value);
      }
    }
  };
  const updateFieldColumns = (
    columns: TableColumnConfig[] | TableColumnConfig,
    update?: boolean
  ) => {
    const instance = getTableInstance();
    const columnsData = instance?.getColumns() as Ref<TableColumnConfig[]>;
    const entries = Object.entries(columnsData.value);
    if (isArray(columns)) {
      columns.forEach(column => {
        for (const entry of entries) {
          const [index, originColumn] = entry;
          if (originColumn.prop === column.prop) {
            if (update) {
              columnsData.value = columnsData.value.with(+index, column);
            } else {
              columnsData.value[+index] = useMerge(columnsData.value[+index], column);
            }
            break;
          }
        }
      });
      return instance?.updateColumns(columnsData.value);
    } else {
      const index = columnsData.value.findIndex(column => column.prop === columns.prop);
      if (index > -1) {
        if (update) {
          columnsData.value = columnsData.value.with(+index, columns);
        } else {
          columnsData.value[+index] = useMerge(columnsData.value[+index], columns);
        }
        return instance?.updateColumns(columnsData.value);
      }
    }
  };
  return {
    addFieldColumns,
    updateFieldColumns,
    deleteFieldColumns
  };
};
