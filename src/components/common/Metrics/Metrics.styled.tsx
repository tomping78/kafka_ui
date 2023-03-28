import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 0 1rem 0;
  background: ${({ theme }) => theme.metrics.backgroundColor};
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
`;

export const IndicatorWrapper = styled.div`
  background-color: ${({ theme }) => theme.metrics.indicator.backgroundColor};
  /* height: 68px; */
  width: fit-content;
  position: relative;
  min-width: 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.07);
  flex-grow: 1;
  &::after {
    content: '';
    width: 1px;
    height: 35px;
    background: #dedede;
    position: absolute;
    right: 0;
  }
  &:last-child::after {
    width: 0;
    background: #fff;
  }
`;

export const IndicatorTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.metrics.indicator.titleColor};
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IndicatorsWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 0;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: auto;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.07);
`;

export const SectionTitle = styled.h5`
  font-weight: 500;
  margin: 0 0 15px 10px;
  font-size: 21px;
  color: #333;
`;

export const LightText = styled.span`
  color: ${({ theme }) => theme.metrics.indicator.lightTextColor};
  font-size: 18px;
`;

export const RedText = styled.span`
  color: ${({ theme }) => theme.metrics.indicator.warningTextColor};
  font-size: 18px;
`;

export const CircularAlertWrapper = styled.svg.attrs({
  role: 'svg',
  viewBox: '0 0 4 4',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  grid-area: status;
  fill: none;
  width: 5px;
  height: 5px;
`;

export const CircularAlert = styled.circle.attrs({
  role: 'circle',
  cx: 2,
  cy: 2,
  r: 2,
})<{
  $type: 'error' | 'success' | 'warning' | 'info';
}>(
  ({ theme, $type }) => css`
    fill: ${theme.circularAlert.color[$type]};
  `
);
