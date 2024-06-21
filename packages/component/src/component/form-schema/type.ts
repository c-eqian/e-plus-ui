import type { FormProps } from 'element-plus';
import type { FormItemRules, IFormItemCol } from '../form';
/**
 * el-基础控件
 */
export type FormSchemaType =
  | 'text'
  | 'number'
  | 'input-number'
  | 'input'
  | 'select'
  | 'switch'
  | 'textarea'
  | 'date'
  | 'date-time'
  | 'date-range'
  | 'time-picker'
  | 'time-range'
  | 'date-time-range'
  | 'checkbox-group'
  | 'radio-group'
  | 'cascade';
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
  type?: FormSchemaType;
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
}

/**
 * 表单
 */
export interface FormSchema extends FormProps {
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
