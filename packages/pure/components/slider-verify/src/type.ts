import type { Component, VNode } from 'vue';

export type SliderVerifierProps = {
  /**
   * 验证成功文本
   * @default 验证成功
   */
  successText?: string;
  /**
   * 滑块提示文本
   * @default 请按住滑块滑动
   */
  tipText?: string;
  /**
   * 滑块图标
   */
  sliderIcon?: string | Component | VNode;
  /**
   * 滑块成功时图标
   */
  sliderSuccessIcon?: string | Component | VNode;
  /**
   * 滑块背景色
   */
  sliderBgColor?: string;
  /**
   * 圆角
   * @default 12px
   */
  radius?: number | string;
  /**
   * 画布大小，分别对应宽高
   * @default 300
   */
  width?: number | string;
  /**
   * 画布大小，分别对应宽高
   * @default 150
   */
  height?: number | string;
};

export type SliderPuzzleProps = {
  /**
   * 验证失败文本
   * @default 验证失败
   */
  failText?: string;
  /**
   * 是否显示刷新按钮
   * @default true
   */
  refreshable?: boolean;
  /**
   * 误差范围
   * @default 5
   */
  errorRange?: number;
  /**
   * 图片地址
   */
  imgUrl?: string | string[];
  /**
   * 拼图大小
   * @default 40
   */
  puzzleSize?: number;
  /**
   * 需要绘制的图像个数
   * @default 2
   */
  puzzleCount?: number;
  /**
   * 滑块高度
   * @default 45
   */
  sliderHeight?: number | string;
} & SliderVerifierProps;
