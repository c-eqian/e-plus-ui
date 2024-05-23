<script lang="ts">
import { defineComponent, PropType } from "vue";

import * as customComponent from "./basic";
import { IZkFormItemConfig } from "./type";

export default defineComponent({
  name: "ZkComponent",
  components: {
    ...customComponent,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    item: {
      type: Object as PropType<IZkFormItemConfig>,
      default: () => ({} as IZkFormItemConfig),
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

<style scoped lang="scss"></style>
