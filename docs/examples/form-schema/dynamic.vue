<script setup lang="ts">
import {defineFormSchema, EpFormSchema} from 'e-plus-ui';
import { ref } from 'vue';
interface FormModel {
  name: string;
  name1: string;
  radioSingle: string
}
const formModel = ref({
  name: '哈哈哈哈',
  name1: '',
  radioSingle: '',
});
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>()

const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  columns: 1,
  items: [
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
      type: 'input',
      label: '是否显示输入框',
      prop: 'name',
      rules: true,
      placeholder: '通过单选组件控制是否显示',
      componentProps: {
        dynamicShow: ({model})=> {
          return model.value.radioSingle === '1'
        },
      }
    }
  ],
});
</script>

<template>
  <ep-card title="动态控制组件显示" shadow="always">
    <div class="cz-py-4">
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
