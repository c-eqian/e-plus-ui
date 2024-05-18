import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath, utilsPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
//删除e-ui

export const removeDist = () => {
  return delPath(`${pkgPath}/e-ui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/e-ui/lib/src`))
    .pipe(dest(`${pkgPath}/e-ui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
// 打包utils
export const buildUtils = async () => {
  await run('pnpm run build', utilsPath);
  await copyEsUtils()
};
export const copyEsUtils = async () => {
  await run(`cp -r ${utilsPath}/dist/es/* ${pkgPath}/e-ui/es`, pkgPath);
  await run(`cp -r ${utilsPath}/dist/lib/* ${pkgPath}/e-ui/lib`, pkgPath);
  await run(`rm -rf dist`, utilsPath);
  console.log('成功')
};
export default series(
  async () => removeDist(),
  parallel(
    async () =>  buildStyle(),
    async () => await buildComponent(),
    async () => await buildUtils()
  )
);
