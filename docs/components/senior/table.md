#  Table 组件

Table组件基于`el-table`封装而来，基本其所有属性均会支持。
可以使用`defineTableColumns`来获取具有类型提示的定义列表
### 基础用法

:::demo `表格基础用法`
table/index
:::
### slot 插槽
表格组件默认会根据`prop`值创建一个插槽名称；或者可以使用`slotKey`自定义插槽名称。
自定义插槽名称优先级高于prop,果没有则默认名称为prop的值
:::demo `插槽`
table/slot
:::

### 嵌入表单
`useFormValidation`为`true`，开启表单校验，同时需要配置`rules`然后通过插槽使用表单组件即可。

**注意：data需要配置响应式，否则可能校验不会生效**

:::demo `插槽`
table/form
:::

### 增删改查
可以通过设置`type`为`operation`进行配置操作列表按钮，默认会自动设置增删改查操作按钮，如果只需要其中某个操作，只需要设置`operationType`，接收一个数组。如：['add']
则只会渲染新增操作按钮。如果这些都不符合你的需求，可以通过配置`slotKey`进行插槽自定义操作，
更多设置，请查看配置项
:::demo `插槽`
table/oper
:::

### 配置项

#### `Table`配置

| 参数                | 类型                 | 可选 | 默认  | 说明                                          |
| ------------------- | -------------------- | ---- | ----- | --------------------------------------------- |
| data                | array                | ×    | []    | 数据列表                                      |
| height              | [Number, String]     | √    | -     | 表格高度                                      |
| tooltipEffect       | dark \| light        | √    | dark  | 提示样式                                      |
| border              | boolean              | √    | false | 是否显示边框                                  |
| highlightCurrentRow | boolean              | √    | false | 高亮当前行                                    |
| idKey               | string               | √    | -     | 配置highlightCurrentRow时需要，一般用于单选框 |
| column              | ITableColumnConfig[] | ×    | []    | 表格列                                        |
| useFormValidation   | boolean              | √    | false | 使用表单验证                                  |
| formModelExtender   | object               | √    | -     | 表单扩展                                      |

#### `ITableColumnConfig`配置

| 参数          | 类型                                              | 可选 | 默认  | 说明                                                         |
| ------------- | ------------------------------------------------- | ---- | ----- | ------------------------------------------------------------ |
| width         | number \| string                                  | √    | -     | 列宽                                                         |
| align         | 'left' \| 'center' \| 'right'                     | √    | left  | 对齐方式                                                     |
| slotKey       | string                                            | √    | -     | 自定义插槽名称，优先级高于prop如果没有则默认名称为prop的值   |
| key           | string                                            | √    | -     | column key默认使用 prop                                      |
| label         | string                                            | ×    | -     | 表头标签                                                     |
| prop          | string                                            | ×    | -     | 数据键                                                       |
| tooltip       | boolean                                           | √    | false | 是否显示提示，默认false，逻辑未实行，可以使用表格showOverflowTooltip属性 |
| render        | VNode                                             | √    | -     | 自定义渲染器                                                 |
| headerRender  | VNode                                             | √    | -     | 表头渲染器                                                   |
| dictKey       | string                                            | √    | -     | 字典编码，如果传入该值，则不需要slots，默认已经创建优先级高于 dictEnum |
| dictEnum      | IEnumItem[]                                       | √    | -     | 枚举显示，dictKey 优先级高于 dictEnum                        |
| rules         | FormItemRule \| FormItemRule[] \| boolean         | √    | -     | 表单校验:主要用于表格内的表单编辑                            |
| children      | ITableColumnConfig[]                              | √    | -     | 树形表格                                                     |
| format        | Funtion                                           | √    | -     | 自定义格式化数据 优先级低于插槽使用                          |
| isCopy        | boolean                                           | √    | -     | 表格中是否需要设置复制按钮,一般用于ID这类                    |
| isFormatTime  | boolean                                           | √    | -     | 提供方便渲染时间的格式化方式 优先级低于format,默认格式为 'yyyy-MM-dd HH:mm:ss' |
| type          | 'index' \| 'selection' \| 'expand' \| 'operation' | √    | -     | 拓展operation，用于数据操作 默认支持 add(新增) edit(修改) delete(删除) view(查看)；当使用operation类型时，fixed默认启用 |
| operationType | (OperationType \| OperationTypeMap)[]             | √    | -     | 操作类型， 默认add(新增) edit(修改) delete(删除) view(查看)。需要type=operation |
| columnsExtra  | IColumnsExtra                                     | √    | -     | 扩展参数，基本作用于 el-table的参数                          |
| fixed         | string \| boolean                                 | √    | -     | 操作列固定位置                                               |



#### `OperationType `配置



```typescript
type OperationType = 'add' | 'edit' | 'delete' | 'view'
```



#### `OperationTypeMap`配置



```typescript
type OperationTypeMap = {
  type: OperationType
  permission: string[]
}
```



#### 列配置



```typescript
import type { FormItemRule } from 'element-plus'
import type { Ref, VNode } from 'vue'

export interface IEnumItem {
  /**
   * 选择框显示的标签
   */
  label: string
  /**
   * 标签对应的值
   */
  value: string | number | boolean
  /**
   * 是否禁用
   */
  disabled?: boolean
  tagType?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  [k: string]: any
}
export interface IColumnsExtra {
  /**
   * 显示隐藏状态
   */
  visible?: boolean
  /**
   * 额外设置列宽，优先级高于column['width']
   * 暂时用不上！！！
   */
  width?: number | string
  // 主要是组件库的相关参数
  [k: string]: any
}
interface IRenderData<T = any> {
  row: T
  index: number
  // eslint-disable-next-line no-use-before-define
  column: ITableColumnConfig<T>
  /**
   * 自定义返回一个检验器的数据键
   * 如果没有此键，那么在表单校验时，应该使用data[index].prop
   */
  validator?: string[]
}
export interface TRender<T = any> {
  (scoped: IRenderData<T>): VNode | null | string | number
}
export type OperationType = 'add' | 'edit' | 'delete' | 'view'
export type OperationTypeMap = {
  type: OperationType
  permission: string[]
}
export interface ITableColumnConfig<T = any> {
  /**
   * 列宽
   */
  width?: number | string
  /**
   * 对齐方式
   */
  align?: 'left' | 'center' | 'right'
  /**
   * 自定义插槽名称
   * 优先级高于prop
   * 如果没有则默认名称为prop的值
   */
  slotKey?: string
  /**
   * column key
   * 默认使用 prop
   */
  key?: string
  label: string
  prop?: keyof T extends infer E ? (E extends string ? E : string) : string
  // /**
  //  * 开启单选框
  //  */
  // radio?: boolean;
  /**
   * 是否显示提示，默认false
   */
  tooltip?: boolean
  /**
   * 自定义渲染器
   */
  render?: TRender<T>
  /**
   * 表头渲染器
   */
  headerRender?: TRender<T>
  /**
   * 字典编码，如果传入该值，则不需要slots，默认已经创建
   * dictKey 优先级高于 enum
   */
  dictKey?: string
  /**
   * 枚举显示
   * dictKey 优先级高于 dictEnum
   */
  dictEnum?: IEnumItem[]
  /**
   * 表单校验:主要用于表格内的表单编辑
   */
  rules?: FormItemRule | FormItemRule[] | boolean
  children?: ITableColumnConfig[]
  /**
   * 文本溢出显示...
   */
  showOverflowTooltip?: boolean
  /**
   * 自定义格式化数据 优先级低于插槽使用
   * @param row
   */
  format?: (row: T) => void
  fixed?: string | boolean
  columnsExtra?: Ref<IColumnsExtra> | IColumnsExtra
  /**
   * 表格中是否需要设置复制按钮
   * 一般用于ID这类
   */
  isCopy?: boolean
  /**
   * 提供方便渲染时间的格式化方式 优先级低于format
   * 默认格式为 'yyyy-MM-dd HH:mm:ss'
   * 如果需要其他格式，请使用format自定义格式化
   */
  isFormatTime?: boolean
  /**
   * 拓展operation，用于数据操作 默认支持 add(新增) edit(修改) delete(删除) view(查看)
   * 当使用operation类型时，fixed默认启用
   */
  type?: 'index' | 'selection' | 'expand' | 'operation'
  /**
   * 需要type=operation
   * 操作类型， 默认add(新增) edit(修改) delete(删除) view(查看)
   */
  operationType?: (OperationType | OperationTypeMap)[]
  /**
   * 其他扩展参数
   */
  [k: string]: any
}

```

