import Menu from './src/Menu';
import { IMenuProps } from './type';
export * from './type';
import { withInstall } from '../utils';
const EpMenu = withInstall(Menu);
export default EpMenu;
/**
 * 定义方法
 * @param menus
 */
export const defineMenu = (menus: IMenuProps) => {
  return menus;
};
