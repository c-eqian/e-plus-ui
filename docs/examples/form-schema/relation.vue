<script setup lang="ts">
import { defineFormSchema, EpFormSchema } from 'e-plus-ui';
import { ref } from 'vue';
type FormModel = {
  name: string;
  name1: string;
  radioSingle: string;
};
const formModel = ref({
  name: '哈哈哈哈',
  name1: '',
  radioSingle: ''
});
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>();

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
      label: '是否禁用输入框',
      prop: 'name',
      rules: true,
      placeholder: '通过单选组件控制是否禁用',
      componentProps: {
        dynamicDisable: ({ model }) => {
          return model.value.radioSingle === '1';
        }
      }
    }
  ]
});
</script>

<template>
  <ep-card title="relation 关联组件" shadow="always">
    <div class="cz-py-4">
      <ep-form-schema ref="formSchemaRef" :config="formSchema" :model="formModel" />
    </div>
  </ep-card>
</template>

<style scoped lang="scss"></style>
