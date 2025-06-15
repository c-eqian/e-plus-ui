import { isEmpty } from '@eqian/utils-vue';
import { onBeforeMount, ref, unref, type ComponentInternalInstance } from 'vue';
import type { FormTableReturn, OmitFormSchemaReturn, OmitTableReturn, UseFormTable } from '../type';
import type { Recordable } from '@e-plus-ui/utils';
let tableInstanceCache: OmitTableReturn<any>;
let formSchemaInstanceCache: OmitFormSchemaReturn;
type FormTableReturnKey = keyof FormTableReturn;
export const useFormTable: UseFormTable = props => {
  const formTableInstance = ref<ComponentInternalInstance>();
  /**
   * 注册实列函数
   * @param instance
   */
  const registry = (instance: ComponentInternalInstance) => {
    if (unref(formTableInstance)) return;
    formTableInstance.value = instance;
    $setFormTableProps();
  };
  onBeforeMount(() => {
    formTableInstance.value = undefined;
  });
  /**
   * 获取组件实列暴露方法
   * @param key
   * @param defaultValue
   */
  const getInstanceRunKey = <R extends FormTableReturnKey | string>(
    key: R,
    defaultValue: any = null
  ): R extends FormTableReturnKey ? FormTableReturn[R] : any => {
    if (!formTableInstance.value) return defaultValue;
    return formTableInstance.value.exposed?.[key];
  };
  /**
   * 设置参数
   */
  const $setFormTableProps = () => {
    const run = getInstanceRunKey('$setFormTableProps', () => null);
    run(props);
  };
  /**
   * table表格组件实列
   */
  const getTableInstance = (): OmitTableReturn<any> => {
    if (!isEmpty(tableInstanceCache)) return tableInstanceCache;
    const run = getInstanceRunKey('getTableInstance', () => null);
    tableInstanceCache = run();
    return tableInstanceCache;
  };
  /**
   * formSchema表单实列
   */
  const getFormSchemaInstance = (): OmitFormSchemaReturn => {
    if (!isEmpty(formSchemaInstanceCache)) return formSchemaInstanceCache;
    const run = getInstanceRunKey('getFormSchemaInstance', () => null);
    formSchemaInstanceCache = run();
    return formSchemaInstanceCache;
  };
  /**
   * 重置表格
   */
  const resetTable = async () => {
    const run = getInstanceRunKey('resetTable', () => null);
    await run();
  };
  /**
   * 搜索表格
   */
  const searchTable = async (params?: Recordable) => {
    const run = getInstanceRunKey('searchTable', () => null);
    await run(params);
  };
  return {
    registry,
    resetTable,
    searchTable,
    getTableInstance,
    getFormSchemaInstance
  };
};
