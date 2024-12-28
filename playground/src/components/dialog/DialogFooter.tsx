import { isArray, isFunction, isObjectLike, isString, useOmit } from '@eqian/utils-vue';
import { ElButton, type ButtonProps } from 'element-plus';
import { defineComponent, toRef, type PropType } from 'vue';
import { useDialogFooter } from './hooks/useDialogFooter';
import type { FooterBtnMap, FooterBtnProps, FooterProps } from './type';
type BaseFooterProps = FooterProps & {
  confirmLoading?: boolean;
  beforeConfirm: () => void;
  beforeClose: () => void;
};
export default defineComponent({
  name: 'DialogFooter',
  props: {
    isUseConfirmLoading: Boolean,
    buttons: Object as PropType<FooterBtnProps>,
    position: String as PropType<BaseFooterProps['position']>,
    confirmLoading: Boolean,
    beforeConfirm: Function as PropType<BaseFooterProps['beforeClose']>,
    beforeClose: Function as PropType<BaseFooterProps['beforeClose']>
  },
  setup(props: BaseFooterProps, { attrs }) {
    const { getPositionClass, beforeConfirm, beforeClose } = useDialogFooter({
      ...props,
      ...attrs
    });
    const confirmLoading = toRef(props, 'confirmLoading');
    return {
      getPositionClass,
      beforeConfirm,
      confirmLoading,
      beforeClose
    };
  },
  render() {
    const buttons = this.$props.buttons || ['confirm', 'cancel'];
    const buildButton = (props: Partial<ButtonProps>, text: string, callback: () => void) => {
      return (
        <ElButton onClick={() => (isFunction(callback) ? callback() : null)} {...props}>
          {text}
        </ElButton>
      );
    };
    const buttonPropsMap: Record<'confirm' | 'cancel', Partial<ButtonProps>> = {
      confirm: {
        type: 'primary',
        loading: this.confirmLoading
      },
      cancel: {}
    };
    const handleRenderMap = (button: FooterBtnMap) => {
      const _render = button.render;
      if (isFunction(_render)) {
        return _render();
      }
      const btType = button.type;
      if (!btType || (btType !== 'confirm' && btType !== 'cancel')) {
        console.warn(
          "Custom rendering must have a type setting value of 'confirm' or 'cancel', or use render"
        );
        return null;
      }
      const isConfirm = btType === 'confirm';
      const btnProps = buttonPropsMap[btType];
      const confirmText = button.text ?? '确定';
      const cancelText = button.text ?? '取消';
      const componentProps = button.componentProps ?? useOmit(button.componentProps!, ['loading']);
      return buildButton(
        { ...btnProps, ...componentProps },
        isConfirm ? confirmText : cancelText,
        isConfirm ? this.beforeConfirm : this.beforeClose
      );
    };
    const renderBtn = () => {
      if (isArray(buttons)) {
        return buttons.map(bt => {
          if (isString(bt)) {
            const btnProps = buttonPropsMap[bt];
            const isConfirm = bt === 'confirm';
            return buildButton(
              btnProps,
              isConfirm ? '确定' : '取消',
              isConfirm ? this.beforeConfirm : this.beforeClose
            );
          }
          if (isObjectLike(bt)) {
            return handleRenderMap(bt);
          }
          return null;
        });
      }
      if (isObjectLike(buttons)) {
        return handleRenderMap(buttons);
      }
      return null;
    };
    return (
      <>
        {isArray(buttons) && buttons.length === 0 ? null : (
          <div class={`ep-flex ep-items-center ${this.getPositionClass()}`}>
            <div class={'ep-dialog-footer__button'}>{renderBtn()}</div>
          </div>
        )}
      </>
    );
  }
});
