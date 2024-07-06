import type { PropType } from 'vue';
import type { FormSchema } from '../type';
export declare const FormSchemaProps: {
    model: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    config: {
        type: PropType<FormSchema<any>>;
        default: () => void;
    };
};
