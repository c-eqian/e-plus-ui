import type { ButtonProps, DialogProps as ElDialogProps } from 'element-plus';
import type { VNode } from 'vue';

type Btn = 'confirm' | 'cancel';
type Render = () => VNode;
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
 * 底部参数
 */
export type FooterProps = {
  /**
   * 按钮配置 默认为`confirm`（确定），`cancel`（取消）
   */
  buttons?: FooterBtnProps;
  /**
   * 位置
   * @default center
   */
  position: 'center' | 'left' | 'right';
};
/**
 * 弹窗props参数
 */
export type DialogProps = {
  /**
   * 是否使用全屏
   * @default false
   */
  isUseFullScreen?: boolean;
  /**
   * 底部配置参数
   */
  footer?: FooterProps;
  /**
   * el-dialog参数
   */
  dialogProps?: ElDialogProps;
  /**
   * 打开弹窗前，如果返回一个false或者错误的将会阻止打开
   */
  open: () => true;
  /**
   * 打开后
   */
  opened: () => true;
  /**
   * 弹窗关闭前
   */
  close: () => true;
  /**
   * 弹窗关闭后
   */
  closed: () => true;
};
