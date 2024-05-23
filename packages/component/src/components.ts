// @ts-nocheck

import EpButton from './component/button/index';
import EpCard from './component/card/index';
import EpTable from './component/table/index';
import EpCopyText from './component/copy-text/index';
declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EpButton: typeof EpButton;
    EpCard: typeof EpCard;
    EpCopyText: typeof EpCopyText;
    EpTable: typeof EpTable;
  }
}

export {};
