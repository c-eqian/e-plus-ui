<script setup lang="ts">
import type { FormContext, IOptions, IFormItemConfig } from '../type';
import { inject, onMounted, ref, watch } from 'vue';
import { formContextDefault } from './model';
import { ElSelect, ElOption } from 'element-plus';
defineOptions({
  name: 'EpFromSelect',
});
interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const handleChange = (v: string | number | boolean) => props.item?.change?.(v);
const { model } = inject<FormContext>('form-context', formContextDefault);

const optionsList = ref<IOptions[]>([]);
const initOptions = () => {
  optionsList.value = props.item.options as unknown as IOptions[];
};
watch(
  () => props.item.options,
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
    v-model.trim="model[props.item.prop!]"
    :placeholder="props.item.placeholder || `请选择 ${props.item.label}`"
    v-bind="props.item.extraPros"
    :style="{ width: props.item.width }"
    :disabled="props.item.disabled"
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

<style scoped lang="scss"></style>
