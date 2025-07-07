
export {}
 // 全局类型组件
/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    EpAdaptPage: typeof import('@e-plus-ui/element/components')['EpAdaptPage']
    EpAdminLayout: typeof import('@e-plus-ui/element/components')['EpAdminLayout']
    EpAuthPage: typeof import('@e-plus-ui/element/components')['EpAuthPage']
    EpCard: typeof import('@e-plus-ui/pure/components')['EpCard']
    EpComment: typeof import('@e-plus-ui/element/components')['EpComment']
    EpCommentLayout: typeof import('@e-plus-ui/element/components')['EpCommentLayout']
    EpContextMenu: typeof import('@e-plus-ui/pure/components')['EpContextMenu']
    EpCopyText: typeof import('@e-plus-ui/element/components')['EpCopyText']
    EpDiamondLoading: typeof import('@e-plus-ui/pure/components')['EpDiamondLoading']
    EpEditor: typeof import('@e-plus-ui/element/components')['EpEditor']
    EpFormSchema: typeof import('@e-plus-ui/element/components')['EpFormSchema']
    EpFormTable: typeof import('@e-plus-ui/element/components')['EpFormTable']
    EpIcon: typeof import('@e-plus-ui/pure/components')['EpIcon']
    EpLetterLoading: typeof import('@e-plus-ui/pure/components')['EpLetterLoading']
    EpLine: typeof import('@e-plus-ui/pure/components')['EpLine']
    EpLoading: typeof import('@e-plus-ui/pure/components')['EpLoading']
    EpMenu: typeof import('@e-plus-ui/element/components')['EpMenu']
    EpNoticeBar: typeof import('@e-plus-ui/pure/components')['EpNoticeBar']
    EpPagination: typeof import('@e-plus-ui/element/components')['EpPagination']
    EpSelectIcon: typeof import('@e-plus-ui/element/components')['EpSelectIcon']
    EpSkeleton: typeof import('@e-plus-ui/pure/components')['EpSkeleton']
    EpSlideLoading: typeof import('@e-plus-ui/pure/components')['EpSlideLoading']
    EpSliderVerify: typeof import('@e-plus-ui/pure/components')['EpSliderVerify']
    EpTable: typeof import('@e-plus-ui/element/components')['EpTable']
    EpTabsBar: typeof import('@e-plus-ui/element/components')['EpTabsBar']
    EpTextFold: typeof import('@e-plus-ui/pure/components')['EpTextFold']
    EpVirtualList: typeof import('@e-plus-ui/pure/components')['EpVirtualList']
  }
}
