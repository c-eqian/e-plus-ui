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

### 集成分页组件

用法与`pagination`组件一致。
1. 需要`pagination`设置为`true`开启分页组件，默认为`false`
2. 预设`total`,`page`, `limit`,`pageSizes`属性，其他属性请配置`paExtra`

<br>
**注意：集成的分页组件需要设置`pa-`开头，如total需要配置`pa-total`**
<br>

:::demo `分页`
table/pagination
:::

### 动态操作列
可以使用`useEpTable`来简化`ref`操作

<br>

目前支持的操作方法与`ref`操作方法一致：

- `validateField` 表单校验某字段
- `validate` 表单检验
- `clearValidate` 清除检验状态
- `resetFields` 重置表单
- `toggleRowSelection` 选中与否,可以通过单个/多组数据进行选中与否，支持对象、数字、字符串
- `clearSelection` 清空选中状态
- `addFieldColumns` 添加列，支持批量，支持根据`prop`添加到指定位置，默认尾部添加
- `deleteFieldColumns` 根据`prop`删除列,支持批量
- `updateFieldColumns`  根据`prop`更新列,支持批量
  <br>

**注意：toggleRowSelection方法中，数字、字符串（数组）情况下需要配置row-key唯一键， 同时ref中仅支持单行数据操作（暂定）**

:::demo
table/useTable
:::


### 单选

需要配置`idKey`唯一值的key，同时需要启用`highlightCurrentRow`为`true`

:::demo
table/radio
:::
