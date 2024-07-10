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
    const renderComment = () => {
      return this.computedData.list.map((item) => {
        return h(
          CommentItem,
          {
            data: item,
          },
          {
            'sub-comment': () =>
              hasSub(item)
                ? item.subComment?.list.map((sub) => {
                    return (
                      <CommentItem
                        key={sub.commentId}
                        data={sub}
                        isSubReply={true}
                      />
                    );
                  })
                : undefined,
          }
        );
      });
    };
    return renderComment();
  },
});
