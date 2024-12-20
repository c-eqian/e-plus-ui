import type { CSSProperties, Ref } from 'vue';
export type ContainerType = 'header' | 'search' | 'footer' | 'toolbar' | 'content' | 'adapt';
export type ContainerTypeCls = `${ContainerType}Class`;
export type ContainerTypeStyles = `${ContainerType}Style`;
type AdaptPageConfig = {
  /**
   * 额外的高度，如果出现其他额外高度计算时
   * @default 0
   */
  extraHeight?: number;
} & {
  [P in ContainerTypeCls]?: string;
} & {
  [P in ContainerTypeStyles]?: CSSProperties;
};

/**
 * 参数类型
 */
export type AdaptPageProps = {
  config?: AdaptPageConfig | Ref<AdaptPageConfig>;
};
