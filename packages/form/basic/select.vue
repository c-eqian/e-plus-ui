<script setup lang="ts">
import type { IFormOptions, IFormItemConfig } from '../type';
import { onMounted, ref, watch } from 'vue';
import { ElSelect, ElOption } from 'element-plus';
import { useContextProps, useProps } from './index.hooks';
defineOptions({
  name: 'EpFormSelect',
});
interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const handleChange = (v: string | number | boolean) => props.item?.change?.(v);
const { model } = useContextProps().value;
const {
  prop,
  placeholder,
  label,
  disabled,
  width,
  options = [],
  elExtraPros = {},
} = useProps(props.item).value;
const optionsList = ref<IFormOptions[]>([]);
const initOptions = () => {
  optionsList.value = options as unknown as IFormOptions[];
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
  <ElSelect
    v-model="model[prop!]"
    :placeholder="placeholder || `请选择 ${label}`"
    v-bind="elExtraPros"
    :style="{ width }"
    :disabled="disabled"
    @change="handleChange"
  >
    <ElOption
      v-for="_item in optionsList"
      :key="_item.value"
      :label="_item.label"
      :value="_item.value"
      :disabled="_item?.disabled"
    />
  </ElSelect>
</template>
