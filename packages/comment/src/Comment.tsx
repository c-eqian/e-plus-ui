import {
  computed,
  defineComponent,
  h,
  type PropType,
  provide,
  SlotsType,
} from 'vue';
import CommentItem from './Item';
import {
  CommentDataRow,
  ICommentData,
  ICommentConfig,
  ItemSlots,
  IResolveParams,
} from '../API';
import { isEmpty, deepObjectValue, useMerge, isFunction } from 'co-utils-vue';
import { defaultFields } from '../commentProps';
import { __COMMENT_FIELD_CONFIG_KEY__ } from '../constants';
export default defineComponent({
  name: 'EpComment',
  props: {
    data: {
      type: Object as PropType<ICommentData>,
      default: () => ({} as ICommentData),
    },
    config: {
      type: Object as PropType<ICommentConfig>,
      default: () => ({}),
    },
  },
  emits: ['click-reply', 'click-like', 'confirm-reply'],
  slots: Object as SlotsType<ItemSlots>,
  setup: (props) => {
    const computedData = computed(() => props.data);
    const computedConfig = computed(() => {
      return useMerge({}, defaultFields, props.config) as ICommentConfig;
    });
    provide(__COMMENT_FIELD_CONFIG_KEY__, computedConfig);
    return {
      computedData,
      computedConfig,
    };
  },
  render() {
    const {
      subComment,
      commentId,
      dataLevel = 2,
      children,
      reply,
    } = this.computedConfig;
    const hasSub = (item: CommentDataRow) => {
      const _subComment = deepObjectValue(item, subComment ?? '');
      return _subComment && !isEmpty(_subComment) && !isEmpty(_subComment.list);
    };
    const getItemSlots = (
      _params: Partial<IResolveParams> & { slots?: any }
    ) => {
      const { slots, ...args } = _params;
      const _slots: Record<string, any> = {};
      if (this.$slots.avatar) {
        _slots.avatar = () => this.$slots.avatar(args as IResolveParams);
      }
      if (this.$slots.level) {
        _slots.level = () => this.$slots.level(args as IResolveParams);
      }
      if (this.$slots.content) {
        _slots.content = () => this.$slots.content(args as IResolveParams);
      }
      if (this.$slots.left) {
        _slots.left = () => this.$slots.left(args as IResolveParams);
      }
      if (this.$slots.right) {
        _slots.right = () => this.$slots.right(args as IResolveParams);
      }
      return _slots;
    };
    /**
     * 渲染加载更多
     */
    const renderLoadingMore = () => {
      return <div class="cz-text-xs">加载更多</div>;
    };
    /**
     * 评论组件渲染
     * @param _params
     */
    const renderCommentItem = (
      _params: Partial<IResolveParams> & { slots?: any }
    ) => {
      const {
        item,
        isSubReply = false,
        level1 = {},
        reply,
        slots,
        $index = -1,
        index = -1,
      } = _params;
      const getSlots = () => {
        const _slots = getItemSlots({
          item,
          isSubReply,
          level1,
          reply,
          $index,
          index,
        });
        return {
          ..._slots,
          ...(isFunction(slots) ? slots() : null),
        };
      };
      return (
        <CommentItem
          data={item}
          level1={level1}
          isSubReply={isSubReply}
          reply={reply}
          onClickLike={(args: any) => {
            this.$emit('click-like', {
              ...args,
              item,
              isSubReply,
              level1,
              reply,
              $index,
              index,
            });
          }}
          onClickReply={(args: any) => {
            this.$emit('click-reply', {
              ...args,
              item,
              isSubReply,
              level1,
              reply,
              $index,
              index,
            });
          }}
          onConfirmReply={(args: any) => {
            this.$emit('confirm-reply', {
              ...args,
              item,
              isSubReply,
              level1,
              reply,
              $index,
              index,
            });
          }}
          key={deepObjectValue(item, commentId ?? '')}
          v-slots={getSlots()}
        ></CommentItem>
      );
    };
    /**
     * 递归处理二级评论及之后的评论
     * @param item
     * @param _children
     * @param level1
     * @param nodes
     * @param parentItem
     * @param $index
     * @param index
     */
    const deepMoreLevel2 = (
      item: CommentDataRow,
      _children: CommentDataRow[],
      level1: CommentDataRow,
      nodes: any[] = [],
      parentItem?: CommentDataRow,
      $index = -1,
      index = -1
    ) => {
      if (parentItem !== undefined) {
        nodes.push(
          renderCommentItem({
            item,
            isSubReply: true,
            level1,
            reply: parentItem,
            $index,
            index,
          })
        );
      } else {
        nodes.push(
          renderCommentItem({ item, isSubReply: true, level1, $index, index })
        );
      }
      _children?.forEach((sub: CommentDataRow, _index) => {
        const __children = deepObjectValue(sub, children ?? '');
        if (__children && !isEmpty(__children)) {
          deepMoreLevel2(sub, __children, level1, nodes, item, $index, _index);
        } else {
          nodes.push(
            renderCommentItem({
              item: sub,
              isSubReply: true,
              level1,
              reply: item,
              $index,
              index,
            })
          );
        }
      });
    };
    /**
     * 二级回复评论渲染
     * @param item
     * @param level1
     * @param $index
     * @param index
     */
    const renderSubComment = (
      item: CommentDataRow,
      level1: CommentDataRow,
      $index: number,
      index: number
    ) => {
      const nodes: any[] = [];
      if (dataLevel === 2) {
        const _reply = item[reply!] ?? {};
        if (isEmpty(_reply)) {
          nodes.push(
            renderCommentItem({ item, isSubReply: true, level1, $index, index })
          );
        } else {
          nodes.push(
            renderCommentItem({
              item,
              isSubReply: true,
              level1,
              reply: _reply,
              $index,
              index,
            })
          );
        }
      } else if (dataLevel > 2) {
        const _children = deepObjectValue(item, children ?? '');
        if (!_children || isEmpty(_children)) {
          return renderCommentItem({ item, isSubReply: true, level1, $index });
        }
        deepMoreLevel2(item, _children, level1, nodes, {}, $index);
      }
      return nodes;
    };
    /**
     * 二级评论渲染
     * @param item
     * @param $index
     */
    const renderSlot = (item: CommentDataRow, $index: number) => {
      const _subComment = deepObjectValue(item, subComment ?? '');
      return hasSub(item)
        ? {
            default: () =>
              _subComment?.list.map((sub: CommentDataRow, index: number) => {
                return renderSubComment(sub, item, $index, index);
              }),
          }
        : undefined;
    };
    // 评论渲染
    const renderComment = () => {
      const vNodes = this.computedData.list.map((item, index) => {
        return renderCommentItem({
          item,
          isSubReply: false,
          level1: {},
          reply: {},
          $index: index,
          slots: () => renderSlot(item, index),
        });
      });
      vNodes.push(renderLoadingMore());
      return vNodes;
    };
    return renderComment();
  },
});
