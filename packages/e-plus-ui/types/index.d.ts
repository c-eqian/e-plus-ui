import type { App } from 'vue';
import './theme/index.less';
/**
 * 导出组件类型
 */
export * from './component/table/type';
export * from './component/form/index';
export * from './component/virtual-list/type';
export * from './component/form-schema/index';
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
import EpImageHover from './component/image-hover/index';
import EpLetterLoading from './component/letter-cude/index';
import EpDiamondLoading from './component/diamond/index';
import EpLoading from './component/loading/index';
/**
 * 高级组件
 */
import { EpTable, EpTableColumn } from './component/table/index';
import EpForm from './component/form/index';
import EpFormSchema from './component/form-schema/index';
import EpVirtualList from './component/virtual-list/index';
declare const install: (app: App, options?: any) => void;
export { EpButton, EpCard, EpCopyText, EpLine, EpImageHover, EpLetterLoading, EpDiamondLoading, EpLoading, EpTable, EpTableColumn, EpFormSchema, EpForm, EpVirtualList, install, };
declare const _default: {
    install: (app: App<any>, options?: any) => void;
};
export default _default;
export type {} from './components';
