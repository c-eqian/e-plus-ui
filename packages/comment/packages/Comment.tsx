import { defineComponent, h } from 'vue';
import EpImageHover from '../../image/index.vue';
export default defineComponent({
  name: 'EpComment',
  setup: (props, { slots }) => {
    return {};
  },
  render() {
    const url = 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg';

    const renderImage = (url: string) => {
      return h(EpImageHover, {
        url,
      });
    };
    return (
      <>
        <div class="cz-flex cz-h-full cz-w-full">{renderImage(url)}</div>
      </>
    );
  },
});
