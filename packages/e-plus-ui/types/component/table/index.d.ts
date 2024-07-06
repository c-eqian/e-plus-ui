declare const EpTable: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            border?: boolean | undefined;
            data?: any[] | undefined;
            height?: string | number | undefined;
            column?: import("./type").ITableColumnConfig<any>[] | undefined;
            useFormValidation?: boolean | undefined;
            tooltipEffect?: string | undefined;
            highlightCurrentRow?: boolean | undefined;
            idKey?: string | undefined;
            formModelExtender?: Record<string, any> | undefined;
            operationLabel?: Record<import("./type").OperationType, string> | undefined;
            style?: unknown;
            key?: string | number | symbol | undefined;
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
            "onClick-btn"?: ((...args: any[]) => any) | undefined;
            class?: unknown;
            "onClick-row-view"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onClick-row"?: ((...args: any[]) => any) | undefined;
            "onClick-row-delete"?: ((...args: any[]) => any) | undefined;
            "onClick-row-add"?: ((...args: any[]) => any) | undefined;
            "onClick-row-edit"?: ((...args: any[]) => any) | undefined;
            "onDbClick-row"?: ((...args: any[]) => any) | undefined;
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
        $emit: (event: "click-btn" | "click-row-view" | "current-change" | "selection-change" | "click-row" | "click-row-delete" | "click-row-add" | "click-row-edit" | "dbClick-row", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            height: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            tooltipEffect: {
                type: StringConstructor;
                default: string;
            };
            border: {
                type: BooleanConstructor;
                default: boolean;
            };
            highlightCurrentRow: {
                type: BooleanConstructor;
                default: boolean;
            };
            idKey: {
                type: StringConstructor;
                default: string;
            };
            column: {
                type: import("vue").PropType<import("./type").ITableColumnConfig<any>[]>;
                default: () => never[];
            };
            useFormValidation: {
                type: BooleanConstructor;
                default: boolean;
            };
            formModelExtender: {
                type: ObjectConstructor;
                default: () => {};
            };
            operationLabel: {
                type: import("vue").PropType<Record<import("./type").OperationType, string>>;
                default: () => {};
            };
        }>> & {
            "onClick-btn"?: ((...args: any[]) => any) | undefined;
            "onClick-row-view"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onClick-row"?: ((...args: any[]) => any) | undefined;
            "onClick-row-delete"?: ((...args: any[]) => any) | undefined;
            "onClick-row-add"?: ((...args: any[]) => any) | undefined;
            "onClick-row-edit"?: ((...args: any[]) => any) | undefined;
            "onDbClick-row"?: ((...args: any[]) => any) | undefined;
        }, {
            czFormRef: import("vue").Ref<({
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
                        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                            readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                    validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
                    doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
                    validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
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
                    readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
                doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
                validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
                scrollToField: (prop: import("element-plus").FormItemProp) => void;
            }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
            zkTable: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: {
                    style?: import("vue").CSSProperties | undefined;
                    className?: string | undefined;
                    tableLayout?: "fixed" | "auto" | undefined;
                    border?: boolean | undefined;
                    data?: any[] | undefined;
                    fit?: boolean | undefined;
                    lazy?: boolean | undefined;
                    scrollbarAlwaysOn?: boolean | undefined;
                    stripe?: boolean | undefined;
                    treeProps?: {
                        hasChildren?: string | undefined;
                        children?: string | undefined;
                    } | undefined;
                    showHeader?: boolean | undefined;
                    showSummary?: boolean | undefined;
                    highlightCurrentRow?: boolean | undefined;
                    defaultExpandAll?: boolean | undefined;
                    selectOnIndeterminate?: boolean | undefined;
                    indent?: number | undefined;
                    flexible?: boolean | undefined;
                    readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
                    key?: string | number | symbol | undefined;
                    readonly width?: string | number | undefined;
                    readonly height?: string | number | undefined;
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
                    readonly showOverflowTooltip?: boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined;
                    class?: unknown;
                    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
                    "onSelection-change"?: ((...args: any[]) => any) | undefined;
                    readonly tooltipEffect?: string | undefined;
                    readonly maxHeight?: string | number | undefined;
                    readonly rowKey?: string | ((row: any) => string) | undefined;
                    readonly sumText?: string | undefined;
                    readonly summaryMethod?: import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined;
                    readonly rowClassName?: import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined;
                    readonly rowStyle?: import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined;
                    readonly cellClassName?: import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined;
                    readonly cellStyle?: import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined;
                    readonly headerRowClassName?: import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined;
                    readonly headerRowStyle?: import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined;
                    readonly headerCellClassName?: import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined;
                    readonly headerCellStyle?: import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined;
                    readonly currentRowKey?: string | number | undefined;
                    readonly emptyText?: string | undefined;
                    readonly expandRowKeys?: any[] | undefined;
                    readonly defaultSort?: import("element-plus/es/components/table/src/table/defaults").Sort | undefined;
                    readonly tooltipOptions?: Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined;
                    readonly spanMethod?: ((data: {
                        row: any;
                        rowIndex: number;
                        column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                        columnIndex: number;
                    }) => number[] | {
                        rowspan: number;
                        colspan: number;
                    } | undefined) | undefined;
                    readonly load?: ((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined;
                    onSelect?: ((...args: any[]) => any) | undefined;
                    "onExpand-change"?: ((...args: any[]) => any) | undefined;
                    "onSelect-all"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
                    "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
                    "onCell-click"?: ((...args: any[]) => any) | undefined;
                    "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
                    "onRow-click"?: ((...args: any[]) => any) | undefined;
                    "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
                    "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
                    "onHeader-click"?: ((...args: any[]) => any) | undefined;
                    "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
                    "onSort-change"?: ((...args: any[]) => any) | undefined;
                    "onFilter-change"?: ((...args: any[]) => any) | undefined;
                    "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
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
                $emit: (event: "select" | "current-change" | "selection-change" | "select-all" | "expand-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend", ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    width: (StringConstructor | NumberConstructor)[];
                    height: (StringConstructor | NumberConstructor)[];
                    maxHeight: (StringConstructor | NumberConstructor)[];
                    fit: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    stripe: BooleanConstructor;
                    border: BooleanConstructor;
                    rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
                    showHeader: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showSummary: BooleanConstructor;
                    sumText: StringConstructor;
                    summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
                    rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
                    rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
                    cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
                    cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
                    headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
                    headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
                    headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
                    headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
                    highlightCurrentRow: BooleanConstructor;
                    currentRowKey: (StringConstructor | NumberConstructor)[];
                    emptyText: StringConstructor;
                    expandRowKeys: import("vue").PropType<any[] | undefined>;
                    defaultExpandAll: BooleanConstructor;
                    defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
                    tooltipEffect: StringConstructor;
                    tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
                    spanMethod: import("vue").PropType<((data: {
                        row: any;
                        rowIndex: number;
                        column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                        columnIndex: number;
                    }) => number[] | {
                        rowspan: number;
                        colspan: number;
                    } | undefined) | undefined>;
                    selectOnIndeterminate: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    indent: {
                        type: NumberConstructor;
                        default: number;
                    };
                    treeProps: {
                        type: import("vue").PropType<{
                            hasChildren?: string | undefined;
                            children?: string | undefined;
                        } | undefined>;
                        default: () => {
                            hasChildren: string;
                            children: string;
                        };
                    };
                    lazy: BooleanConstructor;
                    load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
                    style: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                        default: () => {};
                    };
                    className: {
                        type: StringConstructor;
                        default: string;
                    };
                    tableLayout: {
                        type: import("vue").PropType<"fixed" | "auto">;
                        default: string;
                    };
                    scrollbarAlwaysOn: BooleanConstructor;
                    flexible: BooleanConstructor;
                    showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
                }>> & {
                    onSelect?: ((...args: any[]) => any) | undefined;
                    "onExpand-change"?: ((...args: any[]) => any) | undefined;
                    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
                    "onSelect-all"?: ((...args: any[]) => any) | undefined;
                    "onSelection-change"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
                    "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
                    "onCell-click"?: ((...args: any[]) => any) | undefined;
                    "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
                    "onRow-click"?: ((...args: any[]) => any) | undefined;
                    "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
                    "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
                    "onHeader-click"?: ((...args: any[]) => any) | undefined;
                    "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
                    "onSort-change"?: ((...args: any[]) => any) | undefined;
                    "onFilter-change"?: ((...args: any[]) => any) | undefined;
                    "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
                }, {
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
                    layout: import("element-plus/es/components/table/src/table-layout").default<any>;
                    store: any;
                    handleHeaderFooterMousewheel: (event: any, data: any) => void;
                    handleMouseLeave: () => void;
                    tableId: string;
                    tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                    isHidden: import("vue").Ref<boolean>;
                    isEmpty: import("vue").ComputedRef<boolean>;
                    renderExpanded: import("vue").Ref<null>;
                    resizeProxyVisible: import("vue").Ref<boolean>;
                    resizeState: import("vue").Ref<{
                        width: number | null;
                        height: number | null;
                        headerHeight: number | null;
                    }>;
                    isGroup: import("vue").Ref<boolean>;
                    bodyWidth: import("vue").ComputedRef<string>;
                    tableBodyStyles: import("vue").ComputedRef<{
                        width: string;
                    }>;
                    emptyBlockStyle: import("vue").ComputedRef<{
                        width: string;
                        height: string;
                    } | null>;
                    debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
                    handleFixedMousewheel: (event: any, data: any) => void;
                    setCurrentRow: (row: any) => void;
                    getSelectionRows: () => any;
                    toggleRowSelection: (row: any, selected: boolean) => void;
                    clearSelection: () => void;
                    clearFilter: (columnKeys?: string[] | undefined) => void;
                    toggleAllSelection: () => void;
                    toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
                    clearSort: () => void;
                    doLayout: () => void;
                    sort: (prop: string, order: string) => void;
                    t: import("element-plus").Translator;
                    setDragVisible: (visible: boolean) => void;
                    context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
                    computedSumText: import("vue").ComputedRef<string>;
                    computedEmptyText: import("vue").ComputedRef<string>;
                    tableLayout: import("vue").ComputedRef<"fixed" | "auto" | undefined>;
                    scrollbarViewStyle: {
                        display: string;
                        verticalAlign: string;
                    };
                    tableInnerStyle: import("vue").ComputedRef<{
                        height: string | number;
                        maxHeight?: undefined;
                    } | {
                        maxHeight: string | number;
                        height?: undefined;
                    } | {
                        height?: undefined;
                        maxHeight?: undefined;
                    }>;
                    scrollbarStyle: import("vue").ComputedRef<{
                        height: string;
                        maxHeight?: undefined;
                    } | {
                        maxHeight: string;
                        height?: undefined;
                    } | {
                        height?: undefined;
                        maxHeight?: undefined;
                    }>;
                    scrollBarRef: import("vue").Ref<any>;
                    scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
                    setScrollLeft: (left?: number | undefined) => void;
                    setScrollTop: (top?: number | undefined) => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "current-change" | "selection-change" | "select-all" | "expand-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], string, {
                    style: import("vue").CSSProperties;
                    className: string;
                    tableLayout: "fixed" | "auto";
                    border: boolean;
                    data: any[];
                    fit: boolean;
                    lazy: boolean;
                    scrollbarAlwaysOn: boolean;
                    stripe: boolean;
                    treeProps: {
                        hasChildren?: string | undefined;
                        children?: string | undefined;
                    } | undefined;
                    showHeader: boolean;
                    showSummary: boolean;
                    highlightCurrentRow: boolean;
                    defaultExpandAll: boolean;
                    selectOnIndeterminate: boolean;
                    indent: number;
                    flexible: boolean;
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
                data: {
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                width: (StringConstructor | NumberConstructor)[];
                height: (StringConstructor | NumberConstructor)[];
                maxHeight: (StringConstructor | NumberConstructor)[];
                fit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                stripe: BooleanConstructor;
                border: BooleanConstructor;
                rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
                showHeader: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showSummary: BooleanConstructor;
                sumText: StringConstructor;
                summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
                rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
                rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
                cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
                cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
                headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
                headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
                headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
                headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
                highlightCurrentRow: BooleanConstructor;
                currentRowKey: (StringConstructor | NumberConstructor)[];
                emptyText: StringConstructor;
                expandRowKeys: import("vue").PropType<any[] | undefined>;
                defaultExpandAll: BooleanConstructor;
                defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
                tooltipEffect: StringConstructor;
                tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
                spanMethod: import("vue").PropType<((data: {
                    row: any;
                    rowIndex: number;
                    column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                    columnIndex: number;
                }) => number[] | {
                    rowspan: number;
                    colspan: number;
                } | undefined) | undefined>;
                selectOnIndeterminate: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                indent: {
                    type: NumberConstructor;
                    default: number;
                };
                treeProps: {
                    type: import("vue").PropType<{
                        hasChildren?: string | undefined;
                        children?: string | undefined;
                    } | undefined>;
                    default: () => {
                        hasChildren: string;
                        children: string;
                    };
                };
                lazy: BooleanConstructor;
                load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
                style: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: () => {};
                };
                className: {
                    type: StringConstructor;
                    default: string;
                };
                tableLayout: {
                    type: import("vue").PropType<"fixed" | "auto">;
                    default: string;
                };
                scrollbarAlwaysOn: BooleanConstructor;
                flexible: BooleanConstructor;
                showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
            }>> & {
                onSelect?: ((...args: any[]) => any) | undefined;
                "onExpand-change"?: ((...args: any[]) => any) | undefined;
                "onCurrent-change"?: ((...args: any[]) => any) | undefined;
                "onSelect-all"?: ((...args: any[]) => any) | undefined;
                "onSelection-change"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
                "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onCell-click"?: ((...args: any[]) => any) | undefined;
                "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
                "onRow-click"?: ((...args: any[]) => any) | undefined;
                "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
                "onHeader-click"?: ((...args: any[]) => any) | undefined;
                "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onSort-change"?: ((...args: any[]) => any) | undefined;
                "onFilter-change"?: ((...args: any[]) => any) | undefined;
                "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
            } & import("vue").ShallowUnwrapRef<{
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
                layout: import("element-plus/es/components/table/src/table-layout").default<any>;
                store: any;
                handleHeaderFooterMousewheel: (event: any, data: any) => void;
                handleMouseLeave: () => void;
                tableId: string;
                tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                isHidden: import("vue").Ref<boolean>;
                isEmpty: import("vue").ComputedRef<boolean>;
                renderExpanded: import("vue").Ref<null>;
                resizeProxyVisible: import("vue").Ref<boolean>;
                resizeState: import("vue").Ref<{
                    width: number | null;
                    height: number | null;
                    headerHeight: number | null;
                }>;
                isGroup: import("vue").Ref<boolean>;
                bodyWidth: import("vue").ComputedRef<string>;
                tableBodyStyles: import("vue").ComputedRef<{
                    width: string;
                }>;
                emptyBlockStyle: import("vue").ComputedRef<{
                    width: string;
                    height: string;
                } | null>;
                debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
                handleFixedMousewheel: (event: any, data: any) => void;
                setCurrentRow: (row: any) => void;
                getSelectionRows: () => any;
                toggleRowSelection: (row: any, selected: boolean) => void;
                clearSelection: () => void;
                clearFilter: (columnKeys?: string[] | undefined) => void;
                toggleAllSelection: () => void;
                toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
                clearSort: () => void;
                doLayout: () => void;
                sort: (prop: string, order: string) => void;
                t: import("element-plus").Translator;
                setDragVisible: (visible: boolean) => void;
                context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
                computedSumText: import("vue").ComputedRef<string>;
                computedEmptyText: import("vue").ComputedRef<string>;
                tableLayout: import("vue").ComputedRef<"fixed" | "auto" | undefined>;
                scrollbarViewStyle: {
                    display: string;
                    verticalAlign: string;
                };
                tableInnerStyle: import("vue").ComputedRef<{
                    height: string | number;
                    maxHeight?: undefined;
                } | {
                    maxHeight: string | number;
                    height?: undefined;
                } | {
                    height?: undefined;
                    maxHeight?: undefined;
                }>;
                scrollbarStyle: import("vue").ComputedRef<{
                    height: string;
                    maxHeight?: undefined;
                } | {
                    maxHeight: string;
                    height?: undefined;
                } | {
                    height?: undefined;
                    maxHeight?: undefined;
                }>;
                scrollBarRef: import("vue").Ref<any>;
                scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
                setScrollLeft: (left?: number | undefined) => void;
                setScrollTop: (top?: number | undefined) => void;
            }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
            dataComputed: import("vue").ComputedRef<any[]>;
            columnsComputed: import("vue").ComputedRef<import("./type").ITableColumnConfig<any>[]>;
            formModels: import("vue").ComputedRef<{
                data: any[];
            } | undefined>;
            currentId: import("vue").Ref<string | number>;
            currentRow: any;
            resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            validate: (isScrollToField?: boolean | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => Promise<boolean | undefined>;
            validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            handleSelectionChange: (list: any[]) => void;
            handleRowDbClick: (row: any) => void;
            handleCurrentChange: (row: any) => void;
            setCurrentRow(row: any): void;
            toggleRowSelection(row: any, selected: boolean): void;
            clearSelection(): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-btn" | "click-row-view" | "current-change" | "selection-change" | "click-row" | "click-row-delete" | "click-row-add" | "click-row-edit" | "dbClick-row")[], string, {
            border: boolean;
            data: any[];
            height: string | number;
            column: import("./type").ITableColumnConfig<any>[];
            useFormValidation: boolean;
            tooltipEffect: string;
            highlightCurrentRow: boolean;
            idKey: string;
            formModelExtender: Record<string, any>;
            operationLabel: Record<import("./type").OperationType, string>;
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
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        tooltipEffect: {
            type: StringConstructor;
            default: string;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrentRow: {
            type: BooleanConstructor;
            default: boolean;
        };
        idKey: {
            type: StringConstructor;
            default: string;
        };
        column: {
            type: import("vue").PropType<import("./type").ITableColumnConfig<any>[]>;
            default: () => never[];
        };
        useFormValidation: {
            type: BooleanConstructor;
            default: boolean;
        };
        formModelExtender: {
            type: ObjectConstructor;
            default: () => {};
        };
        operationLabel: {
            type: import("vue").PropType<Record<import("./type").OperationType, string>>;
            default: () => {};
        };
    }>> & {
        "onClick-btn"?: ((...args: any[]) => any) | undefined;
        "onClick-row-view"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onClick-row"?: ((...args: any[]) => any) | undefined;
        "onClick-row-delete"?: ((...args: any[]) => any) | undefined;
        "onClick-row-add"?: ((...args: any[]) => any) | undefined;
        "onClick-row-edit"?: ((...args: any[]) => any) | undefined;
        "onDbClick-row"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        czFormRef: import("vue").Ref<({
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
                    readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
                doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
                validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
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
                readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                    readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
            validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
            validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            scrollToField: (prop: import("element-plus").FormItemProp) => void;
        }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
        zkTable: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                style?: import("vue").CSSProperties | undefined;
                className?: string | undefined;
                tableLayout?: "fixed" | "auto" | undefined;
                border?: boolean | undefined;
                data?: any[] | undefined;
                fit?: boolean | undefined;
                lazy?: boolean | undefined;
                scrollbarAlwaysOn?: boolean | undefined;
                stripe?: boolean | undefined;
                treeProps?: {
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined;
                showHeader?: boolean | undefined;
                showSummary?: boolean | undefined;
                highlightCurrentRow?: boolean | undefined;
                defaultExpandAll?: boolean | undefined;
                selectOnIndeterminate?: boolean | undefined;
                indent?: number | undefined;
                flexible?: boolean | undefined;
                readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
                key?: string | number | symbol | undefined;
                readonly width?: string | number | undefined;
                readonly height?: string | number | undefined;
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
                readonly showOverflowTooltip?: boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined;
                class?: unknown;
                "onCurrent-change"?: ((...args: any[]) => any) | undefined;
                "onSelection-change"?: ((...args: any[]) => any) | undefined;
                readonly tooltipEffect?: string | undefined;
                readonly maxHeight?: string | number | undefined;
                readonly rowKey?: string | ((row: any) => string) | undefined;
                readonly sumText?: string | undefined;
                readonly summaryMethod?: import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined;
                readonly rowClassName?: import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined;
                readonly rowStyle?: import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined;
                readonly cellClassName?: import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined;
                readonly cellStyle?: import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined;
                readonly headerRowClassName?: import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined;
                readonly headerRowStyle?: import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined;
                readonly headerCellClassName?: import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined;
                readonly headerCellStyle?: import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined;
                readonly currentRowKey?: string | number | undefined;
                readonly emptyText?: string | undefined;
                readonly expandRowKeys?: any[] | undefined;
                readonly defaultSort?: import("element-plus/es/components/table/src/table/defaults").Sort | undefined;
                readonly tooltipOptions?: Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined;
                readonly spanMethod?: ((data: {
                    row: any;
                    rowIndex: number;
                    column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                    columnIndex: number;
                }) => number[] | {
                    rowspan: number;
                    colspan: number;
                } | undefined) | undefined;
                readonly load?: ((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined;
                onSelect?: ((...args: any[]) => any) | undefined;
                "onExpand-change"?: ((...args: any[]) => any) | undefined;
                "onSelect-all"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
                "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onCell-click"?: ((...args: any[]) => any) | undefined;
                "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
                "onRow-click"?: ((...args: any[]) => any) | undefined;
                "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
                "onHeader-click"?: ((...args: any[]) => any) | undefined;
                "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onSort-change"?: ((...args: any[]) => any) | undefined;
                "onFilter-change"?: ((...args: any[]) => any) | undefined;
                "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
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
            $emit: (event: "select" | "current-change" | "selection-change" | "select-all" | "expand-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                width: (StringConstructor | NumberConstructor)[];
                height: (StringConstructor | NumberConstructor)[];
                maxHeight: (StringConstructor | NumberConstructor)[];
                fit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                stripe: BooleanConstructor;
                border: BooleanConstructor;
                rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
                showHeader: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showSummary: BooleanConstructor;
                sumText: StringConstructor;
                summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
                rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
                rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
                cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
                cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
                headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
                headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
                headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
                headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
                highlightCurrentRow: BooleanConstructor;
                currentRowKey: (StringConstructor | NumberConstructor)[];
                emptyText: StringConstructor;
                expandRowKeys: import("vue").PropType<any[] | undefined>;
                defaultExpandAll: BooleanConstructor;
                defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
                tooltipEffect: StringConstructor;
                tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
                spanMethod: import("vue").PropType<((data: {
                    row: any;
                    rowIndex: number;
                    column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                    columnIndex: number;
                }) => number[] | {
                    rowspan: number;
                    colspan: number;
                } | undefined) | undefined>;
                selectOnIndeterminate: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                indent: {
                    type: NumberConstructor;
                    default: number;
                };
                treeProps: {
                    type: import("vue").PropType<{
                        hasChildren?: string | undefined;
                        children?: string | undefined;
                    } | undefined>;
                    default: () => {
                        hasChildren: string;
                        children: string;
                    };
                };
                lazy: BooleanConstructor;
                load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
                style: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: () => {};
                };
                className: {
                    type: StringConstructor;
                    default: string;
                };
                tableLayout: {
                    type: import("vue").PropType<"fixed" | "auto">;
                    default: string;
                };
                scrollbarAlwaysOn: BooleanConstructor;
                flexible: BooleanConstructor;
                showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
            }>> & {
                onSelect?: ((...args: any[]) => any) | undefined;
                "onExpand-change"?: ((...args: any[]) => any) | undefined;
                "onCurrent-change"?: ((...args: any[]) => any) | undefined;
                "onSelect-all"?: ((...args: any[]) => any) | undefined;
                "onSelection-change"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
                "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onCell-click"?: ((...args: any[]) => any) | undefined;
                "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
                "onRow-click"?: ((...args: any[]) => any) | undefined;
                "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
                "onHeader-click"?: ((...args: any[]) => any) | undefined;
                "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
                "onSort-change"?: ((...args: any[]) => any) | undefined;
                "onFilter-change"?: ((...args: any[]) => any) | undefined;
                "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
            }, {
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
                layout: import("element-plus/es/components/table/src/table-layout").default<any>;
                store: any;
                handleHeaderFooterMousewheel: (event: any, data: any) => void;
                handleMouseLeave: () => void;
                tableId: string;
                tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                isHidden: import("vue").Ref<boolean>;
                isEmpty: import("vue").ComputedRef<boolean>;
                renderExpanded: import("vue").Ref<null>;
                resizeProxyVisible: import("vue").Ref<boolean>;
                resizeState: import("vue").Ref<{
                    width: number | null;
                    height: number | null;
                    headerHeight: number | null;
                }>;
                isGroup: import("vue").Ref<boolean>;
                bodyWidth: import("vue").ComputedRef<string>;
                tableBodyStyles: import("vue").ComputedRef<{
                    width: string;
                }>;
                emptyBlockStyle: import("vue").ComputedRef<{
                    width: string;
                    height: string;
                } | null>;
                debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
                handleFixedMousewheel: (event: any, data: any) => void;
                setCurrentRow: (row: any) => void;
                getSelectionRows: () => any;
                toggleRowSelection: (row: any, selected: boolean) => void;
                clearSelection: () => void;
                clearFilter: (columnKeys?: string[] | undefined) => void;
                toggleAllSelection: () => void;
                toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
                clearSort: () => void;
                doLayout: () => void;
                sort: (prop: string, order: string) => void;
                t: import("element-plus").Translator;
                setDragVisible: (visible: boolean) => void;
                context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
                computedSumText: import("vue").ComputedRef<string>;
                computedEmptyText: import("vue").ComputedRef<string>;
                tableLayout: import("vue").ComputedRef<"fixed" | "auto" | undefined>;
                scrollbarViewStyle: {
                    display: string;
                    verticalAlign: string;
                };
                tableInnerStyle: import("vue").ComputedRef<{
                    height: string | number;
                    maxHeight?: undefined;
                } | {
                    maxHeight: string | number;
                    height?: undefined;
                } | {
                    height?: undefined;
                    maxHeight?: undefined;
                }>;
                scrollbarStyle: import("vue").ComputedRef<{
                    height: string;
                    maxHeight?: undefined;
                } | {
                    maxHeight: string;
                    height?: undefined;
                } | {
                    height?: undefined;
                    maxHeight?: undefined;
                }>;
                scrollBarRef: import("vue").Ref<any>;
                scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
                setScrollLeft: (left?: number | undefined) => void;
                setScrollTop: (top?: number | undefined) => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "current-change" | "selection-change" | "select-all" | "expand-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], string, {
                style: import("vue").CSSProperties;
                className: string;
                tableLayout: "fixed" | "auto";
                border: boolean;
                data: any[];
                fit: boolean;
                lazy: boolean;
                scrollbarAlwaysOn: boolean;
                stripe: boolean;
                treeProps: {
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined;
                showHeader: boolean;
                showSummary: boolean;
                highlightCurrentRow: boolean;
                defaultExpandAll: boolean;
                selectOnIndeterminate: boolean;
                indent: number;
                flexible: boolean;
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
            data: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (StringConstructor | NumberConstructor)[];
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
            rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
            rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
            cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
            cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
            headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
            headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
            headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
            headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (StringConstructor | NumberConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import("vue").PropType<any[] | undefined>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
            spanMethod: import("vue").PropType<((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => number[] | {
                rowspan: number;
                colspan: number;
            } | undefined) | undefined>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import("vue").PropType<{
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined>;
                default: () => {
                    hasChildren: string;
                    children: string;
                };
            };
            lazy: BooleanConstructor;
            load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import("vue").PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
        }>> & {
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
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
            layout: import("element-plus/es/components/table/src/table-layout").default<any>;
            store: any;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            isHidden: import("vue").Ref<boolean>;
            isEmpty: import("vue").ComputedRef<boolean>;
            renderExpanded: import("vue").Ref<null>;
            resizeProxyVisible: import("vue").Ref<boolean>;
            resizeState: import("vue").Ref<{
                width: number | null;
                height: number | null;
                headerHeight: number | null;
            }>;
            isGroup: import("vue").Ref<boolean>;
            bodyWidth: import("vue").ComputedRef<string>;
            tableBodyStyles: import("vue").ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import("vue").ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[] | undefined) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            t: import("element-plus").Translator;
            setDragVisible: (visible: boolean) => void;
            context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
            computedSumText: import("vue").ComputedRef<string>;
            computedEmptyText: import("vue").ComputedRef<string>;
            tableLayout: import("vue").ComputedRef<"fixed" | "auto" | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            tableInnerStyle: import("vue").ComputedRef<{
                height: string | number;
                maxHeight?: undefined;
            } | {
                maxHeight: string | number;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollbarStyle: import("vue").ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import("vue").Ref<any>;
            scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
            setScrollLeft: (left?: number | undefined) => void;
            setScrollTop: (top?: number | undefined) => void;
        }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
        dataComputed: import("vue").ComputedRef<any[]>;
        columnsComputed: import("vue").ComputedRef<import("./type").ITableColumnConfig<any>[]>;
        formModels: import("vue").ComputedRef<{
            data: any[];
        } | undefined>;
        currentId: import("vue").Ref<string | number>;
        currentRow: any;
        resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        validate: (isScrollToField?: boolean | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => Promise<boolean | undefined>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        handleSelectionChange: (list: any[]) => void;
        handleRowDbClick: (row: any) => void;
        handleCurrentChange: (row: any) => void;
        setCurrentRow(row: any): void;
        toggleRowSelection(row: any, selected: boolean): void;
        clearSelection(): void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tooltipEffect: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrentRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    idKey: {
        type: StringConstructor;
        default: string;
    };
    column: {
        type: import("vue").PropType<import("./type").ITableColumnConfig<any>[]>;
        default: () => never[];
    };
    useFormValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
    formModelExtender: {
        type: ObjectConstructor;
        default: () => {};
    };
    operationLabel: {
        type: import("vue").PropType<Record<import("./type").OperationType, string>>;
        default: () => {};
    };
}>> & {
    "onClick-btn"?: ((...args: any[]) => any) | undefined;
    "onClick-row-view"?: ((...args: any[]) => any) | undefined;
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onSelection-change"?: ((...args: any[]) => any) | undefined;
    "onClick-row"?: ((...args: any[]) => any) | undefined;
    "onClick-row-delete"?: ((...args: any[]) => any) | undefined;
    "onClick-row-add"?: ((...args: any[]) => any) | undefined;
    "onClick-row-edit"?: ((...args: any[]) => any) | undefined;
    "onDbClick-row"?: ((...args: any[]) => any) | undefined;
}, {
    czFormRef: import("vue").Ref<({
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
                readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                    readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
            validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
            validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
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
            readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
                readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
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
        validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        scrollToField: (prop: import("element-plus").FormItemProp) => void;
    }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
    zkTable: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            style?: import("vue").CSSProperties | undefined;
            className?: string | undefined;
            tableLayout?: "fixed" | "auto" | undefined;
            border?: boolean | undefined;
            data?: any[] | undefined;
            fit?: boolean | undefined;
            lazy?: boolean | undefined;
            scrollbarAlwaysOn?: boolean | undefined;
            stripe?: boolean | undefined;
            treeProps?: {
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined;
            showHeader?: boolean | undefined;
            showSummary?: boolean | undefined;
            highlightCurrentRow?: boolean | undefined;
            defaultExpandAll?: boolean | undefined;
            selectOnIndeterminate?: boolean | undefined;
            indent?: number | undefined;
            flexible?: boolean | undefined;
            readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
            key?: string | number | symbol | undefined;
            readonly width?: string | number | undefined;
            readonly height?: string | number | undefined;
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
            readonly showOverflowTooltip?: boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined;
            class?: unknown;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            readonly tooltipEffect?: string | undefined;
            readonly maxHeight?: string | number | undefined;
            readonly rowKey?: string | ((row: any) => string) | undefined;
            readonly sumText?: string | undefined;
            readonly summaryMethod?: import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined;
            readonly rowClassName?: import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined;
            readonly rowStyle?: import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined;
            readonly cellClassName?: import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined;
            readonly cellStyle?: import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined;
            readonly headerRowClassName?: import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined;
            readonly headerRowStyle?: import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined;
            readonly headerCellClassName?: import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined;
            readonly headerCellStyle?: import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined;
            readonly currentRowKey?: string | number | undefined;
            readonly emptyText?: string | undefined;
            readonly expandRowKeys?: any[] | undefined;
            readonly defaultSort?: import("element-plus/es/components/table/src/table/defaults").Sort | undefined;
            readonly tooltipOptions?: Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined;
            readonly spanMethod?: ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => number[] | {
                rowspan: number;
                colspan: number;
            } | undefined) | undefined;
            readonly load?: ((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
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
        $emit: (event: "select" | "current-change" | "selection-change" | "select-all" | "expand-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (StringConstructor | NumberConstructor)[];
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
            rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
            rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
            cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
            cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
            headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
            headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
            headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
            headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (StringConstructor | NumberConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import("vue").PropType<any[] | undefined>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
            spanMethod: import("vue").PropType<((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => number[] | {
                rowspan: number;
                colspan: number;
            } | undefined) | undefined>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import("vue").PropType<{
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined>;
                default: () => {
                    hasChildren: string;
                    children: string;
                };
            };
            lazy: BooleanConstructor;
            load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import("vue").PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
        }>> & {
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
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
            layout: import("element-plus/es/components/table/src/table-layout").default<any>;
            store: any;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            isHidden: import("vue").Ref<boolean>;
            isEmpty: import("vue").ComputedRef<boolean>;
            renderExpanded: import("vue").Ref<null>;
            resizeProxyVisible: import("vue").Ref<boolean>;
            resizeState: import("vue").Ref<{
                width: number | null;
                height: number | null;
                headerHeight: number | null;
            }>;
            isGroup: import("vue").Ref<boolean>;
            bodyWidth: import("vue").ComputedRef<string>;
            tableBodyStyles: import("vue").ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import("vue").ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[] | undefined) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            t: import("element-plus").Translator;
            setDragVisible: (visible: boolean) => void;
            context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
            computedSumText: import("vue").ComputedRef<string>;
            computedEmptyText: import("vue").ComputedRef<string>;
            tableLayout: import("vue").ComputedRef<"fixed" | "auto" | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            tableInnerStyle: import("vue").ComputedRef<{
                height: string | number;
                maxHeight?: undefined;
            } | {
                maxHeight: string | number;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollbarStyle: import("vue").ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import("vue").Ref<any>;
            scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
            setScrollLeft: (left?: number | undefined) => void;
            setScrollTop: (top?: number | undefined) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "current-change" | "selection-change" | "select-all" | "expand-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], string, {
            style: import("vue").CSSProperties;
            className: string;
            tableLayout: "fixed" | "auto";
            border: boolean;
            data: any[];
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: {
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
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
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
        cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
        headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (StringConstructor | NumberConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "appendTo" | "popperClass" | "effect" | "popperOptions" | "placement" | "showArrow" | "transition" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
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
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<"fixed" | "auto" | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
    dataComputed: import("vue").ComputedRef<any[]>;
    columnsComputed: import("vue").ComputedRef<import("./type").ITableColumnConfig<any>[]>;
    formModels: import("vue").ComputedRef<{
        data: any[];
    } | undefined>;
    currentId: import("vue").Ref<string | number>;
    currentRow: any;
    resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    validate: (isScrollToField?: boolean | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => Promise<boolean | undefined>;
    validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
    handleSelectionChange: (list: any[]) => void;
    handleRowDbClick: (row: any) => void;
    handleCurrentChange: (row: any) => void;
    setCurrentRow(row: any): void;
    toggleRowSelection(row: any, selected: boolean): void;
    clearSelection(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-btn" | "click-row-view" | "current-change" | "selection-change" | "click-row" | "click-row-delete" | "click-row-add" | "click-row-edit" | "dbClick-row")[], "click-btn" | "click-row-view" | "current-change" | "selection-change" | "click-row" | "click-row-delete" | "click-row-add" | "click-row-edit" | "dbClick-row", {
    border: boolean;
    data: any[];
    height: string | number;
    column: import("./type").ITableColumnConfig<any>[];
    useFormValidation: boolean;
    tooltipEffect: string;
    highlightCurrentRow: boolean;
    idKey: string;
    formModelExtender: Record<string, any>;
    operationLabel: Record<import("./type").OperationType, string>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
declare const EpTableColumn: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            type?: string | undefined;
            columnItem?: import("./type").ITableColumnConfig<any> | undefined;
            columns?: import("./type").ITableColumnConfig<any>[] | undefined;
            useFormValidation?: boolean | undefined;
            readonly label?: string | undefined;
            style?: unknown;
            key?: string | number | symbol | undefined;
            readonly prop?: string | undefined;
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
            readonly className?: string | undefined;
            class?: unknown;
            "onClick-row-view"?: ((...args: any[]) => any) | undefined;
            readonly labelClassName?: string | undefined;
            readonly property?: string | undefined;
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
        $emit: (event: "click-row-view", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            columnItem: {
                type: import("vue").PropType<import("./type").ITableColumnConfig<any>>;
                default: () => import("./type").ITableColumnConfig<any>;
            };
            columns: {
                type: import("vue").PropType<import("./type").ITableColumnConfig<any>[]>;
                default: () => import("./type").ITableColumnConfig<any>[];
            };
            useFormValidation: {
                type: BooleanConstructor;
                default: boolean;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            label: StringConstructor;
            className: StringConstructor;
            labelClassName: StringConstructor;
            property: StringConstructor;
            prop: StringConstructor;
        }>> & {
            "onClick-row-view"?: ((...args: any[]) => any) | undefined;
        }, {
            eventListeners: any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-row-view"[], string, {
            type: string;
            columnItem: import("./type").ITableColumnConfig<any>;
            columns: import("./type").ITableColumnConfig<any>[];
            useFormValidation: boolean;
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
        columnItem: {
            type: import("vue").PropType<import("./type").ITableColumnConfig<any>>;
            default: () => import("./type").ITableColumnConfig<any>;
        };
        columns: {
            type: import("vue").PropType<import("./type").ITableColumnConfig<any>[]>;
            default: () => import("./type").ITableColumnConfig<any>[];
        };
        useFormValidation: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        label: StringConstructor;
        className: StringConstructor;
        labelClassName: StringConstructor;
        property: StringConstructor;
        prop: StringConstructor;
    }>> & {
        "onClick-row-view"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        eventListeners: any;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    columnItem: {
        type: import("vue").PropType<import("./type").ITableColumnConfig<any>>;
        default: () => import("./type").ITableColumnConfig<any>;
    };
    columns: {
        type: import("vue").PropType<import("./type").ITableColumnConfig<any>[]>;
        default: () => import("./type").ITableColumnConfig<any>[];
    };
    useFormValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: StringConstructor;
}>> & {
    "onClick-row-view"?: ((...args: any[]) => any) | undefined;
}, {
    eventListeners: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-row-view"[], "click-row-view", {
    type: string;
    columnItem: import("./type").ITableColumnConfig<any>;
    columns: import("./type").ITableColumnConfig<any>[];
    useFormValidation: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export { EpTable, EpTableColumn };
