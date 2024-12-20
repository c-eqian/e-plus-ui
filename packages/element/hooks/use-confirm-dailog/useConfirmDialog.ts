import { isBoolean, isFunction, isString, useMerge } from '@eqian/utils-vue';
import { ElMessageBox, type ElMessageBoxOptions } from 'element-plus';
import type { ConfirmDialog } from './type';

/**
 * 弹窗确认
 * @param config
 * @param options element-plus 配置
 */
export const useConfirmDialog = async (config: ConfirmDialog, options?: ElMessageBoxOptions) => {
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
          options?.confirmButtonText ?? (defaultOptions.confirmButtonText as string);
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

          if (resolve instanceof Promise || typeof (resolve as any)?.then === 'function') {
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
    }
  };
  try {
    const newOptions = useMerge({}, defaultOptions, options ?? {}) as ElMessageBoxOptions;
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
