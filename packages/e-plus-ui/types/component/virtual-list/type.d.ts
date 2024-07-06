export interface IVirtualList<T = any> {
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * 容器高度，计算显示数量
     * @default 500
     */
    height?: number;
    /**
     * 宽度
     * @default 100%
     */
    width?: number | string;
    /**
     * 预估每行高度
     * @default 30
     */
    itemHeight?: number;
    /**
     * 是否动态高度
     * @default false
     */
    isDynamic?: boolean;
    /**
     * 缓存数量
     * @default 2
     */
    cache?: number;
    /**
     * 数据
     * @default []
     */
    data: T[];
}
