<script setup lang="ts">
import {defineFormSchema, EpFormSchema} from 'e-plus-ui';
import { ref } from 'vue';
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
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>()

const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  columns: 1,
  items: [
    {
      type: 'input',
      label: '输入框',
      prop: 'name',
      rules: true,
      componentProps: {
        // 监听值发生改变
        onChange: (value:any) => {
          console.log(value);
        }
      }
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
        // 监听值发生改变
        onChange: (value:any) => {
          console.log(value);
        },
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
  ],
});
</script>

<template>
  <ep-card title="events 事件监听" shadow="always">
    <div class="cz-py-4">
      <div class="cz-py-4">
        <p>{{formModel}}</p>
      </div>
      <ep-form-schema
        ref="formSchemaRef"
        :config="formSchema"
        :model="formModel"
      >
      </ep-form-schema>
    </div>
  </ep-card>
</template>

<style scoped lang="scss">

</style>
