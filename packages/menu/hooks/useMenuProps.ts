import { useMerge, useOmit } from '@eqian/utils-vue';
import { computed } from 'vue';

import { IMenuProps, MenuItemProps } from '../type';
export const useFilterMenuProps = (props: IMenuProps) => {
  return computed(() => {
    return useOmit(props, ['items', 'level', 'defaultActive']);
  });
};

export const useFilterMenuItemProps = (props: MenuItemProps) => {
  return computed(() => {
    return useOmit(props, [
      'visible',
      'children',
      'subMenu',
      'group',
      'title',
      'icon',
      'index',
    ]);
  });
};
export const useFilterSubMenuProps = (props: MenuItemProps) => {
  return computed(() => {
    return useMerge(
      useOmit(props, [
        'visible',
        'children',
        'group',
        'icon',
        'title',
        'index',
      ]),
      props.subMenu ?? {}
    );
  });
};
