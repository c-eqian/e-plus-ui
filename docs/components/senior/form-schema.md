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
## 组件事件

默认继承组件所有事件，通过组件配置参数`on`开头
1. 基础的表单配置
   :::demo
   form-schema/events
   :::


## 自定义组件
除了`el`组件外，还可以支持内置自定义组件，例如图标组件
:::demo
form-schema/custom
:::

## 组件关联

目前支持通过某个组件来控制另一个组件的状态，如`dynamicDisable`动态配置禁用
1. 基础的表单配置
   :::demo
   form-schema/relation
   :::
## 组件动态显示

目前支持通过某个组件来控制另一个组件的状态，如`dynamicShow`动态配置是否显示
1. 基础的表单配置
   :::demo
   form-schema/dynamic
   :::

## `useFormSchema`方法
使用`useFormSchema`方法可以替代`ref`的操作，直接操作相关方法，可以提高一定的效率
<br>
但是，值得注意的是，如果使用该方法，那么你需要使用其提供的 `registry`进行**注册使用**，否则将会无效
<br>
**请尽量不要在watch中直接调用实例方法，此时实例方法会可能为空，可以使用副作用函数`watchEffect`代替**

基础的表单配置。
1. 基础的表单配置
   :::demo
   form-schema/useFormSchema
   :::

## 动态插入组件
在很多时候，表单组件可能需要根据某个字段值进行控制另一组组件的状态，因此，在这里提供一个`updateOrAppendFields`方法进行更新属性，如果不存在，则进行添加
   :::demo
   form-schema/update-append
   :::

1. 由于表单组件是基于`element-plus`，因此你可以轻松的使用其几乎所有的API，包括插槽的使用。
    - 插槽的使用，需要定义在`componentProps`组件参数中，该参数将会仅处理组件的相关API
2. 自定义渲染
   - 如果在提供的表单组件中，不符合你的需求，那么你需要`render`进行自定义渲染
   - 虽然`type`是必填项，但是由于你使用的是自定义渲染，可以随意填写一个组件名称，避免在`ts`中类型检验错误
   
:::demo
form-schema/slots
:::
## 自定义插槽/自定义渲染

1. 由于表单组件是基于`element-plus`，因此你可以轻松的使用其几乎所有的API，包括插槽的使用。
    - 插槽的使用，需要定义在`componentProps`组件参数中，该参数将会仅处理组件的相关API
2. 自定义渲染
    - 如果在提供的表单组件中，不符合你的需求，那么你需要`render`进行自定义渲染
    - 虽然`type`是必填项，但是由于你使用的是自定义渲染，可以随意填写一个组件名称，避免在`ts`中类型检验错误


## 事件监听器

通常情况下，我们需要去监听有一个组件状态值的变化，而进行相关的数据处理，一般情况下，我们会在配置项中进行注册相关的事件。
然后，在某些特殊情况下，比如将配置项抽离到单独的文件中，但是这样可能处理事件不是那么方便，为此，在此基础上，可以在`.vue`文件中使用一个`listener`侦听器
去监听相关事件的回调，如`onChange`等
<br>

使用`useFormSchema`时，可以接收一个`对象（object）`作为参数，键为事件的名称，值为一个函数，回调参数`({model,item},v)`，其中，`v`为组件事件值
<br>

**注意：事件需要以`on`开头，大驼峰形式，为了统一，这里不会做过多的处理**

1. useFormSchema参数监听器
   :::demo
   form-schema/listener
   :::

2. listener监听器
 除了可以将侦听器作为`useFormSchema`参数外，还可以使用`useFormSchema`的方法`listener`进行注册
  如：
    ```typescript
    const { registry,listener} = useFormSchema();
    onMounted(()=>{
    listener({
    onChange: (schema, v)=>{
    console.log(schema, v);
    }
    })
    })
    ```
   **注意：使用`listener`时，需要在组件挂载完成后再进行注册**


## 组件数据请求（api）
在某些场景中，组件的数据是基于服务端的数据，而进行的数据请求，例如，下拉组件`（select）`等。因此，为了简化某些配置，支持通过api的形式进行请求。
<br>
 - 目前支持下拉组件`（select）`、`（select-group）`、单选组件`（radio-group）`、单选按钮组件`（radio-button-group）`、复选组件`（checkbox-group）`
<br>
 - 此外，如果组件类型是`type=select-group`时，在配置项中没有`children`属性，将会默认设置为`select`组件
:::demo
form-schema/api
:::

## 使用插槽
如果`form-schema`内置组件没有满足要求，`form-schema`支持使用prop值作为插槽名称（如果没有设置`slotKey`）；
<br>
如果使用插槽回调参数model进行绑定自定义组件值，因为是响应式的Ref，因此需要`model.value`；或者可以使用自定义model

:::demo
form-schema/slots
:::

## 使用`app.components`注册的全局组件
支持配置`globalComponent`字段使用`app.components`注册的全局组件，如果设置了`type`值，该值将被忽略
**大驼峰或者烤串拼接均可，只要跟全局注册名称一致**

:::demo
form-schema/global-component
:::

## 搜索栏

在该表单的基础上增加了对搜索组件的支持，只需要配置`isSearch`即可。如果没有配置`columns`，默认情况下，只显示三列，如果`isSearch`是一个数值，那么显示行数为该数值,否则默认为`1`；
显示的个数为`isSearch * columns`；如果items长度不足以`isSearch * columns`时，展开按钮将会隐藏
<br>
:::demo
form-schema/search
:::

## 搜索栏-插槽

支持使用插槽自定义搜索组件以及追加搜索组件
:::demo
form-schema/search-slots
:::
