import path from 'path';
import MagicString from 'magic-string';
import { packagesPath, PREFIX_PACKAGE_NAME } from './paths';
import { hasCSSorSCSSFiles, replaceAll } from './utils';
import type { Plugin as RollupPlugin } from 'rollup';
import type { Plugin } from 'vite';
// function extractAllModuleNames(inputString: string): string[] {
//   // 正则表达式解释:
//   // @e-plus-ui\/ - 匹配 @e-plus-ui/
//   // ([^;\s/]+) - 捕获一个或多个非分号、非空白字符和非斜杠字符 (即模块名)
//   // (?:[;\s]|$) - 非捕获组，匹配分号、空白字符或字符串结尾
//   const regex = /@e-plus-ui\/([^;\s/]+)(?:[;\s]|$)/g;
//   let matches: any;
//   const moduleNames: string[] = [];
//
//   // 使用 exec 方法进行全局匹配
//   while ((matches = regex.exec(inputString)) !== null) {
//     // matches[1] 是捕获组中的内容，即模块名
//     moduleNames.push(matches[1]);
//   }
//
//   return moduleNames;
// }
// export const replaceExport = (): Plugin => {
//   return {
//     name: 'vite-plugin-replace',
//     enforce: 'pre',
//     generateBundle(_outputOptions, bundle) {
//       // console.log(bundle)
//       const keys = Object.keys(bundle);
//       keys.forEach(key => {
//         const singleBundle = bundle[key] as any;
//
//         const { type, fileName = '' } = singleBundle;
//         if (type === 'chunk' && /\.(?:ts|js|vue|tsx|jsx)$/.test(fileName)) {
//           const normalizedPackagesPath = path.normalize(packagesPath).replace(/\\/g, '/');
//           const normalizedTargetFilePath = path
//             .normalize(path.dirname(path.resolve(packagesPath, fileName)))
//             .replace(/\\/g, '/');
//           const relative = path
//             .relative(normalizedTargetFilePath, normalizedPackagesPath)
//             .replace(/\\/g, '/');
//           singleBundle.code = singleBundle.code.replaceAll(
//             `@e-plus-ui`,
//             relative === '' ? '.' : relative
//           );
//         }
//       });
//     }
//   };
// };

// rollup插件
export const rollupReplaceExport = (): RollupPlugin => {
  return {
    name: 'rollup-plugin-replace',
    renderChunk(_code, chunk) {
      const { fileName, type } = chunk;
      if (type === 'chunk' && /\.(?:ts|js|vue|tsx|jsx|mjs)$/.test(fileName)) {
        const normalizedPackagesPath = path.normalize(packagesPath).replace(/\\/g, '/');
        const normalizedTargetFilePath = path
          .normalize(path.dirname(path.resolve(packagesPath, fileName)))
          .replace(/\\/g, '/');
        const relative = path
          .relative(normalizedTargetFilePath, normalizedPackagesPath)
          .replace(/\\/g, '/');
        const code = _code
          .replaceAll('@e-plus-ui/icons', '@copy-plus-ui/icons')
          .replaceAll(PREFIX_PACKAGE_NAME, relative === '' ? '.' : relative)
          .replaceAll('@copy-plus-ui/icons', '@e-plus-ui/icons');
        const magicString = new MagicString(code);
        return {
          code,
          map: magicString.generateMap({ hires: true })
        };
      }
    }
  };
};
export const autoImportCss = (): Plugin => {
  return {
    name: 'vite-auto-import-css',
    apply: 'build',
    enforce: 'post',
    async renderChunk(code, chunk) {
      // 判断是不是组件入口js
      if (
        chunk.isEntry &&
        chunk.type === 'chunk' &&
        /^[A-Z].*\.js$/.test(path.basename(chunk.fileName)) &&
        (chunk.fileName.startsWith('pure/components/') ||
          chunk.fileName.startsWith('element/components/')) &&
        chunk.fileName.split('/').length > 4
      ) {
        const dirname = path.dirname(chunk.fileName);
        try {
          const isHasCss = await hasCSSorSCSSFiles(path.join(packagesPath, dirname));
          if (isHasCss) {
            return `import './index.css';\n${code}`;
          }
        } catch {}
        // 截取出组件名称
        // const str = chunk.fileName.split('/')[0];
      }
    }
  };
};

export function viteAlias(): Plugin {
  return {
    name: 'vite-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(PREFIX_PACKAGE_NAME)) return;
      return {
        id: replaceAll(id, PREFIX_PACKAGE_NAME, packagesPath),
        external: 'absolute'
      };
    }
  };
}
