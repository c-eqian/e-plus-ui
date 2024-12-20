import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import _FormSchema from './src/FormSchema';
import type { FormSchema } from './src/type';
export const EpFormSchema: SFCWithInstall<typeof _FormSchema> = withInstall(_FormSchema);
export * from './src/type';
export * from './src/hooks/useFormSchema';
export const defineFormSchema = <T = any>(schema: FormSchema<T>) => {
  return schema;
};
