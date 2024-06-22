// @ts-nocheck

import EpButton from './component/button/index';
import EpCard from './component/card/index';
import EpLine from './component/line/index';
import { EpTable, EpTableColumn } from './component/table/index';
import EpVirtualList from './component/virtual-list/index';
import EpCopyText from './component/copy-text/index';
import EpForm from './component/form/index';
import EpImageHover from './component/image-hover/index';
import EpFormSchema from './component/form-schema/index';
declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EpButton: typeof EpButton;
    EpCard: typeof EpCard;
    EpLine: typeof EpLine;
    EpCopyText: typeof EpCopyText;
    EpTable: typeof EpTable;
    EpImageHover: typeof EpImageHover;
    EpTableColumn: typeof EpTableColumn;
    EpForm: typeof EpForm;
    EpFormSchema: typeof EpFormSchema;
    EpVirtualList: typeof EpVirtualList;
  }
}

export {};
