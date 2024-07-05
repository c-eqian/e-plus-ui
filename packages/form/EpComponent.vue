<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import * as customComponent from './basic';
import { IFormItemConfig } from './type';

export default defineComponent({
  name: 'EpComponent',
  components: {
    ...customComponent,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    item: {
      type: Object as PropType<IFormItemConfig>,
      default: () => ({} as IFormItemConfig),
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<template>
  <component :is="props.name" :key="props.name" :item="props.item" />
</template>
