<script setup lang="ts">
import {
  type FormContext,
  formContextDefault,
  type IOptions,
  type IZkFormItemConfig,
} from '../type';
import { inject, onMounted, ref, watch } from 'vue';
import { ElCheckboxButton, ElCheckbox } from 'element-plus';
interface IPropsItem {
  item: IZkFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IZkFormItemConfig),
});
const { model } = inject<FormContext>('form-context', formContextDefault);
const handleChange = (v: string | number | boolean) => props.item?.change?.(v);
defineExpose({
  handleChange,
});
defineOptions({
  name: 'EpFormCheckboxGroup',
});
const optionsList = ref<IOptions[]>([]);
const initOptions = () => {
  optionsList.value = (props.item.options as unknown as IOptions[]) || [];
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
    v-if="props.item.options"
    v-model="model[props.item.prop!]"
    v-bind="props.item.extraPros"
    :disabled="props.item.disabled"
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
    <ElCheckbox
      v-model="model[props.item.prop!]"
      v-bind="props.item.extraPros"
      :true-label="props.item.extraPros?.trueLabel || 1"
      :false-label="props.item.extraPros?.falseLabel || 0"
    >
      {{ props.item.label }}
    </ElCheckbox>
  </template>
</template>
