import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Menu from './src/Menu';
import type { MenuProps } from './src/type';
export const EpMenu: SFCWithInstall<typeof Menu> = withInstall(Menu);
export * from './src/type';
/**
 * 定义方法
 * @param menus
 */
export const defineMenu = (menus: MenuProps) => {
  return menus;
};
