# EpPagination
## Parameter 参数
| 参数 | 类型 | 必选 | 描述 | 默认值 |
| :-------: | :-------: | :-------: | :-------: | :-------: |
| total | `number` | `true` | 数量总数 | -|
| background | `boolean` | `false` | 是否为分页按钮添加背景色 | `true`|
| hidden | `boolean` | `false` | 是否隐藏 | `false`|
| layout | `string` | `false` | 组件布局，子组件名用逗号分隔 | `total, sizes, prev, pager, next, jumper`|
| limit | `number` | `false` | 每页大小 | `20`|
| page | `number` | `false` | 当前分页 | `1`|
| pagerCount | `number` | `false` | 显示数量 | `5`|
| pageSizes | `Array` | `false` | 设置页码大小数 | -|
| size | `large \| default \| small` | `false` | 分页大小 | `default`|
## Events 事件
|   事件名   |   类型     |  描述      |
| :-------: | :-------: | :-------: |
| pageChange | - |  |
| update:limit | - |  |
| update:page | - |  |
