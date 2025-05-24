<script setup lang="ts">
import { defineFormSchema, EpFormSchema } from 'e-plus-ui';
import { ref } from 'vue';
type FormModel = {
  name: string;
  text: string;
  select: string;
};

const formSchemaRef2 = ref<InstanceType<typeof EpFormSchema>>();

const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  columns: 1,
  items: [
    {
      type: 'input',
      label: '输入框',
      prop: 'name',
      rules: true
    },
    {
      label: '使用全局输入组件',
      // 大驼峰或者烤串拼接均可，只要跟全局注册名称一致
      globalComponent: 'el-input',
      prop: 'text',
      rules: true
    },
    {
      label: '使用全局多选组件',
      globalComponent: 'ElCheckbox',
      prop: 'select',
      rules: true
    }
  ]
});
</script>

<template>
  <div class="ep-py-4">
    <ep-form-schema ref="formSchemaRef2" :config="formSchema" />
  </div>
</template>

<style scoped lang="scss"></style>
