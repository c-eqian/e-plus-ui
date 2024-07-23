import {
  computed,
  ComputedRef,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  nextTick,
  onMounted,
  type PropType,
  ref,
  type SlotsType,
} from 'vue';
import CommentLayout from '../../comment-layout';
import Image from '../../image/index';
import type { CommentDataRow, ICommentConfig, ItemSlots } from '../API';
import CustomComponent from './Component.vue';
import {
  deepObjectValue,
  isBoolean,
  isEmpty,
  isFunction,
  useBeforeDate,
} from 'co-utils-vue';
import {
  __COMMENT_CLICK_KEY__,
  __COMMENT_FIELD_CONFIG_KEY__,
  LEVEL_MAP,
} from '../constants';
import { defaultFields } from '../commentProps';
import Action from './Action.vue';
import Editor from '../../editor';
import { onClickOutside } from '@vueuse/core';
import TextFold from '../../text-fold';

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
    level1: {
      type: Object as PropType<CommentDataRow>,
      default: () => ({}),
    },
  },
  slots: Object as SlotsType<ItemSlots>,
  setup(props) {
    const computedData = computed(() => props.data);
    const computedReply = computed(() => props.reply);
    const computedIsSubReply = computed(() => props.isSubReply);
    const computedLevel1 = computed(() => props.level1);
    const editorInputRef = ref<InstanceType<typeof Editor> | null>(null);
    const commentRef = ref();
    const actionRef = ref();
    const replyState = ref({
      isCustomEditor: false,
      value: '',
      placeholder: '输入点什么',
      isEditable: false,
    });
    const config = inject(
      __COMMENT_FIELD_CONFIG_KEY__,
      defaultFields
    ) as ComputedRef<ICommentConfig>;
    const clickReplyMapFn = inject(__COMMENT_CLICK_KEY__, {});
    const executeCallback = (
      key: 'reply' | 'like' | 'submit-reply',
      value = '',
      ...args: any[]
    ) => {
      if (key === 'reply' && isFunction(clickReplyMapFn[key])) {
        clickReplyMapFn[key]({
          value,
          item: computedData.value,
          level1: computedLevel1.value,
          ...args,
        });
        return;
      }
      if (key === 'like' && isFunction(clickReplyMapFn[key])) {
        clickReplyMapFn[key]({
          item: computedData.value,
          level1: computedLevel1.value,
          ...args,
        });
      }
      if (key === 'submit-reply' && isFunction(clickReplyMapFn[key])) {
        clickReplyMapFn[key]({
          item: computedData.value,
          level1: computedLevel1.value,
          ...args,
        });
      }
    };
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
    const getSlotsParameter = () => {
      return {
        item: computedData.value,
        isSubReply: computedIsSubReply.value,
        level1: computedLevel1.value,
        reply: computedLevel1.value,
      };
    };
    onClickOutside(commentRef, (event) => {
      replyState.value.isEditable = false;
      actionRef.value?.replyDone(false);
    });
    return {
      computedData,
      computedReply,
      getValueByKey,
      commentRef,
      actionRef,
      replyState,
      computedIsSubReply,
      computedLevel1,
      editorInputRef,
      executeCallback,
      getSlotsParameter,
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
      return isFunction(isShow) ? isShow(this.getSlotsParameter()) : undefined;
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
      if (isFunction(_VNode)) return _VNode(this.getSlotsParameter());
      if (_VNode) {
        const _level = getValueByKey('level', level);
        const levelData = LEVEL_MAP[_level] ?? LEVEL_MAP['6'];
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
      const { computedReply } = this;
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
          <TextFold
            line={getValueByKey('lines', true)}
            is-fold={true}
            position={getValueByKey('foldBtnPosition', true)}
          >
            {_VNode}
          </TextFold>
          {renderContentReply()}
        </div>
      ) : null;
    };
    const handleClickReply = ({ reply }) => {
      this.replyState.isEditable = reply;
      this.executeCallback('submit-reply', '', this.replyState);
      if (this.replyState.isEditable) {
        nextTick(() => {
          this.editorInputRef?.focus();
          this.replyState.placeholder = `回复 @${getValueByKey('username')}`;
        });
      }
    };
    const handleClearValue = (close = false) => {
      this.replyState.value = '';
      if (close) {
        this.replyState.isEditable = false;
      }
    };
    const handleClickSubmit = (value: string) => {
      this.executeCallback('reply', value, handleClearValue);
    };
    /**
     * 操作
     */
    const renderActions = () => {
      const slotsVNode = getSlotsByName('actions');
      if (slotsVNode) {
        this.replyState.isEditable = false;
        this.replyState.isCustomEditor = true;
        return slotsVNode;
      }
      const isActions = getValueByKey('actions', true);
      if (isBoolean(isActions)) {
        return isActions ? (
          <Action
            ref="actionRef"
            onClickLike={(...args: any[]) =>
              this.executeCallback('like', '', ...args)
            }
            onClickReply={handleClickReply}
          ></Action>
        ) : undefined;
      }
      if (isFunction(isActions)) {
        this.replyState.isEditable = false;
        this.replyState.isCustomEditor = true;
        return isActions(this.getSlotsParameter());
      }
      return undefined;
    };
    const renderEditor = () => {
      const slotsVNode = getSlotsByName('editor');
      if (slotsVNode) {
        return slotsVNode;
      }
      if (this.replyState.isEditable) {
        return (
          <Editor
            placeholder={this.replyState.placeholder}
            ref="editorInputRef"
            modelValue={this.replyState.value}
            useEmojis={getValueByKey('useEmojis', true)}
            emojis={getValueByKey('emojis', true)}
            onModelValue={(val: string) => (this.replyState.value = val)}
            onClickSubmit={handleClickSubmit}
          ></Editor>
        );
      }
      return undefined;
    };
    const getSlots = () => {
      const _slots: Record<string, any> = {
        avatar: () => renderAvatar(),
        right: () => renderRight(),
        left: () => renderLeft(),
        content: () => renderContent(),
      };
      const VNode = getSlotsByName('default');
      const _actions = renderActions();
      if (_actions) {
        _slots.actions = () => _actions;
        const _editor = renderEditor();
        if (_editor) {
          _slots['editor-reply'] = () => _editor;
        }
      }
      if (VNode) {
        return {
          ..._slots,
          default: () => getSlotsByName('default'),
        };
      }
      return _slots;
    };
    const renderItem = () => {
      return (
        <CommentLayout ref="commentRef" v-slots={getSlots()}></CommentLayout>
      );
    };
    return renderItem();
  },
});
