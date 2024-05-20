import { resolve } from 'path';

// 项目目录
export const projRoot = resolve(__dirname, '../../');

//pkg根目录
export const pkgPath = resolve(projRoot, 'packages');
//组件库根目录
export const componentPath = resolve(pkgPath, 'components');
// 工具类目录
export const utilsPath = resolve(pkgPath, 'utils');
