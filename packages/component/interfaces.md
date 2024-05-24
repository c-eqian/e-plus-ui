# 接口文档

## IFormOptions

| 属性名 | 类型 | 可选 | 描述 |
| --- | --- | --- | --- |
| value | `any` | 否 | -
| label | `string` | 否 | -
| children | `IFormOptions[]` | 是 | -


---

## IFormConfig

| 属性名 | 类型 | 可选 | 描述 |
| --- | --- | --- | --- |
| model | `Ref<{ [P in keyof T]: T[P]; }>` | 否 | -
| labelWidth | `string | number` | 是 | 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。；可以使用 auto。
| size | `"" | "large" | "default" | "small"` | 是 | 用于控制该表单内组件的尺寸


---

## IFormItemConfig

| 属性名 | 类型 | 可选 | 描述 |
| --- | --- | --- | --- |
| label | `string` | 是 | 标签名称
| prop | `(keyof T extends infer E ? E extends string ? E : string : string)` | 是 | 参数
| width | `string` | 是 | 表单组件宽度
| slotKey | `string` | 是 | 插槽名称
| type | `FormItemType` | 是 | form-item表单的类型；目前暂不支持上传类型组件，如需要，则建议使用插槽
| col | `Partial<Pick<ColProps, "span" | "xs" | "sm" | "md" | "lg" | "xl">>` | 是 | 栅格的布局方式
| rules | `boolean | FormItemRule | FormItemRule[]` | 是 | 表单校验规则
| placeholder | `string` | 是 | 输入框描述
| disabled | `boolean` | 是 | 启用状态-是否可以编辑；需要配置operationType使用
| readOnly | `boolean` | 是 | 是否只读；需要配置operationType使用
| dateTimeRange | `string[]` | 是 | 日期时间范围占位符；长度应该为2
| elExtraPros | `{ [k: string]: any; multiple?: boolean | undefined; }` | 是 | el 额外参数
| alwaysDisabled | `boolean` | 是 | 是否一直禁用，为true时，处于不可编辑状态，disabled将会失效
| alwaysReadOnly | `boolean` | 是 | 是否一直禁用，为true时，处于不可编辑状态，readOnly将会失效
| options | `IFormOptions[] | Ref<import("G:/self/e-vue-ui/packages/component/example").IFormOptions[]>` | 是 | 下拉框、级联配置；同
| isThanNow | `boolean` | 是 | 日期时间可选范围： 是否可选在今天之后（包含今天）
| isLessNow | `boolean` | 是 | 日期时间可选范围： 是否可选在今天之前（包含今天）
| disableDateTimeRange | `((time: Date) => boolean)` | 是 | 自定义限制日期时间范围
| enter | `((value: any) => void)` | 是 | 回车
| change | `((value: any) => void)` | 是 | -


---

## FormContext

| 属性名 | 类型 | 可选 | 描述 |
| --- | --- | --- | --- |
| model | `Ref<{ [x: string]: any; }>` | 否 | -


---

