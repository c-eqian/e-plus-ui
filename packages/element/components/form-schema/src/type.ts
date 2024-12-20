import type { ColProps, FormItemRule, FormProps, FormValidateCallback } from 'element-plus';
import type { Component, ComponentInternalInstance, Ref, Slot, VNode, VNodeProps } from 'vue';
/**
 * 列宽配置
 */
export type FormItemCol =
  | Partial<Pick<ColProps, 'span' | 'sm' | 'xs' | 'md' | 'lg' | 'xl'>>
  | number;

/**
 * 扩展validator方法，支持自定义校验前置
 */
export type FormItemRules<T = any> = {
  validatorFn?: (model: T) => FormItemRule['validator'];
} & FormItemRule;
type ExtractPropTypes<T extends Component> = T extends new (...args: any) => any
  ? Omit<InstanceType<T>['$props'], keyof VNodeProps>
  : never;

export type ComponentTypeProps = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  'input-number': ExtractPropTypes<(typeof import('element-plus/es'))['ElInputNumber']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  select: ExtractPropTypes<(typeof import('element-plus/es'))['ElSelect']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  'tree-select': ExtractPropTypes<(typeof import('element-plus/es'))['ElTreeSelect']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  radio: ExtractPropTypes<(typeof import('element-plus/es'))['ElRadio']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  checkbox: ExtractPropTypes<(typeof import('element-plus/es'))['ElCheckbox']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  'radio-group': ExtractPropTypes<(typeof import('element-plus/es'))['ElRadioGroup']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  'checkbox-group': ExtractPropTypes<(typeof import('element-plus/es'))['ElCheckboxGroup']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  input: ExtractPropTypes<(typeof import('element-plus/es'))['ElInput']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  autocomplete: ExtractPropTypes<(typeof import('element-plus/es'))['ElAutocomplete']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  'date-picker': ExtractPropTypes<(typeof import('element-plus/es'))['ElDatePicker']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  'time-picker': ExtractPropTypes<(typeof import('element-plus/es'))['ElTimePicker']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  'time-select': ExtractPropTypes<(typeof import('element-plus/es'))['ElTimeSelect']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  switch: ExtractPropTypes<(typeof import('element-plus/es'))['ElSwitch']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  cascade: ExtractPropTypes<(typeof import('element-plus/es'))['ElCascader']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  slider: ExtractPropTypes<(typeof import('element-plus/es'))['ElSlider']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  rate: ExtractPropTypes<(typeof import('element-plus/es'))['ElRate']>;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  divider: ExtractPropTypes<(typeof import('element-plus/es'))['ElDivider']>;
};

/**
 * 使用映射类型创建一个新类型，该类型将每个组件类型映射到其对应的属性类型
 */
export type ComponentPropsByType<P = any> = P extends keyof ComponentTypeProps
  ? ComponentTypeProps[P]
  : Record<string, any>;
export type ComponentSlots = {
  slots: {
    [name: string]: Slot | undefined;
  };
};
/**
 * 相关回调参数
 */
export type Scoped<T = any, P = any> = {
  item: P;
  model: Ref<T>;
};
/**
 * 渲染器
 */
export type Render<T = any, P = any> = (
  scoped: Scoped<T, P>
) => VNode<any, any, any> | VNode<any, any, any>[] | null | string | number | undefined;

export type RegisterFn<T = any> = (formInstance: () => T) => void;
export type UpdateFieldValue = (prop: string, value: unknown) => void;

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
  | 'radio'
  | 'divider'
  | 'slider'
  | 'checkbox'
  | 'time-picker'
  | 'date-picker'
  | 'time-select'
  | 'tree-select'
  | 'checkbox-group'
  | 'radio-group'
  | 'radio-button-group'
  | 'select-group'
  | 'cascade';

/**
 * 扩展组件参数
 */
export type ExtraProps<T = any, P = any> = {
  /**
   * 动态是否禁用
   * @param scoped
   */
  dynamicDisable?: (scoped: Scoped<T, P>) => boolean;
  /**
   * 动态是否显示
   * @param scoped
   */
  dynamicShow?: (scoped: Scoped<T, P>) => boolean;
  /**
   * 分组配置项
   */
  groupOptions?: IGroupOptions[] | GroupOptionsApi;
};

/**
 * 表单项
 */
export type FormItemsSchema<T = any> = {
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
  type?: FormSchemaType;
  /**
   * 自定义渲染，优先级低于插槽
   */
  render?: Render<T, FormItemsSchema<T>>;
  /**
   * 栅格的布局方式
   */
  col?: FormItemCol;
  /**
   * 是否折叠,只对isSearch搜索有效
   */
  collapse?: boolean;
  /**
   * 回车
   * @param value 当前值
   * @deprecated  已废弃，如需使用事件，请使用组件参数
   */
  enter?: (value: any) => void;
  /**
   * 值改变时的方法
   * @param value 当前值
   * @deprecated 已废弃，如需使用事件，请使用组件参数
   */
  change?: (value: any) => void;
  /**
   * 组件参数
   */
  componentProps?: Partial<ComponentSlots> &
    ExtraProps<T, FormItemsSchema<T>> &
    ComponentPropsByType<
      FormItemsSchema['type'] extends FormSchemaType ? FormItemsSchema['type'] : string
    >;
};

/**
 * 表单
 */
export type FormSchema<T = any> = {
  /**
   * 是否使用查询表单，设置此参数，表单相关属性会失效，仅提供查询模式
   * 也可以设置一个number值，如果大于0，默认设置为搜索模式，并且根据该值设置显示几行，否则显示一行
   * @default false
   */
  isSearch?: boolean | number;
  /**
   * 显示列数
   * @default 3
   */
  columns?: number;
  /**
   * 表单项配置
   */
  items: FormItemsSchema<T>[];
} & Partial<FormProps>;
/**
 * 表达上下文
 */
export type FormContext<T = Record<string, any>> = {
  /**
   * form 数据对象
   */
  model: T;
};

/**
 * 表单方法
 */
export type FormSchemaReturn = {
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
  validate: (isScrollToField?: boolean, callback?: FormValidateCallback) => Promise<any>;
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
   * 更新字段属性，如果不存在，将会进行新增
   * @param prop
   * @param item
   * @param to
   */
  updateOrAppendFields: <T = any>(
    prop: FormItemsSchema<T>['prop'],
    item: FormItemsSchema<T>
  ) => Promise<unknown>;
  /**
   * 删除指定表单项
   * @param prop
   */
  deleteField: <T = any>(prop: FormItemsSchema<T>['prop']) => Promise<void>;
  /**
   * 使用组件的事件
   * 如onChange,回调参数为Scoped
   * @param args
   * @example
   * ``` JavaScript
   * listener({
   * onChange:({model, item})=>{
   * .....
   * }
   * })
   * ```
   */
  listener: (...args: any) => Promise<void>;
};

/**
 * 表单实例方法
 */
export type FormSchemaInstance = () => Promise<FormSchemaReturn | null>;

/**
 * 表单返回类型
 */
export type UseFormSchemaReturnType = {
  /**
   * 表单注册函数
   */
  registry: RegisterFn<ComponentInternalInstance>;
  /**
   * 表单实例
   */
  getFormInstance: FormSchemaInstance;
} & FormSchemaReturn;
/**
 * 表单插槽
 */
export type FormSchemaSlots = {
  /**
   * 搜索模式下，自定义搜索
   */
  'query-buttons': () => void;
  /**
   * 搜索模式下，添加搜索按钮
   */
  'query-add': () => void;
  // 自定义组件插槽
  [k: string]: any;
};
