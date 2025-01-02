export type ImportInfo = {
  as?: string;
  name?: string;
  from: string;
};
type Awaitable<T> = T | PromiseLike<T>;
export type ComponentInfo = {
  sideEffects?: SideEffectsInfo;
} & ImportInfo;
export type ComponentResolveResult = Awaitable<string | ComponentInfo | null | undefined | void>;
export type ComponentResolverFunction = (name: string) => ComponentResolveResult;
export type ComponentResolverObject = {
  type: 'component' | 'directive';
  resolve: ComponentResolverFunction;
};
export type SideEffectsInfo = (ImportInfo | string)[] | ImportInfo | string | undefined;
export type ComponentResolver = ComponentResolverFunction | ComponentResolverObject;
