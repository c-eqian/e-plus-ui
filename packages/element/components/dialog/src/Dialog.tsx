import { isFunction } from '@eqian/utils-vue';
import { ElDialog } from 'element-plus';
import { defineComponent, type SlotsType } from 'vue';
import DialogFooter from './DialogFooter';
import DialogHeader from './DialogHeader';
import { dialogProps } from './dialogProps';
import { useDialog } from './hooks/useDialog';
import { useDialogProps } from './hooks/useDialogProps';
import type { DialogSlots, SlotsKey } from './type';
import type { CallbackVoid } from '@e-plus-ui/utils/types';

export default defineComponent({
  name: 'EpDialog',
  props: dialogProps,
  emits: {
    'update:visible': (_v: boolean) => true,
    /**
     * 确认按钮，如果返回`false`或者返回一个promise,错误时将阻止关闭。或者直接调用done回调进行关闭
     * */
    confirmed: (_done: CallbackVoid) => true,
    /**
     * 关闭按钮 如果返回`false`或者返回一个promise,错误时将阻止关闭。或者直接调用done回调进行关闭
     * */
    canceled: (_done: CallbackVoid) => true,
    /** 打开前 */
    open: () => true,
    /** 打开后*/
    opened: () => true,
    /** 关闭前 */
    close: () => true,
    /** 关闭后 */
    closed: () => true,
    /** 打开聚焦 */
    openAutoFocus: () => true,
    /** 关闭聚焦 */
    closeAutoFocus: () => true
  },
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
        const ops = args[0];
        const headerProps = this.getHeaderProps();
        return <DialogHeader {...headerProps} {...ops}></DialogHeader>;
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
    const prettierSlots = (slotsContent: any) => {
      if (slotsContent !== void 0) {
        return (...args: any[]) => slotsContent(...args);
      }
      return undefined;
    };
    // 渲染插槽
    const renderSlots = () => {
      const _slots = {} as unknown as Record<SlotsKey, any>;
      /**
       * @slot 默认插槽
       */
      const defaultSlots = this.$slots.default;
      const defaultSlot = prettierSlots(defaultSlots);
      if (defaultSlot !== void 0) {
        _slots.default = defaultSlot;
      }
      /**
       * @slot 头部插槽
       */
      const headerSlots = this.$slots.header;
      const headerSlot = prettierSlots(headerSlots);
      _slots.header = headerSlot !== void 0 ? headerSlot : renderHeader();
      /**
       * @slot 底部插槽
       */
      const footerSlots = this.$slots.footer;
      const footerSlot = prettierSlots(footerSlots);
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
