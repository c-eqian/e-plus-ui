import { computed, defineComponent, h, type PropType } from 'vue';
import CommentItem from '../comment-item/CommentItem.vue';
import type { CommentDataRow, ICommentData } from './API';
import { isEmpty } from 'co-utils-vue';
export default defineComponent({
  name: 'EpComment',
  props: {
    data: {
      type: Object as PropType<ICommentData>,
      default: () => ({} as ICommentData),
    },
  },
  setup: (props) => {
    const computedData = computed(() => props.data);
    return {
      computedData,
    };
  },
  render() {
    const hasSub = (item: CommentDataRow) => {
      return (
        item.subComment &&
        !isEmpty(item.subComment) &&
        !isEmpty(item.subComment.list)
      );
    };
    const renderReplySlot = (item: CommentDataRow, sub: CommentDataRow) => {
      return {
        reply: () => (
          <div class="cz-flex">
            <div class="cz-relative cz-w-fit">
              <span>{sub.userInfo?.username}</span>
            </div>
            <span class="cz-px-1">
              <strong>回复</strong>
              {item.userInfo?.username}
            </span>
          </div>
        ),
        'sub-content': () => (
          <div class="cz-border cz-my-1 cz-text-[12px] cz-text-gray-600">
            <div class="cz-p-2">“{item?.content}”</div>
          </div>
        ),
      };
    };
    const renderSubComment = (item: CommentDataRow) => {
      if (!item.children || isEmpty(item.children)) {
        return <CommentItem data={item} isSubReply={true}></CommentItem>;
      }
      return item.children?.map((sub) => {
        return (
          <CommentItem
            data={sub}
            isSubReply={true}
            key={sub.commentId}
            v-slots={renderReplySlot(item, sub)}
          ></CommentItem>
        );
      });
    };
    const renderComment = () => {
      return this.computedData.list.map((item) => {
        return h(
          CommentItem,
          {
            data: item,
            key: item.commentId,
          },
          hasSub(item)
            ? {
                'sub-comment': () =>
                  item.subComment?.list.map((sub) => {
                    return renderSubComment(sub);
                  }),
              }
            : undefined
        );
      });
    };
    return renderComment();
  },
});
