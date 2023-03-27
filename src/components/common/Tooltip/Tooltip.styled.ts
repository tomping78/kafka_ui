import styled from 'styled-components';

export const MessageTooltip = styled.div`
  max-width: 100%;
  max-height: 100%;
  background-color: ${({ theme }) => theme.tooltip.bg};
  color: ${({ theme }) => theme.tooltip.text};
  border-radius: 10px;
  padding: 20px;
  z-index: 1;
  white-space: pre-wrap;
  font-weight: 500;
  line-height: 22px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
