import { type PropType } from 'vue';
import type { ITableColumnConfig } from '../type';
declare const _default: import("vue").DefineComponent<{
    column: {
        type: PropType<ITableColumnConfig<any>>;
        default: () => ITableColumnConfig<any>;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
    row: {
        type: ObjectConstructor;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-btn"[], "click-btn", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    column: {
        type: PropType<ITableColumnConfig<any>>;
        default: () => ITableColumnConfig<any>;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
    row: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    "onClick-btn"?: ((...args: any[]) => any) | undefined;
}, {
    index: number;
    column: ITableColumnConfig<any>;
    row: Record<string, any>;
}, {}>;
export default _default;
