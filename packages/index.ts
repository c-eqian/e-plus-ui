import type { App, Plugin } from 'vue';

import './theme/index.less';
/**
 * 导出组件类型
 */
export * from './table/type';
export * from './form';
export * from './virtual-list/type';
export * from './form-schema';
/**
 * 导出工具函数
 */
/**
 * 基础组件
 */
import EpButton from './button/index';
import EpCard from './card/index';
import EpCopyText from './copy-text/index';
import EpLine from './line/index';
import EpImage from './image/index';

import EpLetterLoading from './letter-cude/index';
import EpDiamondLoading from './diamond/index';
import EpLoading from './loading/index';
/**
 * 高级组件
 */
import { EpTable, EpTableColumn } from './table';
import EpForm from './form';
import EpFormSchema from './form-schema';
import EpVirtualList from './virtual-list/index';

const components: Record<string, Plugin> = {
  EpButton,
  EpCard,
  EpLine,
  EpCopyText,
  EpImage,
  EpLetterLoading,
  EpDiamondLoading,
  EpLoading,

  EpVirtualList,
  EpTable,
  EpTableColumn,
  EpFormSchema,
  EpForm,
};

const install = (app: App, options?: any): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

export {
  EpButton,
  EpCard,
  EpCopyText,
  EpLine,
  EpImage,
  EpLetterLoading,
  EpDiamondLoading,
  EpLoading,
  EpTable,
  EpTableColumn,
  EpFormSchema,
  EpForm,
  EpVirtualList,
  install,
};

export default { install };

export type {} from './components';
