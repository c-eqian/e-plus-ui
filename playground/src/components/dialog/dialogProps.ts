import type {
  BeforeConfirm,
  DialogComponentProps,
  DialogProps,
  FooterProps,
  HeaderProps
} from './type.ts';
import type { PropType } from 'vue';

export const dialogProps: Omit<Record<keyof DialogProps, any>, 'renderHeader'> = {
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
  beforeClose: Function as PropType<BeforeConfirm>,
  beforeConfirm: Function as PropType<BeforeConfirm>
};

export const headerProps: HeaderProps = {
  ...dialogProps.dialogProps,
  titleId: ''
};
