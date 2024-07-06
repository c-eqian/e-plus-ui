import { type FormValidateCallback } from 'element-plus';
import { type PropType } from 'vue';
import type { IFormItemConfig } from './type';
declare const _default: import("vue").DefineComponent<{
    model: {
        type: PropType<import("vue").Ref<{
            [x: string]: any;
        }>>;
        default: () => void;
    };
    labelWidth: {
        type: PropType<string | number | undefined>;
        default: string;
    };
    formItems: {
        type: PropType<IFormItemConfig<any>[]>;
        default: () => never[];
    };
}, {
    epFormRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            readonly disabled?: boolean | undefined;
            readonly labelPosition?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "right" | "left", unknown> | undefined;
            readonly requireAsteriskPosition?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "right" | "left", unknown> | undefined;
            readonly labelWidth?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
            readonly labelSuffix?: string | undefined;
            readonly showMessage?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly validateOnRuleChange?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly inline?: boolean | undefined;
            readonly inlineMessage?: boolean | undefined;
            readonly statusIcon?: boolean | undefined;
            readonly hideRequiredAsterisk?: boolean | undefined;
            readonly scrollToError?: boolean | undefined;
            readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown> | undefined;
            style?: unknown;
            key?: string | number | symbol | undefined;
            readonly model?: Record<string, any> | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            readonly rules?: Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>> | undefined;
            class?: unknown;
            readonly scrollIntoViewOptions?: import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown> | undefined;
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "right" | "left", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "right" | "left", unknown, "left", boolean>;
            readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }, {
            COMPONENT_NAME: string;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly model: ObjectConstructor;
                readonly rules: {
                    readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "right" | "left", unknown, "right", boolean>;
                readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "right" | "left", unknown, "left", boolean>;
                readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly inline: BooleanConstructor;
                readonly inlineMessage: BooleanConstructor;
                readonly statusIcon: BooleanConstructor;
                readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                /**
                 * 使用 type 模板
                 * 在tsx中使用component，似乎不支持，需要单独提取到模板组件中
                 */
                readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly hideRequiredAsterisk: BooleanConstructor;
                readonly scrollToError: BooleanConstructor;
                readonly scrollIntoViewOptions: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly size: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
            }>> & {
                onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
            }>>;
            emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
            fields: import("element-plus").FormItemContext[];
            formSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            formClasses: import("vue").ComputedRef<(string | {
                [x: string]: boolean | import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "right" | "left", unknown>;
            })[]>;
            getField: (prop: string) => import("element-plus").FormItemContext | undefined;
            addField: (field: import("element-plus").FormItemContext) => void;
            removeField: (field: import("element-plus").FormItemContext) => void;
            resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            isValidatable: import("vue").ComputedRef<boolean>;
            obtainValidateFields: (props: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => import("element-plus").FormItemContext[];
            validate: (callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
            validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            scrollToField: (prop: import("element-plus").FormItemProp) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            validate: (prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => boolean;
        }, string, {
            readonly disabled: boolean;
            readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "right" | "left", unknown>;
            readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "right" | "left", unknown>;
            readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelSuffix: string;
            readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly inline: boolean;
            readonly inlineMessage: boolean;
            readonly statusIcon: boolean;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "right" | "left", unknown, "right", boolean>;
        readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "right" | "left", unknown, "left", boolean>;
        readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideRequiredAsterisk: BooleanConstructor;
        readonly scrollToError: BooleanConstructor;
        readonly scrollIntoViewOptions: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        COMPONENT_NAME: string;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "right" | "left", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "right" | "left", unknown, "left", boolean>;
            readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            /**
             * 使用 type 模板
             * 在tsx中使用component，似乎不支持，需要单独提取到模板组件中
             */
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }>>;
        emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
        fields: import("element-plus").FormItemContext[];
        formSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        formClasses: import("vue").ComputedRef<(string | {
            [x: string]: boolean | import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "right" | "left", unknown>;
        })[]>;
        getField: (prop: string) => import("element-plus").FormItemContext | undefined;
        addField: (field: import("element-plus").FormItemContext) => void;
        removeField: (field: import("element-plus").FormItemContext) => void;
        resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        isValidatable: import("vue").ComputedRef<boolean>;
        obtainValidateFields: (props: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => import("element-plus").FormItemContext[];
        validate: (callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        scrollToField: (prop: import("element-plus").FormItemProp) => void;
    }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
    toRefModel: import("vue").Ref<{
        [x: string]: any;
    }>;
    validate: (isScrollToField?: boolean, callback?: FormValidateCallback) => Promise<boolean | undefined>;
    resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: PropType<import("vue").Ref<{
            [x: string]: any;
        }>>;
        default: () => void;
    };
    labelWidth: {
        type: PropType<string | number | undefined>;
        default: string;
    };
    formItems: {
        type: PropType<IFormItemConfig<any>[]>;
        default: () => never[];
    };
}>>, {
    model: import("vue").Ref<{
        [x: string]: any;
    }>;
    labelWidth: string | number | undefined;
    formItems: IFormItemConfig<any>[];
}, {}>;
export default _default;
