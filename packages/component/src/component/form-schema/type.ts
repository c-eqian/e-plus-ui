import type {
  ColProps,
  FormItemRule,
  FormProps,
  FormValidateCallback,
} from 'element-plus';
import type { ComponentPropsByType, Render, RegisterFn } from './types';
import { T } from 'vitest/dist/reporters-P7C2ytIv';
/**
 * 列宽配置
 */
export type IFormItemCol =
  | Partial<Pick<ColProps, 'span' | 'sm' | 'xs' | 'md' | 'lg' | 'xl'>>
  | number;

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
 * 表单项
 */
export interface FormItemsSchema<T = any> {
  /**
   * model 的键名。 它可以是一个属性的值(如 a.b.0)
   */
  prop: keyof T extends infer E ? (E extends string ? E : string) : string;
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
  type: FormSchemaType | '';
  /**
   * 自定义渲染，优先级低于插槽
   */
  render?: Render<T, FormItemsSchema>;
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
  componentProps?: ComponentPropsByType<
    FormSchemaType,
    FormItemsSchema['type'] extends FormSchemaType
      ? FormItemsSchema['type']
      : any
  >;
}

/**
 * 表单
 */
export interface FormSchema<T = any> extends Partial<FormProps> {
  /**
   * 是否使用查询表单，设置此参数，表单相关属性会失效，仅提供查询模式
   * @default false
   */
  isSearch?: boolean;
  /**
   * 表单项配置
   */
  items: FormItemsSchema<T>[];
}
// 定义一个工具类型，用于从FormSchema的T中提取所有可能的prop值
type PropKeysOfFormSchema<FS extends FormSchema<any>> =
  FS['items'][number] extends FormItemsSchema<infer T>
    ? T extends object
      ? keyof T
      : never
    : never;
/**
 * 表达上下文
 */
export interface FormContext {
  /**
   * form 数据对象
   */
  model: Record<string, any>;
}

/**
 * 表单方法
 */
export interface FormSchemaReturn {
  /**
   * 获取表单值
   * @param serialize 是否需要序列化
   * @default true
   * @example
   * ``` js
   * // 'a.b.c'=> {a:{b: {c:xxx}}}
   * ```
   */
  getFieldsValues: (serialize?: boolean) => Record<string, any>;
  /**
   * 设置表单值
   * @param values
   */
  setFieldsValues: <T>(values: Record<keyof T, any>) => void;
  /**
   * 平滑滚动定位到对应的视图
   * @param field
   */
  scrollIntoView: (field: FormItemsSchema['prop']) => void;
  /**
   * 表单校验
   * @param isScrollToField 是否需要定位到第一个错误字段
   * @param callback 自定义回调函数
   */
  validate: (
    isScrollToField?: boolean,
    callback?: FormValidateCallback
  ) => Promise<any>;
  /**
   * 校验表单某个字段验证
   * @param args
   */
  validateField: (...args: any[]) => Promise<any>;
  /**
   * 重置表单
   * @param args
   */
  resetFields: (...args: string[]) => void;
  /**
   * 清空某个字段的表单有验证信息
   * @param args
   */
  clearValidate: (...args: string[]) => void;
  /**
   * 追加组件配置
   * @param item
   * @param to 指定到哪个组件后面添加，默认最后一个,如果是布尔值并且为false，则添加到第一条
   */
  appendFields: <T = any>(
    item: FormItemsSchema<T>,
    to?: FormItemsSchema<T>['prop'] | boolean
  ) => Promise<unknown>;
  /**
   * 删除指定表单项
   * @param prop
   */
  deleteField: <T = any>(prop: FormItemsSchema<T>['prop']) => Promise<void>;
}

/**
 * 表单实例方法
 */
export type FormSchemaInstance = () => Promise<FormSchemaReturn | null>;

/**
 * 表单返回类型
 */
export interface UseFormSchemaReturnType extends FormSchemaReturn {
  /**
   * 表单注册函数
   */
  registry: RegisterFn<FormSchemaReturn>;
  /**
   * 表单实例
   */
  getFormInstance: FormSchemaInstance;
}
