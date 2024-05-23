import type { ColProps, FormItemRule } from 'element-plus';
import type { Ref } from 'vue';

export type FormItemType =
  | 'text'
  | 'number'
  | 'input-number'
  | 'input'
  | 'select'
  | 'switch'
  | 'textarea' // el-基础控件
  | 'date'
  | 'date-time'
  | 'daterange'
  | 'time-picker'
  | 'time-range'
  | 'date-time-range'
  | 'checkbox-group'
  | 'radio-group'
  | 'cascade';
export interface IOptions {
  value: any;
  label: string;
  [k: string]: any;
}
export type ICol = Partial<
  Pick<ColProps, 'span' | 'sm' | 'xs' | 'md' | 'lg' | 'xl'>
>;
/**
 * 级联数据
 */
export interface ICascadeNode {
  value?: string; // code
  label?: string; // 中文值
  children?: ICascadeNode[];
  [k: string]: any;
}
export type CascadeTree = ICascadeNode[];
export interface IFormConfig<T = any> {
  model: Ref<{
    [P in keyof T]: T[P];
  }>;
  /**
   * 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。
   * 可以使用 auto。
   */
  labelWidth?: string | number;
  /**
   * 用于控制该表单内组件的尺寸
   */
  size?: '' | 'large' | 'default' | 'small';
}

/**
 * form-item配置
 */
export interface IFormItemConfig<T = any> {
  /**
   * 标签名称
   */
  label?: string;
  /**
   * 参数
   */
  prop?: keyof T extends infer E ? (E extends string ? E : string) : string;
  /**
   * 表单组件宽度
   */
  width?: string; // 100%  100px,
  /**
   * 插槽名称
   */
  slot?: string;
  /**
   * form-item表单的类型
   * 目前暂不支持上传类型组件，如需要，则建议使用插槽
   */
  type?: FormItemType;
  /**
   * 使用字典键，优先级高于options
   * 如果同时配置了单选或者多选框类型，则从字典里面取值，然后以type的类型渲染
   */
  dictKey?: string;
  /**
   * 栅格的布局方式
   */
  col?: ICol;
  /**
   * 表单校验规则
   */
  rules?: FormItemRule | FormItemRule[] | boolean;
  /**
   * 是否是必填项
   */
  required?: boolean;
  /**
   * 输入框描述
   */
  placeholder?: string;
  /**
   * 启用状态-是否可以编辑
   * 需要配置operationType使用，edit, view状态生效
   */
  disabled?: boolean;
  /**
   * 是否只读
   * 需要配置operationType使用，edit, view状态生效
   */
  readOnly?: boolean;
  /**
   * 日期时间范围占位符
   * 长度应该为2
   */
  dateTimeRange?: string[];
  /**
   * 额外参数
   */
  extraPros?: {
    /**
     * 是否开启多选
     * 主要用于多选框类组件
     */
    multiple?: boolean;
    /**
     * 级联仓库的配置-作用于业务组件
     */
    warehouseProps?: {
      value?: string;
      label?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  /**
   * 自动生成编码参数
   * 使用编码规则
   */
  inputCodeKey?: string;
  /**
   * 是否隐藏
   * 自动生成编码参数配置
   * 配合input-code使用
   */
  hidden?: boolean;
  /**
   * 是否一直禁用，为true时，处于不可编辑状态，disabled将会失效
   */
  alwaysDisabled?: boolean;
  /**
   * 是否一直禁用，为true时，处于不可编辑状态，readOnly将会失效
   */
  alwaysReadOnly?: boolean;
  /**
   * 下拉框、或者单选、多选的配置参数
   * 同
   */
  options?: IOptions[] | Ref<IOptions[]>;
  /**
   * 级联数据
   */
  treeOptions?: CascadeTree | Ref<CascadeTree>;
  /**
   * 级联数据层级，默认 2，用于仓库组件中，如果其他级联的话
   * 直接处理完数据并赋值treeOptions即可
   */
  cascadeLayer?: number;
  /**
   *日期时间可选范围： 是否可选在今天之后（包含今天）
   */
  isThanNow?: boolean;
  /**
   *日期时间可选范围： 是否可选在今天之前（包含今天）
   */
  isLessNow?: boolean;
  /**
   * 自定义限制日期时间范围
   * @param time
   */
  disableDateTimeRange?: (time: Date) => boolean;
  /**
   * 停留（不受折叠影响）
   */
  stay?: boolean;
  tt?: string;
  /**
   * 回车
   * @param value
   */
  enter?: (
    value: any // 当前值
  ) => void;
  change?: (
    value: any // 当前值
  ) => void;
}
export interface FormContext {
  model: IFormConfig['model']; // form 数据对象
}
