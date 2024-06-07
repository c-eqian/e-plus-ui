#  Table 表格

Table组件基于`el-table`封装而来，基本其所有属性均会支持。
可以使用`defineTableColumns`来获取具有类型提示的定义列表
### 基础用法

:::demo
table/index
:::
### slot 插槽
表格组件默认会根据`prop`值创建一个插槽名称；或者可以使用`slotKey`自定义插槽名称。
自定义插槽名称优先级高于prop,果没有则默认名称为prop的值
:::demo
table/slot
:::

### 嵌入表单
`useFormValidation`为`true`，开启表单校验，同时需要配置`rules`然后通过插槽使用表单组件即可。

**注意：data需要配置响应式，否则可能校验不会生效**

:::demo
table/form
:::
### 多选
类型`type`为`selection`，开启表单校验。清空选中状态调用`clearSelection`方法

:::demo `selection`
table/selection
:::
### 增删改查
可以通过设置`type`为`operation`进行配置操作列表按钮，默认会自动设置增删改查操作按钮，如果只需要其中某个操作，只需要设置`operationType`，接收一个数组。如：['add']
则只会渲染新增操作按钮。如果这些都不符合你的需求，可以通过配置`slotKey`进行插槽自定义操作，
更多设置，请查看配置项
:::demo
table/oper
:::
### 自定义操作按钮
设置`operationType`，接收一个数组,类型为`OperationTypeMap`。
可以自定义操作的相关设置,同时也可以处理权限类操心，设置`permission`属性，接收一个`数组`或者一个返回`boolean`的方法。
<br>
`tyoe`值非常规操作的情况下（add,edit,delete, view），事件回调请使用`click-btn`。
此外，如果你需要非按钮类相关操作，请使用`render`属性，具体请查看`OperationTypeMap`配置项
<br>

**请记住，插槽的优先级永远最高,其次为自定义相关！！！**
:::demo
table/button
:::
### 多列表头
使用`render`，返回一个节点，类型`ElTableColumn`。
<br>
:::demo
table/header
:::
### 渲染树形数据
用法与`element-plus`用法一致。
<br>
**注意：需要设置`row-id`**
<br>
:::demo `树形数据`
table/tableTree
:::
### 配置项
## IEnumItem



### label
选择框显示的标签


- **Type:** `string`


### value
标签对应的值


- **Type:** `string | number | boolean`


### disabled
是否禁用


- **Type:** `boolean`


### tagType
枚举标签类型，应用于el-tag组件


- **Type:** `'primary' | 'success' | 'info' | 'warning' | 'danger'`


## IColumnsExtra



### visible
显示隐藏状态


- **Type:** `boolean`


### width
额外设置列宽，优先级高于column['width']
暂时用不上！！！


- **Type:** `number | string`


## IRenderData

自定义渲染方法参数类型

### row
数据行


- **Type:** `T`


### index
数据索引


- **Type:** `number`


### column
数据列


- **Type:** `ITableColumnConfig<T>`


### validator
自定义返回一个检验器的数据键
如果没有此键，那么在表单校验时，应该使用data[index].prop


- **Type:** `string[]`


## TRender

自定义渲染



## ITableColumnConfig



### width
列宽


- **Type:** `number | string`


### align
对齐方式


- **Type:** `'left' | 'center' | 'right'`


### slotKey
自定义插槽名称
优先级高于prop
如果没有则默认名称为prop的值


- **Type:** `string`


### key
column key
默认使用 prop


- **Type:** `string`


### label
表头名称


- **Type:** `string`


### prop
数据键


- **Type:** `keyof T extends infer E ? (E extends string ? E : string) : string`


### tooltip
是否显示提示


- **Type:** `boolean`


- **Default:** `false`

### render
自定义渲染器


- **Type:** `TRender<T>`


### headerRender
表头渲染器


- **Type:** `TRender<T>`


### dictKey
字典编码，如果传入该值，则不需要slots，默认已经创建
dictKey 优先级高于 dictEnum


- **Type:** `string`


### dictEnum
枚举显示
dictKey 优先级高于 dictEnum


- **Type:** `IEnumItem[]`


### rules
表单校验:主要用于表格内的表单编辑


- **Type:** `FormItemRule | FormItemRule[] | boolean`


### children
子节点数据


- **Type:** `ITableColumnConfig[]`


### showOverflowTooltip
文本溢出显示...


- **Type:** `boolean`


### format
自定义格式化数据 优先级低于插槽使用


- **Type:** `(row: T) => void`


### fixed
操作栏固定方法


- **Type:** `string | boolean`


### columnsExtra
扩展参数，基本作用于 el-table的参数


- **Type:** `Ref<IColumnsExtra> | IColumnsExtra`


### isCopy
表格中是否需要设置复制按钮
一般用于ID这类


- **Type:** `boolean`


### isFormatTime
提供方便渲染时间的格式化方式 优先级低于format
默认格式为 'yyyy-MM-dd HH:mm:ss'
如果需要其他格式，请使用format自定义格式化


- **Type:** `boolean`


### type
拓展operation，用于数据操作 默认支持 add(新增) edit(修改) delete(删除) view(查看)
当使用operation类型时，fixed默认启用


- **Type:** `'index' | 'selection' | 'expand' | 'operation'`


### operationType
需要type=operation
操作类型， 默认add(新增) edit(修改) delete(删除) view(查看)


- **Type:** `(OperationType | OperationTypeMap)[]`


## ExtraPropsType
扩展参数


- **Type:**
  `{ [k: string]: any }`

## OperationType
操作类型


- **Type:**
  `'add' | 'edit' | 'delete' | 'view'`

## OperationTypeMap
操作类型
支持配置权限


- **Type:**
```typescript
{
  /**
   * 操作类型
   */
  type: OperationType;
   /**
    * 权限标识
    */
   permission: string[];
}
```
