# Form 组件定义 

::: tip 提示
类型定义说明通过自动生成
:::

## IFormOptions 

配置数据
组件， select、cascade

### value
配置项值


- **Type:** `any`


### label
标签


- **Type:** `string`


### children
子节点


- **Type:** `IFormOptions[]`


## IFormConfig 



### model
表单model
建议使用响应式方法


- **Type:** `Ref<{ [P in keyof T]: T[P] }>`


### labelWidth
标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。
可以使用 auto。


- **Type:** `string | number`


### size
用于控制该表单内组件的尺寸


- **Type:** `'' | 'large' | 'default' | 'small'`


## IFormItemConfig 

form-item配置

### label
标签名称


- **Type:** `string`


### prop
参数


- **Type:** `keyof T extends infer E ? (E extends string ? E : string) : string`


### width
表单组件宽度


- **Type:** `string`


### slotKey
插槽名称


- **Type:** `string`


### type
form-item表单的类型
目前暂不支持上传类型组件，如需要，则建议使用插槽


- **Type:** `FormItemType`


### col
栅格的布局方式


- **Type:** `IFormItemCol`


### rules
表单校验规则


- **Type:** `FormItemRule | FormItemRule[] | boolean`


### placeholder
输入框描述


- **Type:** `string`


### disabled
启用状态-是否可以编辑
需要配置operationType使用


- **Type:** `boolean`


### readOnly
是否只读
需要配置operationType使用


- **Type:** `boolean`


### dateTimeRange
日期时间范围占位符
长度应该为2


- **Type:** `string[]`


### elExtraPros
el 额外参数


- **Type:** `FormExtraPropsType`


### alwaysDisabled
是否一直禁用，为true时，处于不可编辑状态，disabled将会失效


- **Type:** `boolean`


### alwaysReadOnly
是否一直禁用，为true时，处于不可编辑状态，readOnly将会失效


- **Type:** `boolean`


### options
下拉框、级联配置
同


- **Type:** `IFormOptions[] | Ref<IFormOptions[]>`


### isThanNow
日期时间可选范围： 是否可选在今天之后（包含今天）


- **Type:** `boolean`


### isLessNow
日期时间可选范围： 是否可选在今天之前（包含今天）


- **Type:** `boolean`


### disableDateTimeRange
自定义限制日期时间范围


- **Type:** `(time: Date) => boolean`


### enter
回车


- **Type:** `(value: any) => void`


### change
值改变时的方法


- **Type:** `(value: any) => void`


## FormContext 

表达上下文

### model
form 数据对象


- **Type:** `IFormConfig['model']`


## FormExtraPropsType
扩展参数


- **Type:**
 `{ [k: string]: any }`

## FormItemType
el-基础控件


- **Type:**
 `| 'text'
  | 'number'
  | 'input-number'
  | 'input'
  | 'select'
  | 'switch'
  | 'textarea'
  | 'date'
  | 'date-time'
  | 'daterange'
  | 'time-picker'
  | 'time-range'
  | 'date-time-range'
  | 'checkbox-group'
  | 'radio-group'
  | 'cascade'`

## IFormItemCol
列宽配置


- **Type:**
 `Partial<
  Pick<ColProps, 'span' | 'sm' | 'xs' | 'md' | 'lg' | 'xl'>
>`
