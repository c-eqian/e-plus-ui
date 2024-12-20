import { EpImage as Image, EpTextFold as TextFold } from '@e-plus-ui/pure';
import { deepObjectValue, isBoolean, isEmpty, isFunction, useBeforeDate } from '@eqian/utils-vue';
import { onClickOutside } from '@vueuse/core';
import {
  computed,
  defineComponent,
  h,
  inject,
  isVNode,
  nextTick,
  ref,
  type ComputedRef,
  type PropType,
  type SlotsType
} from 'vue';
import CommentLayout from '../../comment-layout/src/CommentLayout.vue';
import Editor from '../../editor/src/Editor.vue';
import Action from './Action.vue';
import ActionsExtra from './ActionsExtra.vue';
import { defaultFields } from './commentProps';
import CustomComponent from './Component.vue';
import { __COMMENT_FIELD_CONFIG_KEY__, LEVEL_MAP } from './constants';
import type { CommentDataRow, ICommentConfig, ItemSlots } from './type';

export default defineComponent({
  name: 'CommentItem',
  props: {
    data: {
      type: Object as PropType<CommentDataRow>,
      default: () => ({})
    },
    isSubReply: {
      type: Boolean,
      default: false
    },
    /**
     * 点击回复之前，如果返回false,则不会进行回复
     */
    beforeReply: {
      type: Function
    },
    reply: {
      type: Object as PropType<CommentDataRow>,
      default: () => ({})
    },
    level1: {
      type: Object as PropType<CommentDataRow>,
      default: () => ({})
    }
  },
  slots: Object as SlotsType<ItemSlots>,
  emits: ['click-reply', 'click-like', 'confirm-reply', 'actions'],
  setup(props) {
    const computedData = computed(() => props.data);
    const computedReply = computed(() => props.reply);
    const computedIsSubReply = computed(() => props.isSubReply);
    const computedLevel1 = computed(() => props.level1);
    const editorInputRef = ref<InstanceType<typeof Editor> | null>(null);
    const commentRef = ref();
    const actionRef = ref();
    const replyState = ref<{
      isCustomEditor: boolean;
      value: string;
      placeholder: string;
      isEditable: boolean;
      replyDone: any;
    }>({
      isCustomEditor: false,
      value: '',
      placeholder: '输入点什么',
      isEditable: false,
      replyDone: undefined
    });
    const config = inject(
      __COMMENT_FIELD_CONFIG_KEY__,
      defaultFields
    ) as ComputedRef<ICommentConfig>;
    /**
     * 获取值
     * @param key
     * @param level
     * @param configValue
     * @param isField
     */
    const getValueByKey = (
      key: string,
      level: 1 | 2 | boolean = 1,
      configValue?: boolean,
      isField = false
    ) => {
      const _key = isField ? `commentFields.${key}` : key;
      if (isBoolean(level) || configValue) {
        return deepObjectValue(config.value, _key);
      }
      const newKey = deepObjectValue(config.value, _key) ?? _key;
      //  如果是函数，比如自定义格式化函数这类，直接返回
      if (isFunction(newKey)) {
        return newKey;
      }
      return deepObjectValue(level === 1 ? computedData.value : computedReply.value, newKey);
    };
    const getSlotsParameter = () => {
      return {
        item: computedData.value,
        isSubReply: computedIsSubReply.value,
        level1: computedLevel1.value,
        reply: computedLevel1.value
      };
    };
    onClickOutside(commentRef, () => {
      if (editorInputRef.value?.isShow) return;
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
      getSlotsParameter
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
     * 将格式化的数据转为真实的DOM
     * @param vnValue
     */
    const transformNode = (vnValue: any) => {
      if (isVNode(vnValue)) return vnValue;
      return <div v-html={vnValue}></div>;
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
          round: true
        };
      };
      const slotsVNode = getSlotsByName('avatar');
      if (slotsVNode) {
        return slotsVNode;
      }
      const _VNode =
        getValueByKey('avatar', 1, false, true) || getValueByKey('defaultAvatar', true);
      return _VNode ? <Image url={_VNode} {...getImageStyle()} /> : undefined;
    };
    /**
     * 地址渲染
     */
    const renderAddress = (_level = 1) => {
      const ipAddress = getValueByKey('showIpAddress', true);
      if (isBoolean(ipAddress)) {
        const address = getValueByKey('ipAddress', _level as any, false, true);
        return address ? (
          <span class="cz-inline-block cz-px-2 cz-text-[10px]">{`${address}`}</span>
        ) : undefined;
      }
      if (isFunction(ipAddress)) {
        const vnValue = ipAddress(this.getSlotsParameter());
        return transformNode(vnValue);
      }
      return undefined;
    };
    /**
     * 渲染右边
     */
    const renderRight = () => {
      const slotsVNode = getSlotsByName('right');
      if (slotsVNode) {
        return slotsVNode;
      }
      const _VNode = getValueByKey('createDate', 1, false, true);
      return _VNode ? <time>{useBeforeDate(_VNode)}</time> : undefined;
    };
    const renderLevel = (level?: any) => {
      const slotsVNode = getSlotsByName('level');
      if (slotsVNode) {
        return slotsVNode;
      }
      const _VNode = getValueByKey('showLevel', true);
      if (isFunction(_VNode)) {
        const vnValue = _VNode(this.getSlotsParameter());
        return transformNode(vnValue);
      }
      if (_VNode) {
        const _level = getValueByKey('level', level, false, true);
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
            {getValueByKey('username', 2, false, true)}
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
            <span class="cz-pr-1">{getValueByKey('username', 1, false, true)}</span>
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
        let _VNode = getValueByKey('content', 2, false, true);
        _VNode = `“${_VNode}”`;
        if (isFunction(_VNode)) {
          // 获取格式化内容的参数
          _VNode = _VNode(this.getSlotsParameter());
        }
        return (
          <div class="cz-border cz-my-1 cz-text-[12px] cz-text-gray-600">
            <div class="cz-p-2" v-html={_VNode}></div>
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
      let _VNode = getValueByKey('content', 1, false, true);
      if (isFunction(_VNode)) {
        // 获取格式化内容的参数
        _VNode = _VNode(this.getSlotsParameter());
        if (!isVNode(_VNode)) {
          _VNode = <div v-html={_VNode}></div>;
        }
      }
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
    /**
     * 点击回复
     * @param reply
     * @param replyDone
     */
    const handleClickReply = ({ reply }: any) => {
      const { beforeReply } = this.$props;
      if (isFunction(beforeReply)) {
        const flag = beforeReply(reply);
        if (isBoolean(flag) && !flag) return;
      }
      this.actionRef?.updateReplyState(!reply);
      this.replyState.isEditable = !reply;
      if (this.replyState.isEditable) {
        nextTick(() => {
          this.editorInputRef?.focus();
          this.replyState.placeholder = `回复 @${getValueByKey('username', 1, false, true)}`;
        });
      }
    };
    const handleClearValue = (close = false) => {
      this.replyState.value = '';
      if (close) {
        this.replyState.isEditable = false;
        this.actionRef?.updateReplyState(close);
      }
    };
    /**
     * 提交回复
     * @param value
     */
    const handleClickSubmit = (value: string) => {
      this.$emit('confirm-reply', {
        value,
        clear: handleClearValue
      });
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
      const actionsExtra = () => {
        const actionsSlotsVNode = getSlotsByName('actionsExtra');
        const _actionsExtra = getValueByKey('actionsExtra', true);
        if (isFunction(_actionsExtra)) {
          return _actionsExtra();
        }
        if (_actionsExtra && isBoolean(_actionsExtra)) {
          return (
            <ActionsExtra
              onComplaint={(...args: any[]) => this.$emit('actions', ...args)}
              onDelete={(...args: any[]) => this.$emit('actions', ...args)}
              v-slots={{
                actions: actionsSlotsVNode ? () => actionsSlotsVNode : null
              }}
            ></ActionsExtra>
          );
        }
        return null;
      };
      const isActions = getValueByKey('actions', true);
      if (isBoolean(isActions)) {
        return isActions
          ? h(
              Action,
              {
                ref: $el => (this.actionRef = $el),
                likeCount: this.computedData[getValueByKey('likeCount', true, true, true)],
                modelValue: this.computedData[getValueByKey('like', true, true, true)],
                'onUpdate:modelValue': (value: any) =>
                  (this.computedData[getValueByKey('like', true, true, true)] = value),
                onClickLike: (args: any) => this.$emit('click-like', args),
                onClickReply: handleClickReply
              },
              {
                actions: () => actionsExtra()
              }
            )
          : undefined;
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
        return h(Editor, {
          placeholder: this.replyState.placeholder,
          ref: ($ref: any) => (this.editorInputRef = $ref),
          modelValue: this.replyState.value,
          useEmojis: getValueByKey('useEmojis', true),
          emojis: getValueByKey('emojis', true),
          'onUpdate:modelValue': (val: string) => (this.replyState.value = val),
          'onClick-submit': handleClickSubmit
        });
      }
      return undefined;
    };
    const getSlots = () => {
      const _slots: Record<string, any> = {
        avatar: () => renderAvatar(),
        right: () => renderRight(),
        left: () => renderLeft(),
        content: () => renderContent()
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
          default: () => getSlotsByName('default')
        };
      }
      return _slots;
    };
    const renderItem = () => {
      return (
        <CommentLayout
          ref="commentRef"
          v-slots={getSlots()}
          subStyle={getValueByKey('subStyle', true)}
        ></CommentLayout>
      );
    };
    return renderItem();
  }
});
