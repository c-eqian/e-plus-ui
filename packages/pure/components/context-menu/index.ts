import ContextMenuRoot from './src/ContextMenuRoot.vue';
import type { ContextMenuOptions } from './src/type';
export const EpContextMenu: typeof ContextMenuRoot = ContextMenuRoot;
export * from './src/type';

export const defineContextMenu = (contextMenu: ContextMenuOptions) => {
  return contextMenu;
};
