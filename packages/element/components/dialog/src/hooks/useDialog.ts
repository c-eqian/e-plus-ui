import { tryCall, tryExecPromise } from '@e-plus-ui/utils';
import { isBoolean, isFunction } from '@eqian/utils-vue';
import { computed, ref } from 'vue';
import type { DialogPropsWithEmits } from '../type';
import { useDialogProps } from './useDialogProps';

export const useDialog = (props: DialogPropsWithEmits) => {
  // const instance = getCurrentInstance()!;
  const {
    'onUpdate:visible': onUpdateVisible,
    onClose,
    onClosed,
    onCloseAutoFocus,
    onOpened,
    onConfirm,
    onCancel,
    onOpenAutoFocus
  } = props;
  const isUseFullScreen = ref(false);
  const confirmLoading = ref(false);
  const handleSwitchVisible = (v: boolean) => {
    dialogVisible.value = v;
  };
  const dialogVisible = computed({
    get() {
      return props.visible;
    },
    set(v) {
      tryCall(onUpdateVisible, v);
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
      handleSwitchVisible(false);
    }
  };
  const beforeClose = async () => {
    if (isFunction(onCancel)) {
      try {
        const ok = await tryExecPromise(onCancel, () => handleSwitchVisible(false));
        if (ok) {
          handleSwitchVisible(false);
        }
      } catch {}
    } else {
      handleSwitchVisible(false);
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
      beforeClose,
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
      beforeConfirm: async () => {
        if (isFunction(onConfirm)) {
          if (footerProps.value.footerProps?.isUseConfirmLoading) {
            handleSwitchLoading(true);
          }
          try {
            const ok = await tryExecPromise(onConfirm, () => closeLoading(true));
            if (ok) {
              closeLoading(true);
            }
          } catch (e) {
            closeLoading(false);
            console.error(e);
          }
        } else {
          handleSwitchVisible(false);
        }
      },
      beforeClose
    };
  };
  const handleBindClicked = () => {
    return {
      onClose,
      onCloseAutoFocus,
      onOpened,
      onClosed,
      onOpenAutoFocus
    };
  };
  return {
    dialogVisible,
    confirmLoading,
    isUseFullScreen,
    handleSwitchFullScreen,
    handleSwitchLoading,
    handleSwitchVisible,
    getDialogProps,
    getHeaderProps,
    getFooterProps,
    closeLoading,
    handleBindClicked
  };
};
