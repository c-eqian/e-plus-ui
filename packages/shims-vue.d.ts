declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
  interface CSSProperties {
    // declare individual properties for maximum type safety
    // or provide a simple index signature:
    [k: string]: string
    // limited to custom properties:
    [k: `--${string}`]: string
  }
}
declare module "*.md" {
  import { DefineComponent } from "vue";
  const comp: DefineComponent;
  export default comp;
}

declare module "prismjs";
declare module "prismjs/components/index";
declare module "escape-html";

interface ImportMeta {
  env: {
    MODE: string;
    BASE_URL: string;
    PROD: boolean;
    DEV: boolean;
    SSR: boolean;
  };
}
