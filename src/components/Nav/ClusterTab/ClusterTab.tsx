import React from 'react';
import { ServerStatus } from 'generated-sources';
import { Tooltip } from 'antd';

import * as S from './ClusterTab.styled';

export interface ClusterTabProps {
  title?: string;
  status: ServerStatus;
  isOpen: boolean;
  clickedTitle?: string;
  toggleClusterMenu: () => void;
}

const ClusterTab: React.FC<ClusterTabProps> = ({
  title,
  status,
  isOpen,
  toggleClusterMenu,
  clickedTitle,
}) => (
  <S.Wrapper
    onClick={toggleClusterMenu}
    isOpen={isOpen}
    clickedTitle={clickedTitle}
  >
    <S.Title title={title}>{title}</S.Title>

    <S.StatusIconWrapper>
      <Tooltip placement="topLeft" title={status}>
        <S.StatusIcon status={status} aria-label="status" />
      </Tooltip>
    </S.StatusIconWrapper>

    <S.ChevronWrapper>
      <S.ChevronIcon $open={isOpen} />
    </S.ChevronWrapper>
  </S.Wrapper>
);

export default ClusterTab;
