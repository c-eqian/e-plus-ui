import { usePick } from '@eqian/utils-vue';
import { computed } from 'vue';
import type { DialogPropsWithEmits } from '../type.ts';

/**
 * 过滤`el-dialog`参数
 * @param props
 * @param keys
 */
export const useDialogProps = (
  props: Partial<DialogPropsWithEmits>,
  keys: (keyof DialogPropsWithEmits)[]
) => {
  return computed(() => {
    return usePick(props, keys);
  });
};
