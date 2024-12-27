import { ElButton } from 'element-plus';
import { computed, defineComponent } from 'vue';
import type { FooterProps } from './type.ts';
type BaseFooterProps = FooterProps & {
  confirmLoading?: boolean;
  beforeConfirm: () => void;
  beforeClose: () => void;
};
export default defineComponent({
  name: 'DialogFooter',
  setup(props: BaseFooterProps, { attrs }) {
    const propsRef = computed<BaseFooterProps>(() => {
      return { ...props, ...attrs };
    });
    return {
      propsRef
    };
  },
  render() {
    const footerPositionClass = () => {
      if (this.propsRef.position === 'left') return 'ep-justify-start';
      if (this.propsRef.position === 'right') return 'ep-justify-end';
      return 'ep-justify-center';
    };
    return (
      <>
        <div class={`ep-flex ep-items-center ${footerPositionClass()}`}>
          <div>
            <ElButton
              onClick={() => this.propsRef?.beforeConfirm?.()}
              type={'primary'}
              loading={this.propsRef.confirmLoading}
            >
              确定
            </ElButton>
            <ElButton>取消</ElButton>
          </div>
        </div>
      </>
    );
  }
});
