import { FormSchema } from './type';
export * from './type';
import { withInstall } from '../../utils';
import Form from './Form';
export { useFormSchema } from './hooks/useFormSchema';
export const defineFormSchema = <T>(schema: FormSchema<T>) => {
  return schema;
};
const EpFormSchema = withInstall(Form);
export default EpFormSchema;
