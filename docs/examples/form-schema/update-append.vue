<script setup lang="ts">
import {defineFormSchema, EpFormSchema, useFormSchema} from 'e-plus-ui';
import { ref } from 'vue';
interface FormModel {
  post: string;
  name: string;
  type: number;
}
const formModel = ref({
  post: '',
  name: '',
  type: '1'
});
const postList = [
  {
    value: '1',
    label: '测试部',
    children: [
      {
        value: '1-1',
        label: '测试组长',
      },
      {
        value: '1-2',
        label: '高级测试',
      }
    ]
  },
  {
    value: '2',
    label: '开发部',
    children: [
      {
        value: '2-1',
        label: '前端开发',
      },
      {
        value: '2-2',
        label: '后端开发',
      }
    ]
  },
  {
    value: '3',
    label: '产品部',
    children: [
      {
        value: '3-1',
        label: '高级产品',
      },
      {
        value: '3-2',
        label: '实习产品',
      }
    ]
  }
]
const getChildren = (value:string)=> {
  const l = postList.find(item=> item.value===value)
  return l?.children ?? []
}
const { updateOrAppendFields, registry } = useFormSchema({
  onChange: ({item, model}, v:string)=>{
    if (item.prop==='post'){
      // 添加或者更新属性配置
      updateOrAppendFields('name', {
        type: 'select-group',
        label: '人员',
        prop: 'name',
        componentProps: {
          groupOptions: getChildren(v)
        }
      })
      // 默认选择第一项
      model.value.name = getChildren(v)[0].value
    } else if (item.prop==='type'){
      // 修改部门是否可以选择
      updateOrAppendFields('post', {
      componentProps: {
        disabled: model.value.type === '1',
      }
      })
    }
  }
})    
const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  columns: 1,
  items: [
    {
      type: 'radio-group',
      label: '类型',
      prop: 'type',
      componentProps: {
        groupOptions: [
          {
            label: '访客',
            value: '1',
          },
          {
            label: '管理员',
            value: '2',
          }
          ]
      }
    },
    {
      type: 'select-group',
      label: '部门',
      prop: 'post',
      componentProps: {
        disabled: formModel.value.type === '1',
        groupOptions: postList.map(item=> {
          return {
            value: item.value,
            label: item.label
          }
        })
      }
    },
  ],
});
</script>

<template>
  <ep-card title="动态更新组件" shadow="always">
    <div class="cz-py-4">
      <ep-form-schema
        @registry="registry"
        :config="formSchema"
        :model="formModel"
      >
      </ep-form-schema>
    </div>
  </ep-card>
</template>

<style scoped lang="scss">

</style>
