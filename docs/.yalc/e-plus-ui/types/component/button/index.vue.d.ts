/** __vue_virtual_code_placeholder */
import "./index.less";
import { ButtonBorder, ButtonNativeType, ButtonSize, ButtonType } from "./interface";
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    prefixIcon?: string;
    suffixIcon?: string;
    loadingIcon?: string;
    borderStyle?: string;
    border?: ButtonBorder;
    fluid?: boolean;
    radius?: boolean;
    loading?: boolean;
    disabled?: boolean;
    nativeType?: ButtonNativeType;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    borderStyle: string;
    radius: boolean;
    loadingIcon: string;
    nativeType: string;
    fluid: boolean;
    loading: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    borderStyle: string;
    radius: boolean;
    loadingIcon: string;
    nativeType: string;
    fluid: boolean;
    loading: boolean;
}>>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    borderStyle: string;
    loading: boolean;
    radius: boolean;
    loadingIcon: string;
    fluid: boolean;
    nativeType: ButtonNativeType;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
