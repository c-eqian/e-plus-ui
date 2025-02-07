<script setup lang="ts">
import { useFormatDate } from '@eqian/utils-vue';
import { fakerZH_CN as faker } from '@faker-js/faker';
import { EpFormTable, type FormTableProps } from 'e-plus-ui';
import { ref } from 'vue';
const formSchema: FormTableProps['formSchema'] = {
  isSearch: 1,
  labelWidth: '90px',
  columns: 3,
  items: [
    {
      type: 'input',
      label: '框架名称',
      defaultValue: '哈哈哈哈',
      prop: 'name',
      col: 12
    },
    {
      type: 'input',
      label: '框架名称',
      prop: 'test2',
      col: 12
    },
    {
      type: 'input',
      label: '技术组',
      prop: 'render'
    },
    {
      type: 'input',
      label: '技术组1',
      prop: 'test'
    },
    {
      type: 'input',
      label: '技术组2',
      prop: 'test1'
    }
  ]
};
const tableConfig: FormTableProps['tableConfig'] = {
  // 使用分页
  pagination: true,
  columns: [
    {
      label: '名称',
      prop: 'name'
    },
    {
      label: '日期',
      prop: 'date'
    },
    {
      label: '地址',
      prop: 'address'
    }
  ]
};
const tableData = ref<any[]>([]);
const generateData = () => {
  tableData.value.length = 0;
  for (let i = 0; i < 20; i++) {
    tableData.value.push({
      date: useFormatDate(faker.date.anytime(), 'yyyy-MM-dd HH:mm'),
      name: faker.person.fullName(),
      address: faker.location.streetAddress()
    });
  }
};
const simulateRequest = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      generateData();
      resolve({
        list: tableData.value,
        total: tableData.value.length
      });
    }, 3000);
  });
};
</script>

<template>
  <div class="play">
    <EpFormTable :api="simulateRequest" :form-schema="formSchema" :table-config="tableConfig">
    </EpFormTable>
  </div>
</template>

<style scoped>
.play {
  padding: 10px;
  width: 100%;
  height: 700px;
}
</style>
