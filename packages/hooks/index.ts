import { ElMessageBox, type ElMessageBoxOptions } from 'element-plus';
import { isBoolean, isFunction, useMerge } from '@eqian/utils-vue';
export type UseActionMessage = {
  /**
   * 继续执行回调
   * 如果返回true 或者返回promise非reject、或者什么都不返回，则在执行成功后关闭，否则不会关闭
   */
  onResolve?: <T = any>(params?: T) => undefined | boolean | Promise<any>;
  /**
   * 失败的回调
   */
  onReject?: (e: any) => void;
  template?: '是否删除' | '是否修改';
  /**
   * 参数
   */
  params?: unknown;
};
/**
 * 弹窗确认
 * @param config
 * @param options
 */
export const useActionMessage = async (
  config: UseActionMessage,
  options?: ElMessageBoxOptions
) => {
  const { onReject, onResolve, params, template } = config;
  const defaultOptions: ElMessageBoxOptions = {
    title: '提示',
    message: '是否继续？',
    autofocus: false,
    confirmButtonText: '确认',
    type: 'warning',
    beforeClose: (action, instance, done) => {
      const rejectRes = () => {
        instance.confirmButtonLoading = false;
        instance.confirmButtonText =
          options?.confirmButtonText ??
          (defaultOptions.confirmButtonText as string);
      };
      if (action === 'confirm') {
        instance.confirmButtonLoading = true;
        instance.confirmButtonText = '请稍后...';
        if (isFunction(onResolve)) {
          const resolve = onResolve.call(null, params);
          if (resolve === undefined) {
            instance.confirmButtonLoading = false;
            done();
            return;
          }
          if (!resolve) {
            rejectRes();
            return;
          }
          if (isBoolean(resolve) && resolve === true) {
            instance.confirmButtonLoading = false;
            done(); // 关闭
            return;
          }

          if (
            resolve instanceof Promise ||
            typeof (resolve as any)?.then === 'function'
          ) {
            (resolve as any)
              ?.then((res: boolean) => {
                if (res) {
                  instance.confirmButtonLoading = false;
                  done(); // 关闭
                  return;
                }
                rejectRes();
              })
              .catch(() => {
                rejectRes();
              });
            return;
          }
          rejectRes();
        }
        return;
      }
      done();
    },
  };
  try {
    const newOptions = useMerge(
      {},
      defaultOptions,
      options ?? {}
    ) as ElMessageBoxOptions;
    if (template) {
      newOptions.message = `<span>${template}<strong style="color: red;">${options?.message}</strong>数据？</span>`;
      newOptions.dangerouslyUseHTMLString = true;
    }
    await ElMessageBox(newOptions);
  } catch (e) {
    if (isFunction(onReject)) {
      onReject.call(null, e);
    }
  }
};
