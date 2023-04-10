import styled from 'styled-components';

export const Wrapper = styled.div`
  /* border-top: 1px solid ${({ theme }) => theme.dangerZone.borderColor}; */
  box-sizing: border-box;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.dangerZone.color.title};
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 16px;
`;
export const Warning = styled.div`
  color: ${({ theme }) => theme.dangerZone.color.warningMessage};
  font-size: 14px;
  padding-bottom: 16px;
`;
export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  & > *:first-child {
    flex-grow: 5;
  }
  & > *:last-child {
    flex-grow: 0;
  }
`;
