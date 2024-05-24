<script setup lang="ts">
import type { IFormOptions, IFormItemConfig } from '../type';
import { onMounted, ref, watch } from 'vue';
import { ElCheckboxButton, ElCheckbox } from 'element-plus';
import { useContextProps, useProps } from './index.hooks';
interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const { prop, label, disabled, elExtraPros = {} } = useProps(props.item).value;
const { model } = useContextProps().value;
const handleChange = (v: string | number | boolean) => props.item?.change?.(v);
defineExpose({
  handleChange,
});
defineOptions({
  name: 'EpFormCheckboxGroup',
});
const optionsList = ref<IFormOptions[]>([]);
const initOptions = () => {
  optionsList.value = (props.item.options as unknown as IFormOptions[]) || [];
};
watch(
  () => [props.item.options],
  () => {
    initOptions();
  }
);
onMounted(() => {
  initOptions();
});
</script>

<template>
  <ElCheckboxButton
    v-if="optionsList"
    v-model="model[prop!]"
    v-bind="elExtraPros"
    :disabled="disabled"
    @change="handleChange"
  >
    <ElCheckbox
      v-for="_item in optionsList"
      :key="_item.value"
      :label="_item.value"
      :disabled="_item.disabled"
    >
      {{ item.label }}
    </ElCheckbox>
  </ElCheckboxButton>
  <template v-else>
    <ElCheckbox v-model="model[prop!]" v-bind="elExtraPros">
      {{ label }}
    </ElCheckbox>
  </template>
</template>
