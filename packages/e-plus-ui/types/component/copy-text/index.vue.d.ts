/** __vue_virtual_code_placeholder */
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"flex">;
        default: string;
    };
    justify: {
        type: PropType<"start" | "end" | "center" | "space-around" | "space-between">;
        default: string;
    };
    align: {
        type: PropType<"top" | "middle" | "bottom">;
        default: string;
    };
}, {
    textComputedRef: import("vue").ComputedRef<string>;
    textRef: import("vue").Ref<HTMLElement | undefined>;
    fromAttr: import("vue").ComputedRef<boolean>;
    val: import("vue").ComputedRef<string>;
    handleCopy: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"flex">;
        default: string;
    };
    justify: {
        type: PropType<"start" | "end" | "center" | "space-around" | "space-between">;
        default: string;
    };
    align: {
        type: PropType<"top" | "middle" | "bottom">;
        default: string;
    };
}>>, {
    type: "flex";
    text: string;
    justify: "start" | "end" | "center" | "space-around" | "space-between";
    align: "top" | "middle" | "bottom";
}, {}>;
export default _default;
