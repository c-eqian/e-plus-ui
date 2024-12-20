import type { InjectionKey } from 'vue';

export const __COMMENT_FIELD_CONFIG_KEY__ = Symbol('COMMENT-FIELD-CONFIG') as InjectionKey<any>;
export const __COMMENT_CLICK_KEY__ = Symbol('COMMENT_CLICK_KEY') as InjectionKey<any>;

/**
 * 等级映射
 */
export const LEVEL_MAP: any = {
  1: {
    type: 'Level1',
    color: '#c1bfc1'
  },
  2: {
    type: 'Level2',
    color: '#ffd66c'
  },
  3: {
    type: 'Level3',
    color: '#ff6f15'
  },
  4: {
    type: 'Level4',
    color: '#c268ff'
  },
  5: {
    type: 'Level5',
    color: '#ff2423'
  },
  6: {
    type: 'Level6',
    color: '#95d475'
  }
};
