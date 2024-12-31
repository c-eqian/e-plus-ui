# EpTable
## Parameter 参数
| 参数 | 类型 | 可选 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| data | `any[] /** 不知道数据的格式 */` | `false` |  | -
| height | `number \| string` | `false` |  | -
| tooltipEffect | `string` | `false` |  | `dark`
| border | `boolean` | `false` |  | `false`
| sortable | `boolean` | `false` |  | `false`
| highlightCurrentRow | `boolean` | `false` |  | `false`
| idKey | `string` | `false` | 配置highlightCurrentRow时需要单选框 | ``
| column | `TableColumnConfig[]` | `false` |  | -
| useFormValidation | `boolean` | `false` | 是否使用表单验证 | `false`
| formModelExtender | `object` | `false` |  | -
| operationLabel | `Record<OperationType, string>` | `false` |  | -
| pagination | `boolean` | `false` | 是否需要使用分页 | `false`
| paTotal | `number` | `false` |  | `0`
| paPage | `number` | `false` |  | `1`
| paLimit | `number` | `false` |  | `20`
| paPageSizes | `Array<number>` | `false` |  | -
| paExtra | `Record<string, any>` | `false` | 分页其他属性，不常用的统一放在此处,必须以pa开头，如需要设置pagerCount属性，则paPagerCount | -
## Slots 插槽
| 插槽名 | 描述 |
|  ---  | --- |
| `default` | - |
## Events 事件
| 事件名 | 类型 |  描述 |
| --- | --- |  --- |
| current-change | - |  |
| selection-change | - |  |
| click-row | - |  |
| click-btn | - |  |
| click-row-delete | - |  |
| click-row-add | - |  |
| click-row-view | - |  |
| registry | - |  |
| click-row-edit | - |  |
| dbClick-row | - |  |
| page-change | - |  |
| update:pa-page | - |  |
| update:pa-limit | - |  |
