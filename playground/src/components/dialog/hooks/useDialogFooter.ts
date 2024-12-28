import type { FooterProps } from '../type';

type BaseFooterProps = FooterProps & {
  confirmLoading?: boolean;
  beforeConfirm: () => void;
  beforeClose: () => void;
};
export const useDialogFooter = (props: BaseFooterProps) => {
  const { beforeConfirm, beforeClose } = props;
  const getPositionClass = () => {
    if (props.position === 'left') return 'ep-justify-start';
    if (props.position === 'right') return 'ep-justify-end';
    return 'ep-justify-center';
  };
  return {
    getPositionClass,
    beforeConfirm,
    beforeClose
  };
};
