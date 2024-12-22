export type AuthPageProps = {
  /**
   * 登录标题，如果为`false`或者为空则不显示
   * @default 欢迎登录
   */
  loginTitle?: string | boolean;
  /**
   * 登录按钮文本
   * @default 登录
   */
  loginText?: string;
  /**
   * 是否使用注册
   * @default false
   */
  useRegistry: boolean;
  /**
   * 是否使用用户协议
   */
  useUserAgent?: boolean;
  /**
   * 是否使用记住密码
   * @default true
   */
  useRemember?: boolean;
  /**
   * 记住密码文本
   * @default 记住密码
   */
  rememberText?: string;
  /**
   * 使用使用找回密码
   * @default false
   */
  useForgetPassword?: boolean;
  /**
   * 忘记密码找回文本
   * @default 找回密码
   */
  forgetPasswordText?: string;
  /**
   * 背景图片
   */
  bgUrl?: string;
};
