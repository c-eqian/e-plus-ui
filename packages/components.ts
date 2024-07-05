// @ts-nocheck

import EpButton from './button/index';
import EpCard from './card/index';
import EpLine from './line/index';
import { EpTable, EpTableColumn } from './table';
import EpVirtualList from './virtual-list/index';
import EpCopyText from './copy-text/index';
import EpForm from './form';
import EpImageHover from './image-hover/index';
import EpFormSchema from './form-schema';
import EpLetterLoading from './letter-cude/index';
import EpDiamondLoading from './diamond/index';
import EpLoading from './loading/index';
declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EpButton: typeof EpButton;
    EpCard: typeof EpCard;
    EpLine: typeof EpLine;
    EpLetterLoading: typeof EpLetterLoading;
    EpDiamondLoading: typeof EpDiamondLoading;
    EpLoading: typeof EpLoading;
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
