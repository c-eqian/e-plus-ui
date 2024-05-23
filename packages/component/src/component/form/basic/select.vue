<script setup lang="ts">
import {
  type FormContext,
  formContextDefault,
  type IOptions,
  type IZkFormItemConfig,
} from "../type";
import { inject, onMounted, ref, watch } from "vue";

defineOptions({
  name: "EpFromSelect",
});
interface IPropsItem {
  item: IZkFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IZkFormItemConfig),
});
const handleChange = (v: string | number | boolean) => props.item?.change?.(v);
const { model } = inject<FormContext>("form-context", formContextDefault);

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
  <el-select
    v-model.trim="model[props.item.prop!]"
    :placeholder="props.item.placeholder || `请选择 ${props.item.label}`"
    v-bind="props.item.extraPros"
    :style="{ width: props.item.width }"
    :disabled="props.item.disabled"
    @change="handleChange"
  >
    <el-option
      v-for="_item in optionsList"
      :key="_item.value"
      :label="_item.label"
      :value="_item.value"
      :disabled="_item?.disabled"
    />
  </el-select>
</template>

<style scoped lang="scss"></style>
