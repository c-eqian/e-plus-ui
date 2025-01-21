export const useContextMenuSub = () => {
  const getParentNodePoint = (target: HTMLElement) => {
    let targetElement: HTMLElement = target;
    let count = 0;
    while (
      targetElement &&
      targetElement.tagName !== 'DIV' &&
      count < 10 &&
      !targetElement.classList.contains('ep-context-menus')
    ) {
      if (targetElement.parentElement) {
        targetElement = targetElement.parentElement;
        count += 1;
        continue;
      }
      return;
    }
    return getComputedStyle(targetElement) as CSSStyleDeclaration;
  };
  const mouseEnterHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const { right } = getParentNodePoint(target)!;
    const subDom = target.querySelector('.ep-context-sub') as HTMLElement;
    if (subDom) {
      subDom.classList.add('ep-context-sub__show');
      if (parseInt(right, 10) > subDom.offsetWidth) {
        subDom.classList.add('ep-context-sub__right');
      } else {
        subDom.classList.add('ep-context-sub__left');
      }
    }
  };
  const mouseLeaveHandler = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const subDom = target.querySelector('.ep-context-sub') as HTMLElement;
    if (subDom) {
      subDom.classList.remove('ep-context-sub__show');
    }
  };
  return {
    mouseEnterHandler,
    mouseLeaveHandler
  };
};
