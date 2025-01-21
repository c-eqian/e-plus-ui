import { useDebounce } from '@eqian/utils-vue';
import { getCurrentInstance, onMounted, onUnmounted, onUpdated, ref, type ShallowRef } from 'vue';

export const useContextMenu = (contextListRef: Readonly<ShallowRef<HTMLDivElement | null>>) => {
  const instance = getCurrentInstance();
  let vm: HTMLElement | null;
  const x = ref(0);
  const y = ref(0);
  const wx = ref(0);
  const wy = ref(0);
  const cx = ref(0);
  const cy = ref(0);
  const isOpen = ref(false);
  const isHide = ref(false);
  const calcCoordinate = () => {
    if (x.value + cx.value >= wx.value) {
      x.value = x.value - (wx.value - x.value);
    }
    if (y.value + cy.value >= wy.value) {
      y.value = y.value - (wy.value - y.value);
    }
  };
  const debounceCalcCoordinate = useDebounce(calcCoordinate, 50);
  const openChange = (v: boolean) => {
    isHide.value = v;
    isOpen.value = v;
  };
  const contextMenuHandler = (event: MouseEvent) => {
    x.value = event.clientX;
    y.value = event.clientY;
    openChange(true);
    debounceCalcCoordinate();
    event.stopPropagation();
    event.preventDefault();
  };
  const getWindowSize = () => {
    wx.value = window.innerWidth;
    wy.value = window.innerHeight;
  };
  getWindowSize();
  const clickHandler = (event: MouseEvent, callback: () => void) => {
    let targetElement: Element | null = event.target as Element;
    let count = 0;
    while (targetElement && targetElement.tagName !== 'LI' && count < 5) {
      targetElement = targetElement.parentElement;
      count += 1;
    }
    if (targetElement?.classList.contains('ep-context--item__disabled')) {
      return;
    }
    callback();
  };
  onUpdated(() => {
    cx.value = contextListRef.value?.offsetWidth ?? 0;
    cy.value = contextListRef.value?.offsetHeight ?? 0;
    debounceCalcCoordinate();
  });
  onMounted(() => {
    vm = instance?.proxy?.$el as HTMLElement;
    vm?.addEventListener('contextmenu', contextMenuHandler);
    // 点击时，先关闭显示，并在捕获句柄时执行，防止阻止冒泡后，无法触发
    window.addEventListener('click', e => clickHandler(e, () => openChange(false)), true);
    window.addEventListener('contextmenu', () => openChange(false), true);
    window.addEventListener('resize', getWindowSize);
  });
  onUnmounted(() => {
    vm?.removeEventListener('contextmenu', contextMenuHandler);
    vm = null;
    // 点击时，先关闭显示，并在捕获句柄时执行，防止阻止冒泡后，无法触发
    window.removeEventListener('click', e => clickHandler(e, () => openChange(false)), true);
    window.removeEventListener('contextmenu', () => openChange(false), true);
    window.removeEventListener('resize', getWindowSize);
  });
  return {
    x,
    y,
    isOpen,
    isHide
  };
};
