import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import SpinnerIcon from 'components/common/Icons/SpinnerIcon';

import * as S from './Metrics.styled';

export interface Props {
  fetching?: boolean;
  isAlert?: boolean;
  label: React.ReactNode;
  title?: string;
  alertType?: 'success' | 'error' | 'warning' | 'info';
}
const Span = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  /* height: 27px;
  display: block; */
`;

const Indicator: React.FC<PropsWithChildren<Props>> = ({
  label,
  title,
  fetching,
  isAlert,
  alertType = 'error',
  children,
}) => (
  <S.IndicatorWrapper>
    <div title={title}>
      <S.IndicatorTitle>
        {label}{' '}
        {isAlert && (
          <S.CircularAlertWrapper>
            <S.CircularAlert $type={alertType} />
          </S.CircularAlertWrapper>
        )}
      </S.IndicatorTitle>
      <Span>{fetching ? <SpinnerIcon /> : children}</Span>
    </div>
  </S.IndicatorWrapper>
);

export default Indicator;
