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



### row


- **Type:** `T`


### index


- **Type:** `number`


### column


- **Type:** `ITableColumnConfig<T>`


### validator
自定义返回一个检验器的数据键
如果没有此键，那么在表单校验时，应该使用data[index].prop


- **Type:** `string[]`


## TRender 





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


- **Type:** `string`


### prop


- **Type:** `keyof T extends infer E ? (E extends string ? E : string) : string`


### tooltip
是否显示提示，默认false


- **Type:** `boolean`


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


- **Type:** `ITableColumnConfig[]`


### showOverflowTooltip
文本溢出显示...


- **Type:** `boolean`


### format
自定义格式化数据 优先级低于插槽使用


- **Type:** `(row: T) => void`


### fixed


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


## OperationType


- **Type:**
 `'add' | 'edit' | 'delete' | 'view'`

## OperationTypeMap


- **Type:**
 `{
  type: OperationType;
  permission: string[];
}`