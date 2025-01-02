import type { DialogEmits, DialogPropsWithEmits, HeaderProps } from './type';
import type { PropType } from 'vue';

type OmitProps = Partial<
  Omit<Record<keyof DialogPropsWithEmits, any>, 'renderHeader' | 'renderFooter'>
>;

export const dialogProps: OmitProps = {
  // emits
  'onUpdate:visible': Function as PropType<DialogEmits['onUpdate:visible']>,
  onOpen: Function as PropType<DialogEmits['onOpen']>,
  onClose: Function as PropType<DialogEmits['onClose']>,
  onConfirmed: Function as PropType<DialogEmits['onConfirmed']>,
  onCanceled: Function as PropType<DialogEmits['onCanceled']>,
  onCloseAutoFocus: Function as PropType<DialogEmits['onCloseAutoFocus']>,
  onClosed: Function as PropType<DialogEmits['onClosed']>,
  onOpened: Function as PropType<DialogEmits['onOpened']>,
  onOpenAutoFocus: Function as PropType<DialogEmits['onOpenAutoFocus']>
};

export const headerProps: HeaderProps = {
  ...dialogProps.dialogProps,
  titleId: ''
};
