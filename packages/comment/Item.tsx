import {
  computed,
  ComputedRef,
  defineComponent,
  h,
  inject,
  type PropType,
  type SlotsType,
} from 'vue';
import CommentLayout from '../comment-layout';
import Image from '../image/index';
import type { CommentDataRow, ICommentConfig } from './API';
import CustomComponent from './Component.vue';
import {
  deepObjectValue,
  isBoolean,
  isEmpty,
  isFunction,
  useBeforeDate,
} from 'co-utils-vue';
import { __COMMENT_FIELD_CONFIG_KEY__, LEVEL_MAP } from './constants';
import { defaultFields } from './commentProps';
export type ItemSlots = {
  avatar: any;
  right: any;
  left: any;
  level: any;
  content: any;
  default: any;
};

export default defineComponent({
  name: 'Item',
  props: {
    data: {
      type: Object as PropType<CommentDataRow>,
      default: () => ({}),
    },
    isSubReply: {
      type: Boolean,
      default: false,
    },
    reply: {
      type: Object as PropType<CommentDataRow>,
      default: () => ({}),
    },
  },
  slots: Object as SlotsType<ItemSlots>,
  setup(props, { slots }) {
    const computedData = computed(() => props.data);
    const computedReply = computed(() => props.reply);
    const config = inject(
      __COMMENT_FIELD_CONFIG_KEY__,
      defaultFields
    ) as ComputedRef<ICommentConfig>;
    /**
     * 获取值
     * @param key
     * @param level
     * @param configValue
     */
    const getValueByKey = (
      key: keyof ICommentConfig,
      level: 1 | 2 | boolean = 1,
      configValue?: boolean
    ) => {
      if (!key && !config.value?.[key as unknown as any]) return '';
      if (isBoolean(level) || isBoolean(configValue)) {
        return config.value[key];
      }
      return deepObjectValue(
        level == 1 ? computedData.value : computedReply.value,
        config.value?.[key as unknown as any]
      );
    };
    return {
      computedData,
      computedReply,
      getValueByKey,
    };
  },
  render() {
    const { getValueByKey } = this;
    const getSlotsByName = (name: keyof ItemSlots) => {
      if (this.$slots[name]) {
        return this.$slots[name]();
      }
      return null;
    };
    /**
     * 渲染头像
     */
    const renderAvatar = () => {
      const getImageStyle = () => {
        const size = this.$props.isSubReply ? 24 : 36;
        return {
          width: size,
          height: size,
          round: true,
        };
      };
      const slotsVNode = getSlotsByName('avatar');
      if (slotsVNode) {
        return slotsVNode;
      }
      const _VNode = getValueByKey('avatar');
      return _VNode ? <Image url={_VNode} {...getImageStyle()} /> : undefined;
    };
    /**
     * 地址渲染
     */
    const renderAddress = (_level = 1) => {
      const isShow = getValueByKey('showIpAddress', true);
      if (isBoolean(isShow)) {
        const address = getValueByKey('ipAddress', _level as any);

        return address ? (
          <span class="cz-inline-block cz-px-2 cz-text-[10px]">{`${address}`}</span>
        ) : undefined;
      }
      return isFunction(isShow) ? isShow() : undefined;
    };
    /**
     * 渲染右边
     */
    const renderRight = () => {
      const slotsVNode = getSlotsByName('right');
      if (slotsVNode) {
        return slotsVNode;
      }
      const _VNode = getValueByKey('createDate');
      return _VNode ? <time>{useBeforeDate(_VNode)}</time> : undefined;
    };
    const renderLevel = (level?: any) => {
      const slotsVNode = getSlotsByName('level');
      if (slotsVNode) {
        return slotsVNode;
      }
      const _VNode = getValueByKey('showLevel', true);
      if (isFunction(_VNode)) return _VNode();
      if (_VNode) {
        const _level = getValueByKey('level', level);
        const levelData = LEVEL_MAP[_level] ?? LEVEL_MAP['6'];
        console.log(levelData);
        return (
          <ep-icon width="20" height="20" color={levelData.color}>
            <CustomComponent is={levelData.type}></CustomComponent>
          </ep-icon>
        );
      }
      return undefined;
    };
    // 回复
    const renderReply = () => {
      const { computedReply, computedData } = this;
      if (computedReply && !isEmpty(computedReply)) {
        return (
          <>
            <strong class="cz-px-1">回复</strong>
            {getValueByKey('username', 2)}
            {renderLevel(2)}
            {renderAddress(2)}
          </>
        );
      }
      return null;
    };
    /**
     * 渲染左边
     */
    const renderLeft = () => {
      const slotsVNode = getSlotsByName('left');
      if (slotsVNode) {
        return slotsVNode;
      }
      return (
        <div class="cz-flex cz-items-center">
          <div class="cz-relative cz-w-fit">
            <span class="cz-pr-1">{getValueByKey('username')}</span>
          </div>
          {renderLevel(1)}
          {renderAddress()}
          {renderReply()}
        </div>
      );
    };
    /**
     * 回复内容引用
     */
    const renderContentReply = () => {
      const { computedReply } = this;
      if (computedReply && !isEmpty(computedReply)) {
        return (
          <div class="cz-border cz-my-1 cz-text-[12px] cz-text-gray-600">
            <div class="cz-p-2">“{getValueByKey('content', 2)}”</div>
          </div>
        );
      }
      return null;
    };
    /**
     * 内容渲染
     */
    const renderContent = () => {
      const slotsVNode = getSlotsByName('content');
      if (slotsVNode) {
        return slotsVNode;
      }
      const _VNode = getValueByKey('content');
      return _VNode ? (
        <div>
          {_VNode}
          {renderContentReply()}
        </div>
      ) : null;
    };
    const getSlots = () => {
      const _slots = {
        avatar: () => renderAvatar(),
        right: () => renderRight(),
        left: () => renderLeft(),
        content: () => renderContent(),
      };
      const VNode = getSlotsByName('default');
      if (VNode) {
        return {
          ..._slots,
          default: () => getSlotsByName('default'),
        };
      }
      return _slots;
    };
    const renderItem = () => {
      return <CommentLayout v-slots={getSlots()}></CommentLayout>;
    };
    return renderItem();
  },
});
