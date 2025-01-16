import { useDebounce, useResizeObserver } from '@eqian/utils-vue';
import { getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue';
export const useTabs = () => {
  const instance = getCurrentInstance();
  const emits = instance?.emit;
  const isAbleLeftButton = ref(false);
  const isAbleRightButton = ref(false);
  const showButton = ref(false);
  function calcShowButton(_scrollEl?: HTMLElement) {
    const scrollEl = _scrollEl ?? getScrollElement();
    if (!scrollEl) return;
    const contentScrollEl = getElement()?.querySelector('.ep-tabs') as HTMLElement;
    if (!contentScrollEl) return;
    showButton.value = contentScrollEl.scrollWidth > scrollEl.clientWidth;
    isAbleLeftButton.value = scrollEl.scrollLeft <= 0;
    isAbleRightButton.value = scrollEl.scrollLeft + scrollEl.clientWidth >= scrollEl.scrollWidth;
  }
  const debounceCalcShowButton = useDebounce(calcShowButton, 100);
  function removeTab(e: Event, tab: any) {
    e.preventDefault();
    e.stopPropagation();
    emits?.('deleteTab', tab);
  }
  const currentActiveTab = ref('');
  function getElement(): HTMLDivElement | null {
    return instance?.proxy?.$el;
  }
  function getScrollElement() {
    return getElement()?.querySelector('.ep-tabs-scroll') as HTMLElement;
  }
  async function currentTabView() {
    const scrollEl = getElement();
    if (!scrollEl) return;

    await nextTick(); // 确保DOM已经更新

    const viewportEl = scrollEl.querySelector('div[data-tab-active="true"]') as HTMLElement;
    if (!viewportEl) return;
    requestAnimationFrame(() => {
      viewportEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center'
      });
      debounceCalcShowButton();
    });
  }
  function scrollDirection(direction: 'left' | 'right') {
    const scrollEl = getScrollElement();
    if (!scrollEl) return;

    const viewportEl = scrollEl.querySelector('div[data-tab-active="true"]') as HTMLElement;
    if (!viewportEl) return;
    const viewportWidth = viewportEl.clientWidth < 100 ? 200 : viewportEl.clientWidth * 2;
    scrollEl.scrollBy({
      behavior: 'smooth',
      left: direction === 'left' ? -viewportWidth : +viewportWidth
    });
    calcShowButton();
  }
  watch(
    () => currentActiveTab.value,
    () => {
      currentTabView().then();
    }
  );

  onMounted(() => {
    calcShowButton();
    const target = getScrollElement();
    if (target) {
      useResizeObserver(
        target,
        () => {
          debounceCalcShowButton();
          currentTabView().then();
        },
        {
          immediate: false,
          autoStop: true
        }
      );
    }
  });
  return {
    currentTabView,
    currentActiveTab,
    showButton,
    isAbleLeftButton,
    isAbleRightButton,
    removeTab,
    scrollDirection
  };
};
