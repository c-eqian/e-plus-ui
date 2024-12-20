<script setup lang="ts">
import { CopyDocument } from '@element-plus/icons-vue';
import { ElIcon, ElMessage } from 'element-plus';
import { computed, nextTick, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import type { ICopyTextProps } from './type';

defineOptions({
  name: 'EpCopyText'
});
const props = withDefaults(defineProps<ICopyTextProps>(), {
  justify: 'start',
  align: 'top'
});
// 通过属性传入
const val = computed(() => props.text);
// 是否通过 slot 传入
const fromAttr = computed(() => !!val.value);
// ref
const textRef = ref<HTMLElement>();
const textRefInnerText = ref('');
// 文本，是否是空
const textComputedRef = computed(() => {
  return fromAttr.value ? val.value : textRefInnerText.value;
});
const handleTextUpdate = () => {
  nextTick(() => {
    textRefInnerText.value = textRef.value?.innerText ?? '';
  });
};
// 生成 textarea
const createFakeElement = (v: string) => {
  const fakeElement = document.createElement('textarea');
  fakeElement.setAttribute('readonly', '');
  fakeElement.setAttribute('opacity', '0');
  fakeElement.value = v;
  return fakeElement;
};
let messageHandler: any | null = null;
// copy
const handleCopy = async () => {
  const txt = textComputedRef.value ?? '';
  let fakeEle: HTMLTextAreaElement | null = null;
  try {
    // 浏览器版本兼容性处理
    const clipboard = navigator.clipboard;
    if (clipboard) {
      await clipboard.writeText(txt);
    } else {
      fakeEle = createFakeElement(txt);
      document.body.appendChild(fakeEle);
      fakeEle?.select();
      document.execCommand('copy');
    }
    messageHandler?.close();
    messageHandler = ElMessage({
      showClose: true,
      message: '已复制',
      type: 'success',
      duration: 1000
    });
  } catch (err) {
    console.error(err);
  } finally {
    fakeEle && fakeEle?.remove();
  }
};
onUpdated(handleTextUpdate);
onMounted(handleTextUpdate);
onUnmounted(() => {
  messageHandler = null;
});
</script>

<template>
  <div
    class="cz-copy-text"
    :class="[
      type ? `is-${type}` : '',
      type && justify ? `is-justify-${justify}` : '',
      type && align ? `is-align-${align}` : ''
    ]"
  >
    <!-- 如果没有slot则取text -->
    <span ref="textRef">
      <slot v-if="$slots?.default?.()" name="default" />
      <span v-else>{{ val }}</span>
    </span>
    <el-icon v-if="textComputedRef" class="icon" @click="handleCopy">
      <CopyDocument />
    </el-icon>
  </div>
</template>

<style scoped lang="scss"></style>
