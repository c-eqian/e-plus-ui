import { Ref, CSSProperties } from 'vue';
export type ContainerType =
  | 'header'
  | 'search'
  | 'footer'
  | 'toolbar'
  | 'table'
  | 'adapt';
export type ContainerTypeCls = `${ContainerType}Class`;
export type ContainerTypeStyles = `${ContainerType}Style`;
type AdaptTablePropsConfig = {
  /**
   * 额外的高度，如果出现其他额外高度计算时
   * @default 0
   */
  extraHeight: number;
} & {
  [P in ContainerTypeCls]?: string;
} & {
  [P in ContainerTypeStyles]?: CSSProperties;
};
export type AdaptTableProps = {
  config?: AdaptTablePropsConfig | Ref<AdaptTablePropsConfig>;
};
