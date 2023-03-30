import styled, { css } from 'styled-components';

export const EditWrapper = styled.div`
  & > form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > div:first-child {
      display: flex;
      gap: 16px;

      & > * {
        width: 20%;
      }
    }

    & > button:last-child {
      width: 72px;
      align-self: center;
    }
  }
`;

export const EditorsWrapper = styled.div`
  display: flex;
  gap: 16px;

  & > * {
    flex-grow: 1;
  }
`;

export const EditorContainer = styled.div(
  ({ theme }) => css`
    border: 1px solid ${theme.layout.stuffBorderColor};
    border-radius: 10px;
    margin-bottom: 16px;
    padding: 16px;
    & > h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 16px;
    }
  `
);
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
`;
