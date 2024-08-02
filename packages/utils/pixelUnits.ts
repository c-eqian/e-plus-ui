import { isNumeric, isString } from '@eqian/utils-vue';

export const pixelUnits = (value: number | string) => {
  if (isString(value)) {
    if (value.includes('%') || value.includes('px')) return value;
  }
  return isNumeric(value) ? `${+value}px` : value;
};
