<template>
  <cz-button type="success" @click="handelMessage('success')"> success </cz-button>
  <cz-button type="danger" @click="handelMessage('error')"> error </cz-button>
  <cz-button type="warning" @click="handelMessage('warning')"> warning </cz-button>
  <cz-button type="info" @click="handelMessage('info')"> info </cz-button>
</template>
<script lang="ts" setup>
import { CzMessage } from '@cz-coco/components';
const handelMessage = (type: "success" | "warning" | "info" | "error") => {
  CzMessage({
    type: type,
    message: '我是测试的'
  });
};
</script>