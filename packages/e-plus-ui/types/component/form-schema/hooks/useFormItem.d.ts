import type { FormItemsSchema, FormItemRules } from '../type';
import { ComputedRef, type Ref } from 'vue';
/**
 * 参数过滤，获取组件参数
 * @param props
 */
export declare const useFilterProps: (props: FormItemsSchema) => import("co-utils-vue").OmitKeys<FormItemsSchema<any>, keyof FormItemsSchema<any>>;
/**
 * 获取表单参数
 * @param props
 * @param columns
 */
export declare const useColProps: (props: FormItemsSchema, columns: ComputedRef<number>) => {};
/**
 * 获取表单参数
 * @param props
 * @param model
 * @param isSearch
 */
export declare const useFormItemProps: (props: FormItemsSchema, model: any, isSearch?: boolean) => {
    prop: string;
    label: string;
    rules?: undefined;
} | {
    prop: string;
    label: string;
    rules: (FormItemRules<any> | {
        validator: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
        type?: import("async-validator").RuleType | undefined;
        message?: string | ((a?: string | undefined) => string) | undefined;
        required?: boolean | undefined;
        validatorFn?: ((model: any) => ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined) | undefined;
        options?: import("async-validator").ValidateOption | undefined;
        max?: number | undefined;
        min?: number | undefined;
        transform?: ((value: any) => any) | undefined;
        fields?: Record<string, import("async-validator").Rule> | undefined;
        trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
        pattern?: string | RegExp | undefined;
        len?: number | undefined;
        enum?: (string | number | boolean | null | undefined)[] | undefined;
        whitespace?: boolean | undefined;
        defaultField?: import("async-validator").Rule | undefined;
        asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
        field: string;
    })[];
} | {
    prop: string;
    label: string;
    rules: FormItemRules<any> | {
        validator: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined;
        type?: import("async-validator").RuleType | undefined;
        message?: string | ((a?: string | undefined) => string) | undefined;
        required?: boolean | undefined;
        validatorFn?: ((model: any) => ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | import("async-validator").SyncValidateResult) | undefined) | undefined;
        options?: import("async-validator").ValidateOption | undefined;
        max?: number | undefined;
        min?: number | undefined;
        transform?: ((value: any) => any) | undefined;
        fields?: Record<string, import("async-validator").Rule> | undefined;
        trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
        pattern?: string | RegExp | undefined;
        len?: number | undefined;
        enum?: (string | number | boolean | null | undefined)[] | undefined;
        whitespace?: boolean | undefined;
        defaultField?: import("async-validator").Rule | undefined;
        asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
        field: string;
    };
} | {
    rules: undefined;
    prop: string;
    label: string;
};
/**
 * 获取组件参数
 * @param props
 * @param getModel
 */
export declare const useFormProps: (props: ComputedRef<FormItemsSchema>, getModel: () => Ref<any>) => Record<string, any>;
export declare const useFormItem: (getFormSchema: () => Ref<FormItemsSchema[]>, updateFormSchema: (_items: FormItemsSchema[]) => void) => {
    appendFields: (items: FormItemsSchema | FormItemsSchema[], to?: string | boolean) => void;
    deleteField: (prop: string) => void;
};
