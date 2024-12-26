import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
export const PREFIX_PACKAGE_NAME = '@e-plus-ui';
export const PREFIX_NAME = 'e-plus-ui';
// 获取当前文件的目录路径
const __dirname__ = fileURLToPath(new URL('.', import.meta.url));
// 项目根目录
export const projectRoot = resolve(__dirname__, '..');
export const rootPackage = resolve(projectRoot, 'package.json');
// 打包输出目录
export const outDir = resolve(projectRoot, PREFIX_NAME);
export const outEsDir = resolve(outDir, 'es');
export const outLibDir = resolve(outDir, 'lib');
export const outTypesDir = resolve(outDir, 'types');
export const outStylesPath = resolve(outDir, 'styles');

// 组件包路径
export const packagesPath = resolve(projectRoot, 'packages');
export const buildEnterPath = resolve(packagesPath, PREFIX_NAME);
export const buildEnterPackage = resolve(buildEnterPath, 'package.json');

// element-plus组件目录
export const ePlusPath = resolve(packagesPath, 'element');

// pure组件目录
export const purePath = resolve(packagesPath, 'pure');

// tsconfig

export const buildTsConfigPath = resolve(projectRoot, 'tsconfig.build.json');

// tailwindcss 入口
export const buildTailwindcssPath = resolve(packagesPath, 'tailwind-config', 'tailwind.css');
// base css
export const styleCssPath = resolve(packagesPath, 'styles');

// global.d
export const globalPath = resolve(projectRoot, 'types', 'global.d.ts');

export const tsBuildCachePath = resolve(projectRoot, 'tsconfig.build.tsbuildinfo');
