import { type PropType } from 'vue';
import type { ITableColumnConfig } from '../type';
export declare const TableColumnProps: {
    columnItem: {
        type: PropType<ITableColumnConfig<any>>;
        default: () => ITableColumnConfig<any>;
    };
    columns: {
        type: PropType<ITableColumnConfig<any>[]>;
        default: () => ITableColumnConfig<any>[];
    };
    /**
     * 是否使用表单
     */
    useFormValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 以下使用el-table-column几个参数
     */
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: StringConstructor;
};
declare const _default: import("vue").DefineComponent<{
    columnItem: {
        type: PropType<ITableColumnConfig<any>>;
        default: () => ITableColumnConfig<any>;
    };
    columns: {
        type: PropType<ITableColumnConfig<any>[]>;
        default: () => ITableColumnConfig<any>[];
    };
    /**
     * 是否使用表单
     */
    useFormValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 以下使用el-table-column几个参数
     */
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: StringConstructor;
}, {
    eventListeners: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-row-view"[], "click-row-view", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columnItem: {
        type: PropType<ITableColumnConfig<any>>;
        default: () => ITableColumnConfig<any>;
    };
    columns: {
        type: PropType<ITableColumnConfig<any>[]>;
        default: () => ITableColumnConfig<any>[];
    };
    /**
     * 是否使用表单
     */
    useFormValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 以下使用el-table-column几个参数
     */
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: StringConstructor;
}>> & {
    "onClick-row-view"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    columnItem: ITableColumnConfig<any>;
    columns: ITableColumnConfig<any>[];
    useFormValidation: boolean;
}, {}>;
export default _default;
