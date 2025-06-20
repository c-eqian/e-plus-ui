# FormTable 搜索表单表格
`FormTable`是`formSchema`与`table`以及集成分页组件的结合，方便快速接入`curd`
所有的配置属性均与其组件一样，故此不再重复赘述。
## 基础用法
:::demo
form-table/index
:::

## 使用useFormTable方式
:::demo
form-table/use-form-table
:::

## 使用插槽
默认支持所有[table](/components/senior/table)组件属性，因此可以通过插槽方式自定义

::: tip 注意
由于存在form插槽与table插槽，因此在使用插槽时需要添加组件类型前缀（form/table），如table插槽，`table-name` 
:::

:::demo
form-table/slots
:::
