import { type FormInstance, type FormValidateCallback } from 'element-plus';
import type { Ref } from 'vue';
export declare const useFormValidate: (formInstanceRef: Ref<FormInstance>) => {
    validate: (isScrollToField?: boolean, callback?: FormValidateCallback) => Promise<boolean>;
    resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
    scrollIntoView: (field: string) => void;
};
