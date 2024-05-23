<script setup lang="ts">
import { useMerge } from 'co-utils-vue';
import { ElInput } from 'element-plus';
import { FormContext, formContextDefault, IZkFormItemConfig } from '../type';
import { inject } from 'vue';

interface IPropsItem {
  item: IZkFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IZkFormItemConfig),
});
const { model } = inject<FormContext>('form-context', formContextDefault);
const handleEnter = (v: string | number | boolean) => props.item?.enter?.(v);
defineExpose({
  handleEnter,
});
defineOptions({
  name: 'EpFormInput',
});
</script>

<template>
  <ElInput
    v-model.trim="model[props.item.prop!]"
    :placeholder="props.item.placeholder || `请输入 ${props.item.label}`"
    v-bind="useMerge({clearable:true,},props.item.extraPros as any|| {})"
    :disabled="props.item.disabled"
    :readonly="props.item.readOnly"
    @keyup.enter="() => handleEnter(model[props.item.prop!])"
  >
    <template v-if="props.item.extraPros?.prefix" #prefix>
      {{ props.item.extraPros?.prefix }}
    </template>
    <template v-if="props.item.extraPros?.suffix" #suffix>
      {{ props.item.extraPros?.suffix }}
    </template>
    <template v-if="props.item.extraPros?.prepend" #prepend>
      {{ props.item.extraPros?.prepend }}
    </template>
    <template v-if="props.item.extraPros?.append" #append>
      {{ props.item.extraPros?.append }}
    </template>
  </ElInput>
</template>

<style scoped lang="less"></style>
