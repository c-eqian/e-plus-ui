import type { FormContext } from '../type';
export declare function useProps<T = any>(props: T): import("vue").ComputedRef<T>;
export declare function useContextProps(): import("vue").ComputedRef<FormContext>;
