import { ElMessageBox, type ElMessageBoxOptions } from 'element-plus';
import { isBoolean, isFunction, isString, useMerge } from '@eqian/utils-vue';
import { VNode } from 'vue';
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
  /**
   * HTML模板字符串，如果使用该值，将覆盖默认
   */
  HTMLString?: string | VNode;
  /**
   * 预设提示前缀
   */
  presetPrefix?: '是否删除' | '是否修改';
  /**
   * 参数
   */
  params?: unknown;
};
/**
 * 弹窗确认
 * @param config
 * @param options element-plus 配置
 */
export const useActionMessage = async (
  config: UseActionMessage,
  options?: ElMessageBoxOptions
) => {
  const { onReject, onResolve, params, HTMLString, presetPrefix } = config;
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
        if (isFunction(onResolve)) {
          instance.confirmButtonLoading = true;
          instance.confirmButtonText = '请稍后...';
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
        } else {
          done();
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
    let _html: any;
    if (isString(HTMLString)) {
      _html = `<span>${presetPrefix}<strong style="color: red;">${options?.message}</strong>数据？</span>`;
    } else if (presetPrefix) {
      _html = `<span>${presetPrefix}<strong style="color: red;">${options?.message}</strong>数据？</span>`;
    } else {
      _html = options?.message ?? '';
    }
    newOptions.message = _html;
    newOptions.dangerouslyUseHTMLString = true;
    await ElMessageBox(newOptions);
  } catch (e) {
    if (isFunction(onReject)) {
      onReject.call(null, e);
    }
  }
};
