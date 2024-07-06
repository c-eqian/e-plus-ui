declare const EpButton: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            loadingIcon?: string | undefined;
            borderStyle?: string | undefined;
            fluid?: boolean | undefined;
            radius?: boolean | undefined;
            loading?: boolean | undefined;
            nativeType?: import("./interface").ButtonNativeType | undefined;
            readonly type?: import("./interface").ButtonType | undefined;
            readonly size?: import("./interface").ButtonSize | undefined;
            readonly prefixIcon?: string | undefined;
            readonly suffixIcon?: string | undefined;
            readonly border?: import("./interface").ButtonBorder | undefined;
            readonly disabled?: boolean | undefined;
            onClick?: ((evt: MouseEvent) => any) | undefined;
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
            class?: unknown;
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
        $emit: (event: "click", evt: MouseEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<import("./interface").ButtonType>;
            };
            size: {
                type: import("vue").PropType<import("./interface").ButtonSize>;
            };
            prefixIcon: {
                type: import("vue").PropType<string>;
            };
            suffixIcon: {
                type: import("vue").PropType<string>;
            };
            loadingIcon: {
                type: import("vue").PropType<string>;
                default: string;
            };
            borderStyle: {
                type: import("vue").PropType<string>;
                default: string;
            };
            border: {
                type: import("vue").PropType<import("./interface").ButtonBorder>;
            };
            fluid: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            radius: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            nativeType: {
                type: import("vue").PropType<import("./interface").ButtonNativeType>;
                default: string;
            };
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (evt: MouseEvent) => boolean;
        }, string, {
            loadingIcon: string;
            borderStyle: string;
            fluid: boolean;
            radius: boolean;
            loading: boolean;
            nativeType: import("./interface").ButtonNativeType;
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
        type: {
            type: import("vue").PropType<import("./interface").ButtonType>;
        };
        size: {
            type: import("vue").PropType<import("./interface").ButtonSize>;
        };
        prefixIcon: {
            type: import("vue").PropType<string>;
        };
        suffixIcon: {
            type: import("vue").PropType<string>;
        };
        loadingIcon: {
            type: import("vue").PropType<string>;
            default: string;
        };
        borderStyle: {
            type: import("vue").PropType<string>;
            default: string;
        };
        border: {
            type: import("vue").PropType<import("./interface").ButtonBorder>;
        };
        fluid: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        radius: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
        };
        nativeType: {
            type: import("vue").PropType<import("./interface").ButtonNativeType>;
            default: string;
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./interface").ButtonType>;
    };
    size: {
        type: import("vue").PropType<import("./interface").ButtonSize>;
    };
    prefixIcon: {
        type: import("vue").PropType<string>;
    };
    suffixIcon: {
        type: import("vue").PropType<string>;
    };
    loadingIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    borderStyle: {
        type: import("vue").PropType<string>;
        default: string;
    };
    border: {
        type: import("vue").PropType<import("./interface").ButtonBorder>;
    };
    fluid: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    radius: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    nativeType: {
        type: import("vue").PropType<import("./interface").ButtonNativeType>;
        default: string;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, {
    loadingIcon: string;
    borderStyle: string;
    fluid: boolean;
    radius: boolean;
    loading: boolean;
    nativeType: import("./interface").ButtonNativeType;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import("vue").Plugin<any[]>;
export default EpButton;
