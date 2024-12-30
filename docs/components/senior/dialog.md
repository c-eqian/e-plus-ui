# Dialog 弹窗
弹窗组件，支持组件式和函数式两种调用方式
## 基础用法
基于`el-dialog`封装，兼容所有参数、事件
:::demo
dialog/index
:::

## 自定义底部按钮
支持通过配置参数`footerProps`来设置`buttons`按钮
:::demo
dialog/footer-button
:::

## 函数式调用
通过配置`render`方法，返回一个组件节点，渲染在弹窗的默认插槽`（default）`中
:::demo
dialog/use-dialog-model
:::

## API
### Attribute
```typescript
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

export type DialogComponentProps = Partial<
  Omit<ElDialogProps, 'modelValue' | 'showClose' | 'beforeClose'>
>;
```
### Events
```typescript
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
```
### Slots
```typescript
/**
 * 插槽
 */
export type DialogSlots = {
  footer?: (...args: any[]) => void;
  header?: (...args: any[]) => void;
  default?: (...args: any[]) => void;
};
```
