import { isArray, isEmpty } from '@eqian/utils-vue';
import type { ContextMenuItem, ContextMenuOptions } from '../type';

export const tryGeneratorKey = (item: ContextMenuItem | ContextMenuItem[]) => {
  if (isArray(item)) {
    try {
      return JSON.stringify(item);
    } catch {
      return `${item}`;
    }
  } else {
    return item.label;
  }
};

/**
 * 是否需要分离器
 * @param menu
 * @param index
 */
export const needSeparator = (menu: ContextMenuOptions, index: number) => {
  if (index < 1) return false;
  return isArray(menu[index - 1]) && !isEmpty(menu[index - 1]);
};
