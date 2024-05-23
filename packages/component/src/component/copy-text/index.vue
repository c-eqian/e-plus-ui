<template>
  <div
    :class="[
      type ? `is-${type}` : '',
      type && justify ? `is-justify-${justify}` : '',
      type && align ? `is-align-${align}` : '',
    ]"
  >
    <!-- 如果没有slot则取text -->
    <span ref="textRef">
      <slot v-if="$slots?.default?.()" />
      <span v-else>{{ val }}</span>
    </span>
    <el-icon v-if="textComputedRef" class="icon" @click="handleCopy">
      <CopyDocument />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { CopyDocument } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import type { PropType } from 'vue';
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

export default defineComponent({
  name: 'EpCopyText',
  components: { CopyDocument },
  props: {
    // 实际拷贝值，不传默认拷贝 slot 的文字
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'flex'>,
      default: '',
    },
    justify: {
      type: String as PropType<
        'start' | 'end' | 'center' | 'space-around' | 'space-between'
      >,
      default: 'start',
    },
    align: {
      type: String as PropType<'top' | 'middle' | 'bottom'>,
      default: 'top',
    },
  },
  setup(props) {
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
    const handleCopy = () => {
      const txt = textComputedRef.value;
      const fakeEle = createFakeElement(txt);
      document.body.appendChild(fakeEle);
      fakeEle.select();
      try {
        document.execCommand('copy');

        messageHandler?.close();
        messageHandler = ElMessage({
          showClose: true,
          message: '已复制',
          type: 'success',
          duration: 1000,
        });
      } catch (err) {
        console.error(err);
      } finally {
        fakeEle.remove();
      }
    };

    onUpdated(handleTextUpdate);
    onMounted(handleTextUpdate);
    onUnmounted(() => {
      messageHandler = null;
    });

    return {
      textComputedRef,
      textRef,
      fromAttr,
      val,
      handleCopy,
    };
  },
});
</script>

<style lang="less" scoped>
.is-flex {
  display: flex;
  // 水平排列
  &.is-justify-center {
    justify-content: center;
  }
  &.is-justify-end {
    justify-content: end;
  }
  &.is-justify-space-between {
    justify-content: space-between;
  }
  &.is-justify-space-around {
    justify-content: space-around;
  }
  // 垂直方向
  &.is-align-middle {
    align-items: center;
  }
  &.is-align-bottom {
    align-items: flex-end;
  }
}

.icon {
  margin-left: 5px;
  opacity: 0.6;
  font-size: 16px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>
