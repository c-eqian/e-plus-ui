import { inject, ref, toValue } from 'vue';
import type { IconData, SelectIconProps } from '../type';
let currentPage = 0;
export const useLazyIcon = (props: SelectIconProps) => {
  const icons = inject<IconData[]>('ICONS-SELECTOR', []);
  const iconsList = ref<IconData[]>([]);
  const defaultValue = props.lazyLoadValue ?? 100;
  // const isLoading = ref(false);
  const isLeaf = ref(false);
  const lazyIcons = () => {
    const _icons = toValue(icons);
    if (!props.lazyLoadable || _icons.length <= defaultValue) {
      iconsList.value = _icons;
      return;
    }
    if (isLeaf.value) return;
    iconsList.value = iconsList.value.concat(
      _icons.slice(currentPage * defaultValue, ++currentPage * defaultValue)
    );
    isLeaf.value = currentPage * defaultValue >= icons.length;
    // isLoading.value = true;
  };
  return {
    iconsList,
    lazyIcons,
    rawIcons: icons,
    isLeaf
  };
};
