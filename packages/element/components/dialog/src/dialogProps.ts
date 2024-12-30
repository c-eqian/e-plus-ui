import type {
  DialogComponentProps,
  DialogEmits,
  DialogPropsWithEmits,
  FooterProps,
  HeaderProps
} from './type';
import type { PropType } from 'vue';

type OmitProps = Omit<Record<keyof DialogPropsWithEmits, any>, 'renderHeader' | 'renderFooter'>;

export const dialogProps: OmitProps = {
  visible: {
    type: Boolean,
    required: true
  },
  footerProps: Object as PropType<FooterProps>,
  isShowClose: {
    type: Boolean,
    default: true
  },
  isUseFullScreen: {
    type: Boolean,
    default: false
  },
  isUseHeaderLine: {
    type: Boolean,
    default: true
  },
  dialogProps: {
    type: Object as PropType<DialogComponentProps>,
    default: () => ({}) as unknown as DialogComponentProps
  },
  // emits
  'onUpdate:visible': Function as PropType<DialogEmits['onUpdate:visible']>,
  onOpen: Function as PropType<DialogEmits['onOpen']>,
  onClose: Function as PropType<DialogEmits['onClose']>,
  onConfirm: Function as PropType<DialogEmits['onConfirm']>,
  onCancel: Function as PropType<DialogEmits['onCancel']>,
  onCloseAutoFocus: Function as PropType<DialogEmits['onCloseAutoFocus']>,
  onClosed: Function as PropType<DialogEmits['onClosed']>,
  onOpened: Function as PropType<DialogEmits['onOpened']>,
  onOpenAutoFocus: Function as PropType<DialogEmits['onOpenAutoFocus']>
};

export const headerProps: HeaderProps = {
  ...dialogProps.dialogProps,
  titleId: ''
};
