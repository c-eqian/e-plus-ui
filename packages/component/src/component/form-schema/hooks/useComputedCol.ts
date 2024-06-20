import type { FormItemsSchema } from '../type';

export const useComputedCol = (props: FormItemsSchema) => {
  const { col } = props;
  return col;
};
