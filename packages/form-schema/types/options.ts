/**
 * 表单组件 分组配置
 * 如，单选组件、多选组件、选择组件
 */
export interface IGroupOptions {
  /**
   * 应用值,如果是select-group,则外层没有value
   */
  value?: string | number | boolean | Array<any> | undefined;
  /**
   * 标签名称
   */
  label: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 子节点、应用于select-group
   */
  children?: IGroupOptions[];
  /**其他**/
  [k: string]: any;
}

/**
 * 通过API请求数据
 */
export type GroupOptionsApi = {
  api: (...args: any[]) => Promise<IGroupOptions[]>;
  params?: any;
};
