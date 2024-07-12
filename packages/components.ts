// @ts-nocheck
type A = import('@vue/runtime-core').GlobalComponents;
import EpButton from './button/index';
import EpCard from './card/index';
import EpLine from './line/index';
import { EpTable, EpTableColumn } from './table';
import EpVirtualList from './virtual-list/index';
import EpCopyText from './copy-text/index';
import EpForm from './form';
import EpImage from './image/index';
import EpFormSchema from './form-schema';
import EpLetterLoading from './letter-cude/index';
import EpDiamondLoading from './diamond/index';
import EpLoading from './loading/index';
import EpCommentItem from './comment-item/index';
import EpCommentLayout from './comment-layout';
import EpComment from './comment';
import EpEditor from './editor';
import EpPagination from './pagination';
declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents extends A {
    EpButton: typeof EpButton;
    EpCard: typeof EpCard;
    EpLine: typeof EpLine;
    EpLetterLoading: typeof EpLetterLoading;
    EpDiamondLoading: typeof EpDiamondLoading;
    EpLoading: typeof EpLoading;
    EpCopyText: typeof EpCopyText;
    EpTable: typeof EpTable;
    EpImage: typeof EpImage;
    EpTableColumn: typeof EpTableColumn;
    EpForm: typeof EpForm;
    EpFormSchema: typeof EpFormSchema;
    EpVirtualList: typeof EpVirtualList;
    EpCommentItem: typeof EpCommentItem;
    EpCommentLayout: typeof EpCommentLayout;
    EpComment: typeof EpComment;
    EpEditor: typeof EpEditor;
    EpPagination: typeof EpPagination;
  }
}

export {};
