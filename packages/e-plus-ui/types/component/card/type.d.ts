export type Shadow = 'always' | 'never' | 'hover';
export interface CardProps {
    /**
     * 标题
     */
    title?: string;
    /**
     * 阴影时机
     */
    shadow?: Shadow;
}
/**
 * 插槽名称
 */
export type SlotsType = {
    title: () => any;
    extra: () => any;
    body: () => any;
    footer: () => any;
    default: () => any;
};
