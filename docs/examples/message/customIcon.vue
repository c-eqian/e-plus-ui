<template>
  <cz-button type="success" @click="handelMessage('success', 'security')"> success </cz-button>
  <cz-button type="danger" @click="handelMessage('error', 'cry')"> error </cz-button>
  <cz-button type="warning" @click="handelMessage('warning', 'good-fill')"> warning </cz-button>
  <cz-button type="info" @click="handelMessage('info', 'camera')"> info </cz-button>
</template>
<script lang="ts">
import { CzMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handelMessage = (type: string, icon: string) => {
      CzMessage({
        type: type,
        icon: icon,
        message: '我是测试的'
      });
    };
    return {
      handelMessage
    };
  }
});
</script>