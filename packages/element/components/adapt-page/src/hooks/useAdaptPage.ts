import { isArray, isNumeric, useResizeObserver } from '@eqian/utils-vue';
import { onBeforeUnmount, onMounted, unref, type Ref } from 'vue';
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
export const useCalcElHeight = (instance: HTMLDivElement | Ref<HTMLDivElement | null>) => {
  const unInstance = unref(instance);
  if (!unInstance) {
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
  const offsetHeight = ensureHasValue(unInstance.offsetHeight);
  const { marginTop, marginBottom, paddingBottom, paddingTop } = getComputedStyle(unInstance);
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
    window.removeEventListener('resize', fn, false);
    window.addEventListener('resize', fn, false);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', fn, false);
  });
};
