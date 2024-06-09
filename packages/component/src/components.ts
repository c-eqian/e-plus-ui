// @ts-nocheck

import EpButton from './component/button/index';
import EpCard from './component/card/index';
import EpLine from "./component/line/index";
import { EpTable, EpTableColumn } from './component/table/index';
import EpVirtualList from './component/virtual-list/index';
import EpCopyText from './component/copy-text/index';
import EpForm from './component/form/index';
declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EpButton: typeof EpButton;
    EpCard: typeof EpCard;
      EpLine: typeof EpLine,
    EpCopyText: typeof EpCopyText;
    EpTable: typeof EpTable;
    EpTableColumn: typeof EpTableColumn;
    EpForm: typeof EpForm;
    EpVirtualList: typeof EpVirtualList;
  }
}

export {};
