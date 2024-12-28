import { isFunction } from '@eqian/utils-vue';
import { ElDialog } from 'element-plus';
import { defineComponent, type SlotsType } from 'vue';
import DialogFooter from './DialogFooter';
import DialogHeader from './DialogHeader';
import { dialogProps } from './dialogProps';
import { useDialog } from './hooks/useDialog.ts';
import { useDialogProps } from './hooks/useDialogProps';
import type { DialogSlots, SlotsKey } from './type';

export default defineComponent({
  name: 'EpDialog',
  props: dialogProps,
  slots: Object as SlotsType<DialogSlots>,
  setup(props) {
    const {
      dialogVisible,
      isUseFullScreen,
      confirmLoading,
      handleSwitchLoading,
      closeLoading,
      handleBindClicked,
      handleSwitchVisible,
      handleSwitchFullScreen,
      getDialogProps,
      getHeaderProps,
      getFooterProps
    } = useDialog(props);
    return {
      dialogVisible,
      isUseFullScreen,
      confirmLoading,
      handleBindClicked,
      handleSwitchFullScreen,
      handleSwitchLoading,
      handleSwitchVisible,
      closeLoading,
      getHeaderProps,
      getDialogProps,
      getFooterProps
    };
  },
  render() {
    /**
     * 渲染顶部内容
     */
    const renderHeader = () => {
      const renderHeader = useDialogProps(this.$props, ['renderHeader']);
      if (isFunction(renderHeader.value.renderHeader)) {
        return (close: () => void, titleId: string, titleClass: string) =>
          renderHeader.value.renderHeader?.(close, titleId, titleClass);
      }
      return (...args: any[]) => {
        const headerProps = this.getHeaderProps(...args);
        return <DialogHeader {...headerProps}></DialogHeader>;
      };
    };
    // 渲染底部内容
    const renderFooter = () => {
      const _renderFooter = useDialogProps(this.$props, ['renderFooter']).value;
      if (isFunction(_renderFooter.renderFooter)) {
        return () => _renderFooter.renderFooter?.(() => this.handleSwitchVisible(false));
      }
      return () => {
        const footerProps = this.getFooterProps();
        return <DialogFooter {...footerProps}></DialogFooter>;
      };
    };
    const getSlots = (name: SlotsKey) => {
      const slotsContent = this.$slots[name];
      if (slotsContent !== void 0) {
        return (...args: any[]) => slotsContent(...args);
      }
      return undefined;
    };
    // 渲染插槽
    const renderSlots = () => {
      const _slots = {} as unknown as Record<SlotsKey, any>;
      const defaultSlot = getSlots('default');
      if (defaultSlot !== void 0) {
        _slots.default = defaultSlot;
      }
      const headerSlot = getSlots('header');
      _slots.header = headerSlot !== void 0 ? headerSlot : renderHeader();
      const footerSlot = getSlots('footer');
      _slots.footer = footerSlot !== void 0 ? footerSlot : renderFooter();
      return _slots;
    };
    return (
      <>
        <ElDialog
          v-model={this.dialogVisible}
          {...this.getDialogProps()}
          {...this.handleBindClicked()}
          showClose={false}
          fullscreen={this.isUseFullScreen}
          v-slots={renderSlots()}
        ></ElDialog>
      </>
    );
  }
});
