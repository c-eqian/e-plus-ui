import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['resolver.ts'],
  clean: true,
  declaration: 'compatible',
  externals: ['unplugin-vue-components'],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    esbuild: {
      minify: false
    }
  }
});
