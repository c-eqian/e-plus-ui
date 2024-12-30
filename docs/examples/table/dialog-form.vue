<script setup lang="ts">
import { defineFormSchema, EpFormSchema, useFormSchema } from 'e-plus-ui';
const formSchema = defineFormSchema({
  columns: 1,
  items: [
    {
      prop: 'name',
      label: '名称',
      rules: true,
      type: 'input'
    },
    {
      prop: 'date',
      label: '日期',
      type: 'date-picker',
      componentProps: {
        type: 'datetime'
      }
    }
  ]
});
const { registry, getFieldsValues, setFieldsValues, validate } = useFormSchema();
defineExpose({
  getFieldsValues,
  setFieldsValues,
  validate
});
</script>

<template>
  <EpFormSchema :config="formSchema" @registry="registry" />
</template>

<style scoped lang="scss"></style>
