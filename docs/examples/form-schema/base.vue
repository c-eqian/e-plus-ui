<script setup lang="ts">
import {defineFormSchema, EpFormSchema} from 'e-plus-ui';
import { h, ref } from 'vue';
import { ElInput } from 'element-plus';
interface FormModel {
  name: string;
  cascade: string;
  render: string;
  test: string;
  radioSingle: string
  checkBoxGroup: string[]
  selectGroup: string[]
  selectGroup1: string[]
}
const formModel = ref({
  name: '哈哈哈哈',
  cascade: '',
  render: '',
  test: '',
  radioSingle: '',
  checkBoxGroup: [],
  selectGroup: [],
  selectGroup1: []
});
const modelValues = ref<FormModel>()
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>()
const formSchemaRef2 = ref<InstanceType<typeof EpFormSchema>>()
/**
 * 获取表单
 */
const handleGet = async () => {
  // 校验
  await formSchemaRef.value?.validate();
  console.log('获取表单值', formModel.value);
};
const handleGetValues = async ()=>{
  // 校验
  await formSchemaRef2.value?.validate();
  // 使用getFieldsValues方法获取表单值
  modelValues.value = formSchemaRef2.value?.getFieldsValues() as FormModel;
  console.log('getFieldsValues获取表单值',modelValues.value );
}
const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  columns: 1,
  items: [
    {
      type: 'input',
      label: '输入框',
      prop: 'name',
      rules: true,
    },
    {
      type: 'radio-group',
      label: '分组单选',
      prop: 'radioSingle',
      rules: true,
      componentProps: {
        groupOptions: [
          {
            value: '1',
            label: '测试'
          },
          {
            value: '2',
            label: '开发'
          }
        ]
      }
    },
    {
      type: 'checkbox-group',
      label: '分组多选',
      prop: 'checkBoxGroup',
      rules: true,
      defaultValue: [],
      componentProps: {
        groupOptions: [
          {
            value: '1',
            label: '测试'
          },
          {
            value: '2',
            label: '开发'
          }
        ]
      }
    },
    {
      type: 'select-group',
      label: '分组下拉',
      prop: 'selectGroup',
      rules: true,
      defaultValue: [],
      componentProps: {
        groupOptions: [
          {
            label: '开发部',
            children: [
              {
                value: '1',
                label: '前端'
              },
              {
                value: '2',
                label: '后端'
              }
            ]
          },
          {
            label: '测试部',
            children: [
              {
                value: '3',
                label: '测试'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'select-group',
      label: '请求分组下拉',
      prop: 'selectGroup1',
      rules: true,
      componentProps: {
        groupOptions: {
          api: ()=> {
            return new  Promise<any>((resolve)=>{
              resolve([
                {
                  label: '产品部',
                  children: [
                    {
                      value: '1',
                      label: '产品1'
                    },
                    {
                      value: '2',
                      label: '产品2'
                    }
                  ]
                },
                {
                  label: '运营部',
                  children: [
                    {
                      value: '3',
                      label: '运营部'
                    }
                  ]
                }
              ])
            })
          }
        }
      }
    },
    {
      type: 'input',
      label: '自定义渲染',
      prop: 'render',
      render: ({ model, item }) => {
        return h(ElInput, {
          modelValue: model.value[item.prop],
          'onUpdate:modelValue': (val: any) => {
            model.value[item.prop] = val;
          },
        });
      },
    },
    {
      type: 'cascade',
      label: '级联',
      rules: true,
      prop: 'cascade',
      componentProps: {
        clearable: true,
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines'
              },
              {
                value: 'navigation',
                label: 'Navigation'
              },
            ],
          },
        ],
      },
    },
  ],
});
</script>

<template>
  <ep-card title="带有model的表单" shadow="always">
    <div class="cz-py-4">
      <div class="cz-py-4">
        <p>{{formModel}}</p>
        <el-button @click="handleGet">获取表单</el-button>
      </div>
      <ep-form-schema
          ref="formSchemaRef"
        :config="formSchema"
        :model="formModel"
      >
      </ep-form-schema>
    </div>
  </ep-card>
  <ep-card title="不使用model的表单" shadow="always">
    <div class="cz-py-4">
      <div class="cz-py-4">
        <p>{{modelValues}}</p>
        <el-button @click="handleGetValues">获取表单</el-button>
      </div>
      <ep-form-schema
          ref="formSchemaRef2"
          :config="formSchema"
      >
      </ep-form-schema>
    </div>
  </ep-card>
</template>

<style scoped lang="scss">

</style>
