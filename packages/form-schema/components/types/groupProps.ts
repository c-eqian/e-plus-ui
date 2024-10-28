import { PropType } from 'vue';
import type { IGroupOptions } from '../../types/options';

export const GroupProps = {
  options: {
    type: Array as PropType<IGroupOptions[]>,
    default: () => [],
  },
  componentKey: {
    type: String as PropType<string>,
    default: '',
  },
};
