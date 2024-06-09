import type { App, Plugin } from 'vue';

import './theme/index.less';
/**
 * 导出组件类型
 */
export * from './component/table/type';
export * from './component/form/index';
export * from './component/virtual-list/type';
/**
 * 导出工具函数
 */
/**
 * 基础组件
 */
import EpButton from './component/button/index';
import EpCard from './component/card/index';
import EpCopyText from './component/copy-text/index';
import EpLine from './component/line/index';
/**
 * 高级组件
 */
import { EpTable, EpTableColumn } from './component/table/index';
import EpForm from './component/form/index';
import EpVirtualList from './component/virtual-list/index';

const components: Record<string, Plugin> = {
  EpButton,
  EpCard,
  EpLine,
  EpCopyText,

  EpVirtualList,
  EpTable,
  EpTableColumn,
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
  EpTable,
  EpTableColumn,
  EpForm,
  EpVirtualList,
  install,
};

export default { install };

export type {} from './components';
