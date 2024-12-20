/**
 * 加载动画类型
 */
export type LoadingType = 'wave' | 'beat';
/**
 * 参数类型
 */
export type SlideLoadingProps = {
  /**
   * 加载
   * @default false
   */
  loading?: boolean;
  /**
   * 加载动画类型
   * @default wave
   */
  loadingType?: LoadingType;
};
