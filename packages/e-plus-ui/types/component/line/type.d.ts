/**
 * 文本位置
 */
export type ILineTextPos = 'left' | 'right' | 'center';
export interface ILineProps {
    /**
     * 分割线方向
     * @default horizontal
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * 文本位置
     * @default left
     */
    position?: ILineTextPos;
    /**
     * 边框宽度
     * @default 1px
     */
    borderWidth?: string;
    /**
     * 是否为虚线
     * @default false
     */
    dashed?: boolean;
    /**
     * 偏移量
     * 当设置position=`center`时，该值无效
     */
    offset?: string | number;
    /**
     * 边框颜色
     */
    color?: string;
    /**
     * 边距
     * @default 8
     */
    margin?: string;
    /**
     * 是否使用渐变
     * 只有在position=`center`或者没有default slot时有效
     * @default false
     */
    linear?: boolean;
}
