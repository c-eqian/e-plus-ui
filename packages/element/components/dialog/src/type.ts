import type { ButtonProps, DialogProps as ElDialogProps } from 'element-plus';
import type { ComponentInternalInstance, ShallowRef, VNode } from 'vue';

type Btn = 'confirm' | 'cancel';
type Render = () => VNode;
type CallbackVoid = () => void;
export type FooterBtnMap = {
  /**
   * 按钮类型，如果使用自定义render，随便一个值都可以
   */
  type?: Btn;
  // 自定义渲染
  render?: Render;
  /**
   * 按钮文本，如果使用`render`，该值无效
   */
  text?: string;
  /**
   * element-plus按钮组件参数
   */
  componentProps?: Partial<ButtonProps>;
};
/**
 * 底部按钮参数
 */
export type FooterBtnProps = FooterBtnMap | FooterBtnMap[] | Btn[] | (FooterBtnMap | Btn)[];

/**
 * 头部渲染
 */
export type RenderHeader = (
  close: CallbackVoid,
  titleId: string,
  titleClass: string
) => VNode | VNode[] | Element | Element[] | string;

/**
 * 底部渲染
 */
export type RenderFooter = (done: CallbackVoid) => VNode | VNode[] | Element | Element[] | string;

export type BeforeConfirm = boolean | undefined | Promise<unknown> | void;
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
   * 自定义渲染底部
   * 自定义渲染时，接受一个回调函数用于关闭弹窗
   */
  renderFooter?: RenderFooter;
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
  'onUpdate:visible': (v: boolean) => void;
  /**
   * 确认按钮，如果返回`false`或者返回一个promise,错误时将阻止关闭
   * 或者直接调用done回调进行关闭
   * */
  onConfirmed: (done: CallbackVoid) => BeforeConfirm;
  /**
   * 关闭按钮 如果返回`false`或者返回一个promise,错误时将阻止关闭
   * 或者直接调用done回调进行关闭
   * */
  onCanceled: (done: CallbackVoid) => BeforeConfirm;
  /** 继承el-dialog 事件 */
  onOpen: () => void;
  onOpened: () => void;
  onClose: () => void;
  onClosed: () => void;
  onOpenAutoFocus: () => void;
  onCloseAutoFocus: () => void;
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
   * 如果不需要渲染按钮，设置为空数组即可，如`[]`
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

export type DialogPropsWithEmits = DialogEmits & DialogProps;

/**
 * useDialog返回类型
 */
export type UseDialogReturn = {
  /**
   * 打开回调
   */
  open: CallbackVoid;
  /**
   * 关闭回调
   */
  close: CallbackVoid;
  /**
   * 销毁回调
   */
  destroy: CallbackVoid;
  /**
   * 当前dialog实例
   */
  modelInstance: ShallowRef<ComponentInternalInstance | null>;
};
/**
 * 弹窗渲染
 */
export type UseDialogRender = () => VNode | VNode[] | string;
/**
 * 弹窗参数配置
 */
export type UseDialogModelOptions = {
  render: UseDialogRender;
  /**
   * 立即打开
   * @default false
   */
  immediate?: boolean;
  slots?: {
    footer?: (...args: any[]) => VNode | VNode[];
    header?: (...args: any[]) => VNode | VNode[];
    default?: (...args: any[]) => VNode | VNode[];
  };
} & Omit<DialogProps, 'visible'> &
  Partial<Omit<DialogEmits, 'onUpdate:visible'>>;

// export type UseDialogModelComponentProps =
