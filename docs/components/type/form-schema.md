# Form-Schema API 

::: tip 提示
类型定义说明通过自动生成
:::

## FormItemRules 

扩展validator方法，支持自定义校验前置

### validatorFn


- **Type:** `(model: T) => FormItemRule['validator']`


## FormItemsSchema 

表单项

### prop
model 的键名。 它可以是一个属性的值(如 a.b.0)


- **Type:** `keyof T extends infer E ? (E extends string ? E : string) : string`


### label
标签文本


- **Type:** `string`


### labelWidth
标签宽度


- **Type:** `string`


### defaultValue
表单默认值
如果传入model，该值无效


- **Type:** `any`


### placeholder
输入框描述


- **Type:** `string`


### rules
表单校验规则


- **Type:** `FormItemRules<T> | FormItemRules<T>[] | boolean`


### slotKey
插槽名称


- **Type:** `string`


### type
form-item表单的类型
目前暂不支持上传类型组件，如需要，则建议使用插槽


- **Type:** `FormSchemaType`


### render
自定义渲染，优先级低于插槽


- **Type:** `Render<T, FormItemsSchema>`


### col
栅格的布局方式


- **Type:** `IFormItemCol`



- **Type:** `boolean`


### enter
回车


- **Type:** `(value: any) => void`


### change
值改变时的方法


- **Type:** `(value: any) => void`


### componentProps
组件参数


## FormSchema 

表单

### isSearch
是否使用查询表单，设置此参数，表单相关属性会失效，仅提供查询模式


- **Type:** `boolean`


- **Default:** `false`

### columns
显示列数


- **Type:** `number`


- **Default:** `3`

### items
表单项配置


- **Type:** `FormItemsSchema<T>[]`


## FormContext 

表达上下文

### model
form 数据对象


- **Type:** `T`


## FormSchemaReturn 

表单方法

### getFieldsValues
获取表单值


- **Type:** `(serialize?: boolean) => Record<string, any>`


### setFieldsValues
设置表单值


- **Type:** `<T>(values: Record<keyof T, any>) => void`


### scrollIntoView
平滑滚动定位到对应的视图


- **Type:** `(field: FormItemsSchema['prop']) => void`


### validate
表单校验


- **Type:** `(isScrollToField?: boolean, callback?: FormValidateCallback) => Promise<any>`


### validateField
校验表单某个字段验证


- **Type:** `(...args: any[]) => Promise<any>`


### resetFields
重置表单


- **Type:** `(...args: string[]) => void`


### clearValidate
清空某个字段的表单有验证信息


- **Type:** `(...args: string[]) => void`


### appendFields
追加组件配置


- **Type:** `<T = any>(
    item: FormItemsSchema<T>,
    to?: FormItemsSchema<T>['prop'] | boolean
  ) => Promise<unknown>`


### deleteField
删除指定表单项


- **Type:** `<T = any>(prop: FormItemsSchema<T>['prop']) => Promise<void>`


## UseFormSchemaReturnType 

表单返回类型

### registry
表单注册函数


- **Type:** `RegisterFn<FormSchemaReturn>`


### getFormInstance
表单实例


- **Type:** `FormSchemaInstance`


## IFormItemCol
列宽配置


- **Type:**
 `| Partial<Pick<ColProps, 'span' | 'sm' | 'xs' | 'md' | 'lg' | 'xl'>>
  | number`

## FormSchemaType
el-基础控件


- **Type:**
 `| 'input-number'
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
  | 'cascade'`

## FormSchemaInstance
表单实例方法


- **Type:**
 `() => Promise<FormSchemaReturn | null>`
