# FormSchema 表单

表单配置
`FormSchema`表单是`form`的升级版,功能更加强大，同时支持搜索
<br>
可以提供`model`表单，也可以不提供，内部会自己根据表单项进行创建使用
## 基础用法

基础的表单配置。
1. 基础的表单配置
   :::demo
   form-schema/base
   :::

## `useFormSchema`方法
使用`useFormSchema`方法可以替代`ref`的操作，直接操作相关方法，可以提高一定的效率
<br>
但是，值得注意的是，如果使用该方法，那么你需要使用其提供的 `registry`进行**注册使用**，否则将会无效

基础的表单配置。
1. 基础的表单配置
   :::demo
   form-schema/useFormSchema
   :::
## 自定义插槽/自定义渲染

1. 由于表单组件是基于`element-plus`，因此你可以轻松的使用其几乎所有的API，包括插槽的使用。
    - 插槽的使用，需要定义在`componentProps`组件参数中，该参数将会仅处理组件的相关API
2. 自定义渲染
   - 如果在提供的表单组件中，不符合你的需求，那么你需要`render`进行自定义渲染
   - 虽然`type`是必填项，但是由于你使用的是自定义渲染，可以随意填写一个组件名称，避免在`ts`中类型检验错误
   
:::demo
form-schema/slots
:::