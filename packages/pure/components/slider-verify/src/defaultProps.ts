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
