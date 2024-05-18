<template>
  <cz-button type="success" @click="CzMessage.success('success')"> success </cz-button>
  <cz-button type="danger" @click="CzMessage.error('error')"> error </cz-button>
  <cz-button type="warning" @click="CzMessage.warning('warning')"> warning </cz-button>
  <cz-button type="info" @click="CzMessage.info('info')"> info </cz-button>
</template>
<script lang="ts">
import { CzMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      CzMessage
    };
  }
});
</script>