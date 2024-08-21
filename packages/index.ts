import type { App, Plugin } from 'vue';

import './theme/index.less';
/**
 * 导出组件类型
 */
export * from './table/type';
export * from './table/hooks/useTable';
export * from './table/packages/tableProps';
export * from './form';
export * from './virtual-list/type';
export * from './form-schema';
export * from './comment';
export * from './comment-layout';
export * from './pagination';
export * from './icon';
export * from './menu';
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
import EpEditor from './editor';
import EpLetterLoading from './letter-cude/index';
import EpDiamondLoading from './diamond/index';
import EpLoading from './loading/index';
import EpPagination from './pagination';
import EpTextFold from './text-fold';
import EpNoticeBar from './notice-bar';
import EpIcon from './icon';
import EpMenu from './menu';
/**
 * 高级组件
 */
import { EpTable, EpTableColumn } from './table';
import EpForm from './form';
import EpFormSchema from './form-schema';
import EpVirtualList from './virtual-list/index';
import EpCommentLayout from './comment-layout';
import EpComment from './comment';
import { INSTALLED_KEY } from './utils/constant';
const components: Record<string, Plugin> = {
  EpButton,
  EpCard,
  EpLine,
  EpCopyText,
  EpImage,
  EpMenu,
  EpLetterLoading,
  EpDiamondLoading,
  EpLoading,
  EpEditor,
  EpPagination,
  EpNoticeBar,
  EpIcon,
  EpTextFold,
  EpVirtualList,
  EpTable,
  EpTableColumn,
  EpFormSchema,
  EpForm,
  EpCommentLayout,
  EpComment,
};

const install = (app: App, options?: any): void => {
  if (app[INSTALLED_KEY]) return;
  app[INSTALLED_KEY] = true;
  for (const key of Object.keys(components)) {
    if (!key) continue;
    app.use(components[key], options);
  }
};

export {
  EpButton,
  EpCard,
  EpCopyText,
  EpLine,
  EpImage,
  EpMenu,
  EpLetterLoading,
  EpDiamondLoading,
  EpLoading,
  EpEditor,
  EpPagination,
  EpNoticeBar,
  EpIcon,
  EpTextFold,
  EpTable,
  EpTableColumn,
  EpFormSchema,
  EpForm,
  EpVirtualList,
  EpCommentLayout,
  EpComment,
  install,
};

export default { install };

export type {} from './components';
