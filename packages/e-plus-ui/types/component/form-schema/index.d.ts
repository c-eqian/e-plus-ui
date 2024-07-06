import { FormSchema } from './type';
export * from './type';
export { useFormSchema } from './hooks/useFormSchema';
export declare const defineFormSchema: <T>(schema: FormSchema<T>) => FormSchema<T>;
declare const EpFormSchema: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            config?: FormSchema<any> | undefined;
            model?: Record<string, any> | undefined;
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
            onSearch?: ((...args: any[]) => any) | undefined;
            onRegistry?: ((...args: any[]) => any) | undefined;
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
        $emit: (event: "search" | "registry", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            model: {
                type: import("vue").PropType<Record<string, any>>;
                default: () => {};
            };
            config: {
                type: import("vue").PropType<FormSchema<any>>;
                default: () => void;
            };
        }>> & {
            onSearch?: ((...args: any[]) => any) | undefined;
            onRegistry?: ((...args: any[]) => any) | undefined;
        }, {
            formModel: import("vue").Ref<Record<string, any>>;
            formProps: import("vue").ComputedRef<FormSchema<any>>;
            items: import("vue").Ref<{
                prop: string;
                label: string;
                labelWidth?: string | undefined;
                defaultValue?: any;
                placeholder?: string | undefined;
                rules?: boolean | {
                    validatorFn?: ((model: any) => ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined) | undefined;
                    trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
                    type?: import("async-validator").RuleType | undefined;
                    required?: boolean | undefined;
                    pattern?: string | {
                        exec: (string: string) => RegExpExecArray | null;
                        test: (string: string) => boolean;
                        readonly source: string;
                        readonly global: boolean;
                        readonly ignoreCase: boolean;
                        readonly multiline: boolean;
                        lastIndex: number;
                        compile: (pattern: string, flags?: string | undefined) => RegExp;
                        readonly flags: string;
                        readonly sticky: boolean;
                        readonly unicode: boolean;
                        readonly dotAll: boolean;
                        [Symbol.match]: (string: string) => RegExpMatchArray | null;
                        [Symbol.replace]: {
                            (string: string, replaceValue: string): string;
                            (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                        };
                        [Symbol.search]: (string: string) => number;
                        [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                        [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                    } | undefined;
                    min?: number | undefined;
                    max?: number | undefined;
                    len?: number | undefined;
                    enum?: (string | number | boolean | null | undefined)[] | undefined;
                    whitespace?: boolean | undefined;
                    fields?: Record<string, import("async-validator").Rule> | undefined;
                    options?: {
                        suppressWarning?: boolean | undefined;
                        suppressValidatorError?: boolean | undefined;
                        first?: boolean | undefined;
                        firstFields?: boolean | string[] | undefined;
                        messages?: {
                            default?: (string | ((...args: unknown[]) => string)) | undefined;
                            required?: (string | ((args_0: string | undefined) => string)) | undefined;
                            enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                            date?: {
                                format?: (string | ((...args: unknown[]) => string)) | undefined;
                                parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                            } | undefined;
                            types?: {
                                string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            } | undefined;
                            string?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            number?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            array?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            pattern?: {
                                mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                            } | undefined;
                        } | undefined;
                        keys?: string[] | undefined;
                        error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                    } | undefined;
                    defaultField?: {
                        type?: import("async-validator").RuleType | undefined;
                        required?: boolean | undefined;
                        pattern?: string | {
                            exec: (string: string) => RegExpExecArray | null;
                            test: (string: string) => boolean;
                            readonly source: string;
                            readonly global: boolean;
                            readonly ignoreCase: boolean;
                            readonly multiline: boolean;
                            lastIndex: number;
                            compile: (pattern: string, flags?: string | undefined) => RegExp;
                            readonly flags: string;
                            readonly sticky: boolean;
                            readonly unicode: boolean;
                            readonly dotAll: boolean;
                            [Symbol.match]: (string: string) => RegExpMatchArray | null;
                            [Symbol.replace]: {
                                (string: string, replaceValue: string): string;
                                (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                            };
                            [Symbol.search]: (string: string) => number;
                            [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                            [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        len?: number | undefined;
                        enum?: (string | number | boolean | null | undefined)[] | undefined;
                        whitespace?: boolean | undefined;
                        fields?: Record<string, import("async-validator").Rule> | undefined;
                        options?: {
                            suppressWarning?: boolean | undefined;
                            suppressValidatorError?: boolean | undefined;
                            first?: boolean | undefined;
                            firstFields?: boolean | string[] | undefined;
                            messages?: {
                                default?: (string | ((...args: unknown[]) => string)) | undefined;
                                required?: (string | ((args_0: string | undefined) => string)) | undefined;
                                enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                                date?: {
                                    format?: (string | ((...args: unknown[]) => string)) | undefined;
                                    parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                    invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                                } | undefined;
                                types?: {
                                    string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                } | undefined;
                                string?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                number?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                array?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                pattern?: {
                                    mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                                } | undefined;
                            } | undefined;
                            keys?: string[] | undefined;
                            error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                        } | undefined;
                        defaultField?: any | any[] | undefined;
                        transform?: ((value: any) => any) | undefined;
                        message?: string | ((a?: string | undefined) => string) | undefined;
                        asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                        validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                    } | {
                        type?: import("async-validator").RuleType | undefined;
                        required?: boolean | undefined;
                        pattern?: string | {
                            exec: (string: string) => RegExpExecArray | null;
                            test: (string: string) => boolean;
                            readonly source: string;
                            readonly global: boolean;
                            readonly ignoreCase: boolean;
                            readonly multiline: boolean;
                            lastIndex: number;
                            compile: (pattern: string, flags?: string | undefined) => RegExp;
                            readonly flags: string;
                            readonly sticky: boolean;
                            readonly unicode: boolean;
                            readonly dotAll: boolean;
                            [Symbol.match]: (string: string) => RegExpMatchArray | null;
                            [Symbol.replace]: {
                                (string: string, replaceValue: string): string;
                                (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                            };
                            [Symbol.search]: (string: string) => number;
                            [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                            [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        len?: number | undefined;
                        enum?: (string | number | boolean | null | undefined)[] | undefined;
                        whitespace?: boolean | undefined;
                        fields?: Record<string, import("async-validator").Rule> | undefined;
                        options?: {
                            suppressWarning?: boolean | undefined;
                            suppressValidatorError?: boolean | undefined;
                            first?: boolean | undefined;
                            firstFields?: boolean | string[] | undefined;
                            messages?: {
                                default?: (string | ((...args: unknown[]) => string)) | undefined;
                                required?: (string | ((args_0: string | undefined) => string)) | undefined;
                                enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                                date?: {
                                    format?: (string | ((...args: unknown[]) => string)) | undefined;
                                    parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                    invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                                } | undefined;
                                types?: {
                                    string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                } | undefined;
                                string?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                number?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                array?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                pattern?: {
                                    mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                                } | undefined;
                            } | undefined;
                            keys?: string[] | undefined;
                            error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                        } | undefined;
                        defaultField?: any | any[] | undefined;
                        transform?: ((value: any) => any) | undefined;
                        message?: string | ((a?: string | undefined) => string) | undefined;
                        asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                        validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                    }[] | undefined;
                    transform?: ((value: any) => any) | undefined;
                    message?: string | ((a?: string | undefined) => string) | undefined;
                    asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                    validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                } | {
                    validatorFn?: ((model: any) => ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined) | undefined;
                    trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
                    type?: import("async-validator").RuleType | undefined;
                    required?: boolean | undefined;
                    pattern?: string | {
                        exec: (string: string) => RegExpExecArray | null;
                        test: (string: string) => boolean;
                        readonly source: string;
                        readonly global: boolean;
                        readonly ignoreCase: boolean;
                        readonly multiline: boolean;
                        lastIndex: number;
                        compile: (pattern: string, flags?: string | undefined) => RegExp;
                        readonly flags: string;
                        readonly sticky: boolean;
                        readonly unicode: boolean;
                        readonly dotAll: boolean;
                        [Symbol.match]: (string: string) => RegExpMatchArray | null;
                        [Symbol.replace]: {
                            (string: string, replaceValue: string): string;
                            (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                        };
                        [Symbol.search]: (string: string) => number;
                        [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                        [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                    } | undefined;
                    min?: number | undefined;
                    max?: number | undefined;
                    len?: number | undefined;
                    enum?: (string | number | boolean | null | undefined)[] | undefined;
                    whitespace?: boolean | undefined;
                    fields?: Record<string, import("async-validator").Rule> | undefined;
                    options?: {
                        suppressWarning?: boolean | undefined;
                        suppressValidatorError?: boolean | undefined;
                        first?: boolean | undefined;
                        firstFields?: boolean | string[] | undefined;
                        messages?: {
                            default?: (string | ((...args: unknown[]) => string)) | undefined;
                            required?: (string | ((args_0: string | undefined) => string)) | undefined;
                            enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                            date?: {
                                format?: (string | ((...args: unknown[]) => string)) | undefined;
                                parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                            } | undefined;
                            types?: {
                                string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            } | undefined;
                            string?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            number?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            array?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            pattern?: {
                                mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                            } | undefined;
                        } | undefined;
                        keys?: string[] | undefined;
                        error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                    } | undefined;
                    defaultField?: {
                        type?: import("async-validator").RuleType | undefined;
                        required?: boolean | undefined;
                        pattern?: string | {
                            exec: (string: string) => RegExpExecArray | null;
                            test: (string: string) => boolean;
                            readonly source: string;
                            readonly global: boolean;
                            readonly ignoreCase: boolean;
                            readonly multiline: boolean;
                            lastIndex: number;
                            compile: (pattern: string, flags?: string | undefined) => RegExp;
                            readonly flags: string;
                            readonly sticky: boolean;
                            readonly unicode: boolean;
                            readonly dotAll: boolean;
                            [Symbol.match]: (string: string) => RegExpMatchArray | null;
                            [Symbol.replace]: {
                                (string: string, replaceValue: string): string;
                                (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                            };
                            [Symbol.search]: (string: string) => number;
                            [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                            [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        len?: number | undefined;
                        enum?: (string | number | boolean | null | undefined)[] | undefined;
                        whitespace?: boolean | undefined;
                        fields?: Record<string, import("async-validator").Rule> | undefined;
                        options?: {
                            suppressWarning?: boolean | undefined;
                            suppressValidatorError?: boolean | undefined;
                            first?: boolean | undefined;
                            firstFields?: boolean | string[] | undefined;
                            messages?: {
                                default?: (string | ((...args: unknown[]) => string)) | undefined;
                                required?: (string | ((args_0: string | undefined) => string)) | undefined;
                                enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                                date?: {
                                    format?: (string | ((...args: unknown[]) => string)) | undefined;
                                    parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                    invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                                } | undefined;
                                types?: {
                                    string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                } | undefined;
                                string?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                number?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                array?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                pattern?: {
                                    mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                                } | undefined;
                            } | undefined;
                            keys?: string[] | undefined;
                            error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                        } | undefined;
                        defaultField?: any | any[] | undefined;
                        transform?: ((value: any) => any) | undefined;
                        message?: string | ((a?: string | undefined) => string) | undefined;
                        asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                        validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                    } | {
                        type?: import("async-validator").RuleType | undefined;
                        required?: boolean | undefined;
                        pattern?: string | {
                            exec: (string: string) => RegExpExecArray | null;
                            test: (string: string) => boolean;
                            readonly source: string;
                            readonly global: boolean;
                            readonly ignoreCase: boolean;
                            readonly multiline: boolean;
                            lastIndex: number;
                            compile: (pattern: string, flags?: string | undefined) => RegExp;
                            readonly flags: string;
                            readonly sticky: boolean;
                            readonly unicode: boolean;
                            readonly dotAll: boolean;
                            [Symbol.match]: (string: string) => RegExpMatchArray | null;
                            [Symbol.replace]: {
                                (string: string, replaceValue: string): string;
                                (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                            };
                            [Symbol.search]: (string: string) => number;
                            [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                            [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        len?: number | undefined;
                        enum?: (string | number | boolean | null | undefined)[] | undefined;
                        whitespace?: boolean | undefined;
                        fields?: Record<string, import("async-validator").Rule> | undefined;
                        options?: {
                            suppressWarning?: boolean | undefined;
                            suppressValidatorError?: boolean | undefined;
                            first?: boolean | undefined;
                            firstFields?: boolean | string[] | undefined;
                            messages?: {
                                default?: (string | ((...args: unknown[]) => string)) | undefined;
                                required?: (string | ((args_0: string | undefined) => string)) | undefined;
                                enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                                date?: {
                                    format?: (string | ((...args: unknown[]) => string)) | undefined;
                                    parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                    invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                                } | undefined;
                                types?: {
                                    string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                    hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                } | undefined;
                                string?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                number?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                array?: {
                                    len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                    range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                                } | undefined;
                                pattern?: {
                                    mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                                } | undefined;
                            } | undefined;
                            keys?: string[] | undefined;
                            error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                        } | undefined;
                        defaultField?: any | any[] | undefined;
                        transform?: ((value: any) => any) | undefined;
                        message?: string | ((a?: string | undefined) => string) | undefined;
                        asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                        validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                    }[] | undefined;
                    transform?: ((value: any) => any) | undefined;
                    message?: string | ((a?: string | undefined) => string) | undefined;
                    asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                    validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                }[] | undefined;
                slotKey?: string | undefined;
                type?: import("./type").FormSchemaType | undefined;
                render?: import("./types").Render<any, import("./type").FormItemsSchema<any>> | undefined;
                col?: number | {
                    readonly lg?: number | {
                        span?: number | undefined;
                        offset?: number | undefined;
                        pull?: number | undefined;
                        push?: number | undefined;
                    } | undefined;
                    readonly md?: number | {
                        span?: number | undefined;
                        offset?: number | undefined;
                        pull?: number | undefined;
                        push?: number | undefined;
                    } | undefined;
                    readonly sm?: number | {
                        span?: number | undefined;
                        offset?: number | undefined;
                        pull?: number | undefined;
                        push?: number | undefined;
                    } | undefined;
                    readonly xs?: number | {
                        span?: number | undefined;
                        offset?: number | undefined;
                        pull?: number | undefined;
                        push?: number | undefined;
                    } | undefined;
                    readonly span?: number | undefined;
                    readonly xl?: number | {
                        span?: number | undefined;
                        offset?: number | undefined;
                        pull?: number | undefined;
                        push?: number | undefined;
                    } | undefined;
                } | undefined;
                collapse?: boolean | undefined;
                enter?: ((value: any) => void) | undefined;
                change?: ((value: any) => void) | undefined;
                componentProps?: {
                    [x: string]: any;
                    slots?: {
                        [name: string]: import("vue").Slot<any> | undefined;
                    } | undefined;
                    dynamicDisable?: ((scoped: import("./types").Scoped<any, import("./type").FormItemsSchema<any>>) => boolean) | undefined;
                    dynamicShow?: ((scoped: import("./types").Scoped<any, import("./type").FormItemsSchema<any>>) => boolean) | undefined;
                } | undefined;
            }[]>;
            emit: (event: "search" | "registry", ...args: any[]) => void;
            epFormSchemaRef: import("vue").Ref<({
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
            appendFields: (items: import("./type").FormItemsSchema<any> | import("./type").FormItemsSchema<any>[], to?: string | boolean | undefined) => void;
            setFieldsValues: (values: Record<string, any>) => void;
            getFieldsValues: <T_1 extends Record<string, any>>(serialize?: boolean) => T_1;
            resetFieldsValues: () => void;
            validate: (isScrollToField?: boolean | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => Promise<boolean>;
            deleteField: (prop: string) => void;
            resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "registry")[], string, {
            config: FormSchema<any>;
            model: Record<string, any>;
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
        model: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => {};
        };
        config: {
            type: import("vue").PropType<FormSchema<any>>;
            default: () => void;
        };
    }>> & {
        onSearch?: ((...args: any[]) => any) | undefined;
        onRegistry?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        formModel: import("vue").Ref<Record<string, any>>;
        formProps: import("vue").ComputedRef<FormSchema<any>>;
        items: import("vue").Ref<{
            prop: string;
            label: string;
            labelWidth?: string | undefined;
            defaultValue?: any;
            placeholder?: string | undefined;
            rules?: boolean | {
                validatorFn?: ((model: any) => ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined) | undefined;
                trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: boolean | string[] | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: {
                    type?: import("async-validator").RuleType | undefined;
                    required?: boolean | undefined;
                    pattern?: string | {
                        exec: (string: string) => RegExpExecArray | null;
                        test: (string: string) => boolean;
                        readonly source: string;
                        readonly global: boolean;
                        readonly ignoreCase: boolean;
                        readonly multiline: boolean;
                        lastIndex: number;
                        compile: (pattern: string, flags?: string | undefined) => RegExp;
                        readonly flags: string;
                        readonly sticky: boolean;
                        readonly unicode: boolean;
                        readonly dotAll: boolean;
                        [Symbol.match]: (string: string) => RegExpMatchArray | null;
                        [Symbol.replace]: {
                            (string: string, replaceValue: string): string;
                            (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                        };
                        [Symbol.search]: (string: string) => number;
                        [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                        [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                    } | undefined;
                    min?: number | undefined;
                    max?: number | undefined;
                    len?: number | undefined;
                    enum?: (string | number | boolean | null | undefined)[] | undefined;
                    whitespace?: boolean | undefined;
                    fields?: Record<string, import("async-validator").Rule> | undefined;
                    options?: {
                        suppressWarning?: boolean | undefined;
                        suppressValidatorError?: boolean | undefined;
                        first?: boolean | undefined;
                        firstFields?: boolean | string[] | undefined;
                        messages?: {
                            default?: (string | ((...args: unknown[]) => string)) | undefined;
                            required?: (string | ((args_0: string | undefined) => string)) | undefined;
                            enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                            date?: {
                                format?: (string | ((...args: unknown[]) => string)) | undefined;
                                parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                            } | undefined;
                            types?: {
                                string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            } | undefined;
                            string?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            number?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            array?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            pattern?: {
                                mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                            } | undefined;
                        } | undefined;
                        keys?: string[] | undefined;
                        error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                    } | undefined;
                    defaultField?: any | any[] | undefined;
                    transform?: ((value: any) => any) | undefined;
                    message?: string | ((a?: string | undefined) => string) | undefined;
                    asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                    validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                } | {
                    type?: import("async-validator").RuleType | undefined;
                    required?: boolean | undefined;
                    pattern?: string | {
                        exec: (string: string) => RegExpExecArray | null;
                        test: (string: string) => boolean;
                        readonly source: string;
                        readonly global: boolean;
                        readonly ignoreCase: boolean;
                        readonly multiline: boolean;
                        lastIndex: number;
                        compile: (pattern: string, flags?: string | undefined) => RegExp;
                        readonly flags: string;
                        readonly sticky: boolean;
                        readonly unicode: boolean;
                        readonly dotAll: boolean;
                        [Symbol.match]: (string: string) => RegExpMatchArray | null;
                        [Symbol.replace]: {
                            (string: string, replaceValue: string): string;
                            (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                        };
                        [Symbol.search]: (string: string) => number;
                        [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                        [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                    } | undefined;
                    min?: number | undefined;
                    max?: number | undefined;
                    len?: number | undefined;
                    enum?: (string | number | boolean | null | undefined)[] | undefined;
                    whitespace?: boolean | undefined;
                    fields?: Record<string, import("async-validator").Rule> | undefined;
                    options?: {
                        suppressWarning?: boolean | undefined;
                        suppressValidatorError?: boolean | undefined;
                        first?: boolean | undefined;
                        firstFields?: boolean | string[] | undefined;
                        messages?: {
                            default?: (string | ((...args: unknown[]) => string)) | undefined;
                            required?: (string | ((args_0: string | undefined) => string)) | undefined;
                            enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                            date?: {
                                format?: (string | ((...args: unknown[]) => string)) | undefined;
                                parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                            } | undefined;
                            types?: {
                                string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            } | undefined;
                            string?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            number?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            array?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            pattern?: {
                                mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                            } | undefined;
                        } | undefined;
                        keys?: string[] | undefined;
                        error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                    } | undefined;
                    defaultField?: any | any[] | undefined;
                    transform?: ((value: any) => any) | undefined;
                    message?: string | ((a?: string | undefined) => string) | undefined;
                    asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                    validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                }[] | undefined;
                transform?: ((value: any) => any) | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
            } | {
                validatorFn?: ((model: any) => ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined) | undefined;
                trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: boolean | string[] | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: {
                    type?: import("async-validator").RuleType | undefined;
                    required?: boolean | undefined;
                    pattern?: string | {
                        exec: (string: string) => RegExpExecArray | null;
                        test: (string: string) => boolean;
                        readonly source: string;
                        readonly global: boolean;
                        readonly ignoreCase: boolean;
                        readonly multiline: boolean;
                        lastIndex: number;
                        compile: (pattern: string, flags?: string | undefined) => RegExp;
                        readonly flags: string;
                        readonly sticky: boolean;
                        readonly unicode: boolean;
                        readonly dotAll: boolean;
                        [Symbol.match]: (string: string) => RegExpMatchArray | null;
                        [Symbol.replace]: {
                            (string: string, replaceValue: string): string;
                            (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                        };
                        [Symbol.search]: (string: string) => number;
                        [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                        [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                    } | undefined;
                    min?: number | undefined;
                    max?: number | undefined;
                    len?: number | undefined;
                    enum?: (string | number | boolean | null | undefined)[] | undefined;
                    whitespace?: boolean | undefined;
                    fields?: Record<string, import("async-validator").Rule> | undefined;
                    options?: {
                        suppressWarning?: boolean | undefined;
                        suppressValidatorError?: boolean | undefined;
                        first?: boolean | undefined;
                        firstFields?: boolean | string[] | undefined;
                        messages?: {
                            default?: (string | ((...args: unknown[]) => string)) | undefined;
                            required?: (string | ((args_0: string | undefined) => string)) | undefined;
                            enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                            date?: {
                                format?: (string | ((...args: unknown[]) => string)) | undefined;
                                parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                            } | undefined;
                            types?: {
                                string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            } | undefined;
                            string?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            number?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            array?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            pattern?: {
                                mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                            } | undefined;
                        } | undefined;
                        keys?: string[] | undefined;
                        error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                    } | undefined;
                    defaultField?: any | any[] | undefined;
                    transform?: ((value: any) => any) | undefined;
                    message?: string | ((a?: string | undefined) => string) | undefined;
                    asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                    validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                } | {
                    type?: import("async-validator").RuleType | undefined;
                    required?: boolean | undefined;
                    pattern?: string | {
                        exec: (string: string) => RegExpExecArray | null;
                        test: (string: string) => boolean;
                        readonly source: string;
                        readonly global: boolean;
                        readonly ignoreCase: boolean;
                        readonly multiline: boolean;
                        lastIndex: number;
                        compile: (pattern: string, flags?: string | undefined) => RegExp;
                        readonly flags: string;
                        readonly sticky: boolean;
                        readonly unicode: boolean;
                        readonly dotAll: boolean;
                        [Symbol.match]: (string: string) => RegExpMatchArray | null;
                        [Symbol.replace]: {
                            (string: string, replaceValue: string): string;
                            (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                        };
                        [Symbol.search]: (string: string) => number;
                        [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                        [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                    } | undefined;
                    min?: number | undefined;
                    max?: number | undefined;
                    len?: number | undefined;
                    enum?: (string | number | boolean | null | undefined)[] | undefined;
                    whitespace?: boolean | undefined;
                    fields?: Record<string, import("async-validator").Rule> | undefined;
                    options?: {
                        suppressWarning?: boolean | undefined;
                        suppressValidatorError?: boolean | undefined;
                        first?: boolean | undefined;
                        firstFields?: boolean | string[] | undefined;
                        messages?: {
                            default?: (string | ((...args: unknown[]) => string)) | undefined;
                            required?: (string | ((args_0: string | undefined) => string)) | undefined;
                            enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                            date?: {
                                format?: (string | ((...args: unknown[]) => string)) | undefined;
                                parse?: (string | ((...args: unknown[]) => string)) | undefined;
                                invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                            } | undefined;
                            types?: {
                                string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                                hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            } | undefined;
                            string?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            number?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            array?: {
                                len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                                range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                            } | undefined;
                            pattern?: {
                                mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                            } | undefined;
                        } | undefined;
                        keys?: string[] | undefined;
                        error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                    } | undefined;
                    defaultField?: any | any[] | undefined;
                    transform?: ((value: any) => any) | undefined;
                    message?: string | ((a?: string | undefined) => string) | undefined;
                    asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                    validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
                }[] | undefined;
                transform?: ((value: any) => any) | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
            }[] | undefined;
            slotKey?: string | undefined;
            type?: import("./type").FormSchemaType | undefined;
            render?: import("./types").Render<any, import("./type").FormItemsSchema<any>> | undefined;
            col?: number | {
                readonly lg?: number | {
                    span?: number | undefined;
                    offset?: number | undefined;
                    pull?: number | undefined;
                    push?: number | undefined;
                } | undefined;
                readonly md?: number | {
                    span?: number | undefined;
                    offset?: number | undefined;
                    pull?: number | undefined;
                    push?: number | undefined;
                } | undefined;
                readonly sm?: number | {
                    span?: number | undefined;
                    offset?: number | undefined;
                    pull?: number | undefined;
                    push?: number | undefined;
                } | undefined;
                readonly xs?: number | {
                    span?: number | undefined;
                    offset?: number | undefined;
                    pull?: number | undefined;
                    push?: number | undefined;
                } | undefined;
                readonly span?: number | undefined;
                readonly xl?: number | {
                    span?: number | undefined;
                    offset?: number | undefined;
                    pull?: number | undefined;
                    push?: number | undefined;
                } | undefined;
            } | undefined;
            collapse?: boolean | undefined;
            enter?: ((value: any) => void) | undefined;
            change?: ((value: any) => void) | undefined;
            componentProps?: {
                [x: string]: any;
                slots?: {
                    [name: string]: import("vue").Slot<any> | undefined;
                } | undefined;
                dynamicDisable?: ((scoped: import("./types").Scoped<any, import("./type").FormItemsSchema<any>>) => boolean) | undefined;
                dynamicShow?: ((scoped: import("./types").Scoped<any, import("./type").FormItemsSchema<any>>) => boolean) | undefined;
            } | undefined;
        }[]>;
        emit: (event: "search" | "registry", ...args: any[]) => void;
        epFormSchemaRef: import("vue").Ref<({
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
        appendFields: (items: import("./type").FormItemsSchema<any> | import("./type").FormItemsSchema<any>[], to?: string | boolean | undefined) => void;
        setFieldsValues: (values: Record<string, any>) => void;
        getFieldsValues: <T_1 extends Record<string, any>>(serialize?: boolean) => T_1;
        resetFieldsValues: () => void;
        validate: (isScrollToField?: boolean | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => Promise<boolean>;
        deleteField: (prop: string) => void;
        resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: import("vue").PropType<Record<string, any>>;
        default: () => {};
    };
    config: {
        type: import("vue").PropType<FormSchema<any>>;
        default: () => void;
    };
}>> & {
    onSearch?: ((...args: any[]) => any) | undefined;
    onRegistry?: ((...args: any[]) => any) | undefined;
}, {
    formModel: import("vue").Ref<Record<string, any>>;
    formProps: import("vue").ComputedRef<FormSchema<any>>;
    items: import("vue").Ref<{
        prop: string;
        label: string;
        labelWidth?: string | undefined;
        defaultValue?: any;
        placeholder?: string | undefined;
        rules?: boolean | {
            validatorFn?: ((model: any) => ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined) | undefined;
            trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
            type?: import("async-validator").RuleType | undefined;
            required?: boolean | undefined;
            pattern?: string | {
                exec: (string: string) => RegExpExecArray | null;
                test: (string: string) => boolean;
                readonly source: string;
                readonly global: boolean;
                readonly ignoreCase: boolean;
                readonly multiline: boolean;
                lastIndex: number;
                compile: (pattern: string, flags?: string | undefined) => RegExp;
                readonly flags: string;
                readonly sticky: boolean;
                readonly unicode: boolean;
                readonly dotAll: boolean;
                [Symbol.match]: (string: string) => RegExpMatchArray | null;
                [Symbol.replace]: {
                    (string: string, replaceValue: string): string;
                    (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                };
                [Symbol.search]: (string: string) => number;
                [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
            } | undefined;
            min?: number | undefined;
            max?: number | undefined;
            len?: number | undefined;
            enum?: (string | number | boolean | null | undefined)[] | undefined;
            whitespace?: boolean | undefined;
            fields?: Record<string, import("async-validator").Rule> | undefined;
            options?: {
                suppressWarning?: boolean | undefined;
                suppressValidatorError?: boolean | undefined;
                first?: boolean | undefined;
                firstFields?: boolean | string[] | undefined;
                messages?: {
                    default?: (string | ((...args: unknown[]) => string)) | undefined;
                    required?: (string | ((args_0: string | undefined) => string)) | undefined;
                    enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                    whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                    date?: {
                        format?: (string | ((...args: unknown[]) => string)) | undefined;
                        parse?: (string | ((...args: unknown[]) => string)) | undefined;
                        invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                    } | undefined;
                    types?: {
                        string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                    } | undefined;
                    string?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    number?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    array?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    pattern?: {
                        mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                    } | undefined;
                } | undefined;
                keys?: string[] | undefined;
                error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
            } | undefined;
            defaultField?: {
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: boolean | string[] | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: any | any[] | undefined;
                transform?: ((value: any) => any) | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
            } | {
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: boolean | string[] | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: any | any[] | undefined;
                transform?: ((value: any) => any) | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
            }[] | undefined;
            transform?: ((value: any) => any) | undefined;
            message?: string | ((a?: string | undefined) => string) | undefined;
            asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
            validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
        } | {
            validatorFn?: ((model: any) => ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined) | undefined;
            trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
            type?: import("async-validator").RuleType | undefined;
            required?: boolean | undefined;
            pattern?: string | {
                exec: (string: string) => RegExpExecArray | null;
                test: (string: string) => boolean;
                readonly source: string;
                readonly global: boolean;
                readonly ignoreCase: boolean;
                readonly multiline: boolean;
                lastIndex: number;
                compile: (pattern: string, flags?: string | undefined) => RegExp;
                readonly flags: string;
                readonly sticky: boolean;
                readonly unicode: boolean;
                readonly dotAll: boolean;
                [Symbol.match]: (string: string) => RegExpMatchArray | null;
                [Symbol.replace]: {
                    (string: string, replaceValue: string): string;
                    (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                };
                [Symbol.search]: (string: string) => number;
                [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
            } | undefined;
            min?: number | undefined;
            max?: number | undefined;
            len?: number | undefined;
            enum?: (string | number | boolean | null | undefined)[] | undefined;
            whitespace?: boolean | undefined;
            fields?: Record<string, import("async-validator").Rule> | undefined;
            options?: {
                suppressWarning?: boolean | undefined;
                suppressValidatorError?: boolean | undefined;
                first?: boolean | undefined;
                firstFields?: boolean | string[] | undefined;
                messages?: {
                    default?: (string | ((...args: unknown[]) => string)) | undefined;
                    required?: (string | ((args_0: string | undefined) => string)) | undefined;
                    enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                    whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                    date?: {
                        format?: (string | ((...args: unknown[]) => string)) | undefined;
                        parse?: (string | ((...args: unknown[]) => string)) | undefined;
                        invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                    } | undefined;
                    types?: {
                        string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                    } | undefined;
                    string?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    number?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    array?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    pattern?: {
                        mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                    } | undefined;
                } | undefined;
                keys?: string[] | undefined;
                error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
            } | undefined;
            defaultField?: {
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: boolean | string[] | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: any | any[] | undefined;
                transform?: ((value: any) => any) | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
            } | {
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: string | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: (string | number | boolean | null | undefined)[] | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: boolean | string[] | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: any | any[] | undefined;
                transform?: ((value: any) => any) | undefined;
                message?: string | ((a?: string | undefined) => string) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
            }[] | undefined;
            transform?: ((value: any) => any) | undefined;
            message?: string | ((a?: string | undefined) => string) | undefined;
            asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
            validator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
        }[] | undefined;
        slotKey?: string | undefined;
        type?: import("./type").FormSchemaType | undefined;
        render?: import("./types").Render<any, import("./type").FormItemsSchema<any>> | undefined;
        col?: number | {
            readonly lg?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
            readonly md?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
            readonly sm?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
            readonly xs?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
            readonly span?: number | undefined;
            readonly xl?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
        } | undefined;
        collapse?: boolean | undefined;
        enter?: ((value: any) => void) | undefined;
        change?: ((value: any) => void) | undefined;
        componentProps?: {
            [x: string]: any;
            slots?: {
                [name: string]: import("vue").Slot<any> | undefined;
            } | undefined;
            dynamicDisable?: ((scoped: import("./types").Scoped<any, import("./type").FormItemsSchema<any>>) => boolean) | undefined;
            dynamicShow?: ((scoped: import("./types").Scoped<any, import("./type").FormItemsSchema<any>>) => boolean) | undefined;
        } | undefined;
    }[]>;
    emit: (event: "search" | "registry", ...args: any[]) => void;
    epFormSchemaRef: import("vue").Ref<({
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
    appendFields: (items: import("./type").FormItemsSchema<any> | import("./type").FormItemsSchema<any>[], to?: string | boolean | undefined) => void;
    setFieldsValues: (values: Record<string, any>) => void;
    getFieldsValues: <T_1 extends Record<string, any>>(serialize?: boolean) => T_1;
    resetFieldsValues: () => void;
    validate: (isScrollToField?: boolean | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => Promise<boolean>;
    deleteField: (prop: string) => void;
    resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "registry")[], "search" | "registry", {
    config: FormSchema<any>;
    model: Record<string, any>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default EpFormSchema;
