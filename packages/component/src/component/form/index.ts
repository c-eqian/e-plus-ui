/**
 * 自定义表单
 */
import { useSFCWithInstall } from 'co-utils-vue';

import ZkForm from './form';
import type { IZkFormItemConfig } from './type';

ZkForm.install = (app: any):void => {
  app.component(ZkForm.name, ZkForm);
};
export const defineFormItem = <T=any>(formItem: IZkFormItemConfig<T>[]) => {
  return formItem;
};
export default ZkForm as useSFCWithInstall<typeof ZkForm>;
