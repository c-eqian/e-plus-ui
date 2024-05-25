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
