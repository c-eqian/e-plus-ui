<script setup lang="ts">
import { defineFormSchema } from "e-plus-ui";
import {ref} from "vue";
const formSchema = defineFormSchema([
  {
    label: '名称',
    type: 'input',
    rules: true,
    prop: 'name'
  },
  {
    label: '地址',
    type: 'input',
    prop: 'address'
  },
])
const model = ref({
  name: '111',
  address: '地址'
})
</script>

<template>
<div>
  <ep-form :model :form-items="formSchema" label-width="100px">

  </ep-form>
</div>
</template>

<style scoped lang="scss">

</style>
