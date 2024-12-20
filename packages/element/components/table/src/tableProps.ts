import type { OperationType, TableColumnConfig } from './type';

import type { PropType } from 'vue';

export const TableProps = {
  data: {
    type: Array as PropType<any[] /** 不知道数据的格式 */>,
    default: () => []
  },
  height: {
    type: [Number, String],
    default: '100%'
  },
  tooltipEffect: {
    type: String,
    default: 'dark'
  },
  border: {
    type: Boolean,
    default: false
  },
  sortable: {
    type: Boolean,
    default: false
  },
  highlightCurrentRow: {
    type: Boolean,
    default: false
  },
  /**
   * 配置highlightCurrentRow时需要
   * 单选框
   */
  idKey: {
    type: String,
    default: ''
  },
  column: {
    type: Array as PropType<TableColumnConfig[]>,
    default: () => []
  },
  /**
   * 是否使用表单验证
   */
  useFormValidation: {
    type: Boolean,
    default: false
  },
  formModelExtender: {
    type: Object,
    default: () => ({})
  },
  operationLabel: {
    type: Object as PropType<Record<OperationType, string>>,
    default: () => {
      return {};
    }
  },
  // 分页属性
  /**
   * 是否需要使用分页
   * @default false
   */
  pagination: {
    type: Boolean,
    default: false
  },
  paTotal: {
    type: Number,
    default: 0
  },
  paPage: {
    type: Number,
    default: 1
  },
  paLimit: {
    type: Number,
    default: 20
  },
  paPageSizes: {
    type: Array<number>,
    default: () => [10, 20, 30, 50]
  },
  /**
   * 分页其他属性，
   * 不常用的统一放在此处
   * 必须以pa开头，如需要设置pagerCount属性，则paPagerCount
   */
  paExtra: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  }
};

// 注册table事件
export const TableEmits = [
  'current-change',
  'selection-change',
  'click-row',
  'click-btn',
  'click-row-delete',
  'click-row-add',
  'click-row-view',
  'registry',
  'click-row-edit',
  'dbClick-row',
  'page-change',
  'update:pa-page',
  'update:pa-limit'
];
