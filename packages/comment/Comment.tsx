import { computed, defineComponent, h, type PropType, provide } from 'vue';
import CommentItem from './Item';
import type { CommentDataRow, ICommentData, ICommentConfig } from './API';
import { isEmpty, deepObjectValue, useMerge, isFunction } from 'co-utils-vue';
import { defaultFields } from './commentProps';
import {
  __COMMENT_CLICK_KEY__,
  __COMMENT_FIELD_CONFIG_KEY__,
} from './constants';
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
  emits: ['reply', 'like'],
  setup: (props, { emit }) => {
    const computedData = computed(() => props.data);
    const computedConfig = computed(() => {
      return useMerge({}, defaultFields, props.config) as ICommentConfig;
    });
    provide(__COMMENT_FIELD_CONFIG_KEY__, computedConfig);
    provide(__COMMENT_CLICK_KEY__, {
      reply: (...args: any[]) => {
        emit('reply', ...args);
      },
      like: (...args: any[]) => emit('like', ...args),
    });
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
      username,
      content,
      children,
      reply,
    } = this.computedConfig;
    const hasSub = (item: CommentDataRow) => {
      const _subComment = deepObjectValue(item, subComment ?? '');
      return _subComment && !isEmpty(_subComment) && !isEmpty(_subComment.list);
    };
    /**
     * 评论组件渲染
     * @param item
     * @param isSubReply
     * @param level1 // 一级评论的数据，如果item已经是一级，则为{}
     * @param reply
     * @param slots
     */
    const renderCommentItem = (
      item: CommentDataRow,
      isSubReply = false,
      level1 = {},
      reply: CommentDataRow = {},
      slots?: any
    ) => {
      return (
        <CommentItem
          data={item}
          level1={level1}
          isSubReply={isSubReply}
          reply={reply}
          key={deepObjectValue(item, commentId ?? '')}
          v-slots={isFunction(slots) ? slots() : null}
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
     */
    const deepMoreLevel2 = (
      item: CommentDataRow,
      _children: CommentDataRow[],
      level1: CommentDataRow,
      nodes: any[] = [],
      parentItem?: CommentDataRow
    ) => {
      if (parentItem !== undefined) {
        console.log({
          item,
          parentItem,
        });
        nodes.push(renderCommentItem(item, true, level1, parentItem));
      } else {
        nodes.push(renderCommentItem(item, true, level1));
      }
      _children?.forEach((sub: CommentDataRow) => {
        const __children = deepObjectValue(sub, children ?? '');
        if (__children && !isEmpty(__children)) {
          deepMoreLevel2(sub, __children, level1, nodes, item);
        } else {
          nodes.push(renderCommentItem(sub, true, level1, item));
        }
      });
    };
    /**
     * 二级回复评论渲染
     * @param item
     * @param level1
     */
    const renderSubComment = (item: CommentDataRow, level1: CommentDataRow) => {
      const nodes: any[] = [];
      if (dataLevel === 2) {
        const _reply = item[reply!] ?? {};
        if (isEmpty(_reply)) {
          nodes.push(renderCommentItem(item, true, level1));
        } else {
          nodes.push(renderCommentItem(item, true, level1, _reply));
        }
      } else if (dataLevel > 2) {
        const _children = deepObjectValue(item, children ?? '');
        if (!_children || isEmpty(_children)) {
          return renderCommentItem(item, true, level1);
        }
        deepMoreLevel2(item, _children, level1, nodes);
      }
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
            default: () =>
              _subComment?.list.map((sub: CommentDataRow) => {
                return renderSubComment(sub, item);
              }),
          }
        : undefined;
    };
    // 评论渲染
    const renderComment = () => {
      return this.computedData.list.map((item) => {
        return renderCommentItem(item, false, {}, {}, () => renderSlot(item));
      });
    };
    return renderComment();
  },
});
