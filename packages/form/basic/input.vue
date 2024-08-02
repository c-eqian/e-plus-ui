<script setup lang="ts">
import { useMerge } from '@eqian/utils-vue';
import { ElInput } from 'element-plus';
import type { IFormItemConfig } from '../type';
import { useContextProps, useProps } from './index.hooks';

interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const {
  prop,
  placeholder,
  label,
  readOnly,
  disabled,
  elExtraPros = {},
} = useProps(props.item).value;
const { model } = useContextProps().value;
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
    v-model.trim="model[prop!]"
    :placeholder="placeholder || `请输入 ${label}`"
    v-bind="useMerge({}, { clearable: true }, elExtraPros)"
    :disabled="disabled"
    :readonly="readOnly"
    @keyup.enter="() => handleEnter(model[prop!])"
  >
    <template v-if="elExtraPros?.prefix" #prefix>
      {{ elExtraPros?.prefix }}
    </template>
    <template v-if="elExtraPros?.suffix" #suffix>
      {{ elExtraPros?.suffix }}
    </template>
    <template v-if="elExtraPros?.prepend" #prepend>
      {{ elExtraPros?.prepend }}
    </template>
    <template v-if="elExtraPros?.append" #append>
      {{ elExtraPros?.append }}
    </template>
  </ElInput>
</template>

<style scoped lang="less"></style>
