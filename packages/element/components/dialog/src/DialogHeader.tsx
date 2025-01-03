import { Close, FullScreen } from '@e-plus-ui/icons';
import { EpLine } from '@e-plus-ui/pure/components/line';
import { EpTextFold } from '@e-plus-ui/pure/components/text-fold';
import { ElIcon } from 'element-plus';
import { computed, defineComponent } from 'vue';
import type { HeaderProps } from './type';
export default defineComponent({
  name: 'DialogHeader',
  setup(props, { attrs }) {
    const propsRef = computed<HeaderProps>(() => {
      return { ...props, ...attrs };
    });
    return {
      propsRef
    };
  },
  render() {
    // 渲染标题
    const renderTitle = () => {
      return (
        <div class={'ep-flex-1 ep-dialog-header__title ep-w-full'}>
          <EpTextFold line={1}>
            <h3 class={'!ep-p-0 !ep-m-0 !ep-text-[16px]'} id={this.propsRef.titleId}>
              {this.propsRef.title || '信息弹窗'}
            </h3>
          </EpTextFold>
        </div>
      );
    };
    const renderCustom = () => {
      const isShowClose = this.propsRef.isShowClose === void 0 ? true : !!this.propsRef.isShowClose;
      const isUseFullScreen = !!this.propsRef.isUseFullScreen;
      const needRender = isUseFullScreen || isShowClose;
      return needRender ? (
        <div class={'ep-flex ep-items-center'}>
          {isUseFullScreen ? (
            <div class={'ep-cursor-pointer'} onClick={this.propsRef.handleSwitchFullScreen}>
              <ElIcon class={'ep-mx-5'}>
                <FullScreen />
              </ElIcon>
            </div>
          ) : null}
          {isShowClose ? (
            <div class={'ep-cursor-pointer'} onClick={() => this.propsRef?.beforeClose?.()}>
              <ElIcon>
                <Close />
              </ElIcon>
            </div>
          ) : null}
        </div>
      ) : null;
    };
    const renderLine = () => {
      const isUseLine =
        this.propsRef.isUseHeaderLine === void 0 ? true : !!this.propsRef.isUseHeaderLine;
      return isUseLine ? <EpLine></EpLine> : null;
    };
    return (
      <>
        <div class={'ep-flex ep-justify-between ep-items-center'}>
          {renderTitle()}
          {renderCustom()}
        </div>
        {renderLine()}
      </>
    );
  }
});
