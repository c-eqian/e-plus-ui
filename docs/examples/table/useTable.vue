<script setup lang="ts">
import { defineTableColumns, EpTable, useEpTable } from 'e-plus-ui';
import { ref } from 'vue';
const {
  registry,
  addFieldColumns,
  deleteFieldColumns,
  updateFieldColumns,
  clearSelection,
  toggleRowSelection
} = useEpTable<(typeof tableData)[0]>();
const index = ref(0);
const tableData = [
  {
    id: 1,
    date: '2016-05-03',
    name: 'Tom',
    address: '广电',
    dynamicName: '动态列'
  },
  {
    id: 2,
    date: '2016-05-02',
    name: 'Tom',
    address: '重庆',
    dynamicName: '动态列'
  },
  {
    id: 3,
    date: '2016-05-04',
    name: 'Tom',
    address: '湖南',
    dynamicName: '动态列'
  },
  {
    id: 4,
    date: '2016-05-01',
    name: 'Tom',
    address: '北京',
    dynamicName: '动态列'
  }
];
const columns = defineTableColumns<Partial<(typeof tableData)[0]>>([
  {
    type: 'selection',
    width: 50
  },
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
    prop: 'address',
    slotKey: 'slotName'
  },
  {
    width: 280,
    type: 'operation',
    label: '操作',
    fixed: 'right'
  }
]);
const handleDynamicName = () => {
  index.value += 1;
  addFieldColumns({
    label: `动态列-${index.value}`,
    prop: 'dynamicName'
  });
};
const handleDynamicNameTo = function (to: boolean | string, front?: boolean) {
  index.value += 1;
  if (arguments.length > 1) {
    addFieldColumns(
      {
        label: `动态列-${index.value}`,
        prop: 'dynamicName'
      },
      to,
      front
    );
  } else {
    addFieldColumns(
      {
        label: `动态列-${index.value}`,
        prop: 'dynamicName'
      },
      to
    );
  }
};
const handleBatch = () => {
  addFieldColumns(
    [1, 2, 3].map(() => {
      index.value += 1;
      return {
        label: `动态列-${index.value}`,
        prop: 'dynamicName'
      };
    })
  );
};
const handleDelete = () => {
  deleteFieldColumns('name');
};
const handleDeleteBatch = () => {
  deleteFieldColumns(['date', 'address']);
};
const handleUpdate = () => {
  updateFieldColumns({
    prop: 'name',
    label: '姓名'
  });
};
const selection1 = () => {
  toggleRowSelection(tableData[1], true);
};
const selection2 = () => {
  toggleRowSelection(2, true);
};
const selectionBatch1 = () => {
  toggleRowSelection([tableData[1], tableData[2]], true);
};
const selectionBatch2 = () => {
  toggleRowSelection([2, 3], true);
};
</script>

<template>
  <div>
    <div style="padding: 5px">
      <el-button type="primary" @click="handleDynamicName">新增列（默认往尾部追加）</el-button>
      <el-button type="primary" @click="handleDynamicNameTo('name', true)"
        >添加到【名称】前</el-button
      >
      <el-button type="primary" @click="handleDynamicNameTo('name')">添加到【名称】后</el-button>
      <el-button type="primary" @click="handleDynamicNameTo('date', true)"
        >添加到【日期】前</el-button
      >
      <el-divider />
      <el-button type="primary" @click="handleDynamicNameTo('date')">添加到【日期】后</el-button>
      <el-button type="primary" @click="handleDynamicNameTo(true)">向头部添加</el-button>
      <el-button type="primary" @click="handleDynamicNameTo(false)">向尾部添加</el-button>
      <el-button type="primary" @click="handleBatch">批量添加</el-button>
      <el-divider />
      <el-button type="danger" @click="handleDelete">删除【名称】列</el-button>
      <el-button type="danger" @click="handleDeleteBatch">删除【地址、日期】列</el-button>
      <el-button type="success" @click="handleUpdate">【名称】修改为【姓名】</el-button>
      <el-button type="warning" @click="clearSelection">清空选中</el-button>
      <el-divider />
      <el-button type="warning" @click="selection1">选中【重庆】所在行（通过数据行）</el-button>
      <el-button type="warning" @click="selection2">选中【重庆】所在行（通过唯一键）</el-button>
      <el-divider />
      <el-button type="warning" @click="selectionBatch1"
        >选中【重庆，湖南】所在行（通过数据行）</el-button
      >
      <el-button type="warning" @click="selectionBatch2"
        >选中【重庆，湖南】所在行（通过唯一键）</el-button
      >
    </div>
    <el-divider />
    <EpTable row-key="id" :data="tableData" :columns @registry="registry" />
  </div>
</template>

<style scoped lang="scss"></style>
