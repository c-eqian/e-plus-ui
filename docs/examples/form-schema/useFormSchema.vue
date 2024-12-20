<script setup lang="ts">
import { defineFormSchema, useFormSchema } from 'e-plus-ui';
import { ElInput } from 'element-plus';
import { h, ref } from 'vue';
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
const { registry, getFieldsValues, validate, setFieldsValues, appendFields, deleteField } =
  useFormSchema();
/**
 * 设置表单值
 */
const handleSet = () => {
  setFieldsValues({
    test: '新增'
  });
};
/**
 * 删除表单
 */
const handleDeleteField = () => {
  deleteField<FormModel>('cascade');
};
const handleAdd = (to: boolean | keyof FormModel) => {
  appendFields<FormModel>(
    {
      prop: 'test',
      label: '新增',
      type: 'input',
      rules: true
    },
    to
  );
};
/**
 * 获取表单
 */
const handleGet = async () => {
  // 校验
  await validate();
  console.log('获取表单值', getFieldsValues());
};
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
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency'
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback'
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency'
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability'
                  }
                ]
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation'
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation'
                  }
                ]
              }
            ]
          }
        ]
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
        <el-button @click="handleSet">设置值</el-button>
        <el-button @click="handleAdd(true)">添加表单</el-button>
        <el-button @click="handleAdd(false)">添加表单到第一个位置</el-button>
        <el-button @click="handleAdd('name')">添加表单到name之后位置</el-button>
        <el-button @click="handleDeleteField">删除cascade项</el-button>
      </div>
      <ep-form-schema :config="formSchema" :model="formModel" @registry="registry" />
    </div>
  </ep-card>
</template>

<style scoped lang="scss"></style>
