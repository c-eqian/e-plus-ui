import type { ButtonProps, DialogProps as ElDialogProps } from 'element-plus';
import type { VNode } from 'vue';

type Btn = 'confirm' | 'cancel';
type Render = () => VNode;
type CallbackVoid = () => void;
type FooterBtnMap = {
  // 自定义渲染
  render?: Render;
  /**
   * 按钮文本，如果使用`render`，该值无效
   */
  text?: string;
  /**
   * element-plus按钮组件参数
   */
  componentProps?: ButtonProps;
};
/**
 * 底部按钮参数
 */
export type FooterBtnProps = FooterBtnMap | FooterBtnMap[] | Btn[];

/**
 * 头部渲染
 */
export type RenderHeader = (
  close: CallbackVoid,
  titleId: string,
  titleClass: string
) => VNode | VNode[] | Element | Element[] | string;

export type BeforeConfirm = () => boolean | undefined | Promise<void>;
/**
 * 提取`el-dialog`参数，取消`modelValue`
 */
export type DialogComponentProps = Partial<
  Omit<ElDialogProps, 'modelValue' | 'showClose' | 'beforeClose'>
>;
/**
 * 弹窗props参数
 */
export type DialogProps = {
  /**
   * 是否显示，重写`el-dialog`中的`visible`
   * @default false
   */
  visible: boolean;
  /**
   * 是否使用全屏
   * @default false
   */
  isUseFullScreen?: boolean;
  /**
   * 关闭前回调
   */
  beforeClose?: BeforeConfirm;
  /**
   * 确定关闭前，如果返回`false`或者返回一个promise,错误时将阻止关闭
   */
  beforeConfirm?: BeforeConfirm;
  /**
   * 是否使用顶部分割线
   * @default true
   */
  isUseHeaderLine?: boolean;
  /**
   * 是否显示关闭图标
   * @default true
   */
  isShowClose?: boolean;
  /**
   * 底部配置参数
   */
  footerProps?: FooterProps;
  /**
   * 自定义渲染头部，优先级低于插槽。
   * 如果自定义头部渲染，关闭按钮也需要自定义，如果需要的话
   */
  renderHeader?: RenderHeader;
  /**
   * el-dialog参数
   */
  dialogProps?: DialogComponentProps;
};
/**
 * 插槽
 */
export type DialogSlots = {
  footer?: (...args: any[]) => void;
  header?: (...args: any[]) => void;
  default?: (...args: any[]) => void;
};

/**
 * emits 事件
 */
export type DialogEmits = {
  'update:visible': (v: boolean) => void;
};

export type SlotsKey = keyof DialogSlots;

export type HeaderProps = DialogComponentProps & {
  beforeClose?: () => void;
  switchFullScreen?: () => void;
  titleId?: string;
  [key: string]: any;
} & Pick<DialogProps, 'isUseFullScreen' | 'isShowClose' | 'isUseHeaderLine'>;

/**
 * 底部参数
 */
export type FooterProps = {
  /**
   * 按钮配置 默认为`confirm`（确定），`cancel`（取消）
   */
  buttons?: FooterBtnProps;
  /**
   * 点击确定需要loading
   * @default true
   */
  isUseConfirmLoading?: boolean;
  /**
   * 位置
   * @default center
   */
  position?: 'center' | 'left' | 'right';
};
