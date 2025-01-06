# EpFormTable
## Parameter 参数
|       参数        |                 类型                  |   可选    |                 描述                 | 默认值 |
|:---------------:|:-----------------------------------:|:-------:|:----------------------------------:|:---:|
|   formSchema    |            `FormSchema`             | `true`  |                表单配置                |  -  |
|   tableConfig   |            `TableConfig`            | `true`  |                表格配置                |  -  |
|      title      |       `string  \|  undefined`       | `false` |                 标题                 |  -  |
|       api       |       `PromiseAble<unknown>`        | `true`  |                API                 |  -  |
|     params      | `Recordable<string>  \|  undefined` | `false` | 请求固定参数，如果时动态参数，请使用 `beforeRequest` |  -  |
|     listKey     |       `string  \|  undefined`       | `false` |             数据列表键，支持链式             |  -  |
|    totalKey     |       `string  \|  undefined`       | `false` |               数据分页键                |  -  |
|   pageNumKey    |       `string  \|  undefined`       | `false` |               分页页码键                |  -  |
|   pageSizeKey   |       `string  \|  undefined`       | `false` |               分页大小键                |  -  |
| requestHandler  |   `RequestHandler  \|  undefined`   | `false` |               请求前处理                |  -  |
| responseHandler |  `ResponseHandler  \|  undefined`   | `false` |              响应成功数据处理              |  -  |
## Slots 插槽
|    插槽名    |  描述   |
|:---------:|:-----:|
| `footer` | 底部插槽  |
| `header` | 头部插槽  |
| `toolbar` | 工具栏插槽 |
