# EpSelectIcon
## Parameter 参数
| 参数 | 类型 | 必选 | 描述 | 默认值 |
| :-------: | :-------: | :-------: | :-------: | :-------: |
| componentProps | `Partial<Omit<InputProps, modelValue>>  \|  undefined` | `false` | ElInput 组件参数 | -|
| icons | `IconData[]  \|  undefined` | `false` | 图标数据 | -|
| lazyLoadable | `boolean  \|  undefined` | `false` | 是否使用懒加载图标 | -|
| lazyLoadValue | `number  \|  undefined` | `false` | 当使用懒加载时，需要的初始值 | -|
| modelValue | `string  \|  undefined` | `false` |  | -|
| popoverWidth | `string  \|  number  \|  undefined` | `false` | popover组件宽度 | -|
| searchable | `boolean  \|  undefined` | `false` | 是否使用搜索 | -|
| showTotal | `boolean  \|  undefined` | `false` | 是否显示总数 | -|
## Events 事件
|   事件名   |   类型     |  描述      |
| :-------: | :-------: | :-------: |
| selectIcon | - |  |
| update:modelValue | - |  |
