import { h, onUnmounted, render, shallowRef, type ComponentInternalInstance } from 'vue';
import Dialog from './Dialog';
import type { UseDialogModelOptions, UseDialogReturn } from './type';

const getAppendToElement = (appendTo?: string | HTMLElement | null): HTMLElement => {
  if (appendTo) {
    if (typeof appendTo === 'string') {
      return document.getElementById(appendTo) ?? document.body;
    }
    if (appendTo instanceof HTMLElement) {
      return appendTo;
    }
  }
  return document.body;
};
export function useDialogModel(options: UseDialogModelOptions): UseDialogReturn {
  const { render: _render, immediate, slots, ...ops } = options as UseDialogModelOptions;
  // 弹窗的元素节点片段
  let fragment: Element | null = null;
  let closeFlag: boolean | null;
  const modelInstance = shallowRef<ComponentInternalInstance | null>(null);
  const close = () => {
    // closeFlag 避免重复关闭
    if (modelInstance.value) modelInstance.value.props.visible = false;
    closeFlag = true;
    return true;
  };
  // 关闭并卸载组件
  const destroy = () => {
    if (fragment) {
      render(null, fragment as unknown as Element); // 卸载组件
      fragment.textContent = ''; // 清空文档片段
      fragment = null;
      // fragment.remove();
    }
    close();
    modelInstance.value = null;
  };

  const open = () => {
    // 打开弹窗前判断如果存在当前弹窗实例就销毁掉重新创建
    if (modelInstance.value) {
      destroy();
    }
    closeFlag = false;
    // 弹窗的元素节点片段
    fragment = document.createDocumentFragment() as unknown as Element;
    const dialogNode = h(
      Dialog,
      {
        ...ops,
        visible: true,
        'onUpdate:visible': (visible: boolean) => {
          if (!visible && !closeFlag) {
            close();
          }
        }
      },
      {
        ...slots,
        default: _render
      }
    );
    // 渲染到元素节点上
    render(dialogNode, fragment);
    modelInstance.value = dialogNode.component;
    const appendTo = getAppendToElement(ops?.dialogProps?.appendTo);
    // 挂载到页面上
    appendTo.appendChild(fragment);
  };
  onUnmounted(() => {
    close();
  });
  if (immediate) {
    open();
  }
  return {
    open,
    close,
    destroy,
    modelInstance
  };
}
