import { isBoolean, isFunction } from '@eqian/utils-vue';
import { computed, getCurrentInstance, ref, type SetupContext } from 'vue';
import type { DialogEmits, DialogProps } from '../type';
import { useDialogProps } from './useDialogProps.ts';

export const useDialog = (props: DialogProps) => {
  const instance = getCurrentInstance()!;
  const emit = instance.emit as SetupContext<DialogEmits>['emit'];
  const isUseFullScreen = ref(false);
  const confirmLoading = ref(false);
  const dialogVisible = computed({
    get() {
      return props.visible;
    },
    set(v) {
      emit('update:visible', v);
    }
  });
  const handleSwitchFullScreen = () => {
    isUseFullScreen.value = !isUseFullScreen.value;
  };
  const handleSwitchLoading = (v: boolean) => {
    if (isBoolean(v)) {
      confirmLoading.value = v;
    } else {
      confirmLoading.value = false;
    }
  };
  const getDialogProps = () => {
    const dialogPropsRef = useDialogProps(props, ['dialogProps']);
    return dialogPropsRef.value.dialogProps;
  };
  // 如果调动回调 done，并传入一个布尔值，表示是否需要关闭弹窗，否则只关闭加载状态
  const closeLoading = (isClose: boolean) => {
    handleSwitchLoading(false);
    if (isClose) {
      dialogVisible.value = false;
    }
  };
  /**
   * 获取顶部参数
   */
  const getHeaderProps = (...args: any[]) => {
    const dialogProps = getDialogProps();
    const baseProps = useDialogProps(props, ['isShowClose', 'isUseFullScreen', 'isUseHeaderLine']);
    return {
      ...dialogProps,
      ...args,
      ...baseProps.value,
      handleSwitchFullScreen
    };
  };
  // 获取底部参数
  const getFooterProps = () => {
    const footerProps = useDialogProps(props, ['footerProps']);
    return {
      ...footerProps.value.footerProps,
      confirmLoading: footerProps.value.footerProps?.isUseConfirmLoading
        ? confirmLoading.value
        : false,
      beforeConfirm: () => {
        if (isFunction(props.beforeConfirm)) {
          if (footerProps.value.footerProps?.isUseConfirmLoading) {
            handleSwitchLoading(true);
          }
          try {
            const ok = props.beforeConfirm();
            if (ok) {
              closeLoading(true);
            }
          } catch {
            closeLoading(false);
          }
        }
      },
      beforeClose: () => {
        if (isFunction(props.beforeClose)) {
          try {
            const ok = props.beforeClose();
            if (ok) {
              dialogVisible.value = true;
            }
          } catch {}
        }
      }
    };
  };

  return {
    dialogVisible,
    confirmLoading,
    isUseFullScreen,
    handleSwitchFullScreen,
    handleSwitchLoading,
    getDialogProps,
    getHeaderProps,
    getFooterProps,
    closeLoading
  };
};
