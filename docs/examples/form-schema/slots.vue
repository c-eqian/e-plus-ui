<script setup lang="ts">
import {defineFormSchema, EpFormSchema} from 'e-plus-ui';
import { h, ref } from 'vue';
import { ElInput } from 'element-plus';
interface FormModel {
  name: string;
  cascade: string;
  render: string;
  test: string;
}
const formModel = ref({
  name: '使用组件插槽',
  cascade: '',
  render: '自定义渲染',
  test: '',
});
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>()
/**
 * 获取表单
 */
const handleGet = async () => {
  // 校验
  await formSchemaRef.value?.validate();
  console.log('获取表单值', formModel.value);
};
const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  columns: 1,
  items: [
    {
      type: 'input',
      label: '使用插槽',
      prop: 'name',
      rules: true,
      componentProps: {
        clearable: true,
        // 渲染插槽
        slots: {
          prepend: () => [h('div', 'https://')],
          append: () => [h('div', 'https://')],
          prefix: () => [h('div', 'https://')],
        },
      },
    },
    {
      type: 'input',
      label: '自定义渲染',
      prop: 'render',
      render: ({ model, item }) => {
        return h(ElInput, {
          modelValue: model.value[item.value.prop],
          'onUpdate:modelValue': (val: any) => {
            model.value[item.value.prop] = val;
          },
        });
      },
    },
  ],
});
</script>

<template>
  <ep-card title="使用组件插槽和自定义渲染">
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
</template>

<style scoped lang="scss">

</style>
