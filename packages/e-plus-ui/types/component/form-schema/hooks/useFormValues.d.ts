import { Ref } from 'vue';
import type { UpdateFieldValue } from '../types';
export declare const useFormValues: (getModel: () => Ref<object>, updateFieldValue: UpdateFieldValue) => {
    getFieldsValues: <T extends Record<string, any>>(serialize?: boolean) => T;
    setFieldsValues: (values: Record<string, any>) => void;
    resetFieldsValues: () => void;
};
