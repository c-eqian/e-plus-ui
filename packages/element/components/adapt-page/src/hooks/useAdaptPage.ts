import { isArray, isNumeric, useResizeObserver } from '@eqian/utils-vue';
import { onBeforeUnmount, onMounted, type Ref } from 'vue';
const ensureHasValue = (value: any, defaultValue?: number): number => {
  if (!isNumeric(value)) {
    return parseInt(value, 10);
  }
  return value ? value : defaultValue ? defaultValue : 0;
};
/**
 * 计算元素高度，包含内外边距
 * @param instance
 */
export const useCalcElHeight = (instance: Ref<HTMLDivElement | null>) => {
  if (!instance.value) {
    return {
      pb: 0,
      pt: 0,
      mt: 0,
      mb: 0,
      oh: 0,
      _h: 0,
      ch: 0
    };
  }
  const offsetHeight = ensureHasValue(instance.value.offsetHeight);
  const { marginTop, marginBottom, paddingBottom, paddingTop } = getComputedStyle(instance.value);
  const pb = ensureHasValue(paddingBottom);
  const pt = ensureHasValue(paddingTop);
  const mb = ensureHasValue(marginTop);
  const mt = ensureHasValue(marginBottom);
  return {
    pb,
    pt,
    mt,
    mb,
    oh: offsetHeight,
    _h: offsetHeight + mb + mt,
    ch: offsetHeight - pb - pt - mt - mb
  };
};

export const useResizeListener = (fn: (...args) => void, _refs: Ref<HTMLDivElement | null>[]) => {
  onMounted(() => {
    if (isArray(_refs)) {
      _refs.forEach(_ref => {
        if (_ref.value) {
          useResizeObserver(_ref.value, fn, {
            autoStop: true,
            immediate: true
          });
        }
      });
    }

    window.addEventListener('resize', fn, false);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', fn, false);
  });
};
