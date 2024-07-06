import { type DefineComponent, type PropType } from 'vue';
import type { FormItemsSchema } from '../type';
declare const _default: DefineComponent<{
    item: {
        type: PropType<FormItemsSchema<any>>;
        default: () => {};
    };
    columns: {
        type: NumberConstructor;
        default: number;
    };
    isSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: PropType<FormItemsSchema<any>>;
        default: () => {};
    };
    columns: {
        type: NumberConstructor;
        default: number;
    };
    isSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    item: FormItemsSchema<any>;
    columns: number;
    isSearch: boolean;
}, {}>;
export default _default;
