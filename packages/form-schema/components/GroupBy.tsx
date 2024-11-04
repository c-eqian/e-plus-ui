import { computed, defineComponent, h, watchEffect } from 'vue';
import {
  ElOptionGroup,
  ElOption,
  ElCheckbox,
  ElRadio,
  ElRadioButton,
} from 'element-plus';
import { GroupProps } from './types/groupProps';
import {
  RADIO_GROUP_KEY,
  CHECKBOX_GROUP_KEY,
  SELECT_GROUP_KEY,
  RADIO_BUTTON_GROUP_KEY,
} from '../constants';
import { isEmpty, useOmit } from '@eqian/utils-vue';
import { IGroupOptions } from '../types/options';
export default defineComponent({
  name: 'GroupComponent',
  props: GroupProps,
  setup(props, { emit }) {
    const options = computed(() => props.options);
    const comKey = computed(() => props.componentKey);
    const baseRender = (com: any, options: IGroupOptions[]) => {
      return options.map((child) =>
        h(com, {
          key: child.label,
          ...useOmit(child, ['children']),
        })
      );
    };
    const groupMap = {
      [RADIO_GROUP_KEY]: () => baseRender(ElRadio, options.value),
      [RADIO_BUTTON_GROUP_KEY]: () => baseRender(ElRadioButton, options.value),
      [CHECKBOX_GROUP_KEY]: () => baseRender(ElCheckbox, options.value),
      select: () => baseRender(ElOption, options.value),
      [SELECT_GROUP_KEY]: () => {
        const hasChildren = options.value.some(
          (item) => !isEmpty(item.children)
        );
        if (!hasChildren) {
          return baseRender(ElOption, options.value);
        }
        return options.value.map((item) => {
          return h(
            ElOptionGroup,
            {
              key: item.label,
              ...useOmit(item, ['children']),
            },
            {
              default: () => {
                if (!isEmpty(item.children)) {
                  const { children = [] } = item;
                  return baseRender(ElOption, children);
                }
              },
            }
          );
        });
      },
    };
    return groupMap[comKey.value];
  },
});
