import {
  kebabCase,
  type ComponentInfo,
  type ComponentResolver,
  type SideEffectsInfo
} from 'unplugin-vue-components';
export type EPlusUIOptions = {
  importStyle?: boolean | 'css';
};
function getSideEffects(partialName: string, options: EPlusUIOptions): SideEffectsInfo {
  const { importStyle = true } = options;
  if (!importStyle) return;
  const stylesFolder = 'e-plus-ui/styles';
  return `${stylesFolder}/${partialName}/${partialName}.css`;
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
export function EPlusUIReSolver(options: EPlusUIOptions = {} as EPlusUIOptions): ComponentResolver {
  return {
    type: 'component',
    resolve: name => {
      return resolverComponents(name, options);
    }
  };
}
