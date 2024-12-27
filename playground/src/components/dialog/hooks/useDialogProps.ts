import { usePick } from '@eqian/utils-vue';
import { computed } from 'vue';
import type { DialogProps } from '../type.ts';

/**
 * 过滤`el-dialog`参数
 * @param props
 * @param keys
 */
export const useDialogProps = (props: DialogProps, keys: (keyof DialogProps)[]) => {
  return computed(() => {
    return usePick(props, keys);
  });
};
