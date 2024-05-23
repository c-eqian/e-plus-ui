/**
 * 自定义表单
 */
import Form from './form';
import { withInstall } from '../../utils';
import type { IFormItemConfig } from './type';
export * from './type';
const EpForm = withInstall(Form);
export const defineFormSchema = <T = any>(formItem: IFormItemConfig<T>[]) => {
  return formItem;
};
export default EpForm;
