<template>
  <div class="play">
    <ep-card title="表单">
      <div class="cz-py-4">
        <div class="cz-py-4">
          <el-button @click="handleGet">获取</el-button>
          <el-button @click="handleSet">设置值</el-button>
          <el-button @click="handleAdd(true)">添加表单</el-button>
          <el-button @click="handleAdd(false)">添加表单到第一个位置</el-button>
          <el-button @click="handleAdd('name')"
            >添加表单到name之后位置</el-button
          >
          <el-button @click="handleDeleteField">删除cascade项</el-button>
        </div>
        <ep-form-schema
          @registry="registry"
          :config="formSchema"
          :model="formModel"
        >
        </ep-form-schema>
      </div>
    </ep-card>
    <ep-card title="搜索" class="cz-w-1/2">
      <ep-form-schema :config="searchSchema"> </ep-form-schema>
    </ep-card>
  </div>
</template>
<script setup lang="ts">
import { defineFormSchema, useFormSchema } from '../packages/component/src';
import { ref, h } from 'vue';
import { ElInput } from 'element-plus';
const {
  registry,
  getFieldsValues,
  validate,
  setFieldsValues,
  appendFields,
  deleteField,
} = useFormSchema();
interface FormModel {
  name: string;
  cascade: string;
  render: string;
  test: string;
}
const formModel = ref({
  name: '哈哈哈哈',
  cascade: '',
  render: '',
  test: '',
});
const handleSet = () => {
  setFieldsValues({
    test: '新增',
  });
};
const handleDeleteField = () => {
  deleteField<FormModel>('cascade');
};
const handleAdd = (to: boolean | keyof FormModel) => {
  appendFields<FormModel>(
    {
      prop: 'test',
      label: '新增',
      type: 'input',
      rules: true,
    },
    to
  );
};
const handleGet = async () => {
  await validate();
  console.log('获取表单值-', formModel.value);
  console.log('获取表单值', getFieldsValues());
};
const searchSchema = defineFormSchema<FormModel>({
  isSearch: true,
  labelWidth: '90px',
  items: [
    {
      type: 'input',
      label: '框架名称',
      prop: 'name',
    },
    {
      type: 'input',
      label: '技术组',
      prop: 'render',
    },
  ],
});
const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
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
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ],
});
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.play {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-container {
  width: 500px;
  height: 800px;
}
</style>
