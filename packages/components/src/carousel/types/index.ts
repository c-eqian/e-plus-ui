/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-16 14:24:25
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 14:24:35
 */

import { ExtractPropTypes, InjectionKey, PropType } from 'vue';

/**
 * 定义类型文件
 */
export interface IListOption {
  url: string;
}
export const carouselProps = {
  list: {
    type: Array as PropType<IListOption[]>,
    default: () => [
      {
        url: 'https://img0.baidu.com/it/u=3876981621,2651377706&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
      },
      {
        url: 'https://img1.baidu.com/it/u=2027546321,2166687208&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
      },
      {
        url: 'https://img0.baidu.com/it/u=1223316688,3086442176&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
      },
      {
        url: 'https://img0.baidu.com/it/u=3039771636,2906450626&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
      },
      {
        url: 'https://img1.baidu.com/it/u=2600624757,724456213&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422'
      },
      {
        url: 'https://img0.baidu.com/it/u=763929030,2886073723&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313'
      }
    ]
  },
  duration: {
    type: Number,
    default: 3000
  }
};
export type ICarouselProps = ExtractPropTypes<typeof carouselProps>;
export const carouselInjectionKey: InjectionKey<ICarouselProps> =
  Symbol('ECarousel');
