import { onBeforeMount, ref, type ComponentInternalInstance } from 'vue';
import type {
  FormTableProps,
  FormTableReturn,
  OmitFormSchemaReturn,
  OmitTableReturn,
  UseFormTable
} from '../type';
import type { Recordable } from '@e-plus-ui/utils';
type FormTableReturnKey = keyof FormTableReturn;
export const useFormTable: UseFormTable = props => {
  const formTableInstance = ref<ComponentInternalInstance>();
  /**
   * 注册实列函数
   * @param instance
   */
  const registry = (instance: ComponentInternalInstance) => {
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
   * table 表格组件实列
   * 每次实时从 formTableInstance.value.exposed 取最新引用，避免 HMR 后拿到陈旧闭包。
   */
  const getTableInstance = (): OmitTableReturn<any> => {
    const run = getInstanceRunKey('getTableInstance', () => null);
    return run();
  };
  /**
   * formSchema 表单实列
   */
  const getFormSchemaInstance = (): OmitFormSchemaReturn => {
    const run = getInstanceRunKey('getFormSchemaInstance', () => null);
    return run();
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
  /**
   * 更新 props
   * @param partial
   */
  const updateProps = (partial: Partial<FormTableProps>) => {
    const run = getInstanceRunKey('updateProps', () => null);
    run(partial);
  };
  return {
    registry,
    resetTable,
    searchTable,
    getTableInstance,
    getFormSchemaInstance,
    updateProps
  };
};
