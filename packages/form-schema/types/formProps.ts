import type { PropType } from 'vue';
import type { FormContext, FormSchema } from '../type';

export const FormSchemaProps = {
  model: {
    type: Object as PropType<FormContext['model']>,
    default: () => ({}),
  },
  config: {
    type: Object as PropType<FormSchema>,
    default: () => {},
  },
};
