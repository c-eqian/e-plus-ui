import path from 'path';
import { Transform } from 'stream';
import { tailwindConfig } from '@e-plus-ui/tailwind-config';
import chalk from 'chalk';
import consola from 'consola';
import cssnano from 'cssnano';
import { readFile, writeFile } from 'fs-extra';
import { dest, src } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
import _postcss, { type Plugin, type Processor } from 'postcss';
import dartSass from 'sass';
import tailwindcss from 'tailwindcss';
import { outEsDir, outLibDir, outStylesPath, packagesPath, styleCssPath } from '../paths';
function compressWithCssnano(plugins: (Plugin | Processor)[] = []) {
  const processor = _postcss([
    cssnano({
      preset: [
        'default',
        {
          // 避免颜色变换
          colormin: false,
          // 避免字体转换
          minifyFontValues: false
        }
      ]
    }),
    ...plugins
  ]);
  return new Transform({
    objectMode: true,
    transform(chunk, _encoding, callback) {
      const file = chunk as any;
      if (file.isNull()) {
        callback(null, file);
        return;
      }
      if (file.isStream()) {
        callback(new Error('Streaming not supported'));
        return;
      }
      const cssString = file.contents!.toString();
      processor.process(cssString, { from: file.path }).then(result => {
        const name = path.basename(file.path);
        file.contents = Buffer.from(result.css);
        consola.success(
          `${chalk.cyan(name)}: ${chalk.yellow(
            cssString.length / 1000
          )} KB -> ${chalk.green(result.css.length / 1000)} KB`
        );
        callback(null, file);
      });
    }
  });
}
// 打包全局变量样式
const buildGlobalVarsSCss = async () => {
  const sass = gulpSass(dartSass);
  await new Promise(resolve => {
    src(`${path.resolve(packagesPath, 'styles')}/**/*.scss`)
      .pipe(sass.sync())
      .pipe(autoprefixer({ cascade: false }))
      .pipe(compressWithCssnano()) // 压缩
      .pipe(dest(outStylesPath))
      .on('end', resolve);
  });
};
// 打包tailwindcss
const buildTailwindCss = async () => {
  await new Promise(resolve => {
    src(`${path.resolve(packagesPath, 'tailwind-config')}/**/*.css`)
      .pipe(
        compressWithCssnano([
          tailwindcss({
            config: {
              ...tailwindConfig(),
              prefix: 'ep-',
              content: [
                `${packagesPath}/**/*.{js,ts,jsx,tsx,vue}`,
                `${packagesPath}/**/*.{js,ts,jsx,tsx,vue}`,
                `${packagesPath}/**/*/index.html`,
                '!**/node_modules/**'
              ]
            }
          })
        ])
      )
      .pipe(autoprefixer({ cascade: false }))
      .pipe(dest(path.resolve(outEsDir, 'tailwind-config')))
      .pipe(dest(path.resolve(outLibDir, 'tailwind-config')))
      .pipe(dest(path.resolve(outStylesPath, 'tailwind')))
      .on('end', resolve);
  });
};
export const buildStyles = async () => {
  await buildTailwindCss();
  const data = await readFile(path.resolve(outStylesPath, 'tailwind', 'tailwind.css'));
  await writeFile(path.resolve(styleCssPath, 'tailwind', 'tailwind.scss'), data, 'utf-8');
  await buildGlobalVarsSCss();
  await writeFile(path.resolve(styleCssPath, 'tailwind', 'tailwind.scss'), '', 'utf-8');
};

// export { buildGlobalVarsSCss, buildTailwindCss };
