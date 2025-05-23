import { readFileSync } from 'fs';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import fs from 'fs-extra';
import { buildEnterPackage, projectRoot, rootPackage } from './paths';
import type { OutputOptions, RollupBuild } from 'rollup';
export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules'];
  return files.filter(path => {
    const position = path.startsWith(projectRoot) ? projectRoot.length : 0;
    return !excludes.some(exclude => path.includes(exclude, position));
  });
};

export const getNamePath = (names: string[]) => {
  const pathObj: Record<string, string> = {};
  names.forEach(name => {
    const _path = name.split('/packages/')[1].replace('/index.ts', '');
    pathObj[_path] = name;
  });
  return pathObj;
};
export const getPackageManifest = (pkgPath: string) => {
  return JSON.parse(readFileSync(pkgPath, 'utf-8'));
};

export const getPackageDependencies = (pkgPath: string) => {
  const manifest = getPackageManifest(pkgPath);
  const { dependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies)
  };
};
export const generateExternal = (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(buildEnterPackage);
  return (id: string) => {
    const packages: string[] = [...peerDependencies];
    if (!options.full) {
      packages.push('@vue', ...dependencies);
    }
    [...new Set(packages)].some(pkg => {
      return id === pkg || id.startsWith(`${pkg}/`);
    });
    return [...new Set(packages)].some(pkg => id === pkg || id.startsWith(`${pkg}/`));
  };
};

export const replaceAll = (
  str: string,
  searchValue: string | RegExp,
  replaceValue: string
): string => {
  // 如果searchValue是字符串，我们需要构建一个全局的正则表达式
  let regex: RegExp;
  if (typeof searchValue === 'string') {
    // 转义特殊字符，防止它们在正则表达式中被解析为元字符
    const escapedSearchValue = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    regex = new RegExp(escapedSearchValue, 'g');
  } else {
    regex = searchValue;
  }

  return str.replace(regex, replaceValue);
};
export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map(option => bundle.write(option)));
}

export const getVersion = async () => {
  const { version } = await fs.readJSON(rootPackage);
  return version;
};

export async function hasCSSorSCSSFiles(dirPath: string, plugins = false) {
  try {
    const files = await readdir(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = await stat(filePath);

      // 如果是文件并且是以 .css 或 .scss 结尾，则返回 true
      if (stats.isFile() && /\.(css|scss)$/.test(file)) {
        return true;
      } else if (stats.isDirectory() && !plugins) {
        return hasCSSorSCSSFiles(file);
      } else if ((stats.isDirectory() && file.endsWith('styles')) || file.endsWith('style')) {
        return hasCSSorSCSSFiles(file);
      }
    }
  } catch {
    return false;
  }

  // 如果没有找到符合条件的文件，则返回 false
  return false;
}
