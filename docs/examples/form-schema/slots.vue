<script setup lang="ts">
import { defineFormSchema, EpFormSchema } from 'e-plus-ui';
import { ElInput } from 'element-plus';
import { h, ref } from 'vue';
type FormModel = {
  name: string;
  cascade: string;
  render: string;
  test: string;
};
const formModel = ref({
  name: '使用组件插槽',
  cascade: '',
  render: '自定义渲染',
  test: '模板插槽'
});
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>();
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
      label: '组件插槽',
      prop: 'name',
      rules: true,
      componentProps: {
        clearable: true,
        // 渲染插槽
        slots: {
          prepend: () => [h('div', 'https://')],
          append: () => [h('div', 'https://')],
          prefix: () => [h('div', 'https://')]
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
          }
        });
      }
    },
    {
      label: '模板插槽',
      prop: 'test',
      rules: true,
      placeholder: '自定义模板插槽'
      // 可以自定义插槽名称
      // slotKey: 'test'
    }
  ]
});
</script>

<template>
  <div class="cz-py-4">
    <div class="cz-py-4">
      <p>{{ formModel }}</p>
      <el-button @click="handleGet">获取表单</el-button>
    </div>
    <ep-form-schema ref="formSchemaRef" :config="formSchema" :model="formModel">
      <template #test="{ model, item }">
        <el-input v-model="model.value.test" :placeholder="item.placeholder" />
      </template>
    </ep-form-schema>
  </div>
</template>

<style scoped lang="scss"></style>
