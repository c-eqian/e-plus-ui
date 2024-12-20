<script setup lang="ts">
import { defineFormSchema, useFormSchema } from 'e-plus-ui';
import { ref } from 'vue';
type FormModel = {
  name: string;
  cascade: string;
  render: string;
  test: string;
};
const formModel = ref({
  name: '哈哈哈哈',
  cascade: '',
  render: '',
  test: ''
});
const { registry, getFieldsValues, validate } = useFormSchema({
  onChange: (schema: any, v: any) => {
    console.log(schema, v);
  }
});
/**
 * 获取表单
 */
const handleGet = async () => {
  // 校验
  await validate();
  const data = getFieldsValues();
  console.log('获取表单值', data);
};
const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  columns: 1,
  items: [
    {
      type: 'input',
      label: '姓名',
      prop: 'name',
      rules: true,
      componentProps: {
        clearable: true
      }
    }
  ]
});
</script>

<template>
  <ep-card title="表单">
    <div class="cz-py-4">
      <div class="cz-py-4">
        <el-button @click="handleGet">获取</el-button>
      </div>
      <ep-form-schema :config="formSchema" :model="formModel" @registry="registry" />
    </div>
  </ep-card>
</template>

<style scoped lang="scss"></style>
