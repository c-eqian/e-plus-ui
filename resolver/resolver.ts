import { HAS_STYLES } from './constants';
import type { ComponentInfo, ComponentResolver, SideEffectsInfo } from './type';
export type EPlusUIOptions = {
  importStyle?: boolean | 'css';
  importBaseStyles?: boolean;
};
function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}
function getSideEffects(partialName: string, options: EPlusUIOptions): SideEffectsInfo {
  const { importStyle = true, importBaseStyles = true } = options;
  if (!importStyle) return;
  // 检测是否具有css文件的路径
  if (!HAS_STYLES.includes(partialName)) return;
  const stylesFolder = 'e-plus-ui/styles';
  return importBaseStyles
    ? [`${stylesFolder}/${partialName}/${partialName}.css`, `${stylesFolder}/base.css`]
    : `${stylesFolder}/${partialName}/${partialName}.css`;
}
function resolverComponents(name: string, options: EPlusUIOptions): ComponentInfo | undefined {
  if (!name.match(/^Ep[A-Z]/)) return undefined;
  if (name.match(/^EpIcon.+/)) {
    return {
      name: name.replace(/^EpIcon/, ''),
      from: '@e-plus-ui/icons'
    };
  }
  const partialName = kebabCase(name.slice(2)); // EpCard -> card
  return {
    name,
    from: `e-plus-ui`,
    sideEffects: getSideEffects(partialName, options)
  };
}
export function EPlusUIResolver(options: EPlusUIOptions = {} as EPlusUIOptions): ComponentResolver {
  return {
    type: 'component',
    resolve: name => {
      return resolverComponents(name, options);
    }
  };
}
