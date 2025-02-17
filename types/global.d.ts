
export {}
 // 全局类型组件
/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    EpSliderVerify: typeof import('@e-plus-ui/pure/components')['EpSliderVerify']
  }
}
