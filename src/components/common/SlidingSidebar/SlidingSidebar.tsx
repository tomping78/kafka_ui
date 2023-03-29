import React, { PropsWithChildren } from 'react';
import Heading from 'components/common/heading/Heading.styled';
import { Button } from 'components/common/Button/Button';
import { CloseOutlined } from '@ant-design/icons';

import * as S from './SlidingSidebar.styled';

interface SlidingSidebarProps extends PropsWithChildren<unknown> {
  open?: boolean;
  title: string;
  onClose?: () => void;
}

const SlidingSidebar: React.FC<SlidingSidebarProps> = ({
  open,
  title,
  children,
  onClose,
}) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <S.Shadow $open={open} onClick={onClose} />
      <S.Wrapper $open={open}>
        <Heading level={2}>
          <span>{title}</span>
          <Button buttonSize="F" buttonType="modal_close" onClick={onClose}>
            <CloseOutlined />
          </Button>
        </Heading>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </>
  );
};

export default SlidingSidebar;
