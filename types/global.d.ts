declare module 'vue' {
    // 全局类型组件
    export interface GlobalComponents {
        EpLine: typeof import('@e-plus-ui/pure/components')['EpLine'];
        EpDiamondLoading: typeof import('@e-plus-ui/pure/components')['EpDiamondLoading'];
        EpIcon: typeof import('@e-plus-ui/pure/components')['EpIcon'];
        EpLetterLoading: typeof import('@e-plus-ui/pure/components')['EpLetterLoading'];
        EpNoticeBar: typeof import('@e-plus-ui/pure/components')['EpNoticeBar'];
        EpSkeleton: typeof import('@e-plus-ui/pure/components')['EpSkeleton'];
        EpSlideLoading: typeof import('@e-plus-ui/pure/components')['EpSlideLoading'];
        EpTextFold: typeof import('@e-plus-ui/pure/components')['EpTextFold'];
        EpVirtualList: typeof import('@e-plus-ui/pure/components')['EpVirtualList'];
        EpAdaptPage: typeof import('@e-plus-ui/element/components')['EpAdaptPage'];
        EpAdminLayout: typeof import('@e-plus-ui/element/components')['EpAdminLayout'];
        EpCopyText: typeof import('@e-plus-ui/element/components')['EpCopyText'];
        EpEditor: typeof import('@e-plus-ui/element/components')['EpEditor'];
        EpFormSchema: typeof import('@e-plus-ui/element/components')['EpFormSchema'];
        EpMenu: typeof import('@e-plus-ui/element/components')['EpMenu'];
        EpPagination: typeof import('@e-plus-ui/element/components')['EpPagination'];
        EpTable: typeof import('@e-plus-ui/element/components')['EpTable'];
        EpCommentLayout: typeof import('@e-plus-ui/element/components')['EpCommentLayout'];
        EpComment: typeof import('@e-plus-ui/element/components')['EpComment'];
        EpCard: typeof import('@e-plus-ui/pure/components')['EpCard'];
    }
}

export {}
