import type { ColProps, FormItemRule, FormProps } from 'element-plus';
import { ComponentProps } from './components/types';
import type { Ref } from 'vue';
/**
 * 列宽配置
 */
export type IFormItemCol =
  | Partial<Pick<ColProps, 'span' | 'sm' | 'xs' | 'md' | 'lg' | 'xl'>>
  | number;
/**
 * 扩展参数
 */
export type FormExtraPropsType = { [k: string]: any };

/**
 * 扩展validator方法，支持自定义校验前置
 */
export interface FormItemRules<T = any> extends FormItemRule {
  validatorFn?: (model: T) => FormItemRule['validator'];
}
/**
 * el-基础控件
 */
export type FormSchemaType =
  | 'input-number'
  | 'input'
  | 'select'
  | 'autocomplete'
  | 'switch'
  | 'rate'
  | 'divider'
  | 'slider'
  | 'time-picker'
  | 'date-picker'
  | 'time-select'
  | 'time-range'
  | 'checkbox-group'
  | 'radio-group'
  | 'cascade';
/**
 * 使用映射类型创建一个新类型，该类型将每个组件类型映射到其对应的属性类型
 */
type ComponentPropsByType<T extends FormSchemaType> =
  T extends keyof ComponentProps ? ComponentProps[T] : never;
/**
 * 表单项
 */
export interface FormItemsSchema<T = any> {
  /**
   * model 的键名。 它可以是一个属性的值(如 a.b.0)
   */
  prop: string;
  /**
   * 标签文本
   */
  label: string;
  /**
   * 标签宽度
   */
  labelWidth?: string;
  /**
   * 表单默认值
   * 如果传入model，该值无效
   */
  defaultValue?: any;
  /**
   * 输入框描述
   */
  placeholder?: string;
  /**
   * 表单校验规则
   */
  rules?: FormItemRules<T> | FormItemRules<T>[] | boolean;
  /**
   * 插槽名称
   */
  slotKey?: string;
  /**
   * form-item表单的类型
   * 目前暂不支持上传类型组件，如需要，则建议使用插槽
   */
  type: FormSchemaType;
  /**
   * 栅格的布局方式
   */
  col?: IFormItemCol;
  /**
   * 是否折叠,只对isSearch搜索有效
   */
  collapse?: boolean;
  /**
   * 回车
   * @param value 当前值
   */
  enter?: (value: any) => void;
  /**
   * 值改变时的方法
   * @param value 当前值
   */
  change?: (value: any) => void;
  componentProps?: ComponentPropsByType<FormItemsSchema['type']>;
}

/**
 * 表单
 */
export interface FormSchema extends Partial<FormProps> {
  /**
   * 是否使用查询表单，设置此参数，表单相关属性会失效，仅提供查询模式
   * @default false
   */
  isSearch?: boolean;
  /**
   * 表单项配置
   */
  items: FormItemsSchema[];
}
/**
 * 表达上下文
 */
export interface FormContext<T = any> {
  /**
   * form 数据对象
   */
  model: object;
}
