import type { VNode } from 'vue';
export type ConfirmDialog = {
  /**
   * 继续执行回调
   * 如果返回true 或者返回promise非reject、或者什么都不返回，则在执行成功后关闭，否则不会关闭
   */
  onResolve?: <T = any>(params?: T) => undefined | boolean | Promise<any>;
  /**
   * 失败的回调
   */
  onReject?: (e: any) => void;
  /**
   * HTML模板字符串，如果使用该值，将覆盖默认
   */
  HTMLString?: string | VNode;
  /**
   * 预设提示前缀
   */
  presetPrefix?: '是否删除' | '是否修改';
  /**
   * 参数
   */
  params?: unknown;
};
