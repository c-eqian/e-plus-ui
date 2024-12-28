import { ElButton } from 'element-plus';
import { defineComponent, toRef, type PropType } from 'vue';
import { useDialogFooter } from './hooks/useDialogFooter.ts';
import type { FooterBtnProps, FooterProps } from './type.ts';
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
    return (
      <>
        <div class={`ep-flex ep-items-center ${this.getPositionClass()}`}>
          <div>
            <ElButton
              onClick={() => this.beforeConfirm?.()}
              type={'primary'}
              loading={this.confirmLoading}
            >
              确定
            </ElButton>
            <ElButton onClick={() => this.beforeClose?.()}>取消</ElButton>
          </div>
        </div>
      </>
    );
  }
});
