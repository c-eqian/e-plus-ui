# EpPagination
## Parameter 参数
| 参数 | 类型 | 可选 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| size | `large \| default \| small` | `false` | 分页大小 | `small`
| total | `number` | `true` | 数量总数 | -
| page | `number` | `false` | 当前分页 | `1`
| limit | `number` | `false` | 每页大小 | `20`
| pageSizes | `Array` | `false` | 设置页码大小数 | -
| pagerCount | `number` | `false` | 显示数量 | `5`
| layout | `string` | `false` | 组件布局，子组件名用逗号分隔 | `total, sizes, prev, pager, next, jumper`
| background | `boolean` | `false` | 是否为分页按钮添加背景色 | `true`
| hidden | `boolean` | `false` | 是否隐藏 | `false`
## Events 事件
| 事件名 | 类型 |  描述 |
| --- | --- |  --- |
| update:page | - |  |
| pagination | - |  |
| update:limit | - |  |
