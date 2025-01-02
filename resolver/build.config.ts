import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['resolver.ts'],
  clean: true,
  declaration: false,
  externals: ['unplugin-vue-components'],
  rollup: {
    inlineDependencies: true,
    esbuild: {
      minify: false
    }
  }
});
