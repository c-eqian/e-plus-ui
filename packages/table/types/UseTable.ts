import type { FormValidateCallback } from 'element-plus';
import type { ComponentInternalInstance } from 'vue';

import { ITableColumnConfig } from '../type';

// 定义重载的AddFieldColumns类型
export type AddFieldColumns = {
  (
    columns: ITableColumnConfig | ITableColumnConfig[],
    to?: string,
    front?: boolean
  ): void;
  (columns: ITableColumnConfig | ITableColumnConfig[], front?: boolean): void;
  (columns: ITableColumnConfig | ITableColumnConfig[]): void;
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
  validate: (
    isScrollToField?: boolean,
    callback?: FormValidateCallback
  ) => Promise<any>;
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
    propValues: ITableColumnConfig<T>['prop'][] | ITableColumnConfig<T>['prop']
  ) => void;
  /**
   * 更新列
   * @param columns 支持单个或者数组
   * @param fullUpdate 替换还是合并，为true时，直接替换，否则合并，默认合并
   */
  updateFieldColumns: (
    columns: ITableColumnConfig<T>[] | ITableColumnConfig<T>,
    fullUpdate?: boolean
  ) => void;
};
