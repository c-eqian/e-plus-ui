import { FormSchema } from './type';
export * from './type';
import { withInstall } from '../../utils';
import Form from './Form';
export const defineFormSchema = (schema: FormSchema) => {
  return schema;
};
const EpFormSchema = withInstall(Form);
export default EpFormSchema;
