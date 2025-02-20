/**
 * @Author 十三
 * @Date 2025/2/18
 * @email 2429120006@qq.com
 * @Description
 * 后来，所经历的都是能让你成长的;
 * 不要觉得有些人很可怜就激发你的怜悯心，当你境遇一样时，其未必会助于你;
 * 大多数时候，你的怜悯心，未必会得到共鸣
 */

import type { SliderPuzzleProps, SliderVerifierProps } from './type';

export const sliderVerifyDefault = {
  successText: '验证成功',
  tipText: '请按住滑块滑动',
  radius: 12,
  width: 300,
  height: 48
} satisfies SliderVerifierProps;

export const sliderPuzzleDefault = {
  ...sliderVerifyDefault,
  puzzleSize: 40,
  failText: '验证失败',
  puzzleCount: 2
} satisfies SliderPuzzleProps;
