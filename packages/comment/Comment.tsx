import { computed, defineComponent, h, type PropType, provide } from 'vue';
import CommentItem from '../comment-item/CommentItem.vue';
import type { CommentDataRow, ICommentData, ICommentConfig } from './API';
import { isEmpty, deepObjectValue, useMerge, isFunction } from 'co-utils-vue';
import { defaultFields } from './commentProps';
import { __COMMENT_CLICK_KEY__ } from './constants';
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
  emits: ['reply'],
  setup: (props, { emit }) => {
    const computedData = computed(() => props.data);
    const computedConfig = computed(() => {
      return useMerge({}, defaultFields, props.config) as ICommentConfig;
    });
    provide(__COMMENT_CLICK_KEY__, {
      reply: (...args: any[]) => {
        emit('reply', ...args);
      },
    });
    return {
      computedData,
      computedConfig,
    };
  },
  render() {
    const { subComment, commentId, username, content, children } =
      this.computedConfig;
    const hasSub = (item: CommentDataRow) => {
      const _subComment = deepObjectValue(item, subComment ?? '');
      return _subComment && !isEmpty(_subComment) && !isEmpty(_subComment.list);
    };
    /**
     * 评论组件渲染
     * @param item
     * @param isSubReply
     * @param level1 // 一级评论的数据，如果item已经是一级，则为{}
     * @param slot
     */
    const renderCommentItem = (
      item: CommentDataRow,
      isSubReply = false,
      level1 = {},
      slot?: () => any
    ) => {
      return (
        <CommentItem
          data={item}
          level1={level1}
          config={this.computedConfig}
          isSubReply={isSubReply}
          key={deepObjectValue(item, commentId ?? '')}
          v-slots={isFunction(slot) ? slot() : null}
        ></CommentItem>
      );
    };
    /**
     * 回复渲染
     * @param item
     * @param sub
     */
    const renderReplySlot = (item: CommentDataRow, sub: CommentDataRow) => {
      return {
        reply: () => (
          <div class="cz-flex">
            <div class="cz-relative cz-w-fit">
              <span>{deepObjectValue(sub, username)}</span>
            </div>
            <strong class="cz-px-1">回复</strong>
            {deepObjectValue(item, username)}
          </div>
        ),
        'reply-content': () => (
          <div class="cz-border cz-my-1 cz-text-[12px] cz-text-gray-600">
            <div class="cz-p-2">“{deepObjectValue(item, content ?? '')}”</div>
          </div>
        ),
      };
    };
    /**
     * 递归处理二级评论及之后的评论
     * @param item
     * @param _children
     * @param level1
     * @param nodes
     * @param parentItem
     */
    const deepMoreLevel2 = (
      item: CommentDataRow,
      _children: CommentDataRow[],
      level1: CommentDataRow,
      nodes: any[] = [],
      parentItem?: CommentDataRow
    ) => {
      if (parentItem !== undefined) {
        nodes.push(
          renderCommentItem(item, true, level1, () =>
            renderReplySlot(parentItem, item)
          )
        );
      } else {
        nodes.push(renderCommentItem(item, true, level1));
      }
      _children?.forEach((sub: CommentDataRow) => {
        const __children = deepObjectValue(sub, children ?? '');
        if (__children && !isEmpty(__children)) {
          deepMoreLevel2(sub, __children, level1, nodes, item);
        } else {
          nodes.push(
            renderCommentItem(sub, true, level1, () =>
              renderReplySlot(item, sub)
            )
          );
        }
      });
    };
    /**
     * 二级回复评论渲染
     * @param item
     * @param level1
     */
    const renderSubComment = (item: CommentDataRow, level1: CommentDataRow) => {
      const _children = deepObjectValue(item, children ?? '');
      if (!_children || isEmpty(_children)) {
        return renderCommentItem(item, false, level1);
      }
      const nodes: any[] = [];
      deepMoreLevel2(item, _children, level1, nodes);
      return nodes;
    };
    /**
     * 二级评论渲染
     * @param item
     */
    const renderSlot = (item: CommentDataRow) => {
      const _subComment = deepObjectValue(item, subComment ?? '');
      return hasSub(item)
        ? {
            'sub-comment': () =>
              _subComment?.list.map((sub: CommentDataRow) => {
                return renderSubComment(sub, item);
              }),
          }
        : undefined;
    };
    // 评论渲染
    const renderComment = () => {
      return this.computedData.list.map((item) => {
        return renderCommentItem(item, true, {}, () => renderSlot(item));
      });
    };
    return renderComment();
  },
});
