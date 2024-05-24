<script setup lang="ts">
import type { IFormOptions, IFormItemConfig } from '../type';
import { onMounted, ref, watch } from 'vue';
import { ElRadioGroup, ElRadio } from 'element-plus';
import { useContextProps, useProps } from './index.hooks';
interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const { model } = useContextProps().value;
const {
  prop,
  label,
  disabled,
  elExtraPros = {},
  options,
} = useProps(props.item).value;
const handleChange = (v: string | number | boolean | undefined) =>
  props.item?.change?.(v);
defineExpose({
  handleChange,
});
defineOptions({
  name: 'EpFormRadioGroup',
});
const optionsList = ref<IFormOptions[]>([]);
const initOptions = async () => {
  optionsList.value = (props.item.options as unknown as IFormOptions[]) || [];
};
watch(
  () => options,
  () => {
    initOptions();
  }
);
onMounted(() => {
  initOptions();
});
</script>

<template>
  <ElRadioGroup
    v-if="options"
    v-model="model[prop!]"
    v-bind="elExtraPros"
    :disabled="disabled"
    @change="handleChange"
  >
    <ElRadio
      v-for="_item in optionsList"
      :key="_item.value"
      :value="_item.value"
      :label="_item.value"
    >
      {{ _item.label }}
    </ElRadio>
  </ElRadioGroup>
  <template v-else>
    <ElRadio v-model="model[prop!]" :label="label" v-bind="elExtraPros">
      {{ props.item.label }}
    </ElRadio>
  </template>
</template>
